---
qid: ing_482d7ccd40__aws__local
question: 'Explain: Request Volume — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 475
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:42-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a load‑balancing layer for a new recommendation service that would receive ~4 M requests/day (≈46 req/s) and scale to peak 120 req/s during promotions. The goal: keep latency <200 ms, 99.9% availability, and stay under $1k/month.

**Action – Technical Design**  
* **Service Discovery & Scaling:** Deployed an **ALB** (Application Load Balancer) in front of a fleet of **EC2 Auto‑Scaling Groups** running the inference container.  
* **Caching Layer:** Added **Elasticache‑Redis** for hot item embeddings, cutting downstream compute by 70 %.  
* **Health Checks & Warming:** Configured ALB health checks and pre‑warmed EC2 instances via a scheduled **AWS Lambda** to avoid cold starts.  
* **Observability:** Integrated **CloudWatch Metrics**, **X‑Ray tracing**, and a **Grafana** dashboard; set alerts for 5 s latency spikes.

**Result**  
During a 3‑day promotion we hit 120 req/s, yet the system sustained <190 ms latency (99.8% percentile) and no downtime. The Auto‑Scaling policy kept only 4–6 instances running on average, keeping monthly spend at **$860**, well below target.

**Leadership Principles & Bar‑raiser Signals**  
* **Ownership:** I owned end‑to‑end performance and cost, iterating the cache strategy after a spike test failure.  
* **Dive Deep:** Tracked per‑node latency traces to pinpoint a 30 ms bottleneck in the model inference code, which was refactored.  
* **Customer Obsession & Deliver Results:** The final system delivered reliable recommendations that drove a 12% lift in conversion during promotions.  

**Learning from Failure** – An initial “no‑cache” prototype crashed at 80 req/s; I documented the failure, updated the design doc, and re‑validated with automated smoke tests before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
