---
qid: ing_d71be77238__star__local
question: 'Q: How would you design infrastructure for 1M LLM queries per day?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 380
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:58-05:00'
sources: []
---

**Situation:**  
When my team launched a chatbot service at a fintech startup, we projected 1 million large‑language‑model (LLM) queries daily within six months. The existing on‑prem GPU cluster could only handle ~50k requests per day, and latency was above 3 seconds—unacceptable for real‑time user interactions.

**Task:**  
Design a scalable, cost‑effective infrastructure that supports 1 million LLM queries per day with sub‑200 ms average latency, while keeping operational costs below $30 K/month.

**Action:**  
I architected a hybrid cloud solution on AWS. First, I containerized the model using NVIDIA Triton Inference Server and deployed it in an EKS cluster with spot GPU nodes (p4d.2xlarge) for low‑cost inference. To handle peak load, I added an autoscaling group that scales up to 200 nodes based on CPU utilization and request queue depth. For caching, I introduced a Redis cluster to store frequently used embeddings and prompt templates, reducing redundant model calls by ~35%. I also implemented a message‑queue layer (Amazon SQS) to buffer bursts and a Lambda function that triggers batch inference when the queue exceeds 5 k messages, optimizing GPU usage. Finally, I set up CloudWatch metrics and Prometheus dashboards for real‑time monitoring.

**Result:**  
Within three months we achieved 1.2 million queries/day with an average latency of 180 ms. The hybrid approach cut infrastructure spend to $28 K/month, a 15% savings over the all‑on‑prem plan. I learned that combining spot GPUs with intelligent caching and queue‑based scaling can meet massive LLM workloads while keeping costs predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
