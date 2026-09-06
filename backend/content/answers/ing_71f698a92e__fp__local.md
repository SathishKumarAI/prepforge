---
qid: ing_71f698a92e__fp__local
question: 'Explain: Heads: MHA → MQA → GQA — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 505
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:06:39-05:00'
sources: []
---

**Heads in language models: from MHA to MQA to GQA**

The *fundamental problem* is representing a token’s meaning as a function of the whole sequence while keeping inference tractable.  
In a vanilla transformer each head computes an attention matrix \(A = \text{softmax}(QK^\top / \sqrt{d})\) and aggregates keys/values with it. This *Multi‑Head Attention* (MHA) is powerful because different heads can learn complementary subspaces, but the cost grows linearly in the number of tokens: every head must compute a full \(n\times n\) matrix.

**Why MQA helps.**  
In many language‑model workloads, queries are *sparse*: each token only needs to attend to a few key “anchors” (e.g., sentence boundaries). Multi‑Query Attention (MQA) collapses the query dimension across heads: all heads share a single \(Q\), but keep distinct \(K,V\). The attention matrix is computed once, then linearly transformed per head. Mathematically this reduces complexity from \(O(hn^2)\) to \(O(n^2 + hn)\), exploiting the fact that the softmax distribution over keys is shared while each head can still learn its own linear projection of the values.

**GQA pushes further.**  
Global‑Query Attention (GQA) observes that for many tasks, a *global* query vector summarises the entire sequence: \(q_{\text{glob}} = \frac1n\sum_i q_i\). Each head then attends to this single query against all keys. The cost collapses to \(O(nh)\), and because the global query is shared across layers, it enforces a *consensus* representation that aligns with the principle of *information bottleneck*: we compress the sequence into one vector that still retains enough signal for downstream prediction.

**Non‑obvious insight:**  
While MQA reduces redundant computation, it implicitly regularises the model by forcing all heads to share the same query distribution. This shared “attention geometry” encourages different heads to specialise in *value transformations* rather than arbitrary attention patterns—exactly what a language model needs to capture syntax versus semantics without over‑fitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
