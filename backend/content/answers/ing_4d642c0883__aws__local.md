---
qid: ing_4d642c0883__aws__local
question: 'Explain: Remote Procedure Call — RabbitMQ: One broker to queue them all
  | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 480
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:01-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was tasked with redesigning a legacy micro‑service that used HTTP REST calls for ML inference across 12 teams. The latency hit customer‑facing features by ~250 ms and the ops team spent >3 hrs troubleshooting flaky connections.

**Action (Dive Deep & Bias for Action)**  
1. **Requirement Clarification** – Inference requests were *fire‑and‑forget*: each call needed to be queued, processed by an isolated ML worker, and the response written back to a callback URL.  
2. **Design** – Adopted **RabbitMQ** as a single broker per region with **topic exchanges**:  
   - `ml.infer.<model>` routing keys for 12 models.  
   - Each consumer (Docker‑K8s pod) subscribed to its own queue, enabling auto‑scaling via Kubernetes HPA on queue depth.  
3. **AWS Services** –  
   - **Amazon EKS** for orchestrating containers.  
   - **Elastic Load Balancer** fronting the HTTP API that publishes to RabbitMQ.  
   - **Amazon SQS + Lambda** as a fallback for high‑volume bursts (cost‑effective burst buffering).  
4. **Scalability & Availability** – RabbitMQ clusters on 3 AZs, mirrored queues; consumer groups handle failover.  
5. **Cost Trade‑offs** – Single broker reduces overhead vs per‑service brokers; however we added a small SQS buffer to absorb spikes, keeping cost < $200/month.

**Result (Deliver Results)**  
- End‑to‑end latency dropped from 250 ms to 60 ms (90 % reduction).  
- Throughput increased by 4× without additional servers.  
- Ops tickets for connection errors fell 85 %.  
- Cost stayed under budget while scaling to 1,000 requests/sec.

**Learning & Bar‑raiser Insight**  
I documented the failure modes of the old REST approach and created a lightweight monitoring dashboard (Prometheus + Grafana). The bar‑raiser will notice my ownership in turning a chaotic system into a predictable, customer‑centric service with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
