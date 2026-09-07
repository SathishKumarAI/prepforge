---
qid: ing_fdc65519fc__faang__local
question: 'Explain: Inference Time Tradeoffs — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:30:02-05:00'
sources: []
---

**Inference‑time trade‑offs & reranking strategies**

| **Step** | **What to do** |
|---|---|
| **Clarify** | We’re asked how to balance latency vs. accuracy when a model’s first pass returns a candidate list, and a second “reranker” refines it. Assume we have: *a base model that is fast but noisy*, *a heavier reranker (e.g., BERT)*, and *latency constraints*. |
| **Approach** | 1) Generate top‑k candidates quickly.<br>2) Apply a lightweight filter or score adjustment to trim the list.<br>3) Feed the trimmed set to the expensive reranker. |
| **Depth** | • **Top‑k size**: Larger k → higher recall but more reranking cost. Choose k so that *P(recall ≥ 0.95)* ≈ desired threshold.<br>• **Filtering**: Use a small LSTM or linear model to discard low‑probability items; this costs O(k) and keeps latency <1 ms per request.<br>• **Reranker**: Fine‑tune BERT on the reranking task; complexity ≈ O(|trimmed| × d²).<br>• **Trade‑off curve**: Plot expected latency vs. accuracy to pick a sweet spot (e.g., k=10, filter threshold=0.3). |
| **Edge Cases** | • If base model is very noisy → too many candidates survive filtering.<br>• When user tolerance for latency is tight → skip reranker entirely and accept base scores.<br>• Cold‑start: use cached reranker outputs or a simpler rule‑based re‑order. |
| **Optimize & Communicate** | • Cache reranker results for frequent queries (LRU cache).<br>• Parallelize filtering and reranking on GPU to reduce wall‑time.<br>Explain the design by showing how each layer adds cost, then justify chosen k/threshold via profiling data. This narrative demonstrates structured reasoning, clear communication, and depth—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
