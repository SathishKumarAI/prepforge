---
qid: ing_8934e4fdd4__faang__local
question: Design a retrieval evaluation harness the team will actually use. What runs,
  when, and what blocks a merge?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 513
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:35-05:00'
sources: []
---

**Clarify**  
We need an *evaluation harness* that the data‑science/ML ops team can run automatically on each new retrieval model release.  
- **Assumptions to confirm**: (1) Evaluation is based on a fixed public test set with relevance judgements; (2) The team wants precision@k, recall@k, MAP, NDCG, and latency metrics; (3) A merge should be blocked if any metric falls below the previous baseline or violates SLA thresholds.

**Approach**  
1. **Pipeline definition** – a CI/CD job that triggers on every PR.  
2. **Data staging** – copy the test set to a secure bucket, load into an in‑memory vector store.  
3. **Inference run** – execute the new retrieval model for all queries, collect top‑k hits and latency per query.  
4. **Metric computation** – compute relevance metrics against ground truth; aggregate latency statistics.  
5. **Threshold check** – compare each metric to a stored “golden” baseline and to hard SLA limits.  
6. **Reporting & merge gate** – generate a concise HTML/JSON report; if any rule fails, the CI job exits non‑zero and blocks the PR.

**Depth**  
- Use *async* inference with batching (batch size tuned for GPU).  
- Store query–hit pairs in a Pandas DataFrame to compute MAP/NDCG efficiently (`sklearn.metrics`).  
- Latency measured via `time.perf_counter()` per query, aggregated to mean/95th percentile.  
- Complexity: O(Q·k) for metric calc, negligible compared to inference cost; memory ~size of top‑k hits.

**Edge Cases**  
- Empty result set → treat as zero relevance and flag.  
- Query drift (new terms) → add a “query coverage” check; low coverage triggers a warning.  
- Data skew in latency → outliers clipped before percentile calc.

**Optimize & Communicate**  
- Cache the test set vector store across runs to avoid re‑indexing.  
- Parallelize metric computation with `multiprocessing`.  
- Log every step with timestamps; provide a diff view comparing current vs. baseline metrics so reviewers see concrete changes.  

This harness gives the team confidence that each merge improves or at least preserves retrieval quality and performance, while keeping the review cycle fast and transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
