---
name: visa-brief
description: Writes visa category analysis briefs for immigration attorneys. Use when asked to analyze which visa category fits a client, write a visa options memo, draft a visa strategy memo, compare visa categories, or advise on immigration pathways. Evaluates client facts against visa eligibility criteria and produces a structured memo with recommended strategy.
triggers:
  - visa brief
  - visa analysis
  - visa options
  - visa strategy
  - visa category
  - immigration pathway
  - which visa
  - visa memo
  - immigration options memo
license: MIT
metadata:
  author: gonzih
  version: "1.0"
---

# visa-brief

Writes visa category analysis briefs for immigration attorneys. Evaluates client facts against the eligibility criteria for applicable visa categories and produces a structured memo with a recommended strategy, risks, and next steps. Reduces research and drafting time for intake consultations and strategy sessions.

## How to Invoke

Say: *"Write a visa options memo for [client name/description]"* and provide key facts: nationality, education, work history, employer, family ties, goals, timeline. The skill will analyze applicable categories and produce a prioritized brief.

## Workflow

### Step 1 — Collect Client Facts

Gather the following (ask if not provided):

- **Nationality / country of birth** (affects retrogression, per-country limits, visa availability)
- **Current immigration status** (if in the U.S.)
- **Education**: degrees, field of study, institution, country
- **Work history**: current and prior employers, job titles, years of experience, specialized skills
- **Extraordinary achievements** (if any): publications, awards, media coverage, high salary, patents, leading roles
- **Family ties**: U.S. citizen or LPR spouse, parents, or children?
- **Employer**: is there a U.S. employer willing to sponsor?
- **Goals**: work authorization, permanent residence, both?
- **Timeline**: any urgency (expiring status, job start date, travel needs)?
- **Prior immigration history**: prior visas, any denials, unlawful presence, prior removal?

### Step 2 — Identify Candidate Categories

Based on the facts, identify all plausibly applicable visa categories across:

**Nonimmigrant (temporary) work visas:**
- H-1B (specialty occupation)
- O-1A/O-1B (extraordinary ability — sciences/arts)
- L-1A/L-1B (intracompany transferee)
- TN (USMCA — Canada/Mexico nationals)
- E-3 (Australian nationals)
- H-1B1 (Chile/Singapore nationals)
- J-1, F-1 OPT/STEM OPT (students/exchange)

**Immigrant (permanent residence) categories:**
- EB-1A (extraordinary ability — self-petition)
- EB-1B (outstanding researcher/professor)
- EB-1C (multinational executive/manager)
- EB-2 NIW (National Interest Waiver — self-petition)
- EB-2 (advanced degree or exceptional ability — employer-sponsored)
- EB-3 (skilled worker — employer-sponsored)
- Family-based (IR-1, F-2A, F-2B, F-3, F-4)

**Other relief** (if applicable): asylum, TPS, DACA, U/T visa, VAWA, special immigrant categories

### Step 3 — Analyze Each Candidate Category

For each candidate category, produce a structured analysis:

- **Eligibility assessment**: does the client appear to meet the requirements? Strong / Possible / Unlikely
- **Key strengths**: facts that support eligibility
- **Key weaknesses / risks**: gaps or red flags
- **Employer sponsorship required?**: yes / no / optional
- **Timeline**: typical processing time (regular + premium if available)
- **Wait time**: priority date / visa bulletin impact (flag if country of birth creates significant backlog)
- **Cost estimate**: rough filing fee range `[ATTORNEY TO CONFIRM CURRENT FEES]`

### Step 4 — Recommended Strategy

Produce a prioritized recommendation:

- **Primary path**: the strongest or most efficient route to the client's goal
- **Secondary / parallel path**: backup option or concurrent strategy
- **Short-term vs. long-term**: if the client needs immediate work authorization AND permanent residence, address both
- **Sequencing**: what to file first, what can run in parallel
- **Country-of-birth considerations**: flag if Indian or Chinese nationals face multi-year EB-2/EB-3 backlogs — adjust strategy accordingly

### Step 5 — Risks & Caveats

Flag any issues that require attorney analysis:

- Unlawful presence / bars to admission
- Prior denials that may affect current filings
- Concurrent H-1B cap-gap / status gaps
- RFE risk for complex profiles
- Anything requiring legal judgment: `[ATTORNEY TO ASSESS]`

### Step 6 — Output

Produce a structured visa brief:

1. **Client Snapshot** — key facts in table form
2. **Candidate Categories** — analysis table with eligibility, strengths, weaknesses, timeline
3. **Recommended Strategy** — narrative with primary and secondary paths
4. **Next Steps** — prioritized action list
5. **Risks & Caveats** — flagged issues

---

## Important Legal Notice

> **IMPORTANT**: This output is a drafting aid for licensed immigration attorneys. Visa eligibility is fact-specific and subject to change. The attorney of record must independently verify all legal standards, current processing times, and Visa Bulletin cutoff dates before advising the client. This tool does not constitute legal advice.

---

## Example Output

**Input**: Client: Priya Sharma, Indian national, currently in U.S. on H-1B (approved through 2027). PhD in Machine Learning from MIT. 6 years at current U.S. tech employer as an AI Research Scientist. Published 12 peer-reviewed papers, 3 patents, invited speaker at NeurIPS and ICML. Employer is willing to sponsor. She wants to get a green card as efficiently as possible.

---

### Client Snapshot

