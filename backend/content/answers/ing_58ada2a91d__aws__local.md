---
qid: ing_58ada2a91d__aws__local
question: 'Explain: Practical Decision Framework — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 453
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:46:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
In my last role I led a recommendation engine for an e‑commerce platform that had to serve 5 M daily users with <200 ms latency. The architecture was monolithic and couldn’t handle traffic spikes, so we needed a practical decision framework for scaling the ML inference service.

**Action (Dive Deep / Bias for Action)**  
I evaluated *vertical* vs *horizontal* scaling by running a benchmark on our model (≈300 k requests/min).  
- **Vertical:** Upgrading to an EC2 m6i.12xlarge (48 vCPU, 192 GiB RAM) raised throughput to 180 k req/min but cost $3.6k/month and still hit CPU saturation during flash sales.  
- **Horizontal:** Containerizing the model with Docker, deploying on Amazon ECS with Fargate Spot and Auto Scaling, achieved 350 k req/min at $2.1k/month, while keeping latency <150 ms.

I added an AWS Lambda “warm‑up” layer for cold starts and used Amazon CloudWatch to auto‑scale based on RPS thresholds. The decision was driven by the *cost‑performance* ratio: horizontal scaling reduced cost by 42% while doubling throughput.

**Result (Deliver Results)**  
Post‑migration, we handled a 4× traffic surge during a holiday sale without any downtime, and latency dropped from 280 ms to 120 ms. Revenue increased 12% in the first month, directly attributable to higher conversion rates on faster recommendations.

**Bar‑raiser takeaways**  
- Showed **ownership** by re‑architecting end‑to‑end.  
- Demonstrated **dive deep** with quantitative benchmarks and cost modeling.  
- Highlighted **quantified impact** (12% revenue lift).  
- Learned from failure: vertical scaling hit a hard ceiling, prompting the shift to horizontal—an iterative lesson we documented for future infra teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
