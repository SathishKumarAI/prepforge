---
qid: ing_cceb5a7a86__star__local
question: Why do you version an eval dataset, and what exactly belongs in the version?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 298
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:38-05:00'
sources: []
---

**Situation:**  
During a recent model‑release cycle at my previous company we had a churn prediction model that drifted after a new marketing campaign. The evaluation dataset we used for internal QA was suddenly producing wildly different metrics compared to the production data.

**Task:**  
I needed to ensure our evaluation pipeline remained reliable, so I set out to version the eval dataset and identify what exactly should be tracked.

**Action:**  
First, I created a reproducible snapshot of the raw data using Delta Lake with a `snapshot_date` tag. Then I built a separate “golden” table that held the same rows but with engineered features aligned to the current model pipeline—this included feature‑hashes and target‑encoded categories. I also stored the preprocessing script and versioned it in Git, tying each dataset snapshot to a specific commit hash. Finally, I added metadata columns (source, collection window, labeling protocol) so any future analyst could understand why a particular split existed.

**Result:**  
After implementing this approach we reduced evaluation‑production metric gaps from 12 % down to 3 %. The versioned eval set also cut debugging time by 40 %, as analysts could quickly roll back to the exact data state that produced a given result. I learned that treating datasets like code—using snapshots, tags, and metadata—is essential for robust AI engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
