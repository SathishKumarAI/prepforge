---
qid: ing_16299e8d96__fp__local
question: 'Q: What is the difference between MHA, MQA, and GQA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 610
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:41-05:00'
sources: []
---

**Multi‑Head Attention (MHA)**  
*Problem solved*: A single self‑attention head mixes all tokens into one representation, limiting expressiveness and increasing quadratic cost.  
*Why it works*: MHA projects the same query/key/value vectors into *H* independent subspaces (`W_Q^h, W_K^h, W_V^h`). Each head attends to a different “aspect” of the sequence; the outputs are concatenated and linearly transformed back. This is essentially parallelizing several low‑rank approximations of the full attention matrix, reducing variance in the gradient and improving representation power.  
*Deeper principle*: It’s a form of **parallel factorization** of a rank‑H tensor (queries × keys × values), trading off expressivity for computational efficiency.

---

**Multi‑Query Attention (MQA)**  
*Problem solved*: MHA still requires *H* key/value pairs per token, inflating memory and computation.  
*Why it works*: All heads share the same key/value matrices (`W_K`, `W_V`), but each head has its own query matrix. Thus only one set of keys/values is stored per token, while multiple queries probe different subspaces. The attention scores are computed once per token and reused across heads.  
*Deeper principle*: It’s a **shared‑parameter factorization** that exploits the fact that keys/values capture positional/contextual patterns common to all heads; only the query projection needs head‑specific specialization.

---

**Global‑Query Attention (GQA)**  
*Problem solved*: In very long sequences, even MHA/MQA become expensive because every token attends to every other.  
*Why it works*: A *global* query vector—often a learned “summary” token or the CLS embedding—is used as the sole query for all tokens. Keys/values remain per‑token. Each token then computes attention only with this single query, producing a weighted sum of keys/values that reflects global context while keeping cost linear in sequence length.  
*Deeper principle*: It’s a **low‑rank projection** of the full attention matrix onto a rank‑1 space (one query), akin to projecting high‑dimensional data onto a global direction before mixing.

---

### Non‑obvious insight  
All three methods are *strategies for reducing the rank of the attention tensor* without sacrificing expressive power. MHA factorizes across subspaces, MQA shares keys/values to collapse rank across heads, and GQA collapses the entire query dimension to one. The choice depends on the trade‑off between **local detail** (MHA), **parameter efficiency** (MQA), and **sequence scalability** (GQA). Understanding them as different ranks of a single tensor clarifies why each excels in its target regime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
