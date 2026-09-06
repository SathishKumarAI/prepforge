---
qid: ing_84fbfc1e55__fp__local
question: Explain KV cache offloading and cross-request reuse beyond a single GPU's
  memory. When does loading a cached prefix beat just recomputing prefill?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 583
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:54-05:00'
sources: []
---

**KV‑cache offloading & cross‑request reuse**

A transformer’s *key–value* (KV) cache stores the hidden states for every token that has already been generated. In a single‑GPU inference loop, each new token requires a **prefill** pass to compute its KV pair and then an efficient *decode* step that reuses those cached values. The fundamental bottleneck is memory: a long prompt forces the cache to grow beyond GPU RAM.

The solution is to **offload** older KV blocks to slower but abundant storage (e.g., NVMe or host DRAM). This is not simply “swap” in the OS sense; it is a *structured checkpoint* that preserves positional alignment and allows instant re‑attachment. When the same prefix appears again—say, an FAQ bot receives identical opening sentences—the system can **reuse** the cached KV blocks instead of recomputing them.

Why does this work?  
- **Information locality**: The first `k` tokens are deterministic; their hidden states depend only on the model weights and the input. Storing them is a lossless compression of that computation.
- **Amortized cost**: Loading a block from NVMe takes ~µs per MB, while recomputing involves a full forward pass (~ms). Once the prefix length exceeds a few dozen tokens, the I/O cost becomes negligible compared to CPU/GPU compute.

When does loading beat recomputation?  
Let `T_compute(L)` be the time to compute `L` tokens and `T_load(L) = α·L + β` the time to load them from off‑storage (α ≈ 0.1 µs/byte, β ≈ 10 ms). Solve for `L`:

```
T_compute(L) < T_load(L)
⇔ L > (β / (c - α))   // where c is per‑token compute time
```

For most modern GPUs (`c ≈ 1–2 µs/byte`), the crossover occurs at **≈ 30–50 tokens**. Thus, for any prompt longer than this threshold and that recurs across requests, KV cache offloading followed by a single load of the cached prefix yields higher throughput than recomputing from scratch.

*Non‑obvious insight*: The trade‑off hinges on **positional consistency**—the cached KV blocks must be re‑indexed correctly for each new request. A naive “copy‑and‑paste” strategy fails; instead, a lightweight *offset table* that maps cache indices to token positions preserves the model’s autoregressive nature while enabling efficient cross‑request reuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
