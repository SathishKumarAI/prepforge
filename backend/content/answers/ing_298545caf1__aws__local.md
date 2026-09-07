---
qid: ing_298545caf1__aws__local
question: 'Explain: Containers and Docker — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 449
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:35-05:00'
sources: []
---

**Situation & Task (Leadership: Ownership, Customer Obsession)**  
I was tasked with migrating a legacy ML inference pipeline from on‑prem servers to a fully managed AWS stack so that we could serve 10× the traffic while cutting infra costs by 30 %. The customers demanded sub‑500 ms latency for real‑time predictions.

**Action (Technical Design & AWS Services)**  
1. **Containerization** – I Dockerized the inference code, added `ENTRYPOINT` to run a lightweight FastAPI server, and exposed `/predict`.  
2. **Orchestration** – Deployed on **Amazon ECS Fargate** with *Task Definitions* that specify CPU/memory per container (4 vCPU, 8 GiB).  
3. **Scalability & Availability** – Integrated **Application Load Balancer** (ALB) to distribute traffic across multiple Fargate tasks; used *Service Auto Scaling* based on CloudWatch metrics (`RequestCount`, `Latency`).  
4. **Model Management** – Stored serialized models in **Amazon S3** with versioning; containers pull the latest model at start‑up via a small bootstrap script.  
5. **Observability & Cost Control** – Employed **AWS X-Ray** for request tracing, CloudWatch Logs for metrics, and reserved *Savings Plans* for Fargate to hit the 30 % cost reduction target.

**Result (Deliver Results)**  
- Latency dropped from 850 ms to 320 ms (38 % improvement).  
- Throughput scaled from 1k RPS to 12k RPS without downtime.  
- Infra spend fell by $48K annually, meeting the 30 % cost goal.

**Bar‑raiser Takeaway**  
Showed *ownership* of end‑to‑end migration, *dive deep* into container ops and scaling metrics, quantified impact with real numbers, and iterated on failure modes (e.g., cold start mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
