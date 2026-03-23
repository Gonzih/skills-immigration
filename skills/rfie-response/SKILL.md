---
name: rfie-response
description: Writes responses to USCIS Requests for Evidence (RFEs) and Requests for Further Evidence (RFIEs) for immigration attorneys. Use when asked to draft an RFE response, respond to a USCIS request for evidence, write an RFE cover letter, or prepare a brief addressing USCIS concerns. Structures legal arguments, organizes supporting evidence, and drafts the attorney cover letter/brief.
triggers:
  - RFE response
  - RFIE response
  - request for evidence
  - respond to RFE
  - RFE cover letter
  - RFE brief
  - USCIS request
  - NOID response
license: MIT
metadata:
  author: gonzih
  version: "1.0"
---

# rfie-response

Writes responses to USCIS Requests for Evidence (RFEs) for immigration attorneys. Structures legal arguments, organizes the evidence package, and drafts the attorney cover letter/brief addressing each USCIS concern. Saves hours of drafting time on high-stakes submissions.

## How to Invoke

Say: *"Help me respond to this RFE for [client name], [visa/benefit type]"* — or paste the RFE notice text and ask for a response framework. Provide available facts and evidence; the skill will flag what is missing and suggest what to obtain.

## Workflow

### Step 1 — Parse the RFE

Identify and list every issue raised in the RFE:

- Quote the specific language from each RFE section
- Categorize each issue: legal standard, factual insufficiency, documentation gap, or credibility concern
- Note the response deadline and filing address
- Flag any issues that are particularly complex or require external evidence (expert letters, additional legal research)

### Step 2 — Map Arguments to Issues

For each RFE issue, develop the response framework:

- **Legal standard**: state the applicable statute or regulation the officer cited
- **Our position**: the argument that the petitioner/applicant meets the standard
- **Evidence to cite**: documents, letters, or records that support the argument
- **Evidence gaps**: what is missing and must be obtained before filing

### Step 3 — Draft the Response Brief

Write a structured attorney brief addressing each RFE issue in order:

**Format**:
- Opening paragraph: identify the case, summarize the petition/application, and state that the brief responds to the RFE dated [DATE]
- For each RFE issue: heading, restate the officer's concern, present the legal standard, argue the facts, direct to supporting exhibits
- Closing: request approval and list enclosed exhibits

**Tone**: formal, respectful, confident. Do not be defensive or accusatory toward the officer. Cite legal authority (statutes, regulations, AAO/BIA decisions, circuit court cases) where applicable.

### Step 4 — Evidence Organization

Produce an exhibit list organized to match the brief:

- Exhibit letter (A, B, C…)
- Description of document
- Purpose (what it proves)
- Page count
- Flag items marked `[TO OBTAIN]` — documents not yet available

### Step 5 — Expert Letter Guidance

If the RFE warrants an expert opinion letter (common in H-1B specialty occupation, EB-1A/EB-1B, O-1 cases):

- Identify what expertise is needed
- Draft a template / outline for the expert to use
- List specific questions the expert letter should address
- Flag that final expert letter must be obtained and reviewed before filing

### Step 6 — Output

Produce:

1. **Issue Map** — table listing each RFE issue, our response argument, and evidence status
2. **Response Brief** — full draft attorney cover letter/brief
3. **Exhibit List** — organized evidence package outline
4. **Checklist** — items still needed before filing (marked `[TO OBTAIN]`)

---

## Important Legal Notice

> **IMPORTANT**: This output is a drafting aid. The attorney of record must review all content for legal accuracy, cite-check all case citations, and ensure all factual assertions are supported by actual evidence before filing with USCIS. This tool does not constitute legal advice.

---

## Example Output

**Input**: H-1B RFE for software engineer at a tech startup. USCIS is questioning: (1) whether the position qualifies as a specialty occupation, and (2) whether the employer-employee relationship is bona fide given the client works remotely. Client has a Bachelor's in Computer Science. Job title: Senior Software Engineer.

---

### Issue Map

| # | RFE Issue | Our Argument | Evidence Status |
|---|-----------|--------------|----------------|
| 1 | Specialty occupation — position does not require a bachelor's degree in a specific specialty | CS degree normally required; job duties are highly technical (system architecture, distributed systems); industry-wide requirement demonstrated | Partial — need employer declaration, industry evidence |
| 2 | Employer-employee relationship — remote work raises control/supervision question | Employer controls assignments, reviews work, sets hours, handles performance reviews; remote = location, not lack of control | `[TO OBTAIN]` — employer declaration on supervision structure |

---

### Response Brief (Draft)

**[FIRM LETTERHEAD]**

[DATE]

U.S. Citizenship and Immigration Services
[Filing Address from RFE Notice]

**Re**: Petition for Nonimmigrant Worker (Form I-129), H-1B Classification
**Petitioner**: [EMPLOYER NAME]
**Beneficiary**: [CLIENT NAME]
**Receipt Number**: [RECEIPT NUMBER]
**RFE Date**: [RFE DATE]
**Response Deadline**: [DEADLINE]

Dear USCIS Officer:

This brief is submitted on behalf of [EMPLOYER NAME] ("Petitioner") in response to the Request for Evidence ("RFE") dated [RFE DATE] concerning the H-1B petition filed for [CLIENT NAME] ("Beneficiary"). The Petitioner respectfully submits that the evidence of record, together with the additional evidence provided herewith, establishes that the Beneficiary qualifies for H-1B classification as required by INA § 101(a)(15)(H)(i)(b) and 8 C.F.R. § 214.2(h).

---

