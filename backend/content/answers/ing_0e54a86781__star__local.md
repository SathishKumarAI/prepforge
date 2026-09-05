---
qid: ing_0e54a86781__star__local
question: 'Q8: What is reranking and when would you skip it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:18-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving the relevance of search results for a large e‑commerce platform that served over 5 M daily queries. Our baseline BM25 ranking was pulling up to 15 % irrelevant products, hurting conversion.

**Task:**  
I had to design an end‑to‑end pipeline that could re‑rank the top‑10 candidates with an AI model, but without adding unacceptable latency or cost.

**Action:**  
First, I profiled the current system: a single GPU inference server was handling 300 k queries per minute, each query costing ~$0.0005 in compute. I built a lightweight transformer (DistilBERT fine‑tuned on click logs) that ran in <10 ms per request. To keep costs down, I implemented an adaptive trigger: only if the BM25 score gap between rank 1 and 2 was below 0.05 would we invoke re‑ranking; otherwise we skipped it. This conditional bypass cut GPU usage by ~40 %. I also added a caching layer for frequent queries, reducing redundant inference.

**Result:**  
After deployment, click‑through rate increased from 3.8 % to 4.5 % (≈18 % lift), and conversion rose 12 %. The adaptive skip logic kept latency under 50 ms on average and reduced compute spend by $1.2M annually. I learned that re‑ranking is powerful but only worth the cost when the baseline model shows uncertainty; otherwise, a smart gating strategy yields better ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
