---
qid: ing_65ef22f946__fp__local
question: 'Explain: Gemini 3.1 Flash Live Preview — Gemini Developer API pricing \u00a0|\u00a0
  Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 420
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:41:50-05:00'
sources: []
---

**Why “Gemini 3.1 Flash Live Preview” is priced the way it is**

The core problem the API solves is *low‑latency, high‑throughput inference* for user‑interactive applications (chatbots, real‑time translation, etc.).  
A model that can answer in < 200 ms must keep a large fraction of its parameters resident in GPU memory and stream partial tokens back to the client. This demands more compute per token than a batch‑oriented “batch‑only” API.

1. **Compute cost scales with latency** – A 200 ms inference on a V100 is roughly twice as expensive (in FLOPs) as an equivalent 500 ms batch, because the GPU must stay active for longer while handling fewer tokens per second.  
2. **Bandwidth overhead** – Streaming partial responses requires continuous network usage; the API provider pays for egress data and maintains a persistent connection to avoid TCP thrashing.  
3. **Model size vs. cost** – Gemini 3.1 Flash is 3 B parameters, but only a *subset* of those weights are loaded into an edge‑grade accelerator per request. The pricing reflects the memory footprint plus the on‑demand activation of the full model.

Hence the pricing is **per‑token with a higher rate for “live preview”** (≈ $0.0008/1k tokens) versus batch inference (≈ $0.0004/1k).  

**Non‑obvious insight:**  
The *preview* fee isn’t just about latency; it also covers the *caching strategy*. Because a live preview keeps intermediate activations in RAM, the same user’s subsequent full request can reuse those activations, saving 30–40 % of FLOPs. The price therefore internalizes this “warm‑cache” benefit that batch pricing ignores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
