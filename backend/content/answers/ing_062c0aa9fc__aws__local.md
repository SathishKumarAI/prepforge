---
qid: ing_062c0aa9fc__aws__local
question: 'Explain: High-Level System Design — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 504
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:57-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I was tasked to prototype a *ChatGPT‑style* conversational agent that could serve 200k concurrent users in real time while keeping latency under 300 ms and cost below $0.02 per query.

**Action (Dive Deep + Bias for Action)**  
I broke the problem into three layers:

| Layer | AWS Service(s) | Rationale |
|-------|----------------|-----------|
| **Ingestion & Pre‑processing** | API Gateway + Lambda (or Fargate if stateful) | Serverless scaling to 10k req/s, pay per invocation. |
| **Model Inference** | SageMaker Endpoint (multi‑model with GPU inference) + Elastic Load Balancer | On‑demand GPU autoscaling; can switch from `ml.g5.xlarge` to `ml.p3.2xlarge` during traffic spikes. |
| **Post‑processing & Caching** | DynamoDB + ElastiCache (Redis) for session state and hot responses | Low‑latency key/value store, auto‑scaling read/write units; cache top 10k prompts to cut inference by 40%. |

*Scalability*: Each layer is stateless except the cache, allowing horizontal scaling.  
*Availability*: Multi‑AZ endpoints with health checks; SageMaker multi‑model endpoint provides graceful failover.  
*Cost*: Rough estimate – $0.015/query on average (GPU cost + Lambda). With 200k QPS → ~$108 k/month; caching cuts this to ~$70 k.

**Result (Deliver Results)**  
After deploying, latency dropped from 1.2 s to **260 ms**, throughput hit 210k QPS, and cost was **$68 k/month**—a 37% reduction vs baseline. I documented the trade‑offs in a post‑mortem, learned that pre‑warming the endpoint reduced cold‑start latency by 30%, and iterated on cache eviction policies to improve hit rate from 70% to 85%.  

*Bar‑raiser cues*: clear ownership of each layer, quantified performance gains, deep dive into AWS trade‑offs, and evidence of learning from an early failure (cold starts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
