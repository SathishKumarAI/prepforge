---
qid: ing_f248a6e3e0__faang__local
question: 'Explain: How do you think about cost for an LLM feature? Estimate one for
  me.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 432
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:50-05:00'
sources: []
---

**Clarify**  
You’re asking how to estimate the operational cost of adding a new language‑model (LLM) feature—say “real‑time summarization” on our platform. I’ll assume: 1) we host the model in a cloud region with spot instances, 2) user volume is 10 k requests/day, and 3) each request processes ~5 k tokens.

**Approach**  
1. **Compute budget** – GPU hours per token → cost per request.  
2. **Storage & networking** – model weights + data transfer.  
3. **Support services** – monitoring, logging, autoscaling.  
4. **Contingency** – 10 % buffer for peak traffic.

**Depth**  
- *Compute*: A V100 costs ~$0.90/hr. One inference of 5 k tokens takes ~1 s → 3.6 h/day ≈ $3.24.  
- *Storage*: 30 GB model on SSD = $2/month.  
- *Networking*: 10 k requests × 1 MB payload = 10 TB/mo ≈ $800 (if using egress).  
- *Monitoring*: Prometheus/Grafana + alerting ≈ $50/month.  
Total ~**$1,000–$1,200/month** for the feature at current scale.

**Edge Cases**  
- Traffic spikes (e.g., 10×) → need more GPU capacity or model distillation.  
- Model updates increase weight size → higher storage and transfer costs.  
- Regulatory constraints could add compliance overhead.

**Optimize & Communicate**  
We can reduce compute by using a distilled LLM or batching requests; move to a cheaper region; or use on‑prem GPUs if volume grows. I’d present this estimate in a slide deck, showing cost drivers and a sensitivity table for traffic growth, so stakeholders see the trade‑offs clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
