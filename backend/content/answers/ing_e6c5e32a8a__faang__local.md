---
qid: ing_e6c5e32a8a__faang__local
question: 'Explain: Hybrid retrieval: why both, and how to fuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 461
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:36:02-05:00'
sources: []
---

**Clarify**  
You’re asking why a hybrid retrieval system (exact‑match + semantic) is preferred over a single strategy, and how the two signals are combined. I’ll assume we’re building a search engine that must satisfy both high precision for keyword queries and recall for open‑ended or noisy inputs.

**Approach**  
1. Identify the complementary strengths of each signal.  
2. Define a fusion strategy (score‑level or rank‑level).  
3. Tune weights empirically, then monitor drift.

**Depth**  

| Signal | Strength | Limitation |
|--------|----------|------------|
| Exact match (BM25/TF‑IDF) | High precision on keyword queries; fast index lookup | Poor recall for paraphrases, misspellings |
| Semantic embedding (dense vectors) | Captures meaning, handles noise | Lower precision on rare terms; heavier compute |

*Fusion*:  
- **Score‑level**: `score = α * BM25 + β * cosine_dense`.  
  - α and β are tuned via validation.  
  - Normalise each component to a common scale (e.g., z‑score).  
- **Rank‑level**: run both pipelines, then merge using weighted rank fusion or a learned re‑ranker.

Complexity: Exact match is O(log N) per query; dense retrieval adds an ANN lookup (≈O(log N) with HNSW). Fusion itself is linear in the number of top‑k candidates and negligible.

**Edge cases**  
- Highly specific queries where semantic similarity hurts precision → increase α.  
- Out‑of‑vocabulary terms → rely more on exact match.  
- Concept drift: embeddings become stale; schedule re‑training.

**Optimize & communicate**  
Start with a simple linear blend, evaluate MAP/Recall@k, then move to a neural re‑ranker if gains plateau. Communicate the trade‑offs clearly: we’re balancing recall (semantic) and precision (exact), and the fusion weights encode that business priority. This structured plan shows problem understanding, technical depth, and a path to iterative improvement—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
