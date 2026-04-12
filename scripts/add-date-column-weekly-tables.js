#!/usr/bin/env node
/**
 * Add a "Date" column to weekly task tables in 05-daily-track-24-weeks.md
 * (| Day | Time | Done | Task | → | Day | Date | Time | Done | Task |).
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', '05-daily-track-24-weeks.md');
const text = fs.readFileSync(file, 'utf8');

const mondayByWeek = {};
const weekRowRe = /^\|\s*(\d+)\s*\|\s*(\d{4}-\d{2}-\d{2})\s*\|/gm;
let m;
while ((m = weekRowRe.exec(text)) !== null) {
  mondayByWeek[parseInt(m[1], 10)] = m[2];
}

const dayOffset = { Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5, Sun: 6 };

function isoPlusDays(isoDate, addDays) {
  const [y, mo, d] = isoDate.split('-').map(Number);
  const t = Date.UTC(y, mo - 1, d + addDays);
  return new Date(t).toISOString().slice(0, 10);
}

function dateForRow(monday, dayName) {
  return isoPlusDays(monday, dayOffset[dayName]);
}

const lines = text.split('\n');
const out = [];
let currentWeek = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const weekMatch = line.match(/^### Week (\d+) —/);
  if (weekMatch) {
    currentWeek = parseInt(weekMatch[1], 10);
  }

  if (
    /^\| Day \| Time \| Done \| Task/.test(line) &&
    !line.includes('| Date |')
  ) {
    out.push(
      line.replace(/^\| Day \| Time \| Done \| Task/, '| Day | Date | Time | Done | Task'),
    );
    continue;
  }

  if (
    /^\| --- \| ---- \| ---- \|/.test(line) &&
    out.length > 0 &&
    out[out.length - 1].includes('| Date |')
  ) {
    out.push(
      line.replace(
        /^\| --- \| ---- \| ---- \|/,
        '| --- | --- | ---- | ---- |',
      ),
    );
    continue;
  }

  const rowMatch = line.match(
    /^\| (Mon|Tue|Wed|Thu|Fri|Sat|Sun) \| (.*)$/,
  );
  if (
    rowMatch &&
    currentWeek != null &&
    mondayByWeek[currentWeek] &&
    !/^\| (Mon|Tue|Wed|Thu|Fri|Sat|Sun) \| \d{4}-\d{2}-\d{2} \|/.test(line)
  ) {
    const day = rowMatch[1];
    const rest = rowMatch[2];
    const iso = dateForRow(mondayByWeek[currentWeek], day);
    out.push(`| ${day} | ${iso} | ${rest}`);
    continue;
  }

  out.push(line);
}

fs.writeFileSync(file, out.join('\n'), 'utf8');
console.error(`Updated ${file}`);
