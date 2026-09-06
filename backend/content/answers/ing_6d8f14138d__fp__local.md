---
qid: ing_6d8f14138d__fp__local
question: 'Explain: Tenstorrent Galaxy Blackhole — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 396
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:57:14-05:00'
sources: []
---

**Tenstorrent Galaxy Blackhole – a low‑latency, high‑throughput LLM engine**

At its core the problem is *how to run millions of floating‑point operations per second while keeping every token’s inference time below a few milliseconds*. Traditional GPUs trade compute density for memory bandwidth; they saturate when the model size exceeds on‑board RAM. Tenstorrent flips this paradigm.

1. **Compute–memory co‑location** – The Blackhole architecture packs each tensor‑core with its own local SRAM, so every multiply‑accumulate fetches operands from *zero* external traffic. This removes the bandwidth bottleneck that plagues GPU‑based transformers, allowing linear scaling with core count.

2. **Fine‑grained parallelism** – Each core operates on a single token’s slice of the attention matrix; inter‑core communication is limited to the sparsity pattern of the model (e.g., rotary embeddings). The system exploits *communication‑avoiding* algorithms from distributed linear algebra, ensuring that the overhead of synchronizing weights never dominates compute.

3. **Energy‑aware scheduling** – Blackhole’s runtime predicts the power envelope of each operation and dynamically routes work to keep the chip in a low‑power state without stalling. This is an instance of *online convex optimization*: minimize latency subject to energy constraints, solved by a simple Lagrangian multiplier that adapts per inference batch.

**Non‑obvious insight:** Because every core owns its own memory, model sharding becomes *data locality* rather than weight partitioning. Consequently, the same model can be replicated across dozens of chips with virtually no communication cost—unlocking a new regime where distributed LLM inference is as cheap as a single‑chip run.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
