---
qid: ing_99ab90101d__aws__local
question: 'Q: How would you estimate GPU requirements for serving a model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 425
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:10-05:00'
sources: []
---

**Situation** – At my previous role I led a team that rolled out an image‑classification model to 5 M daily users. We needed to size GPU instances for low latency while keeping spend under budget.

**Task** – Estimate GPU capacity, design the serving architecture, and validate against real traffic.

**Action**  
1. **Profiling** – Ran the inference graph on a single p3.2xlarge; 1 GPU handled ~4 k requests/sec with <50 ms latency.  
2. **Demand model** – Built a Poisson arrival curve from production logs (peak 30 k RPS).  
3. **Sizing rule** – `Required GPUs = ceil( Peak_RPS / RequestsPerGPU )`. With 4 k RPS per GPU → 8 GPUs for peak, add 20 % safety margin → **10 p3.2xlarge**.  
4. **Architecture** – Use **Amazon SageMaker Endpoint (Multi‑Model)** behind an **Application Load Balancer**; autoscaling on CPU usage to spin up new containers when GPU saturation >70 %.  
5. **Cost & trade‑offs** – Spot instances + Savings Plans cut hourly cost by 35 % vs on‑demand, while maintaining 99.9 % availability via multi‑AZ deployment.

**Result** – After launch, latency stayed <45 ms at peak, and we achieved a 15 % reduction in inference cost compared to the baseline plan. The model’s accuracy remained unchanged, proving our sizing was both reliable and efficient.  

*Leadership Principles:* **Ownership** (took end‑to‑end responsibility), **Dive Deep** (profiling & metrics), **Bias for Action** (quick validation loop).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
