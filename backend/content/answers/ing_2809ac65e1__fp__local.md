---
qid: ing_2809ac65e1__fp__local
question: Walk me through why you would disaggregate prefill and decode onto separate
  machines, as Mooncake does. What does that buy you and what does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 428
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:30:26-05:00'
sources: []
---

### Why split *prefill* and *decode* across machines?

The fundamental problem is **through‑put vs. latency**.  
Prefilling a transformer’s attention layers is embarrassingly parallel: each token’s hidden states are computed once per layer, independent of the next token. Decoding, however, must produce tokens one by one; every new token forces recomputation of the *entire* decoder stack.  

If both stages share the same GPU, the decoder stalls while the prefill buffer is being filled, and vice‑versa. By allocating a *prefill pool* (many GPUs) to fill all layers in parallel, and a *decode pool* (fewer, larger‑memory GPUs) to generate tokens sequentially, we decouple their resource demands:

| Benefit | Reason |
|---------|--------|
| **Higher sustained throughput** | Prefills run at full bandwidth; decodes never wait for prefill. |
| **Lower latency for user requests** | Decoding can start immediately on a ready buffer, no cross‑queue contention. |
| **Better resource utilisation** | Prefill GPUs are kept busy with many small tasks; decode GPUs get the large memory they need. |

### Cost

- **Hardware duplication**: two distinct GPU fleets (prefill & decode) increase CAPEX and OPEX.
- **Data movement overhead**: prefilled tensors must be transferred to the decode pool, adding a small but non‑negligible network cost.
- **Complex orchestration**: scheduling and fault tolerance become more involved.

### Non‑obvious insight

The *prefill* stage can be seen as a **pre‑computation of a “token‑conditional manifold”**. By materialising this manifold on separate hardware, the decoder merely traverses it rather than recomputing it each step—akin to caching in graph traversal algorithms. This transforms an inherently sequential process into one that benefits from parallelism without altering the model’s semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
