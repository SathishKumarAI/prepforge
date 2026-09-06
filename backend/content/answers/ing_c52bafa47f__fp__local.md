---
qid: ing_c52bafa47f__fp__local
question: 'Q: Why is Continuous Batching superior to Static Batching for LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 406
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:00:57-05:00'
sources: []
---

**Why continuous batching beats static batching in large‑language‑model inference**

The core problem is *maximizing GPU utilisation while keeping latency low*.  
A transformer layer performs a fixed‑size matrix multiplication \(W\!\cdot\!X\). The cost of launching the kernel dominates when the batch size is small, so we want to keep many tokens in flight. However, LLM inference proceeds token by token; each new token arrives only after the previous one has finished.

*Static batching* packs a fixed set of sequences into a block and runs it once. When the next token arrives, the whole block must be resubmitted, leaving idle GPU time between launches. The latency per token is therefore \(O(\frac{\text{kernel launch cost}}{\text{batch size}})\).

*Continuous batching* views the stream as a *moving window*: while one token is being processed, the next token is already queued in the same kernel launch. Mathematically, we solve  
\[
\min_{\tau}\; \mathbb{E}[\,\text{latency}(\tau)\,] \quad
\text{s.t.}\;\tau\leq T_{\max}
\]
where \(\tau\) is the inter‑token interval and \(T_{\max}\) is the maximum tolerable latency. By letting \(\tau\) approach zero we asymptotically eliminate idle time, achieving near‑optimal throughput.

**Non‑obvious insight:** continuous batching turns a *deterministic* scheduling problem into an *online* one; it exploits the fact that transformer kernels are embarrassingly parallel across tokens. This transforms latency from a bottleneck into a tunable parameter governed by a simple queueing model, rather than a hard architectural limitation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
