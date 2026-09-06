---
qid: ing_9f07628c8a__fp__local
question: 'Explain: Caching — Embeddings And Vector Spaces'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 488
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:43:29-05:00'
sources: []
---

### Why cache embeddings in a vector‑space model?

**Problem:**  
A large language model (LLM) must repeatedly transform the same tokens into dense vectors during inference or fine‑tuning. Computing these *embeddings* from scratch each time is expensive: it involves a matrix multiplication of size \(|V|\times d\), where \(|V|\) can be millions and \(d\) is 768–4096.

**Fundamental solution:**  
Treat the embedding lookup as a *linear operator* that maps a one‑hot vector \(\mathbf{e}_i\in\mathbb R^{|V|}\) to its dense representation \(\mathbf{x}_i = W^\top \mathbf{e}_i\). Because this mapping is deterministic and stateless, we can precompute \(\mathbf{x}_i\) for every token once and store it in a fast‑access table. During inference the model simply reads the cached vector instead of recomputing \(W^\top \mathbf{e}_i\).

**Why it must work:**  
The embedding matrix is *fixed* during forward passes (unless fine‑tuned). Thus, its columns are immutable; caching preserves exact semantics. Moreover, embeddings live in a high‑dimensional Euclidean space where nearest‑neighbour relations encode semantic similarity—caching keeps these relationships intact while eliminating redundant computation.

**Deeper principle:**  
This is an instance of *memoization* applied to linear algebra: by trading memory for time we reduce the computational complexity from \(O(|V|\cdot d)\) per lookup to \(O(d)\). It also illustrates *information locality*: once a vector is produced, all subsequent operations reuse the same data block, improving cache‑line utilisation and reducing DRAM traffic.

**Non‑obvious insight:**  
Caching embeddings also **reduces model variance during training**. When gradients are backpropagated through the embedding layer, using cached vectors guarantees that the same representation is used across all occurrences of a token in a batch. This consistency stabilises weight updates, especially for rare tokens that would otherwise suffer from noisy, repeated recomputation.

---  
*Word count: 203*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
