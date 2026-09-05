---
qid: ing_8da35355b7__star__local
question: 'Explain: Tell me about a performance optimisation you shipped. Give me
  the numbers, and tell me why I should believe them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 328
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:49-05:00'
sources: []
---

**Situation:** At my previous company we had an internal recommendation engine that served personalized content to 1.2 million daily users. In a recent product launch the latency ballooned from 350 ms to over 1.3 seconds, causing a 7% drop in click‑through rates.

**Task:** I was tasked with reducing average response time below 300 ms while keeping the model accuracy intact, and proving the improvement to stakeholders within two sprints.

**Action:** First, I instrumented the inference pipeline with OpenTelemetry, revealing that the embedding lookup was a hotspot. I replaced the Redis cache with an in‑memory LRU store built on `asyncio` and integrated it with a custom `torchscript` model exported from PyTorch 2.0, which lowered GPU serialization overhead by 40%. Next, I introduced batch‑processing of incoming requests using `torch.nn.functional.pad_sequence`, reducing kernel launch overhead. Finally, I performed A/B testing across two regions, collecting latency percentiles and AUC metrics.

**Result:** Latency dropped from 1.3 s to **280 ms** on average (99th percentile at 420 ms). Click‑through rate rebounded by **5%**, surpassing the original baseline. The model accuracy stayed within 0.2% of pre‑optimization AUC. I documented the full pipeline and shared a live dashboard with the product team, which they cited in their quarterly review as a key enabler for the next feature rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
