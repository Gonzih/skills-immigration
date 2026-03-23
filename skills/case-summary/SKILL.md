---
name: case-summary
description: Writes structured immigration case summaries for attorneys. Use when asked to summarize an immigration case, draft a case overview, prepare a case memo, write a matter summary, or document a client's immigration history. Synthesizes facts, procedural history, status, issues, and recommended next steps into a clear attorney-facing document.
triggers:
  - case summary
  - case overview
  - case memo
  - matter summary
  - immigration history
  - client case summary
  - summarize immigration case
license: MIT
metadata:
  author: gonzih
  version: "1.0"
---

# case-summary

Writes structured immigration case summaries for attorneys. Synthesizes facts, procedural history, current status, legal issues, and recommended next steps into a clear, attorney-facing memo. Reduces case-intake and file-review time significantly.

## How to Invoke

Say: *"Write a case summary for [client name], [visa type or relief sought], [key facts]"* — or paste intake notes, prior correspondence, or USCIS notices and ask for a summary. The skill will prompt for any critical missing facts.

## Workflow

### Step 1 — Collect Client & Case Facts

Gather the following (ask the attorney or paralegal if not provided):

- **Client name** and date of birth
- **Country of birth / citizenship**
- **Current immigration status** (e.g., F-1, H-1B, undocumented, LPR)
- **Priority date** (if applicable)
- **Employer / petitioner** (for employment-based cases)
- **Case type / relief sought** (e.g., H-1B, green card, asylum, DACA, removal defense)
- **Key dates**: entry dates, status expirations, application filing dates, receipt notice dates, interview dates, decisions received
- **Any prior applications, denials, or appeals**
- **Dependents included in the case** (if any)

### Step 2 — Procedural History

Document the procedural timeline in chronological order:

- Date and manner of last entry
- Prior petitions/applications filed and their outcomes
- Any NTAs (Notices to Appear), hearings, or court proceedings
- RFEs/NOIDs received and responses filed
- Pending filings and expected timelines

### Step 3 — Current Status

Summarize the current state of the case:

- What has been filed and is pending
- What is authorized (EAD, advance parole, authorized period of stay)
- Any gaps or periods of unlawful presence (flag if present)
- Visa Bulletin cutoff date vs. priority date (for employment/family green card cases)

### Step 4 — Legal Issues & Risk Flags

Identify key issues the attorney should be aware of:

- Unlawful presence accumulation (trigger for 3/10-year bars)
- Misrepresentation or fraud risk
- Prior orders of removal or deportation
- Country-condition issues (for asylum/withholding)
- Grounds of inadmissibility or deportability
- Pending criminal matters (if disclosed)

Flag each issue with severity: **[CRITICAL]**, **[MONITOR]**, or **[NOTE]**.

### Step 5 — Recommended Next Steps

List specific, time-sensitive action items:

- Filings due (with deadlines)
- Documents to collect from client
- Coordination needed with employer/petitioner
- Follow-up with USCIS or immigration court
- Anything requiring attorney judgment (marked `[ATTORNEY TO DECIDE]`)

### Step 6 — Output

Produce a structured memo in the following format:

1. **Case Header** — client name, A-Number (if known), case type, responsible attorney, date prepared
2. **Executive Summary** — 3–5 sentence overview
3. **Client Profile** — demographics and current status
4. **Procedural History** — chronological timeline
5. **Current Status** — what is pending and what is authorized
6. **Legal Issues & Risk Flags** — flagged with severity
7. **Recommended Next Steps** — prioritized action list

---

## Live Data Sources

- **USCIS Case Status API** — egov.uscis.gov (real-time receipt number lookups; use in Step 3 to confirm pending petition status and last action date)
- **NVC Processing Queue Data** — travel.state.gov/content/travel/en/us-visas/immigrate/nvc-timeframes.html (public National Visa Center queue times; use when the case involves consular processing to set timeline expectations)
- **Consulate Appointment Availability Patterns** — travel.state.gov appointment data (public wait-time indicators by consulate; reference in Step 2 procedural history and Step 5 next steps for cases requiring an immigrant visa interview)

