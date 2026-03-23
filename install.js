#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const os = require('os')

const SKILLS = [
  'case-summary',
  'client-letter',
  'rfie-response',
  'visa-brief',
]

const AGENTS = [
  { name: 'Claude Code', dir: path.join(os.homedir(), '.claude', 'skills') },
  { name: 'Cursor', dir: path.join(os.homedir(), '.cursor', 'skills') },
  { name: 'Windsurf', dir: path.join(os.homedir(), '.windsurf', 'skills') },
]

function copySkill(skillName, targetDir) {
  const src = path.join(__dirname, 'skills', skillName, 'SKILL.md')
  const destDir = path.join(targetDir, skillName)
  const dest = path.join(destDir, 'SKILL.md')

  if (!fs.existsSync(src)) {
    console.warn(`  [warn] Source not found: ${src}`)
    return false
  }

  fs.mkdirSync(destDir, { recursive: true })
  fs.copyFileSync(src, dest)
  return true
}

function install() {
  console.log('\nskills-immigration — installing 4 immigration law skills\n')

  let installed = 0

  for (const agent of AGENTS) {
    const agentDir = agent.dir

    const parentDir = path.dirname(agentDir)
    if (!fs.existsSync(parentDir)) {
      continue
    }

    console.log(`  ${agent.name} (${agentDir})`)

    for (const skill of SKILLS) {
      try {
        const ok = copySkill(skill, agentDir)
        if (ok) {
          console.log(`    ✓ ${skill}`)
          installed++
        }
      } catch (err) {
        console.warn(`    ✗ ${skill}: ${err.message}`)
      }
    }
  }

  if (installed === 0) {
    console.log('  No supported agent config directories found.')
    console.log('  Skills are available in: ' + path.join(__dirname, 'skills'))
    console.log('  Copy them manually to your agent\'s skills directory.\n')
  } else {
    console.log(`\n  ${installed} skill file(s) installed.\n`)
  }
}

function uninstall() {
  console.log('\nskills-immigration — removing immigration law skills\n')

  for (const agent of AGENTS) {
    for (const skill of SKILLS) {
      const skillDir = path.join(agent.dir, skill)
      if (fs.existsSync(skillDir)) {
        fs.rmSync(skillDir, { recursive: true, force: true })
        console.log(`  ✓ removed ${skill} from ${agent.name}`)
      }
    }
  }

  console.log()
}

const command = process.argv[2]
if (command === 'uninstall') {
  uninstall()
} else {
  install()
}
