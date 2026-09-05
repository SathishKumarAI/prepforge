---
qid: ing_782b327d3f__star__local
question: 'Explain: Um it''s not necessarily the best tool — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 350
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:34:24-05:00'
sources: []
---

**Situation:**  
At Google I led a project to improve the recommendation engine for YouTube Shorts. The initial design used a complex deep‑learning model that had been successful on other platforms but required heavy GPU clusters and introduced a 2‑second latency spike during peak traffic.

**Task:**  
I needed to deliver a production‑ready system that maintained recommendation quality while keeping inference latency under 500 ms for all users, without inflating infrastructure costs.

**Action:**  
First, I benchmarked the deep model against simpler tree‑based and rule‑based alternatives. I ran A/B tests with a live cohort of 1 M viewers, measuring click‑through rate (CTR) and latency. The deep model’s CTR improved by only 0.4% but increased latency by 1500 ms. Switching to a gradient‑boosted decision tree reduced latency to 300 ms and dropped CTR by just 0.2%. I then added a lightweight feature‑selection layer that pruned irrelevant features, further cutting inference time. Finally, I migrated the model to TensorRT for GPU optimization but kept the tree model as the primary path.

**Result:**  
The new system cut latency from 2000 ms to 300 ms, meeting the SLA and keeping CTR within 1% of the original deep‑learning baseline. Costs fell by 35%, and I learned that choosing the simplest model that meets business KPIs can deliver better overall value than chasing algorithmic complexity alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
