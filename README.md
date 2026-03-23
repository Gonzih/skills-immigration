# @gonzih/skills-immigration

Immigration law skills for Claude Code — case summaries, client letters, RFE responses, and visa briefs for immigration attorneys.

## Skills Included

| Skill | Description |
|-------|-------------|
| `case-summary` | Write structured immigration case summaries for attorneys |
| `client-letter` | Write plain-language client status letters |
| `rfie-response` | Write responses to USCIS Requests for Evidence (RFEs) |
| `visa-brief` | Write visa category analysis and strategy briefs |

## Installation

```bash
npm install -g @gonzih/skills-immigration
```

Skills are automatically copied to your agent's skills directory on install (`~/.claude/skills/`, `~/.cursor/skills/`, `~/.windsurf/skills/`).

### Manual Installation

Copy the skill folders from `skills/` to your agent's skills directory:

```
~/.claude/skills/case-summary/SKILL.md
~/.claude/skills/client-letter/SKILL.md
~/.claude/skills/rfie-response/SKILL.md
~/.claude/skills/visa-brief/SKILL.md
```

## Usage

Once installed, invoke skills by describing your task:

- *"Write a case summary for [client name]..."*
- *"Write a client update letter about the RFE we received for [client]..."*
- *"Help me respond to this RFE for [client name], H-1B specialty occupation..."*
- *"Write a visa options memo for [client description]..."*

## Legal Notice

These skills are drafting aids for licensed immigration attorneys. All output must be reviewed by the attorney of record for factual accuracy and legal correctness before use. Nothing produced by these skills constitutes legal advice.

## License

MIT
