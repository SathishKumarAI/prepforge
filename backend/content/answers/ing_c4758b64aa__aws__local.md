---
qid: ing_c4758b64aa__aws__local
question: 'Explain: Self-Hosting Options — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 563
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:11-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build an on‑premises LLM platform for a regulated financial client that could not use public cloud models due to data residency laws. The goal was to deliver a production‑ready inference stack within 6 months while keeping total cost ≤ $2 M and latency < 200 ms per request.

**Action (Technical)**  
* **Requirements** – 10 GB context window, 99.9% uptime, GDPR‑compliant data storage.  
* **Design** – On‑prem GPU cluster (NVIDIA A100), Kubernetes on AWS Outposts for hybrid control, TensorRT + ONNX Runtime for inference optimization.  
* **Services & Trade‑offs**  
  * **AWS Outposts**: brings EC2/EBS to the data center, enabling consistent IaC and policy enforcement; cost ≈ $0.15/hr per A100 vs $0.35 on‑prem GPU racks.  
  * **EFS on Outposts** for shared model weights (low latency, high throughput).  
  * **S3 compatible storage** via MinIO for backups—ensures eventual consistency and durability without cross‑border transfer.  
  * **Auto‑Scaling**: Horizontal pod autoscaler triggered by CPU/GPU usage; cost saved 30 % during low traffic windows.  
* **Security** – VPC endpoints, IAM roles per service, audit logging with CloudTrail on Outposts.

**Result**  
Delivered the platform 2 weeks early, under budget ($1.8 M), and achieved < 180 ms inference latency for 95 % of requests. The client’s compliance score rose from 72/100 to 98/100, enabling a new AI‑driven advisory product that generated $4 M in incremental revenue within the first quarter.

**Reflection (Leadership Principles)**  
* **Ownership & Deliver Results** – I drove the entire stack from architecture to deployment.  
* **Dive Deep** – Conducted micro‑benchmarking of TensorRT kernels, discovered a 12 % latency drop by tweaking batch size.  
* **Customer Obsession** – Built a monitoring dashboard that let the client see real‑time SLA adherence.  

Bar‑raisers would note my clear data‑driven impact, deep technical trade‑off analysis, and post‑mortem learning (we later added a warm‑start cache to reduce cold‑start cost by 18 %).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
