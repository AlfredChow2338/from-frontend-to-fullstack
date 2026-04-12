#!/usr/bin/env node
/**
 * One-off helper: convert Week 1–24 bullet checklists in 05-daily-track-24-weeks.md
 * to markdown tables. Reads file path + start/end 1-based line numbers.
 */
const fs = require('fs');

const file = process.argv[2];
const startLine = parseInt(process.argv[3], 10);
const endLine = parseInt(process.argv[4], 10);
if (!file || !startLine || !endLine) {
  console.error('Usage: node convert-week-checklists-to-tables.js <file> <startLine> <endLine>');
  process.exit(1);
}

const lines = fs.readFileSync(file, 'utf8').split('\n');
const slice = lines.slice(startLine - 1, endLine);

function escCell(s) {
  return String(s).replace(/\|/g, '\\|').trim();
}

const weekdayRe =
  /^- \*\*(Mon|Tue|Wed|Thu|Fri) \(([^)]+)\)\*\* — \[ \] (.+)$/;
const weekendHeadRe =
  /^\*\*(Sat|Sun) \(([^)]+)\)\*\* — \[ \] \(([^)]+)\) (.+)$/;
const weekendContRe = /^ — \[ \] \(([^)]+)\) (.+)$/;

let out = [];
let tableOpen = false;
let lastWeekendDay = '';

function openTable() {
  if (!tableOpen) {
    out.push('| Day | Time | Done | Task |');
    out.push('| --- | ---- | ---- | ---- |');
    tableOpen = true;
  }
}

for (const raw of slice) {
  const line = raw.replace(/\s+$/, '');

  // Blank lines split GFM tables; keep one continuous table per week.
  if (line === '' && tableOpen) {
    continue;
  }

  const wm = line.match(weekdayRe);
  if (wm) {
    openTable();
    lastWeekendDay = '';
    out.push(
      `| ${wm[1]} | ${escCell(wm[2])} | [ ] | ${escCell(wm[3])} |`,
    );
    continue;
  }

  const wh = line.match(weekendHeadRe);
  if (wh) {
    openTable();
    lastWeekendDay = wh[1];
    out.push(
      `| ${wh[1]} | ${escCell(wh[3])} | [ ] | ${escCell(wh[4])} |`,
    );
    continue;
  }

  const wc = line.match(weekendContRe);
  if (wc) {
    openTable();
    const day = lastWeekendDay || 'Sat';
    out.push(`| ${day} | ${escCell(wc[1])} | [ ] | ${escCell(wc[2])} |`);
    continue;
  }

  if (line === '---') {
    if (tableOpen) {
      tableOpen = false;
    }
    if (out.length && out[out.length - 1].startsWith('|')) {
      out.push('');
    }
    out.push(raw);
    continue;
  }

  if (tableOpen && (line.startsWith('### ') || line.startsWith('## '))) {
    tableOpen = false;
  }

  out.push(raw);
}

process.stdout.write(out.join('\n'));
if (!out[out.length - 1].endsWith('\n') && slice.length) {
  process.stdout.write('\n');
}
