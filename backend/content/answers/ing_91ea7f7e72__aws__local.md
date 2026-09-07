---
qid: ing_91ea7f7e72__aws__local
question: How would you serve a large mixture-of-experts model on a statically scheduled
  fabric when expert selection is data-dependent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 541
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:59-05:00'
sources: []
---

**Situation** – In my last role at a media‑tech startup we built a *Mixture‑of‑Experts* (MoE) model for real‑time ad‑ranking. The fabric was statically scheduled on an on‑prem cluster, but the expert selector needed to be data‑driven: each request could jump to any of 12 experts depending on user context.

**Task** – Deliver a low‑latency, highly available inference service that respects the static schedule yet adapts dynamically to input data, while keeping costs under $0.03 per inference.

**Action** –  
1. **Decouple expert selection from execution**: exposed an API Gateway + Lambda entry point that parses request metadata and looks up a *routing table* stored in DynamoDB (keyed by user segment). The Lambda returns the ID of the target container.  
2. **Containerized experts on ECS Fargate**: each expert runs in its own task definition; static scheduling is achieved via placement constraints tied to specific instance types, while the Lambda simply forwards the request to the chosen task’s ALB endpoint.  
3. **Observability & autoscaling**: CloudWatch metrics (request latency, error rate) drive a custom target tracking policy that scales experts up/down in 5‑minute intervals.  
4. **Cost & resilience trade‑offs** – Fargate spot pricing reduced GPU costs by 40 %; we kept one standby replica per expert for failover, yielding <0.1 % outage probability.

**Result** – Latency dropped from 450 ms to 210 ms (50 % improvement), throughput rose to 12 k req/s, and cost per inference fell to $0.018—meeting the target while scaling linearly with traffic. The design also reduced our ops overhead by 70 %, freeing engineers for new features.

> **Bar‑raiser notes**: ownership of both data‑driven routing and infrastructure; deep dive into Lambda–ECS interactions; quantified impact on latency & cost; learned from initial monolithic deployment that caused hot‑spoting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
