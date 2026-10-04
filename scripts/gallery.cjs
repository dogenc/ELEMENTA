// Real application captures, no mockups. Run from any working directory.
const {chromium}=require('playwright'),path=require('node:path'),fs=require('node:fs');
const root=path.resolve(__dirname,'..'),out=path.join(root,'docs/gallery');fs.mkdirSync(out,{recursive:true});
const server=require('node:child_process').spawn('python',['-m','http.server','8771','--bind','127.0.0.1','--directory',path.join(root,'dist')],{stdio:'ignore'});process.on('exit',()=>server.kill());
(async()=>{for(let i=0;i<50;i++){try{await fetch('http://127.0.0.1:8771');break;}catch{await new Promise(r=>setTimeout(r,100));}}
const local=process.env.ELEMENTA_CHROMIUM_PACKAGE?require(process.env.ELEMENTA_CHROMIUM_PACKAGE):null;const browser=await chromium.launch({headless:true,executablePath:local?await local.executablePath():undefined,args:local?[...local.args,'--enable-unsafe-swiftshader']:['--no-sandbox','--enable-unsafe-swiftshader']});
try{const page=await browser.newPage({viewport:{width:1800,height:1160},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));
async function open(hash,dark=false){await page.goto('http://127.0.0.1:8771/'+hash);await page.waitForSelector('canvas');await page.waitForFunction(()=>document.querySelector('#loading').hidden);if(await page.locator('.studio').evaluate(e=>e.classList.contains('dark'))!==dark)await page.click('#theme');await page.waitForTimeout(180);}
async function shot(name){await page.screenshot({path:path.join(out,name+'.png')});}
await open('#element/6',true);await shot('01-atomstudio');
await open('#element/29',true);await page.selectOption('#model','orbital');await page.selectOption('#orbital','3,2');await page.selectOption('#angular','-2');await page.waitForTimeout(180);await shot('02-orbitalstudio');
await open('#molecule/caffeine',true);await shot('03-koffein');
await open('#molecule/vitamin-c',false);await page.selectOption('#mol-style','space');await shot('04-vitamin-c');
await open('#molecule/salt',true);await shot('05-ionengitter');
await open('#process/dissolve',true);await page.locator('#steps button').nth(3).click();await shot('06-hydratation');
await open('#process/covalent',false);await page.locator('#steps button').nth(3).click();await shot('07-bindung');
await page.setViewportSize({width:430,height:932});await open('#molecule/caffeine',true);await page.selectOption('#mol-style','ball');await page.waitForTimeout(150);await page.screenshot({path:path.join(out,'08-mobil.png'),fullPage:true});
if(errors.length)throw Error(errors.join('\n'));console.log('8 real application screenshots captured.');}finally{await browser.close();server.kill();}})().catch(e=>{console.error(e);process.exit(1)});
