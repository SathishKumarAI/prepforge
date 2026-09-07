---
qid: ing_89450b7c56__faang__local
question: When do you need approximate nearest neighbour search instead of exact search?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:44-05:00'
sources: []
---

**Clarify**  
We’re comparing *exact* k‑NN (search all points) versus *approximate* NNS (use indexing structures). The key question is: when does the trade‑off between speed and accuracy become worthwhile? Clarifying assumptions: data dimensionality, query volume, latency budget, tolerance for missed neighbors, and downstream impact of errors.

**Approach**  
1. Measure cost of exact search (O(n) per query).  
2. Estimate speedup of an approximate index (e.g., LSH, HNSW).  
3. Quantify error: recall@k or distance ratio.  
4. Decide if the application can tolerate lower recall.

**Depth**  
- **High dimensionality (>50–100)**: Curse of dimensionality makes exact search prohibitively slow; indexes become ineffective, so we use approximate methods that prune space via locality‑sensitive hashing or graph traversal.  
- **Real‑time or large‑scale workloads**: If query latency must be < 10 ms and millions of queries per second, even a small recall loss (e.g., 95%) is acceptable; exact search would exceed budgets.  
- **Retrieval systems, recommendation engines, nearest‑neighbor similarity search in embeddings** often accept slight inaccuracies because downstream models can correct them.  
- **When correctness is critical** (e.g., medical diagnostics), we still use approximate indexes for candidate generation but verify candidates with an exact pass.

**Edge cases**  
- Sparse or low‑dimensional data: exact search may be fine.  
- Extremely small datasets: overhead of building an index outweighs benefit.  
- Highly dynamic data requiring frequent updates: some indices (like IVF) struggle, so we fall back to approximate or hybrid strategies.

**Optimize & communicate**  
Explain the trade‑off curve: as dimensionality ↑ or query volume ↑, latency savings from approximation increase while recall degrades smoothly. Show empirical plots of recall vs. query time for a few candidate indices. Emphasize that choosing “approximate” is not a binary decision but a continuous tuning problem based on business constraints and system resources. This structured reasoning demonstrates clear communication, depth in technical detail, and awareness of edge cases—qualities interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
