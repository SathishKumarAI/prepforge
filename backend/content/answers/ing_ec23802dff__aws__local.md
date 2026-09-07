---
qid: ing_ec23802dff__aws__local
question: 'Explain: Concurrency and Systems (Rising Category)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:38-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a production‑grade recommendation engine from a single‑node Spark job to a fully concurrent microservice architecture. The goal was to cut inference latency by 70 % while supporting 10× more requests per second.

**Action**  
I applied *Customer Obsession* and *Ownership*: first, I mapped the end‑to‑end data flow—feature store → model container → response cache—and identified the contention points (CPU bound serialization, single‑threaded inference).  
Using *Dive Deep*, I benchmarked several options:  

| Option | AWS Service | Concurrency Model | Latency | Cost |
|--------|-------------|-------------------|---------|------|
| A | EC2 + Gunicorn | Thread pool | 120 ms | $0.24/h |
| B | ECS Fargate + SageMaker Runtime | Parallel containers | **45 ms** | $0.18/h |
| C | Lambda + Step Functions | Event‑driven | 200 ms | $0.15/h |

I chose **Option B**: an autoscaling Fargate cluster with a stateless FastAPI wrapper around the SageMaker endpoint, backed by ElastiCache Redis for hot‑feature caching. I added *Bias for Action* by rolling out in stages and monitoring A/B metrics.

**Result**  
Concurrency increased from 200 req/s to **2,500 req/s**, reducing latency by **63 %** (from 120 ms to 45 ms). Cost per request dropped 25 %. The system now supports peak traffic during holiday sales without manual intervention. I documented the architecture in Confluence and presented a post‑mortem that highlighted how a single bottleneck could have crippled revenue, reinforcing *Learn & Be Curious* for future infra teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
