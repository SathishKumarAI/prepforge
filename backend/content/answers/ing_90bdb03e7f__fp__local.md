---
qid: ing_90bdb03e7f__fp__local
question: 'Explain: Derive the KV cache memory formula and compute it for a concrete
  model.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 983
total_tokens: 1159
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:05-05:00'
sources: []
---

**Why a KV cache is needed**

When a transformer processes token *t* it must compute the key \(K_t\) and value \(V_t\) for every head, then reuse them to attend to all later tokens \(\{t+1,\dots,T\}\). Re‑computing \(K,V\) at each step would double the cost. The cache stores one copy per token, per head, so that subsequent layers can read it in O(1).

**Deriving the memory formula**

* Let \(T\) = sequence length (tokens kept in cache).
* Let \(L\) = number of transformer layers.
* Let \(H\) = heads per layer.
* Let \(d_h\) = dimensionality per head; \(D = H\, d_h\) is the model dimension.
* Each key or value vector has size \(d_h\) floats.  
  Hence, per token and per head we store **2 × \(d_h\)** floats (K+V).

The memory per layer for a single sequence is therefore  

\[
M_{\text{layer}} = T \times H \times d_h \times 2 \times B,
\]

where \(B\) is the byte size of one float (4 bytes for FP32).  
Because all layers share the same cache layout, total memory is

\[
\boxed{M_{\text{total}} = L \times T \times H \times d_h \times 2 \times B }.
\]

**Concrete example – GPT‑3 175B**

* \(L=96\), \(H=96\), \(D=12288\) → \(d_h = D/H = 128\).  
* \(T=2048\) tokens, \(B=4\) bytes.

Plugging in:

\[
M_{\text{total}} = 96 \times 2048 \times 96 \times 128 \times 2 \times 4
                 \approx 4.83~\text{GB}.
\]

**Non‑obvious insight**

The cache size grows **linearly with sequence length**, but *quadratically* with the number of heads if you increase \(H\) while keeping \(D\) fixed (since \(d_h = D/H\)). Thus, a model that trades more heads for smaller per‑head dimension can keep the KV cache footprint constant even as it adds depth—a subtle design choice often overlooked in scaling discussions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
