#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const trackPath = path.join(root, '05-daily-track-24-weeks.md');
const assignmentsDir = path.join(root, 'assignments');

let track = fs.readFileSync(trackPath, 'utf8');

track = track.replace(
  /^- \*\*Assignment done\*\* \(written answers in your notes \/ repo — required to count this calendar day complete\)$/gm,
  '- [ ] **Assignment done** (written answers in your notes / repo — required to count this calendar day complete)',
);

for (const file of fs.readdirSync(assignmentsDir)) {
  if (!/^\d{4}-\d{2}-\d{2}\.md$/.test(file)) continue;
  const date = file.slice(0, 10);
  const assignment = fs.readFileSync(path.join(assignmentsDir, file), 'utf8');
  if (!/^- \[x\] \*\*Assignment done\*\*/m.test(assignment)) continue;

  const esc = date.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const dayBlockUnchecked = new RegExp(
    `(#### \\S+ ${esc}\\s*\\n[\\s\\S]*?)(- \\[ \\] \\*\\*Assignment done\\*\\*)([^\\n]*)`,
    'm',
  );
  track = track.replace(dayBlockUnchecked, '$1- [x] **Assignment done**$3');
}

fs.writeFileSync(trackPath, track, 'utf8');
console.error(`Updated: ${trackPath}`);
