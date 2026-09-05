---
qid: ing_1acb922108__star__local
question: 'Explain: Step 3: Categorize Errors Using Axial Coding'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 387
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:23:03-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection model for a fintech client, we noticed the overall F1 score dipped from 0.87 to 0.78 after deploying version 2.0. The dashboard flagged “unknown” errors but gave no insight into why predictions were wrong.

**Task** – I needed to identify systematic error patterns so we could prioritize feature engineering and rule updates that would lift precision without blowing up latency.

**Action** – First, I pulled the misclassified instances (false positives/negatives) from production logs and exported them into a CSV. Using Python’s pandas, I built a minimal ontology of domain concepts: transaction type, user behavior, device fingerprint, time‑of‑day, etc. Then I applied axial coding: for each error instance I tagged one or more of these axes (e.g., “high‑value transfer” + “odd device”) and noted the relationship between them (“causes a false positive”). I iterated this manually for 200 samples, then automated the tagging with spaCy’s entity recognizer to scale up. The axial matrix revealed two dominant error clusters: (1) “High‑value transfers from new devices during off‑peak hours” and (2) “Frequent small‑amount deposits by newly registered users”.

**Result** – With these insights, we added a rule that flagged the first cluster for manual review and retrained the model on synthetic samples for the second. The F1 score rose to 0.91 within two weeks, and latency stayed below our SLA. I learned that axial coding turns raw error logs into actionable feature‑level hypotheses—bridging the gap between data science and engineering ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
