---
qid: ing_420a4d372d__think__local
question: 'Explain: Recall vs Latency Tradeoff — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 452
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:00:48-05:00'
sources: []
---

**1. Clarify the problem & assumptions**  
Ask whether “recall” refers to *retrieval recall* (how many relevant items are found) or *system‑level recall* (overall success). Assume we’re comparing two vector DB designs: one that pre‑computes dense indexes for speed, another that uses exact search with higher latency. Also assume the same dataset and query distribution.

**2. Mental model / framework**  
Treat it as a classic **accuracy–latency tradeoff** in information retrieval. Think of recall as “coverage” versus latency as “response time.” Use the *precision‑recall curve* idea, but here we plot *recall vs latency* for different index strategies.

**3. Step‑by‑step reasoning**  
- Identify how each design achieves recall: approximate nearest neighbor (ANN) gives quick results but may miss some true neighbors; exact k‑NN guarantees full recall at the cost of scanning all vectors.  
- Quantify latency: ANN often uses product quantization or HNSW layers, leading to sub‑millisecond queries; exact search scales linearly with dataset size.  
- Relate the two: as we tighten ANN parameters (e.g., increase M in HNSW), recall rises but query time grows. Plotting this shows a curve that flattens at high recall values.

**4. Common traps to avoid**  
Don’t conflate *recall* with *precision*. Don’t ignore the effect of dimensionality or dataset sparsity on both metrics. Avoid assuming linear trade‑off; many ANN algorithms exhibit diminishing returns.

**5. Sanity‑check & verbalize**  
Check extremes: at 100 % recall we must fall back to exact search, confirming latency blows up. At minimal latency (e.g., 1 ms) recall will be low—verify with benchmarks. Communicate by saying: “Increasing recall from 80 % to 95 % costs an extra few milliseconds per query, but beyond 90 % the latency penalty grows sharply.” This keeps the explanation concrete and actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
