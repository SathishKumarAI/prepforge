---
qid: ing_2be705a33f__fp__local
question: 'Explain: Protected vs Private — GitHub - Anshul619/Java: This repo contains
  java \"how to to-dos\", concepts etc. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 409
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:57-05:00'
sources: []
---

**Why GitHub distinguishes “protected” from “private”**

At its core, a code‑hosting platform is a *shared memory* that lets many people read and write the same state (the repository).  
The two access levels solve different problems:

| Level | Fundamental problem it solves |
|-------|------------------------------|
| **Private** | Prevents *unauthorized readers*. Only invited collaborators can see the code at all. |
| **Protected** | Ensures *data integrity* on a branch: only vetted changes (pull‑request reviews, CI checks) reach the critical line of code. |

### Private → “Who can read?”
- The repository’s contents are hidden from the public sphere.
- Only users with explicit permissions see the files or history.

### Protected → “How do we change it?”
- A branch is locked down so that direct pushes are blocked.
- Every modification must pass through a pull‑request workflow, optionally requiring approvals and status checks.

**Why this separation matters**

*Privacy* is about *visibility*, while *protection* is about *control over mutation*.  
If you made the whole repo private but left `master` unprotected, an accidental force‑push could silently overwrite your build history.  
Conversely, protecting a public branch guarantees that every change is reviewed, even though the code is already visible.

### Non‑obvious insight
A protected branch can be *public* yet still enforce stringent review policies. This means you can open source a library but keep its `main` branch stable—enabling community contributions without sacrificing reliability. The dual model lets teams scale collaboration while preserving critical invariants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
