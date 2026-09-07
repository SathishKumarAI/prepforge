---
qid: ing_3cc752fc2e__aws__local
question: 'Explain: Usage: run before every prompt change or model switch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 432
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of a customer‑facing chatbot from an on‑prem GPT‑4 instance to SageMaker endpoints. The business required *zero‑downtime* and strict SLA (≤ 200 ms per response). My manager asked me to design a guard‑rail that would “run before every prompt change or model switch” so we could validate inputs, enforce policy, and roll back if needed.

**Action**  
1. **Define the contract** – Every request must go through an *Inference Orchestrator* (Python Lambda) that validates schema, token count, and user intent.  
2. **Implement pre‑validation** – Use Amazon Comprehend to extract entities; run a lightweight policy engine (AWS Step Functions + DynamoDB rules table).  
3. **Model‑switch guard** – Deploy two SageMaker endpoints (v1 & v2) behind an Application Load Balancer with weighted routing. The Lambda checks the feature flag in Parameter Store and routes accordingly, returning a 503 if the target model is unhealthy.  
4. **Observability** – CloudWatch metrics (`prompt_validation_pass`, `model_switch_latency`) feed into Grafana dashboards; alerts trigger on > 5% failure rate.

**Result**  
- Reduced validation errors from 12% to < 0.1%.  
- Maintained SLA with a median latency of 187 ms, even during a model rollback that lasted 4 min.  
- Cut cost by 18% by auto‑scaling the secondary endpoint only when traffic spikes.

**Reflection**  
I owned the end‑to‑end flow, dived deep into each AWS service’s limits, and quantified every trade‑off (cost vs latency). The bar‑raiser will notice that I didn’t just build a patch; I architected a resilient, data‑driven system that aligns with **Customer Obsession** (smooth user experience) and **Ownership** (full lifecycle control).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
