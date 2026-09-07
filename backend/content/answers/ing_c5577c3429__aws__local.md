---
qid: ing_c5577c3429__aws__local
question: 'Q: How do you handle "Noisy Neighbors" in a multi-tenant LLM cluster?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 331
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:57-05:00'
sources: []
---

**Situation / Task**  
I was leading the rollout of a shared LLM service for 12 business units on a single GPU‑cluster. After the first month we saw a spike in latency (up to 3×) caused by “noisy neighbors” – one tenant’s inference load would burst and starve others.

**Action**  
1. **Ownership & Dive Deep** – I set up per‑tenant metrics (CPU, GPU, queue depth) in CloudWatch and built a Lambda that auto‑scales the cluster based on 95th percentile latency.  
2. **Bias for Action** – Implemented *Resource Guardrails* using AWS SageMaker’s *Inference Scheduler* to enforce max concurrent requests per tenant, backed by an API Gateway throttling policy.  
3. **Invent & Simplify** – Added a lightweight “priority queue” layer in Redis (Elasticache) that demotes low‑priority jobs when the cluster is saturated, guaranteeing 99th‑percentile SLA for critical tenants.

**Result**  
- Latency dropped from 300 ms to 90 ms on average (−70%).  
- Throughput increased by 35% without adding hardware.  
- Customer satisfaction scores for the LLM service rose from 4.2 to 4.8/5.

**Learnings** – Early monitoring is key; automated guardrails reduce manual ops, and a simple priority queue can deliver measurable business impact while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
