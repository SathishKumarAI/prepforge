---
qid: ing_e10fc6590d__aws__local
question: 'Explain: it''s going to work under at scale — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 369
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:48:20-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to prove a recommendation engine would run reliably at Netflix’s peak traffic (≈ 300 M daily users). The goal was to show the system could “master chaos” while keeping latency < 200 ms.

**Action**  
1. **Microservice decomposition** – split the model inference into three services: *Feature‑Extractor*, *Scoring* and *Response‑Assembler*. Each runs on EC2 Spot fleets with Auto Scaling groups that scale by 5× during traffic spikes.  
2. **Chaos engineering** – integrated Chaos Monkey to randomly terminate instances; added a circuit breaker in the Scoring service (AWS API Gateway + Lambda).  
3. **Observability** – used CloudWatch metrics, X-Ray traces and Prometheus for real‑time dashboards. Set up alerts on 99.9 % request latency.  
4. **Cost & availability trade‑off** – chose Spot + On‑Demand mix to keep cost < $0.02 per inference while maintaining 99.95 % uptime.

**Result**  
During a production chaos test, the system handled 1.2× traffic without degradation; mean latency stayed at 145 ms and error rate < 0.05 %. Post‑deployment, we saw a 12 % lift in engagement, translating to $4 M incremental revenue per quarter.

**Reflection (Bar‑raiser notes)**  
I owned the entire pipeline, dove deep into failure modes, quantified impact with real metrics, and iterated quickly after each chaos run. This demonstrates ownership, bias for action, and a data‑driven mindset—key Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
