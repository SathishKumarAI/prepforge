---
qid: ing_4a689b912e__star__local
question: 'Explain: AI Governance and Compliance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 317
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:08-05:00'
sources: []
---

**Situation:**  
During my tenure as Lead Data Scientist at a fintech startup, we were developing an automated credit‑scoring model that would be deployed in three regulated jurisdictions (UK, US, EU). A regulatory audit scheduled in six weeks flagged potential compliance gaps around data provenance and algorithmic bias.

**Task:**  
I had to design an end‑to‑end AI governance framework that satisfied GDPR, CCPA, and the UK FCA’s Model-View-Controller guidelines while ensuring the model met a 95 % precision target for loan approvals.

**Action:**  
First, I mapped every data source in a lineage dashboard (using Collibra) to document origin, consent status, and retention policy. Next, I implemented a bias‑audit pipeline with Fairlearn that ran nightly on training and inference datasets, flagging disparate impact scores above 1.2. I set up automated alerts in Airflow to pause model retraining if bias thresholds were breached. For compliance reporting, I built an audit log in Elasticsearch that captured every feature transformation, hyperparameter change, and model version with cryptographic hashes for tamper evidence.

**Result:**  
The audit passed with no findings; we deployed the model two weeks early. Post‑deployment monitoring showed a 2 % drop in default rates while maintaining compliance metrics. I learned that embedding governance into CI/CD pipelines not only satisfies regulators but also improves model robustness and stakeholder trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
