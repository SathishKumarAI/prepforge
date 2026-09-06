---
qid: ing_0f9c9b1ae4__think__local
question: Design the human approval flow for an agent that files expense reports.
  Where do the gates go, and how do you stop people from clicking through them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 478
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:44:33-05:00'
sources: []
---

**1️⃣ Clarify scope & constraints**  
   - *What* is being approved (expense reports)?  
   - *Who* must approve (manager, finance, compliance)?  
   - *When* approvals are needed (first‑level, final audit, high‑value thresholds).  
   - *Regulations* or internal policies that dictate gate placement.  
   - Assume a typical workflow: employee → manager → CFO/Finance → system auto‑post.

**2️⃣ Adopt a layered approval framework**  
   - **Gate 1 – Automatic validation** (policy engine, amount limits, receipt OCR).  
   - **Gate 2 – Managerial review** (direct report checks details & reasonableness).  
   - **Gate 3 – Finance / compliance audit** (high‑risk or outlier expenses).  
   - **Gate 4 – Final posting** (system commits to ledger).

**3️⃣ Reason through each gate’s logic**  
   - Define trigger conditions (e.g., >$1,000 → finance review).  
   - Map decision points: “Approve”, “Request more info”, “Reject”.  
   - Specify escalation paths if a reviewer is unavailable.  
   - Ensure audit trail records who acted and why.

**4️⃣ Avoid common pitfalls**  
   - *Over‑automation*: let humans handle context‑rich decisions (e.g., questionable receipts).  
   - *Blind spots*: missing compliance checks for specific categories (travel, gifts).  
   - *User fatigue*: too many prompts can lead to “click‑through” behavior.  
   - *Security gaps*: ensure only authorized personnel see sensitive data.

**5️⃣ Sanity‑check & communicate the flow**  
   - Run a mock expense through all gates; verify each step triggers correctly.  
   - Present the diagram in plain language, highlighting decision points and who owns them.  
   - Offer training or tooltips so reviewers know why a gate exists—reduces “just click” mentality.  

By systematically defining what, who, when, and how at each stage—and by making every gate purposeful and traceable—you create an approval flow that’s both robust and resistant to bypass.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
