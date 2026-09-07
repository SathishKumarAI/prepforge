---
qid: ing_33e078517a__aws__local
question: 'Explain: Index Lifecycle Management (ILM)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 481
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:28-05:00'
sources: []
---

**Situation & Task**  
While building a multi‑tenant recommendation engine for an e‑commerce platform, I was responsible for keeping the training data lake lean yet highly available. The raw logs (≈ 10 TB/day) had to be retained for 90 days, moved to cheaper storage thereafter, and finally purged after one year—without impacting downstream model retraining pipelines.

**Action**  
I designed an **Index Lifecycle Management (ILM)** policy in Amazon OpenSearch Service:

| Phase | Action | AWS Service | Rationale |
|-------|--------|-------------|-----------|
| Hot   | 1‑day index | OpenSearch (hot nodes) | Low latency for real‑time inference. |
| Warm  | Move to `warm` tier after 7 days | OpenSearch `warm` nodes + S3 Glacier | Cost‑effective storage while still searchable. |
| Cold  | After 30 days, migrate index data to S3 Glacier Deep Archive via cross‑cluster replication (CCR) | S3 Glacier Deep Archive | Long‑term compliance storage at <$0.004/GB/month. |
| Delete | Expire after 365 days | OpenSearch ILM delete action | Removes obsolete data automatically. |

I scripted the policy in JSON, integrated it with AWS Lambda to trigger nightly index snapshots, and set up CloudWatch metrics to monitor hit‑rate degradation. The pipeline was fully automated via Terraform.

**Result**  
- **Cost Savings:** 70 % reduction on storage (from $3.5k/month to $1.0k/month).  
- **Performance Impact:** Query latency stayed < 120 ms for the hot tier; warm/cold tiers remained within SLA because of CCR replication.  
- **Operational Efficiency:** Manual housekeeping dropped from weekly manual jobs to a fully automated, auditable workflow.

**Reflection (Bar‑Raiser Lens)**  
I took full ownership of the data lifecycle, dove deep into OpenSearch’s ILM capabilities, quantified impact with real cost & latency numbers, and learned that coupling ILM with CCR can dramatically lower storage costs while preserving analytics velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
