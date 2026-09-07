---
qid: ing_3817e6ccd5__aws__local
question: 'Explain: Cold starts and scale-to-zero — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 389
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:16-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a generative‑AI service from on‑prem servers to an event‑driven architecture in AWS. The goal was to eliminate *cold starts* for LLM inference and support *scale‑to‑zero* for cost efficiency while keeping latency under 200 ms for 99.5 % of requests.

**Action (Design)**  
1. **Gateway** – I built an API Gateway + Lambda Authorizer that routes user queries to a *step‑function orchestrator*.  
2. **Serving Platform** – Each step invokes an ECS‑Fargate task with the LLM model loaded into memory using **Amazon Elastic Inference** (GPU‑accelerated).  
3. **Cold‑start mitigation** – I pre‑warm Fargate tasks via a CloudWatch Event schedule and keep a *spot‑fleet* of “warm” instances cached in an EFS file system for 5 min after idle.  
4. **Scale‑to‑zero** – When the queue length drops to zero, the orchestrator stops all warm tasks; subsequent invocations trigger new tasks on demand.

**Result**  
- Cold‑start latency dropped from ~3 s to <200 ms (95th percentile).  
- Cost savings of 42 % compared to a persistent EC2 deployment.  
- Throughput increased to 10k QPS with an error rate <0.01 %.  

**Reflection & Learning**  
I realized that the *step‑function state* was the single point of failure; adding a retry policy and using DynamoDB for idempotency solved it, reinforcing **Ownership** and **Dive Deep** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
