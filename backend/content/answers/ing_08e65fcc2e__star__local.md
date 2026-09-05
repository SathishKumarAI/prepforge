---
qid: ing_08e65fcc2e__star__local
question: How much data should you look at? — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 380
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:50-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a fraud‑detection model for an online marketplace that processed ~5 M transactions per month. The internal analytics team had already collected a year’s worth of labeled incidents, but the product owner insisted we needed more data to hit a 99 % precision target before going live.

**Task** – I had to determine how much historical data was actually useful for training without inflating costs or diluting model relevance, and present a clear data‑budget plan to stakeholders.

**Action** – First, I performed an incremental learning experiment: I trained the same XGBoost pipeline on 3 M, 4 M, and 5 M transaction samples, tracking AUC, precision@k, and inference latency. I plotted learning curves and identified a point of diminishing returns at ~4.2 M transactions—precision plateaued at 98.7 % while latency increased by only 0.3 ms per 100k added. I also segmented the data by seasonality; older quarters contributed negligible new patterns, so we pruned them. I then built a cost‑benefit model that showed a $12K/month savings in storage and compute for cutting from 5 M to 4.2 M samples.

**Result** – The product launched with 4.2 M transactions trained, achieving 98.9 % precision in production, a 15 % reduction in false positives, and saved $18K annually on cloud resources. I learned that data quality and recency trump sheer volume, and that systematic experimentation can guide efficient data budgeting for AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
