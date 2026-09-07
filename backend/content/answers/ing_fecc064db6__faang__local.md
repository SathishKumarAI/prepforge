---
qid: ing_fecc064db6__faang__local
question: 'Explain: How Each Architecture Processes a Query-Document Pair'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 525
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:29-05:00'
sources: []
---

**Clarify**  
You want to know *how* typical neural IR architectures (e.g., **BERT‑based re-ranker**, **Bi‑LSTM with attention**, and **Dense vector retrieval**) transform a query–document pair into a relevance score. I’ll assume the pair is tokenized, padded, and that we’re in a supervised setting where a label exists.

**Approach**  
1. Tokenize Q & D → embeddings.  
2. Encode each side (via transformer or RNN).  
3. Combine representations (concatenate, element‑wise product, attention).  
4. Pass through MLP → scalar score.  

**Depth**  

| Architecture | Encoding | Interaction | Scoring |
|--------------|----------|-------------|---------|
| **BERT re‑ranker** | Joint `[CLS] Q [SEP] D` → 768‑dim via transformer layers | Self‑attention captures cross‑query–doc cues | `logits = W·h_CLS + b` |
| **Bi‑LSTM+Attention** | Separate LSTMs for Q & D, hidden size *H* | Attention weight α_i ∝ exp(qᵀW_a d_i) → weighted sum of doc states | `score = σ(vᵀ[Q;D])` |
| **Dense retrieval (e.g., ColBERT)** | Separate encoders, produce token‑level vectors | Max‑pool or dot‑product over tokens → similarity matrix → aggregate | `score = max_i min_j (q_i·d_j)` |

Complexity: Transformer O((L_Q+L_D)²), LSTM O(L_Q+L_D). Memory scales with hidden size. Trade‑off: Transformers give richer cross‑modal signals but cost more; dense retrieval is cheaper at inference.

**Edge Cases**  
- Empty query → fallback to document embedding only.  
- Very long documents → truncation or hierarchical pooling may distort relevance.  
- OOV tokens → random init vs. subword splits affect embeddings.

**Optimize & Communicate**  
For latency‑sensitive systems, replace full BERT with distilled or quantized models; use pre‑computed document vectors to avoid re‑encoding at query time. I’d explain this trade‑off by showing a cost–benefit chart and confirming that the business requirement (e.g., 50 ms per request) dictates the choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
