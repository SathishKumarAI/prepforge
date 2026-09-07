---
qid: ing_afbf5cd4a8__aws__local
question: 'Explain: Cody Enterprise — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 405
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:02:49-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our on‑prem “Cody” code‑review bot to a fully serverless stack on AWS so that it could serve 30 + micro‑services teams with near‑zero latency and 99.9 % uptime.

**Action – Design & Tech Choices**  
* **Event source:** S3 bucket + EventBridge rule for every commit.  
* **Compute:** Lambda (Python 3.12) with a 10 GB / 15 min timeout; uses the new *Cody ML inference endpoint* in SageMaker to generate context‑aware suggestions.  
* **Storage & Retrieval:** DynamoDB for user prefs + caching layer via ElastiCache‑Redis (clustered, read replicas).  
* **Observability:** CloudWatch metrics + X-Ray tracing; automated alerts on error rate > 2 %.  

I chose *SageMaker* over EC2 because it gives us automatic scaling to hundreds of concurrent inference requests and built‑in model versioning. Lambda keeps costs low (≈$0.0000167 per invocation) while still meeting the <50 ms response SLA. DynamoDB’s single‑region architecture guarantees 99.999% availability for preference reads.

**Result**  
*Reduced latency from 350 ms to 42 ms (90 % improvement).*  
*Cut operational costs by 65 % vs the legacy VM stack.*  
*Achieved a 4.8/5 user satisfaction score on the quarterly survey.*

**Learning & Ownership**  
I held weekly “post‑mortem” retrospectives, documented failure modes (e.g., cold‑start spikes), and introduced an automated rollback policy in CloudFormation. This reinforced *Ownership* and *Dive Deep*, ensuring we continuously improved both performance and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
