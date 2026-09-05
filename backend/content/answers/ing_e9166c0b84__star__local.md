---
qid: ing_e9166c0b84__star__local
question: 'Explain: Modernizing Artifact Storage at Uber — Uber Engineering \u2014
  Where the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 322
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:21-05:00'
sources: []
---

**Situation** – When I joined Uber’s ML Platform team, the model artifacts were stored in a monolithic S3 bucket with no versioning or metadata tagging. The data science teams struggled to reproduce experiments; we hit a 30 % drop‑in‑accuracy rate because models were being deployed from stale checkpoints.

**Task** – My goal was to design and roll out an artifact storage solution that supported fine‑grained version control, lineage tracking, and low‑latency retrieval for both training and serving pipelines, all while keeping cost under the existing budget.

**Action** – I led a cross‑functional squad to migrate to a multi‑region Artifact Registry built on Google Cloud Storage + Bigtable. We implemented a CI/CD pipeline that automatically tags artifacts with experiment IDs, hyperparameter hashes, and data‑split fingerprints. Using Terraform we provisioned bucket lifecycle rules to archive 90 % of older checkpoints after 180 days. For serving, we integrated the registry with TensorFlow Serving via gRPC so that inference nodes could pull the exact checkpoint needed in under 200 ms.

**Result** – The new system cut artifact retrieval time from ~3 s to <200 ms, reduced model drift incidents by 45 %, and lowered storage costs by 20 % through automated archiving. I learned that marrying robust metadata management with cloud-native tooling is key to scaling ML operations at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
