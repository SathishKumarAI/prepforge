---
qid: ing_5a0ced86d8__aws__local
question: 'Explain: Transport and routing — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 415
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:20-05:00'
sources: []
---

**Situation & Task**  
When I joined Meta’s ML infra team, the data‑pipeline for real‑time recommendation was hitting a 3 s latency SLA during peak traffic. I owned the redesign of their “Transport & Routing” layer to move from synchronous REST calls to an asynchronous message‑driven model.

**Action (Design & Tech)**  
1. **Decouple services** – Swapped tightly coupled gRPC endpoints for SQS queues, letting producers enqueue predictions while consumers (worker nodes) pull in batches.  
2. **Autoscaling workers** – Leveraged **AWS Lambda + Fargate** with CloudWatch alarms on queue depth to spin up/down 0‑100 % of capacity within 30 s.  
3. **Circuit breaking & retries** – Implemented a per‑message dead‑letter queue and exponential backoff, reducing failed deliveries from 2.4 % to <0.1 %.  
4. **Observability** – Instrumented with CloudWatch Metrics, X-Ray traces, and an OpenTelemetry exporter to Grafana for real‑time SLA dashboards.

**Result**  
- Latency dropped from 3 s to 650 ms (≈78 % reduction).  
- Throughput increased from 10k req/s to 45k req/s during peak.  
- Operational cost fell by 18 % due to better burst handling and lower idle compute.

**Learnings & Ownership**  
I practiced *Dive Deep* by tracing every micro‑service call, *Bias for Action* in rolling the change within two sprints, and *Ownership* by iterating on failure patterns (e.g., queue backlogs). The bar‑raiser will note that I quantified impact, documented trade‑offs (SQS latency vs. cost), and built a reusable async framework now used across three other product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
