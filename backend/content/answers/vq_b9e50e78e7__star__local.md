---
qid: vq_b9e50e78e7__star__local
question: How long should raw data be retained?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 350
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:40-05:00'
sources: []
---

**Situation**  
While leading a migration of our customer‑behavior pipeline from on‑prem Hadoop to Snowflake, I discovered that the raw clickstream data was being discarded after just 30 days. Our compliance team flagged this as risky because we needed historical context for fraud detection and regulatory reporting.

**Task**  
I had to define a retention policy that balanced legal requirements, storage costs, and analytical value, and implement it without disrupting existing ETL jobs or inflating our cloud bill.

**Action**  
I first mapped out all relevant regulations (PCI‑DSS, GDPR, internal audit) and quantified the analytics benefit of keeping 12 months versus 6. Using Snowflake’s data lifecycle management, I set up a staged approach: keep raw logs in hot storage for 90 days, then move them to cheaper long‑term storage (S3 Glacier via Snowpipe) for up to 18 months, after which they’re archived to tape for compliance audits. I also added automated metrics dashboards that track cost per GB and query performance against the staged data.

**Result**  
The new policy cut raw‑data storage costs by 38 % while extending analytic window from 3 months to 1½ years. Query latency on historical reports improved by 15 %, and we passed the next audit with zero findings. I learned that a layered, compliance‑driven retention strategy can deliver both cost savings and data value without compromising governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
