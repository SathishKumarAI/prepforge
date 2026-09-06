---
qid: ing_ab50390514__fp__local
question: 'Explain: Sparse Attention — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 415
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:09:34-05:00'
sources: []
---

**Sparse attention** is a refinement of the classic “soft‑max” attention that reduces quadratic cost from *O(N²)* to roughly *O(N log N)* or even linear in sequence length *N*.  
At its core, attention solves the **matching problem**: for each query token *qᵢ*, we need the most relevant keys *kⱼ* and their values *vⱼ*. The dense formulation evaluates every pair *(i,j)*, yielding a score matrix *S = QKᵀ*. In practice, only a small fraction of these pairs carry useful signal—most scores are near zero.  

Sparse attention exploits this sparsity by **restricting the search space**:  
1. **Local windows** – each query attends to keys within a fixed radius.  
2. **Top‑k selection** – each query keeps only its *k* highest scores, discarding the rest.  
3. **Learned or adaptive masks** – a small auxiliary network predicts which indices to keep.

The key mathematical insight is that the soft‑max operation is **invariant to additive constants**: adding a large negative bias to an unselected pair simply pushes its probability toward zero. Therefore, we can first compute a *cheap* approximate score (e.g., using locality‑sensitive hashing or linear projections), mask out low‑scoring pairs, and then apply soft‑max only on the retained subset without altering the final distribution.

**Non‑obvious insight:**  
Sparse attention preserves **global coherence** when combined with an additional “routing” head that learns to aggregate information across distant tokens. The routing head can be trained jointly; it learns a low‑dimensional embedding of positions and predicts long‑range connections, effectively creating a *graph* over the sequence. This graph perspective unifies sparse attention with message‑passing neural networks, revealing that attention is just a special case of **information flow on learned topologies**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
