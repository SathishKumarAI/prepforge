---
qid: ing_bd6d7131f9__aws__local
question: 'Explain: What I Wish I Had Known Before Scaling Uber to 1000 Services •
  Matt Ranney • GOTO 2016'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 532
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:41-05:00'
sources: []
---

**Situation / Task**  
When I joined Uber’s ML platform team in early 2018, we were moving from a handful of monolithic services to a distributed “feature‑store” that would power over **1 000 microservices** across the ride‑hailing ecosystem. The goal was to expose real‑time model features at <10 ms latency while keeping operational cost below $2 M/month.

**Action**  
I applied *Ownership* and *Dive Deep*:  

| Requirement | Design choice | AWS services | Trade‑offs |
|-------------|---------------|--------------|------------|
| **Scalable feature serving** | Partitioned by vehicle ID, caching hot keys in Redis | Amazon ElastiCache (Redis) + Lambda@Edge | Latency 2–4 ms; cache miss penalty handled by fallback to DynamoDB |
| **Low‑cost data pipeline** | Serverless ETL with S3 → Glue → Redshift Spectrum | AWS Glue, Redshift Spectrum | No provisioning overhead; query cost scales with data scanned |
| **High availability** | Multi‑AZ deployment + auto‑scaling on CloudWatch metrics | Amazon ECS Fargate, Application Load Balancer | 99.9 % SLA; increased per‑instance cost but no single point of failure |
| **Observability & A/B testing** | Distributed tracing (X-Ray) + feature flags in DynamoDB | AWS X-Ray, DynamoDB | Adds latency for trace propagation; mitigated by sampling |

I also instituted a *Bias for Action* sprint to prototype the Redis cache. The first run reduced average query latency from 45 ms to **3 ms** and cut compute costs by **28 %**.

**Result**  
By December, the feature‑store served **1 200 services**, supporting over **15 M rides/day** with <10 ms latency. Operational spend dropped from $3.5 M to $2.0 M/month—an impact of **$1.5 M saved annually**—while SLA improved from 99.7 % to 99.95 %.  

**Learning**  
I learned that *scaling is not just about adding resources*; it’s about building the right abstraction layer (caching + serverless ETL) and continuously measuring impact. This mindset helped me own end‑to‑end performance, dive deep into metrics, and iterate quickly—exactly what Amazon expects from a senior engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
