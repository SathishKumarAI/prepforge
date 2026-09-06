---
qid: ing_86af2bdbc9__fp__local
question: 'Explain: The decoder-only transformer, top to bottom'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 443
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:47-05:00'
sources: []
---

**Decoder‑only transformers (GPT‑style)**  
The core problem they solve is *sequence generation*: given a prefix \(x_{1:t}\), produce the next token \(x_{t+1}\). The architecture must model all conditional probabilities
\(p(x_t \mid x_1,\dots,x_{t-1})\) efficiently and flexibly.  

A decoder‑only transformer implements this with an *autoregressive* self‑attention block:

| Layer | Operation | Why it works |
|-------|-----------|--------------|
| **Embedding** | Maps tokens to \(d\)-dim vectors. | Turns discrete symbols into a continuous space where linear operations capture similarity. |
| **Positional Encoding** | Adds a deterministic or learned position signal. | Breaks permutation invariance of self‑attention, allowing the model to distinguish order. |
| **Multi‑head Self‑Attention (masked)** | Computes \(Q,K,V\) and forms \(\text{softmax}(QK^\top / \sqrt d)V\) with a causal mask. | Each token attends only to its past; the softmax learns a probability distribution over context, embodying Bayes’ rule in an embedding space. |
| **Feed‑Forward (FFN)** | Two linear layers with ReLU/GLU and residual connection. | Provides nonlinearity and capacity to mix features across dimensions. |

The stack of \(L\) such blocks yields a deep *autoregressive* model: the output distribution at step \(t\) is conditioned on all previous tokens through recurrent residuals, but without explicit recurrence—attention handles dependency paths.

**Non‑obvious insight:**  
Because attention weights are learned probabilities, the transformer implicitly performs *information routing*: it learns to route relevant bits of context to each token. This dynamic routing is equivalent to a *soft* decision tree over past tokens, enabling the model to capture long‑range dependencies without vanishing gradients—an elegant bridge between probabilistic inference and geometric representation learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
