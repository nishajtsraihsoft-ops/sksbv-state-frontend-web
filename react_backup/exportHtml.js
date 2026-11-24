import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const routes = [
    '/',
    '/about',
    '/leaders',
    '/gallery',
    '/wings',
    '/circulars',
    '/notifications',
    '/featured-events',
    '/contact'
];

const BASE_URL = 'http://localhost:4173'; // Vite preview server
const EXPORT_DIR = path.join(process.cwd(), 'static_export');

if (!fs.existsSync(EXPORT_DIR)) {
    fs.mkdirSync(EXPORT_DIR, { recursive: true });
}

async function exportRoutes() {
    console.log('Starting puppeteer...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const route of routes) {
        const url = `${BASE_URL}${route}`;
        console.log(`Exporting ${url}...`);
        
        try {
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
            await new Promise(r => setTimeout(r, 2000));
            
            let html = await page.content();
            
            // Remove React module scripts to prevent hydration from wiping the DOM
            // e.g. <script type="module" crossorigin src="/assets/index-C8o_CZZY.js"></script>
            html = html.replace(/<script type="module"[^>]*><\/script>/g, '');
            // Also replace /assets/ paths to relative paths if needed, or leave absolute
            html = html.replace(/href="\/assets\//g, 'href="assets/');
            html = html.replace(/src="\/assets\//g, 'src="assets/');
            
            // Fix image paths inside HTML
            html = html.replace(/src="\//g, 'src="');
            
            const fileName = route === '/' ? 'index.html' : `${route.substring(1)}.html`;
            const filePath = path.join(EXPORT_DIR, fileName);
            
            fs.writeFileSync(filePath, html);
            console.log(`Saved ${fileName}`);
        } catch (error) {
            console.error(`Failed to export ${route}:`, error);
        }
    }

    await browser.close();
    
    // Copy the dist/assets folder
    const fsExtra = (await import('fs-extra')).default;
    if (fs.existsSync(path.join(process.cwd(), 'dist', 'assets'))) {
        fsExtra.copySync(
            path.join(process.cwd(), 'dist', 'assets'),
            path.join(EXPORT_DIR, 'assets')
        );
        console.log('Copied assets folder');
    }
}

exportRoutes().then(() => console.log('Export complete.'));
