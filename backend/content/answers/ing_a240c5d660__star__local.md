---
qid: ing_a240c5d660__star__local
question: 'Explain: Before signature, not after discharge. — Abridge | Ambient AI
  for Revenue Cycle'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 352
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:57:09-05:00'
sources: []
---

**Situation:**  
At a mid‑size hospital, the revenue cycle team was struggling with high denial rates on inpatient claims—about 18% were denied due to missing or incorrect pre‑authorization data. Our billing software only captured “post‑discharge” information, so clinicians would submit claims after patients signed their bills, often too late for insurance adjudication.

**Task:**  
I needed to build an AI‑driven pre‑auth engine that could validate and complete authorization details *before* the patient signed anything, ensuring every claim had all required fields when it left the system.

**Action:**  
Using Python and spaCy, I trained a named‑entity recognition model on historical claim forms to extract provider codes, procedure CPTs, and payer requirements. Integrated this into our EHR via an API that ran in real time as clinicians entered orders. The model flagged missing data instantly, offered auto‑populate suggestions, and routed unresolved cases to a billing specialist queue. I also set up a feedback loop where denied claims were labeled back into the training set, improving precision from 78% to 92% over three months.

**Result:**  
Denial rates dropped by 12 percentage points (from 18% to 6%), saving the hospital roughly $2.3 M in lost revenue annually. I learned that proactive AI integration—acting *before* discharge or signature—can turn reactive billing into a streamlined, error‑free process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
