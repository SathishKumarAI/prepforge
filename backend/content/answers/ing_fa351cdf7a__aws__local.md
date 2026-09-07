---
qid: ing_fa351cdf7a__aws__local
question: 'Explain: Designing robust and predictable APIs with idempotency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:09-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a public ML inference API for a recommendation service that was receiving >10 k RPS. Clients reported inconsistent responses during network hiccups, causing downstream cache invalidation and SLA breaches.

**Action (Technical Design)**  
1. **Idempotency Key** – required in the header (`X‑Idempotency‑Key`). Stored request metadata in **DynamoDB** with a TTL of 24 h; key = user‑id + operation.  
2. **Stateless Lambda** – each call checks DynamoDB; if a record exists, it returns the cached prediction (no re‑compute). If not, it triggers an **SageMaker BatchTransform** via Step Functions for heavy models.  
3. **Circuit Breaker & Retry** – implemented in API Gateway with 5 second timeouts and exponential backoff to avoid cascading failures.  
4. **Metrics** – CloudWatch dashboards track *idempotent hit rate* (aim 95%) and *latency distribution*.  

**Result**  
- Reduced duplicate inference calls by **87%**, cutting GPU usage from 10 hrs/day to 1 hr/day → cost saving $12k/month.  
- SLA compliance improved from 92% to 99.7%.  
- Incident response time dropped from 45 min to <5 min.

**Reflection (Leadership Principles)**  
*Ownership*: I owned the end‑to‑end API lifecycle, from spec to monitoring.  
*Dive Deep*: Tracked cold‑start latency in Lambda and tuned DynamoDB read capacity.  
*Bias for Action*: Deployed the idempotency layer within 3 sprints instead of waiting for a formal change‑request process.  

**Bar‑raiser takeaway** – Demonstrating measurable impact, rigorous monitoring, and quick iteration shows true ownership and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
