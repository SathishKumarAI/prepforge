---
qid: ing_b89d583f17__fp__local
question: Walk me through what happens inside the server when an LLM processes a request.
  Why are prefill and decode bottlenecked differently?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 535
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:36:30-05:00'
sources: []
---

### From request to answer: the inner life of an LLM server  

1. **Tokenization & context window**  
   The user’s text is split into sub‑word tokens, then padded or truncated to fit the model’s fixed‑size *context window* (e.g., 2048 tokens). This step defines a *prefix* that the network will condition on.

2. **Prefill: forward pass over the entire prefix**  
   The prefix is fed through all transformer layers once. Each layer applies self‑attention, then feed‑forward sub‑layers. Because the prefix is static, the attention matrices are *dense* and can be cached after the first pass. This phase is **compute‑bound**: GPUs/TPUs spend most of their cycles on matrix multiplications; memory bandwidth matters less.

3. **Decode: token‑by‑token generation**  
   For each new token:
   - The last hidden state (or a cache of key/value tensors) is reused.
   - A softmax over the vocabulary produces probabilities.
   - One token is sampled, then appended to the prefix for the next step.

   Here the bottleneck shifts to **latency**. Each iteration requires an extra forward pass through only the *last* layer’s attention (since earlier layers’ caches can be reused). The per‑token cost is lower than prefill, but the cumulative latency grows linearly with answer length. Moreover, the softmax over millions of tokens dominates memory traffic; GPU cores idle while waiting for data.

4. **Why different bottlenecks?**  
   - *Prefill* processes a fixed amount of data once → compute‑bound.  
   - *Decode* repeats small steps many times → I/O‑bound (softmax, RNG) and latency‑sensitive.

5. **Non‑obvious insight**  
   The true performance lever is not just the raw FLOPs but the **reuse of key/value caches**. If a model can compress these tensors (e.g., via tensor‑parallelism or low‑rank approximation), decode time drops dramatically without affecting prefill cost. This explains why many production systems invest heavily in *efficient cache architectures* rather than simply scaling GPU power.

In short: the server first does one heavy, embarrassingly parallel pass over the prefix; then it repeatedly performs cheap but latency‑sensitive token generation, each step relying on cached attention states to keep compute high while I/O becomes the limiting factor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
