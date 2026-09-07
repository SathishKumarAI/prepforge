---
qid: ing_a19187547e__faang__local
question: What is learned sparse retrieval, SPLADE-style, and when would you pick
  it over BM25 or a dense retriever?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 731
total_tokens: 978
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:00:16-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“Explain learned sparse retrieval (SPLADE‑style), compare it to BM25 and dense retrievers, and state when you’d prefer SPLADE.”*  
Assumptions I’d confirm: we’re discussing passage‑level retrieval in a closed‑domain QA setting; the system must balance speed, accuracy, and memory.

---

**Approach**  
1. Define learned sparse vs. traditional BM25 & dense methods.  
2. Highlight SPLADE’s key mechanisms (token‑wise L1 regularization → sparsity).  
3. Contrast strengths/weaknesses.  
4. Enumerate scenarios where SPLADE shines or falls short.

---

**Depth**

| Category | Learned Sparse (SPLADE) | BM25 | Dense Retriever |
|----------|------------------------|------|-----------------|
| **Index** | Inverted index of *learned* sparse vectors; tokens with non‑zero weights are stored. | Classic TF‑IDF inverted list. | Flat/IVF index over dense embeddings (FAISS). |
| **Scoring** | Weighted Jaccard / dot product on learned weights; captures subword semantics and query expansion. | BM25 formula based on term frequency & IDF. | Cosine or L2 distance between query & document vectors. |
| **Training** | Supervised ranking loss + L1 penalty → sparsity. | No training. | Requires large‑scale contrastive pretraining (e.g., DPR). |
| **Explainability** | High – weights correspond to tokens. | High – term frequencies explain relevance. | Low – opaque embeddings. |
| **Memory** | Similar to BM25; only non‑zero entries stored, often 2–3× larger due to learned IDs but still sparse. | Compact. | Dense vectors (e.g., 768‑dim) → large memory & disk footprint. |
| **Speed** | Near‑BM25 speed with CPU‑friendly ops. | Fastest. | Slower; GPU or optimized ANN needed. |

*When to pick SPLADE*:  
- **Large, open‑domain corpora** where BM25’s lexical gap hurts recall but dense models are too heavy.  
- Need for *interpretability* (e.g., compliance).  
- CPU‑only deployment with strict latency budgets.  

---

**Edge Cases**

| Scenario | Issue |
|----------|-------|
| Very short queries | SPLADE may over‑expand; BM25 already good. |
| Extremely noisy text | Dense models might capture semantics better. |
| Real‑time indexing | SPLADE training overhead can be a bottleneck. |

Testing: compare MAP/Recall@k on standard benchmarks (MS MARCO, BEIR) and measure latency/memory.

---

**Optimize & Communicate**

- **Hybrid Pipelines**: Use BM25 to prefilter then SPLADE for re‑ranking; reduces index size.  
- **Quantization**: Apply 8‑bit compression to sparse vectors to cut RAM.  
- **Fine‑tuning**: Multi‑task training (language modeling + ranking) can improve sparsity quality.

*Narrative*: “SPLADE gives us the best of both worlds—an inverted index that understands semantics and stays lightweight. In environments where latency and interpretability trump raw recall, it’s the clear choice over BM25 or dense embeddings.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
