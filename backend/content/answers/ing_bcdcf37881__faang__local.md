---
qid: ing_bcdcf37881__faang__local
question: 'Explain: Exact vs Approximate Search — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 406
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:54-05:00'
sources: []
---

**Exact vs Approximate Search in Vector Databases**

| | **Exact Search** | **Approximate Search (ANN)** |
|---|------------------|-----------------------------|
| Definition | Retrieves the true nearest neighbors by exhaustive distance computation. | Retrieves a *good enough* subset of neighbors using indexing tricks that skip many comparisons. |
| Complexity | \(O(N \cdot D)\) per query (where \(N\)=#vectors, \(D\)=dim). | Sub‑linear in practice: \(O(\log N)\) or even constant with product quantization/LSH. |
| Accuracy | 100 % recall; no false negatives. | Recall < 1 but typically > 0.9 for high‑quality indexes. |
| Latency | High for large \(N\); unsuitable for real‑time. | Low latency (ms) even at billions of vectors. |
| Memory | Requires full dataset in RAM/SSD. | Stores compressed indices (hash tables, trees), often 10–50× smaller. |
| Use‑cases | Offline analytics, exact similarity tasks, small datasets. | Real‑time recommendation, search, anomaly detection where speed outweighs perfect recall. |

**When to pick which?**

1. **Precision‑critical workloads** (e.g., legal document retrieval) → Exact.  
2. **Latency‑constrained services** (e.g., e‑commerce product search) → ANN with tuned recall.  

**Trade‑offs**: Approximate methods trade a few missed neighbors for orders of magnitude speed and storage savings; the “approximation budget” can be tuned via hyperparameters (number of trees, hash bits). Exact search guarantees but becomes infeasible beyond millions of high‑dimensional vectors.

*Bottom line*: Vector databases expose both modes; choose based on acceptable recall vs. performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
