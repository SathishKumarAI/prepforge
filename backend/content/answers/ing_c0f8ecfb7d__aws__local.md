---
qid: ing_c0f8ecfb7d__aws__local
question: 'Explain: Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 398
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:01-05:00'
sources: []
---

**Situation / Task**  
I was tasked with improving the retention rate of our e‑learning platform’s vocabulary module, which dropped 23 % after a 6‑month study. The goal was to design an adaptive learning loop that could be rolled out globally within three months.

**Action**  
Using **Customer Obsession** and **Dive Deep**, I mapped user interaction logs (≈10M daily events) to build a spaced‑repetition scheduler powered by the **SageMaker Pipelines** + **Amazon DynamoDB**. The algorithm assigns each word an *expiry timestamp* calculated from Bayesian decay:  

```
next_interval = current_interval × (1 – retention_rate)
retention_rate  ∝ (score / max_score) ^ 0.8
```

I deployed the model as a **Lambda edge function** that updates intervals in real time, ensuring sub‑200 ms latency for millions of concurrent users. To guarantee **Availability**, I replicated DynamoDB tables across three AZs and enabled global tables with eventual consistency. Cost was kept below $2k/month by using on-demand Lambda and auto‑scaling API Gateway.

**Result**  
Within 8 weeks post‑launch, the retention rate rose from 77 % to **92 %**, a 15 pp lift, translating into a projected 18 % increase in course completion and a $1.2M uplift in subscription revenue over the next fiscal year.  

**Learning** – The initial model over‑estimated decay for low‑confidence words; by iteratively retraining on live data (every 24 hrs) I reduced prediction error from 12 % to <4 %. This demonstrates true **Ownership** and a bias for action that continuously refines customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
