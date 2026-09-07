---
qid: ing_dce6d1e72e__aws__local
question: 'Explain: Summary — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 443
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:31-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I led the launch of a real‑time document‑summarisation API used by 3 M+ daily users in finance and legal sectors. The business demanded **99.95 % uptime** because outages meant delayed compliance reports.

**Action (A)**  
I architected a multi‑region, serverless stack:

| Layer | AWS Service | Reason |
|-------|-------------|--------|
| Ingest | API Gateway + Lambda@Edge | Edge routing → <10 ms latency |
| Compute | SageMaker endpoints (Auto Scaling) | Handles variable inference load |
| Storage | DynamoDB Global Tables | Multi‑AZ, low‑latency metadata |
| Orchestration | Step Functions | Fault‑tolerant workflow; retries & dead‑letter queues |
| Monitoring | CloudWatch + X-Ray | Continuous health checks, root‑cause analysis |

I added **canary deployments** and **blue/green Lambda versions** to roll out new models without downtime. Costs were capped at $0.15 per 1 k requests through spot instance use in SageMaker.

**Result (R)**  
Post‑deployment metrics:  
- Uptime rose from 99.80 % → **99.97 %** over 12 months.  
- Latency dropped 35 %, from 450 ms to 290 ms average.  
- Cost per inference fell 22 % vs the legacy VM approach.

**Learning & Ownership**  
I owned end‑to‑end visibility, diving deep into X‑Ray traces to pinpoint a bottleneck in tokenization that cost 12 % of latency. Fixing it earned a “Customer Obsession” shoutout. The bar‑raiser will notice my ownership, data‑driven impact, and the iterative learning loop I built for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
