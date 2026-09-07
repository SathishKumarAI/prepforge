---
qid: ing_1b749b9f97__aws__local
question: 'Explain: Web Crawler System Components — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 459
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:28:14-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was asked to design a web‑crawler for an e‑commerce analytics startup that needed fresh product data from 10 k sites daily. The goal: 99.9 % coverage, <4 h latency, and cost under $5k/month.

**Action (Dive Deep, Bias for Action)**  
I broke the system into three AWS‑centric components:

| Component | Service(s) | Reasoning |
|-----------|------------|-----------|
| **Scheduler & Task Queue** | Amazon EventBridge → SQS → Step Functions | Decouples discovery from fetching; auto‑scales with site load. |
| **Crawler Workers** | EC2 Spot + Lambda (fallback for small pages) | Spot provides 70 % cost savings; Lambda handles short HTML fetches, keeping workers idle otherwise. |
| **Data Pipeline & Storage** | Amazon S3 (raw) → AWS Glue ETL → DynamoDB (canonical data) | S3 is durable and cheap for raw blobs; Glue cleans in batch; DynamoDB gives low‑latency lookups. |

I added a **rate‑limit controller** using Redis‑Elasticache to respect each site’s politeness policy, preventing bans. For scalability I designed the crawler as stateless workers pulling URLs from SQS, allowing horizontal scaling up to 5 k concurrent fetches.

**Result (Deliver Results)**  
Within two weeks of deployment, coverage hit **99.7 %**, latency dropped to **3.2 h**, and monthly spend stayed at **$4.8k**—a 30 % cost reduction over the prototype. I logged all failures; a post‑mortem on a throttled domain taught us to add per‑domain back‑off logic, improving future reliability.

**Reflection (Learn from Failure)**  
The initial version crashed when a site returned malformed HTML. Adding defensive parsing and circuit breakers prevented that failure in production, demonstrating true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
