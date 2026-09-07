---
qid: ing_3a3f80e9a6__aws__local
question: 'Explain: HTTP/2 — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:05-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign our public-facing recommendation engine’s API layer to reduce latency and increase throughput while keeping the cost under $30k/month. The existing HTTP/1.1 stack hit a 200 ms average response time, and traffic spiked 4× during holiday sales.

**Action (Design)**  
* **Protocol upgrade:** Switched from HTTP/1.1 to **HTTP/2** on our Application Load Balancer (ALB) and API Gateway. HTTP/2’s multiplexing cuts round‑trips by ~70 %.  
* **Edge caching:** Deployed **Amazon CloudFront** with Lambda@Edge to offload TLS termination and cache static recommendation payloads, reducing origin load by 60 %.  
* **Compute scaling:** Moved the inference microservice from EC2 to **AWS Fargate** (ECS), enabling task autoscaling based on CPU/Memory thresholds; this keeps latency <120 ms even at peak.  
* **Observability:** Instrumented with CloudWatch metrics and X‑Ray traces, feeding a Grafana dashboard that alerts on 5xx spikes.

**Result**  
Post‑migration, average API latency dropped from **200 ms to 55 ms** (≈70 % improvement). Throughput increased by **3.2×**, supporting the holiday surge without any service disruptions. Monthly cost fell to **$22k**, a **27 % savings** versus the prior architecture.

**Leadership Principles Highlighted**  
* **Customer Obsession:** Delivered faster, more reliable recommendations that improved user satisfaction (NPS +15).  
* **Ownership & Dive Deep:** Took end‑to‑end responsibility for protocol choice, caching strategy, and cost analysis; continuously iterated based on real metrics.  

**Bar‑raiser takeaway** – Showed ownership by owning the full stack change, deep dive into HTTP/2 benefits, quantified impact (latency, throughput, cost), and learned from a pilot failure that led to fine‑tuning CloudFront cache invalidation rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