---

## Important Legal Notice

> **IMPORTANT**: This output is a drafting aid. The attorney of record must review all content for factual accuracy and legal correctness before relying on it for case strategy or filing decisions. This tool does not constitute legal advice and does not create an attorney-client relationship.

---

## Example Output

**Input**: Maria Santos, born Brazil. Entered on F-1 visa in 2019, OPT expired June 2024, H-1B cap-gap ended Sept 30 2024. Employer filed H-1B in April 2024, selected in lottery, pending. No RFE yet. Married to US citizen, they want to explore green card too.

---

**IMMIGRATION CASE SUMMARY**
**Client**: Maria Santos | **A-Number**: Unknown — assign when available
**Case Type**: H-1B (pending) + potential family-based green card (IR-1)
**Responsible Attorney**: [ATTORNEY NAME]
**Prepared**: March 22, 2026

**Executive Summary**

Maria Santos is a Brazilian national who entered the U.S. on an F-1 student visa in 2019. Her OPT expired in June 2024 and her H-1B cap-gap period ended September 30, 2024. Her employer filed an H-1B petition in April 2024 (FY2025 cap), which was selected in the lottery and is currently pending adjudication with USCIS. She is married to a U.S. citizen, which opens a parallel path to permanent residence as an Immediate Relative. The immediate priority is confirming her period of authorized stay while H-1B is pending and assessing unlawful presence exposure.

**Client Profile**
- Date of Birth: [DOB — collect from client]
- Country of Birth/Citizenship: Brazil
- Current Status: F-1 OPT expired; H-1B pending (cap-gap period ended 9/30/2024)
- Employer/Petitioner: [EMPLOYER NAME — confirm]
- Spouse: U.S. Citizen (basis for IR-1 green card)

**Procedural History**
- 2019: Entered U.S. on F-1 visa
- [Date]: Graduated; commenced OPT
- June 2024: OPT expired
- April 2024: Employer filed H-1B petition (FY2025 cap season); selected in lottery
- September 30, 2024: H-1B cap-gap ended
- Present: H-1B petition pending; no RFE received to date

**Current Status**
- H-1B petition pending with USCIS — no receipt of RFE
- **[CRITICAL]** Period of authorized stay post-9/30/2024 is unclear — confirm whether timely-filed H-1B maintains authorized status under 8 CFR 274a.12(b)(20) or if unlawful presence has begun accruing
- Potential IR-1 green card path via U.S. citizen spouse (no priority date wait; Immediate Relative category)

**Legal Issues & Risk Flags**
- **[CRITICAL]** Unlawful presence: if the pending H-1B does not maintain authorized status after cap-gap expiration, unlawful presence may be accruing. Assess immediately.
- **[NOTE]** If H-1B is approved and she is outside the U.S. at time of approval, consular processing may be required.
- **[MONITOR]** Parallel green card filing: if H-1B is approved, consider concurrent I-130/I-485 strategy with U.S. citizen spouse. No priority date issue (IR category). Confirm no grounds of inadmissibility.

**Recommended Next Steps**
1. **[URGENT]** Confirm authorized period of stay — review H-1B receipt notice date and cap-gap regulations; obtain legal opinion on unlawful presence exposure
2. Collect copy of H-1B receipt notice and all prior USCIS correspondence from employer's immigration counsel
3. Assess grounds of inadmissibility before filing I-485 (fingerprints, any prior issues)
4. `[ATTORNEY TO DECIDE]` Advise on optimal timing: file I-130/I-485 now in parallel with pending H-1B, or wait for H-1B approval?
5. Collect passport, I-94, F-1 visa documents, OPT EAD, marriage certificate (certified copy) from client
