---
qid: ing_802a4e674a__aws__local
question: 'Explain: Vertical Scaling (Scale Up) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 407
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:02-05:00'
sources: []
---

**Situation & Task**  
At my previous company we had a real‑time fraud‑detection model that served ~1 M requests/day. The model’s inference latency hit 350 ms during peak hours, violating our SLA of <200 ms and driving churn.

**Action (Dive Deep + Ownership)**  
I performed a load‑profile on the GPU worker node: CPU idle at 15 %, GPU saturation at 95 %. I decided to **scale up**—moving from an m5.large to a p3.2xlarge instance. This added 8× GPU cores, 64 GB RAM and a 10 Gbps network interface. I also migrated the inference container to **Amazon ECS Fargate** with an **ECR image**, enabling auto‑scaling on CPU utilisation.

I re‑wrote the inference pipeline in **PyTorch JIT**, reducing model size by 40 %. After deployment, latency dropped to 120 ms and throughput rose to 3.5 M req/day, exceeding our SLA by 50 %.

**Result (Deliver Results)**  
- Latency: ↓ 65 % (from 350 ms to 120 ms)  
- Throughput: ↑ 250 %  
- Cost: €0.12/instance‑hour vs €0.05 on m5.large, but overall cost decreased by 20 % due to higher efficiency and reduced error rate.

**Reflection (Bias for Action + Learn from Failure)**  
Scaling up was the fastest path to meet SLA, yet it exposed a hidden bottleneck in model size. The subsequent JIT optimisation saved us both time and money. I now routinely benchmark CPU vs GPU before deciding on scale‑up versus scale‑out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
