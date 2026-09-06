---
qid: ing_a0b709fc61__fp__local
question: 'Q: What changed between GPT-2 and Llama 2?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 693
total_tokens: 866
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:47:31-05:00'
sources: []
---

### From *GPT‑2* to *LLaMA 2*: a principled shift

Both models are transformer decoders that learn a distribution \(p(x_{1:n})\) over tokens by minimizing cross‑entropy on large corpora.  
The **fundamental problem** they solve is the same: approximate an intractable language model with a tractable neural network. The difference lies in how each family *parametrises* this approximation.

| Aspect | GPT‑2 | LLaMA 2 |
|--------|-------|---------|
| **Training objective** | Pure next‑token cross‑entropy on a 1 B‑parameter network (≈40 GB of text). | Same objective, but with *grouped‑query attention* and *fused softmax*, reducing per‑token FLOPs. |
| **Parameter budget** | Fixed 1 B parameters; scaling linearly for larger variants. | A family of sizes (7–70 B) designed to fit a given compute budget while keeping the *effective context length* constant via *relative positional embeddings*. |
| **Architectural innovation** | Standard multi‑head self‑attention with fixed head count. | *Grouped‑query attention*: each query head shares keys/values, cutting memory and improving parallelism; *rope* relative positions that are invariant to sequence length. |
| **Training data handling** | Single‑pass tokenization of a static corpus. | Uses *token‑level curriculum learning* (start with shorter sequences) and *dynamic masking* to expose the model to longer contexts early, mitigating exposure bias. |

#### Why these changes must work

1. **Efficiency as a constraint**: Modern GPUs have limited memory bandwidth. Grouped‑query attention reduces key/value storage from \(O(h^2)\) to \(O(h\,g)\), where \(h\) is the number of heads and \(g\) the group size, without changing expressivity if \(g \ll h\).  
2. **Generalisation through relative positions**: By encoding position as a sinusoid (rope) rather than absolute indices, LLaMA 2 learns *relative* dependencies that transfer to unseen sequence lengths—an optimisation principle known as *inductive bias alignment*.  
3. **Curriculum learning**: Exposing the model gradually to longer sequences aligns the training distribution with the test distribution, reducing the variance of gradient estimates and speeding convergence.

#### Non‑obvious insight

The real leap is not a new loss or larger data; it’s **reducing *effective* dimensionality per token** while preserving representational capacity. By sharing keys/values across query heads, LLaMA 2 leverages *parameter sparsity*—most of the weight matrix is reused—so that each additional parameter contributes more to the *information flow* than in GPT‑2. This subtle shift turns a linear scaling law into a sublinear one: doubling parameters yields less than double compute, enabling practical deployment at 70 B without prohibitive GPU memory.

In short, LLaMA 2’s architecture is engineered to **solve the same language modelling problem more efficiently** by rethinking how attention and position are represented, thereby allowing larger models on the same hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
