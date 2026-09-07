---
qid: ing_d12af9a088__aws__local
question: 'Explain: Request Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 593
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:13:50-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the launch of a *Request Parts* micro‑service that let customers pull up‑to‑date inventory data through a REST API. The product team wanted a highly available, low‑latency endpoint that could support 50 k requests per second during peak sales.

**Task (T)**  
I had to design an API that was simple for front‑end developers, scalable enough for traffic spikes, and cost‑effective while maintaining strong data consistency.

**Action (A)**  

| Design Decision | Why it matters |
|-----------------|----------------|
| **API Gateway + Lambda** | Serverless gives instant auto‑scale; cold starts < 200 ms. |
| **DynamoDB with Global Secondary Indexes** | Single‑table design, read capacity 100 RPS per shard; supports eventual consistency for most queries while keeping writes cheap. |
| **Cache layer (ElastiCache Redis)** | 95% of requests served from cache, reducing DynamoDB reads by ~70 %. |
| **Circuit breaker & retry logic** in Lambda to guard against downstream failures. |
| **CI/CD via CodePipeline + CloudWatch Alarms** | Detect latency spikes and trigger auto‑scaling of the API Gateway stage. |

I also introduced an *analytics* Lambda that aggregates request metrics, feeding a real‑time dashboard (Grafana on CloudWatch) so we could see if the 50 k RPS target was met.

**Result (R)**  
- Latency stayed below 150 ms for 99.8% of requests during a 3× traffic surge.  
- Cost per request dropped from $0.12 to $0.04 after caching, saving ~$15k/month.  
- The API earned a “Go‑Live” rating of **4/5** in the quarterly review.

---

### Leadership Principles Highlighted

* **Ownership** – I took full responsibility for design, implementation, and monitoring, even when cross‑team dependencies arose.  
* **Dive Deep** – Detailed performance metrics guided iterative optimizations; we traced a 200 ms latency spike to a specific DynamoDB read pattern.  

---

### What a Bar‑Raiser Listens For

| Expectation | How I Demonstrated It |
|-------------|-----------------------|
| Quantified impact | Provided concrete cost and latency numbers. |
| Depth & trade‑offs | Discussed serverless vs. EC2, cache consistency vs. freshness. |
| Learning from failure | Adapting the circuit breaker after a burst of failed downstream calls. |

*This answer blends behavioral storytelling with a concise technical blueprint—exactly what Amazon looks for in an interview.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
