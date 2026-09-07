---
qid: ing_162c652b67__aws__local
question: 'Explain: Customers who viewed this item also viewed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:39-05:00'
sources: []
---

**Situation / Task**  
In my last role at a consumer‑electronics retailer, the merchandising team wanted to add “Customers who viewed this item also viewed” (CWA) cards to increase cross‑sell revenue. The goal was to boost page‑level conversion by 8 % while keeping latency under 200 ms.

**Action – Technical Design**  
I scoped a **real‑time recommendation pipeline** using Amazon Kinesis Data Streams for click events, Lambda for enrichment, and DynamoDB Global Tables to store co‑view counts. A scheduled Glue job aggregates daily totals into an S3 data lake, which feeds a SageMaker model (matrix factorization) that outputs top 5 related SKUs per product. The model is deployed on SageMaker Endpoint behind an API Gateway with Lambda authorizer; the front‑end consumes JSON via Edge caching (CloudFront).  

*Scalability*: Kinesis shards auto‑scale with traffic; DynamoDB autoscaling ensures consistent read/write capacity.  
*Availability*: Multi‑AZ deployments, automatic failover in S3 and SageMaker endpoints.  
*Cost*: Lambda’s short‑duration invocations + Spot Instances for training keep spend <$1k/month.

**Result**  
After a 4‑week A/B test, page conversion rose from **12.3 % to 13.9 %** (≈ +12 %), exceeding the target and generating an additional $450K in quarterly revenue.  

**Learning / Ownership**  
I owned the end‑to‑end flow, iterated on data quality after a mis‑matched SKU issue caused a spike in cold starts, and documented best practices that are now part of our ML ops playbook.  

> **Leadership Principles**: *Customer Obsession* (tailored recommendations), *Ownership* (full pipeline delivery), *Dive Deep* (performance tuning), *Bias for Action* (rapid A/B roll‑out).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
