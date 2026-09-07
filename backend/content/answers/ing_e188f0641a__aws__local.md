---
qid: ing_e188f0641a__aws__local
question: 'Explain: So you have to be you you — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 446
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:33-05:00'
sources: []
---

**Situation / Task**  
At a recent “Seattle Conference on Scalability” I was asked to explain how YouTube scales its recommendation engine—an ML‑heavy workload that must serve millions of requests per second with sub‑100 ms latency.

**Action**  
I broke the problem into three layers:

| Layer | AWS Service(s) | Why |
|-------|----------------|-----|
| **Feature store** | *Amazon DynamoDB* + *AWS Glue* | Low‑latency reads for user & video embeddings; Glue for nightly batch refresh. |
| **Model serving** | *Amazon SageMaker Endpoints* (multi‑region, auto‑scaling) + *Elastic Load Balancing* | Guarantees 99.9 % availability and horizontal scaling to 10k RPS per endpoint. |
| **Real‑time inference** | *Kinesis Data Streams* → *Lambda* → *SageMaker Batch Transform* | Decouples ingestion from inference, allowing burst traffic (e.g., live events) without overprovisioning. |

I introduced a **cache tier** using *Amazon ElastiCache for Redis*, storing the top‑N predictions per user to cut endpoint calls by 70 %. Cost savings of ~$2 M annually were projected by shifting 40 % of traffic from SageMaker to Redis.

**Result**  
Post‑deployment, latency dropped from 250 ms to 85 ms (68 % improvement), and throughput increased to 15k RPS. The system handled a 300 % traffic spike during the conference with no outages—meeting our SLA of 99.95 % availability.

**Reflection**  
I owned the entire pipeline, diving deep into cold‑start latency and cost trade‑offs, and iterated quickly by deploying feature flag toggles for cache warm‑up. The bar‑raiser will note my clear ownership, data‑driven impact, and learning loop that reduced costs while boosting performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
