#!/usr/bin/env node
/**
 * Mark a calendar day's assignment as done in:
 * - assignments/{YYYY-MM-DD}.md
 * - 05-daily-track-24-weeks.md (line under #### <Dow> <date>)
 *
 * Usage: node scripts/mark-assignment-done.js 2026-04-13
 */
const fs = require('fs');
const path = require('path');

const date = process.argv[2];
if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
  console.error('Usage: node scripts/mark-assignment-done.js YYYY-MM-DD');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const assignmentFile = path.join(root, 'assignments', `${date}.md`);
const dailyTrack = path.join(root, '05-daily-track-24-weeks.md');

const esc = date.replace(/-/g, '\\-');

// Single line: - [ ] **Assignment done** (…)
function replaceCheckboxLine(s, pathLabel) {
  if (/^- \[x\] \*\*Assignment done\*\*/m.test(s)) {
    console.error(`Already marked done: ${pathLabel}`);
    return s;
  }
  const out = s.replace(/^- \[ \] (\*\*Assignment done\*\*[^\n]*)$/m, '- [x] $1');
  if (out === s) {
    console.error(`No unchecked "- [ ] **Assignment done**" line in: ${pathLabel}`);
    process.exit(1);
  }
  return out;
}

if (!fs.existsSync(assignmentFile)) {
  console.error(`Missing: ${assignmentFile}`);
  process.exit(1);
}

let assign = fs.readFileSync(assignmentFile, 'utf8');
assign = replaceCheckboxLine(assign, assignmentFile);
fs.writeFileSync(assignmentFile, assign, 'utf8');
console.error(`Updated: ${assignmentFile}`);

let track = fs.readFileSync(dailyTrack, 'utf8');
// Match full checkbox line: - [ ] **Assignment done** (rest of line)
const blockRe = new RegExp(
  `(#### \\S+ ${esc}\\s*\\n[\\s\\S]*?)(- \\[ \\] \\*\\*Assignment done\\*\\*)([^\n]*)`,
  'm',
);
const doneBlockRe = new RegExp(
  `(#### \\S+ ${esc}\\s*\\n[\\s\\S]*?)(- \\[x\\] \\*\\*Assignment done\\*\\*)([^\n]*)`,
  'm',
);
if (doneBlockRe.test(track)) {
  console.error(`Already done in daily track for ${date}`);
} else if (!blockRe.test(track)) {
  console.error(`Could not find day block for ${date} in 05-daily-track-24-weeks.md`);
  process.exit(1);
} else {
  track = track.replace(blockRe, '$1- [x] **Assignment done**$3');
  fs.writeFileSync(dailyTrack, track, 'utf8');
  console.error(`Updated: ${dailyTrack}`);
}

console.error('Done.');