| | |
|---|---|
| **Name** | Priya Sharma |
| **Nationality** | India |
| **Current Status** | H-1B (valid through 2027) |
| **Education** | PhD, Machine Learning, MIT |
| **Current Role** | AI Research Scientist, [Employer] (6 years) |
| **Notable Achievements** | 12 peer-reviewed publications, 3 patents, invited NeurIPS/ICML speaker |
| **Employer Sponsorship** | Available |
| **Goal** | Permanent residence (green card), as fast as possible |
| **Key Challenge** | India EB-2/EB-3 backlog — potentially decades |

---

### Candidate Categories Analysis

| Category | Eligibility | Strengths | Weaknesses / Risks | Employer Required | Timeline |
|----------|-------------|-----------|-------------------|------------------|---------|
| **EB-1A** (Extraordinary Ability — self-petition) | **Strong** | 12 publications, 3 patents, conference invitations strongly support extraordinary ability criteria (publications, judging, original contributions, critical role) | Must meet 3 of 10 criteria — assess carefully; no employer letter required but recommended | No | ~1–3 years total (no backlog for India EB-1) |
| **EB-1B** (Outstanding Researcher) | **Strong** | PhD + 6 yrs research + 12 pubs + recognition = classic EB-1B profile; employer sponsorship needed | Requires employer letter + job offer in research role | Yes | ~1–3 years total (no backlog for India EB-1) |
| **EB-2 NIW** (National Interest Waiver) | **Possible–Strong** | AI/ML research has strong NIW precedent; PhD + publications support substantial merit and national importance | India EB-2 backlog: current cutoff is **[CHECK VISA BULLETIN — may be 2012 or earlier]** — waiting decades is likely without EB-1 | No | Filing to approval ~2 years; **then wait in queue — decades for India** |
| **EB-2** (Employer-sponsored, advanced degree) | **Strong eligibility** | PhD + 6 yrs = clear advanced degree with exceptional ability | India EB-2 backlog: same as NIW — decades of wait | Yes | Filing fast; wait time = same India backlog |
| **EB-3** (Skilled Worker) | Eligible | Straightforward | India EB-3 backlog also very long | Yes | Even longer wait than EB-2 for India |

---

### Recommended Strategy

**Primary Path: EB-1B (Outstanding Researcher) + Concurrent EB-1A Self-Petition**

Priya's profile is well-suited for **EB-1B** (Outstanding Researcher/Professor), which requires demonstrating international recognition in the field and at least three years of experience in teaching or research. Her 12 publications, 3 patents, and invitations to present at top-tier venues (NeurIPS, ICML) should satisfy the recognition standard. Crucially, **EB-1B has no per-country backlog** — India nationals wait the same as everyone else. Once the I-140 petition is approved and the priority date is current (which it is, for EB-1 India), she can file her I-485 (adjustment of status).

In parallel, file an **EB-1A self-petition** (Extraordinary Ability). EB-1A requires no employer sponsorship and no job offer. If approved, it gives Priya an independent path that is not tied to her current employer, preserving optionality.

**Do not rely on EB-2 or EB-3 as the primary path.** The India EB-2 cutoff date makes these categories effectively unusable on a reasonable timeline — wait times for Indian nationals in EB-2 are currently measured in decades.

**Secondary Path: EB-2 NIW (file to lock in priority date)**

Despite the backlog, it is worth filing an EB-2 NIW concurrently to lock in an early priority date. AI/ML research is well-supported in the NIW context under *Matter of Dhanasar* (AAO 2016). If the EB-1 strategy succeeds (likely), the NIW petition becomes a backup. If circumstances change (e.g., employer relationship changes), having the NIW priority date locked could matter years from now.

**Short-Term: Current H-1B Covers Work Authorization**

Her H-1B is valid through 2027. Once she files the I-485, she can also file for EAD and advance parole — providing travel flexibility and backup employment authorization independent of H-1B status.

---

### Next Steps

1. **Immediate**: Compile evidence for EB-1B/EB-1A evaluation — publications list with citation counts, patent details, conference invitations, peer review activities, salary data relative to peers, any press/media coverage
2. **Attorney assessment**: Confirm EB-1A criteria count — she likely meets 5–6 of the 10 criteria (publications, judging/peer review, original contributions, critical role, high salary, invited speaker); `[ATTORNEY TO VERIFY]`
3. **Employer coordination**: Confirm employer will sponsor EB-1B and initiate PERM or direct EB-1B filing (EB-1B does not require PERM labor certification — significant time saving)
4. **File EB-1B I-140** (employer-sponsored) + **EB-1A I-140** (self-petition) concurrently
5. **File EB-2 NIW I-140** concurrently to lock in priority date
6. **Once I-140 approved and priority date current**: file I-485 (Adjustment of Status) + I-765 (EAD) + I-131 (Advance Parole)

---

### Risks & Caveats

- **[MONITOR]** EB-1 adjudications have tightened at USCIS in recent years; AI/ML researchers should have strong evidence but RFE risk is real — build a robust initial filing
- **[NOTE]** Premium processing available for I-140 petitions — reduces initial adjudication to 15 business days; worth using given timeline sensitivity
- **[ATTORNEY TO ASSESS]** If Priya wants to change employers before I-485 is filed, H-1B portability rules apply — analyze before any job change
- **[CONFIRM]** Check current Visa Bulletin EB-1 India cutoff date — confirm EB-1 India is current (as of early 2026, EB-1 India has generally been current, but verify before filing)
- **`[ATTORNEY TO VERIFY]`** All processing time estimates; USCIS processing times change frequently
