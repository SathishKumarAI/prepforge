---
qid: ing_6c24138239__star__local
question: 'Explain: Performance Comparison — Financial Analysis'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 370
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:24-05:00'
sources: []
---

**Situation:**  
At my last role I was asked to evaluate two recommendation‑engine models that our marketing team had been running for the past quarter. The company’s finance department wanted a clear cost‑benefit analysis before we could commit to a production rollout.

**Task:**  
I needed to compare each model’s computational performance and revenue impact, quantify the trade‑off between inference latency and click‑through rate (CTR), and present a recommendation backed by data.

**Action:**  
First, I extracted GPU utilization, memory usage, and batch‑processing throughput from our Kubernetes logs. Using these metrics I calculated per‑second inference cost in dollars, factoring in cloud spot‑price fluctuations. Next, I ran a controlled A/B test: each model served 10 % of traffic for two weeks while we logged conversions. I built a statistical script (Python + SciPy) to compute lift and confidence intervals, then multiplied lift by average order value to estimate incremental revenue. Finally, I plotted a Pareto curve (latency vs. revenue lift) in Tableau so stakeholders could see the diminishing returns beyond 15 ms latency.

**Result:**  
The lightweight model ran at 12 ms per inference, costing $0.0008 each, while the heavy model cost $0.0016 but delivered only a 3 % CTR increase over baseline—an incremental revenue of ~$5k/month versus ~$14k/month for the light model. I recommended deploying the lighter model, saving ~30 % on compute costs and still achieving a higher ROI. This exercise taught me to tie raw performance metrics directly to business KPIs so engineering decisions are financially transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
