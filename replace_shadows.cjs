const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Include #111111 frequently to keep the core brutalist vibe, mixed with neon pops
const colors = ['#111111', '#FF0050', '#111111', '#CCFF00', '#111111', '#0038FF', '#111111', '#1DB954'];
let i = 0;

const lines = content.split('\n');
for (let j=0; j<lines.length; j++) {
    if (lines[j].includes('shadow-[')) {
        const c = colors[i % colors.length];
        let changed = false;
        // Match our previous colors and any lingering #111111
        lines[j] = lines[j].replace(/(shadow-\[\d+px_\d+px_0_)#(0038FF|FF0050|CCFF00|1DB954|111111)(\])/gi, (m, p1, p2, p3) => {
            changed = true;
            return p1 + c + p3;
        });
        if (changed) i++;
    }
}

fs.writeFileSync('src/App.tsx', lines.join('\n'));
