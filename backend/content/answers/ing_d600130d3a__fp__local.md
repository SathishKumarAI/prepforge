---
qid: ing_d600130d3a__fp__local
question: 'Explain: Multiquery Attention (MQA) — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 412
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:03-05:00'
sources: []
---

**Multi‑Query Attention (MQA)** is a lightweight variant of multi‑head attention that solves the *“one key per token”* bottleneck in transformer‑based conversational models such as **Kaiju**.  
In a standard self‑attention layer, each query, key and value vector is produced by a distinct linear projection. When we stack many layers to capture long‑range dialogue context, the dimensionality of the keys (and values) explodes: every token needs its own 64‑dimensional key, even though the model only uses a few attention heads.  

MQA replaces the per‑head key projections with a *single* key projection shared across all heads, while queries and values remain head‑specific. Mathematically, for each token \(x\) we compute

\[
q_h = W_q^h x,\qquad k = W_k x,\qquad v_h = W_v^h x
\]

and the attention scores are \(\text{softmax}(q_h^\top k / \sqrt{d})\).  
This reduces memory from \(O(H\,d)\) to \(O(d)\), allowing Kaiju to scale to millions of tokens without sacrificing head diversity.  

**Why it works:** The key vector encodes the *location* in the sequence; sharing it across heads preserves positional coherence while each head can learn a different query‑value mapping, capturing complementary patterns (e.g., topic drift vs. coreference).  

**Non‑obvious insight:** Because all heads share the same key, MQA implicitly enforces a *low‑rank structure* on the attention matrix. This bias toward low rank acts as an inductive prior that encourages the model to focus on salient dialogue turns rather than overfitting to every token, which is precisely what large‑scale conversational datasets demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
