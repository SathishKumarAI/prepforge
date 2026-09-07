---
qid: ing_935cc42d5a__aws__local
question: 'Explain: Reliability Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 413
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:07-05:00'
sources: []
---

**Reliability patterns in an AI system**

*Leadership Principles:* **Customer Obsession** – we deliver models that never fail for the end‑user; **Ownership** – I own the whole reliability life‑cycle.

**Situation:** Our production recommendation engine served 4 M daily users. A sudden spike (30 % traffic surge) caused a 12 s latency increase, eroding CTR by 2.5 %.

**Task:** Design a resilient architecture that guarantees <200 ms latency and ≥99.9 % availability during traffic bursts.

**Action:**
1. **Stateless inference service** – Dockerized models on ECS Fargate with *Application Auto Scaling* (scales CPU‑based).  
2. **Circuit breaker + retry policy** – implemented in the client SDK; failures routed to a *SQS dead‑letter queue*.  
3. **Caching layer** – Redis‑ElastiCache for hot embeddings; *CloudFront* edge caching for static features.  
4. **Observability** – CloudWatch Alarms on latency and error rate, automated *Step Functions* rollback if thresholds exceed 5 % in 1 min.  
5. **Chaos engineering** – scheduled *Gremlin* runs to validate failover paths.

**Result:** Post‑deployment, latency dropped from 12 s to <200 ms; traffic spikes of up to 50 % were absorbed with no service degradation. Uptime rose to 99.97 %, and we cut infra costs by 18 % through auto‑scaling.  

*Bar‑raiser notes:* I own the entire loop, dive deep into metrics, quantify impact (latency & CTR), and iterate after each chaos run—learning from failure to strengthen the pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
