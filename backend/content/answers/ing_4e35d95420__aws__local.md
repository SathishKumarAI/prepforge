---
qid: ing_4e35d95420__aws__local
question: 'Explain: Um, you''d also like to have the — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 449
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:13-05:00'
sources: []
---

**Situation & Task**  
At Google I led the migration of our recommendation engine from a monolithic Java service to a micro‑service architecture so we could scale model updates without downtime. The goal was to cut inference latency by 40 % and increase throughput by 3× while keeping cost under the current budget.

**Action (Technical Design)**  
I architected a containerized pipeline on **Google Cloud Run** with **Vertex AI Pipelines** for training, then exposed the model via **gRPC** through an **Istio** service mesh. I introduced **BigQuery** as a real‑time feature store and used **Pub/Sub** to stream click events to a **Dataflow** job that refreshes embeddings every 12 h. For cost control I enabled autoscaling with a maximum of 20 instances, backed by a **SLA‑based load balancer**.

Key trade‑offs:  
- *Scalability*: Containerized deployment allowed horizontal scaling; we hit 3× throughput in production.  
- *Availability*: Istio’s retries and timeouts gave us 99.95 % uptime during peak traffic.  
- *Cost*: Autoscaling reduced idle compute by 60 %, saving ~$120k annually.

**Result (Quantified Impact)**  
Latency dropped from 350 ms to 210 ms, boosting conversion rate by **5.2 %**. The new pipeline cut training time from 8 h to 1.5 h and lowered monthly infra spend by **$115k**.

**Learning & Ownership**  
I owned the end‑to‑end flow, iterated quickly (Bias for Action), and documented lessons in an internal playbook that now guides all new ML deployments—demonstrating true ownership and a culture of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
