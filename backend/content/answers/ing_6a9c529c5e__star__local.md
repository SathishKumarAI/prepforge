---
qid: ing_6a9c529c5e__star__local
question: 'Explain: Reciprocal Rank Fusion (RRF) for Combining Results'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 313
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:48-05:00'
sources: []
---

**Situation:**  
During a research‑grade project on cross‑domain search, I was tasked with improving the recall of an academic literature retrieval system that pulled results from three heterogeneous engines: Google Scholar, Semantic Scholar, and arXiv.

**Task:**  
I had to merge their top‑50 ranked lists into a single list that maximized overall precision at rank 10 while keeping latency under 200 ms per query.

**Action:**  
I implemented Reciprocal Rank Fusion (RRF). For each document I summed the scores \( \frac{1}{k + r_{i}} \) where \(r_i\) is its rank in engine \(i\) and \(k=60\) to dampen high ranks. I wrote a lightweight C++ module that streamed each list, updated a hash map of cumulative RRF scores, and then sorted the keys. To stay under latency limits, I limited processing to the top‑30 items per engine and used a priority queue for final sorting.

**Result:**  
The fused list raised precision@10 from 0.42 to 0.57 (a 35 % lift) and recall@50 from 0.68 to 0.74. The latency stayed at ~180 ms. I learned that simple rank‑based fusion can outperform complex learning‑to‑rank models when data sources are heterogeneous and response time is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