**ISSUE 1: THE POSITION QUALIFIES AS A SPECIALTY OCCUPATION**

*USCIS's Concern*

The RFE states that the evidence submitted does not establish that the position of Senior Software Engineer normally requires at least a bachelor's degree in a specific specialty, or its equivalent, as required under 8 C.F.R. § 214.2(h)(4)(ii).

*Legal Standard*

A specialty occupation requires theoretical and practical application of a body of highly specialized knowledge, and attainment of a bachelor's or higher degree in a specific specialty, or its equivalent, as a minimum for entry into the occupation in the United States. 8 C.F.R. § 214.2(h)(4)(i)(A). The regulation provides four alternative criteria, satisfaction of any one of which is sufficient. 8 C.F.R. § 214.2(h)(4)(ii).

*Argument*

The position of Senior Software Engineer at [EMPLOYER NAME] satisfies at least two of the four specialty occupation criteria.

**Criterion 1** — A baccalaureate or higher degree or its equivalent in a specific specialty is normally the minimum requirement for entry into the particular position in the United States. The U.S. Department of Labor's Occupational Outlook Handbook confirms that software developers typically require a bachelor's degree in computer science, software engineering, or a related field. (Exhibit A.) The Petitioner requires a bachelor's degree in Computer Science or a closely related technical field as a minimum qualification, as documented in the job description and offer letter. (Exhibit B.)

**Criterion 4** — The nature of the specific duties is so specialized and complex that the knowledge required to perform the duties is usually associated with the attainment of a baccalaureate or higher degree in a specific specialty. The Beneficiary's duties include [DESCRIBE KEY TECHNICAL DUTIES — e.g., designing distributed microservices architecture, implementing real-time data pipelines, leading technical architecture decisions]. These duties require deep theoretical grounding in computer science — data structures, algorithms, system design, and distributed computing — that is imparted through a bachelor's degree program in Computer Science or equivalent. A generalist without this foundation could not perform these duties. (Exhibit C — Employer technical declaration; Exhibit D — Expert opinion letter [TO OBTAIN].)

---

**ISSUE 2: THE EMPLOYER-EMPLOYEE RELATIONSHIP IS BONA FIDE**

*USCIS's Concern*

The RFE questions whether a bona fide employer-employee relationship exists given that the Beneficiary works remotely.

*Legal Standard*

USCIS requires evidence that the Petitioner has the right to control the Beneficiary's work, including the ability to hire, fire, pay, supervise, and otherwise control the work. See Matter of Shawaski Techs., 25 I&N Dec. 316 (AAO 2010).

*Argument*

The Beneficiary works remotely as a matter of work location, not as an independent contractor or otherwise outside the Petitioner's control. Remote work does not vitiate the employer-employee relationship. The Petitioner:

- Sets the Beneficiary's work schedule and hours (Exhibit E — Employment Agreement)
- Assigns tasks and projects through [PROJECT MANAGEMENT TOOL — e.g., Jira, Asana] (Exhibit F — screenshot of assignments `[TO OBTAIN]`)
- Conducts regular performance reviews and provides ongoing supervision via weekly team meetings (Exhibit G — Employer declaration on supervision `[TO OBTAIN]`)
- Controls compensation, benefits, and has the right to terminate employment (Exhibit E)

The Beneficiary's physical location does not alter the Petitioner's right to control. Courts and the AAO have recognized that remote work arrangements are consistent with a bona fide employer-employee relationship when the hiring entity retains the right and ability to supervise and control the worker. See [CITE APPLICABLE AAO DECISION OR CIRCUIT AUTHORITY — `[ATTORNEY TO VERIFY AND INSERT]`].

---

**CONCLUSION**

For the foregoing reasons, the Petitioner respectfully requests that USCIS approve the H-1B petition for [CLIENT NAME]. The position qualifies as a specialty occupation, and a bona fide employer-employee relationship exists. The Petitioner stands ready to provide any additional evidence the officer may require.

Respectfully submitted,

[ATTORNEY NAME]
[TITLE]
[FIRM NAME]
[BAR NUMBER / REGISTRATION]
[DATE]

---

### Exhibit List

| Exhibit | Description | Purpose | Status |
|---------|-------------|---------|--------|
| A | DOL Occupational Outlook Handbook — Software Developers entry | Industry-wide degree requirement | Available online |
| B | Job description and offer letter | Employer's stated degree requirement | `[CONFIRM WITH CLIENT/EMPLOYER]` |
| C | Employer technical declaration | Complexity of duties requiring CS knowledge | `[TO OBTAIN — draft template below]` |
| D | Expert opinion letter | Independent expert on specialty occupation | `[TO OBTAIN]` |
| E | Employment agreement | Employer control: hours, pay, termination | `[CONFIRM ON FILE]` |
| F | Project management tool screenshots | Evidence of assignment and supervision | `[TO OBTAIN FROM EMPLOYER]` |
| G | Employer declaration on supervision | Remote work supervision structure | `[TO OBTAIN — draft template below]` |

---

### Checklist — Items Needed Before Filing

- [ ] **[TO OBTAIN]** Employer declaration on supervision structure (remote work) — see template above
- [ ] **[TO OBTAIN]** Expert opinion letter on specialty occupation (CS field)
- [ ] **[TO OBTAIN]** Screenshots from project management tool showing work assignments
- [ ] **[CONFIRM]** Employment agreement is current and on file
- [ ] **[ATTORNEY TO VERIFY]** AAO/circuit citation for remote work employer-employee relationship
- [ ] **[ATTORNEY TO REVIEW]** Full brief before filing
