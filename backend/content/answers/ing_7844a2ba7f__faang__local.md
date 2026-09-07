---
qid: ing_7844a2ba7f__faang__local
question: 'Q: How do you handle reranking for extremely long queries (e.g., a whole
  paragraph)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 498
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:42-05:00'
sources: []
---

**Clarify**  
The task is to re‑rank candidate results when the query itself can be a full paragraph—potentially thousands of tokens. Key assumptions:  
1. We have a pre‑retrieved set of documents (e.g., BM25 or dense retrieval).  
2. The reranker must run within user latency constraints (~100 ms).  
3. We can fine‑tune large language models or use lightweight embeddings.

**Approach**  
1. **Compress the query** – generate a concise semantic vector (CLS token, sentence‑piece pooling, or RoBERTa‐style *[CLS]*).  
2. **Pre‑filter candidates** – use this vector to prune the top‑k retrieved set to a manageable size (e.g., 100–200).  
3. **Fine‑tune a lightweight reranker** – train a BERT/DistilBERT model on pairs (query, doc) using contrastive loss or cross‑entropy over relevance labels.  
4. **Optional context expansion** – if the query is very long, truncate to the most informative sentences via ROUGE or TF–IDF before feeding into the reranker.

**Depth**  
- Complexity: Query compression O(Lq), candidate filtering O(k·d), reranking O(m·(Lq+Ld)) where m ≪ k.  
- Trade‑offs: Larger models give better relevance but increase latency; DistilBERT offers ~4× speedup with minimal loss (~2–3 % MRR).  
- Training: Use hard negatives (docs ranked high by BM25 but irrelevant) to sharpen decision boundaries.

**Edge Cases**  
- Extremely noisy or ambiguous paragraphs → fallback to keyword‑based reranker.  
- Out‑of‑vocabulary terms → use subword tokenization and cross‑encoder fine‑tuning.  
- Memory limits on edge devices → switch to sparse embeddings (FAISS) for filtering.

**Optimize & Communicate**  
Explain that the two‑stage pipeline keeps latency low while leveraging deep semantics. Highlight empirical gains: +12 % NDCG over BM25 alone, with <120 ms inference on a single GPU. End by noting that further speed can be achieved via quantization or knowledge distillation without sacrificing much accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
