---
qid: ing_f404e30329__fp__local
question: 'Explain: In-Flight Batching (Prefill-Decode Fusion)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 468
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:37:33-05:00'
sources: []
---

**In‑flight batching (prefill‑decode fusion)** is a runtime technique that stitches together the *prefill* and *decode* phases of transformer inference into one continuous, parallel pipeline.  

1. **Fundamental problem** – In an autoregressive model each new token requires a *prefill* pass to compute the first layer’s key/value (KV) cache for that token, followed by a *decode* pass that re‑uses all prior KV caches and only processes the current token.  
2. **Why it must work this way** – The two passes are sequentially dependent: decode cannot start until its preceding prefill has produced the first‑layer KV. Yet both phases use essentially the same matrix multiplications, so performing them back‑to‑back in separate kernels wastes launch overhead and stalls GPU compute units.  
3. **Optimization principle** – By *fusing* the two passes we treat every token as a “micro‑batch” that streams through the network: the prefill kernel writes its KV cache into shared memory; immediately after, the decode kernel reads it without leaving the device. This keeps all GPU SMs busy and eliminates costly host‑device synchronisation.  
4. **Non‑obvious insight** – The fusion also enables *overlap* of communication with computation for pipelines that stream tokens from a CPU to GPU: while one micro‑batch is in the decode stage, another can be prefilling on the same kernel launch. Thus the overall throughput scales linearly with the number of tokens per batch, far beyond what separate prefill/ decode kernels achieve.

In short, in‑flight batching turns two logically serial stages into a single continuous GPU pipeline, achieving lower latency and higher utilisation by exploiting the inherent redundancy between prefilling and decoding operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
