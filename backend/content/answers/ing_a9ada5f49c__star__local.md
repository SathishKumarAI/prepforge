---
qid: ing_a9ada5f49c__star__local
question: 'Explain: Use case: Service deletes expired pastes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 354
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:02-05:00'
sources: []
---

**Situation** – In our paste‑bin SaaS, we were hitting storage limits because users left hundreds of thousands of short‑lived public pastes that never got cleaned up. The admin dashboard showed a growing “stale” bucket taking up 30 % of our SSD and slowing backup jobs.

**Task** – Build an automated, machine‑learning driven cleanup pipeline that could predict which pastes were truly expired (or unlikely to be requested again) while preserving any that might still be needed for compliance or debugging.

**Action** – I designed a lightweight feature set: paste age, view count in the first hour, referrer diversity, and content entropy. Using scikit‑learn’s Gradient Boosting Classifier, I trained on 200k labeled pastes (hand‑reviewed by support). The model achieved an AUC of 0.92; we set a conservative threshold to flag 99 % of genuinely stale items with only 1 % false positives. I integrated the predictor into our nightly cron job via a Go microservice that called the Python model through gRPC, then issued bulk delete requests to our MongoDB cluster.

**Result** – The automated purge removed 2.4 million pastes in the first month, freeing 450 GB of storage and cutting backup time by 35 %. We also cut manual support tickets related to “missing” pastes by 70 %. I learned how to balance precision and recall when deploying ML in a production cleanup task, and that simple tabular models can deliver big operational gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
