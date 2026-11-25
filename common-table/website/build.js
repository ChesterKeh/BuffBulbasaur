// Refreshes the built-in copy of content.js + images inside index.html,
// so index.html still works when opened on its own (e.g. in a preview).
// Run after editing content.js or images:   node build.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const dir = __dirname, ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(dir, 'content.js'), 'utf8'), ctx);
const C = ctx.window.CONTENT, imgs = {};
JSON.stringify(C, (k, v) => {
  if (typeof v === 'string' && /^images\/[\w.-]+\.(svg|png|jpe?g|webp|gif)$/i.test(v) && fs.existsSync(path.join(dir, v))) {
    const ext = v.split('.').pop().toLowerCase();
    const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'jpg' ? 'image/jpeg' : 'image/' + ext;
    imgs[v] = `data:${mime};base64,` + fs.readFileSync(path.join(dir, v)).toString('base64');
  }
  return v;
});
const block = `<!-- BUILT-IN COPY:START (made by build.js so this page also works on its own; content.js below wins when present) -->\n<script>window.CT_FALLBACK=${JSON.stringify(C)};window.CT_IMAGES=${JSON.stringify(imgs)};</script>\n<!-- BUILT-IN COPY:END -->`;
const f = path.join(dir, 'index.html');
const html = fs.readFileSync(f, 'utf8').replace(/<!-- BUILT-IN COPY:START[\s\S]*?BUILT-IN COPY:END -->/, () => block);
fs.writeFileSync(f, html);
console.log('index.html updated:', Object.keys(imgs).length, 'images embedded,', Math.round(html.length / 1024), 'KB');
