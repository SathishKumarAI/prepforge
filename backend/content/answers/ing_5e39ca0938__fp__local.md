---
qid: ing_5e39ca0938__fp__local
question: 'Explain: Tier 3: Run on a sample (expensive LLM, ~$5/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 395
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:24:53-05:00'
sources: []
---

**Why “Tier 3” is the most expensive, yet most powerful, AI service**

The fundamental problem a large language model (LLM) solves is *inference*: mapping an input prompt to a probability distribution over token sequences and sampling from it. The cost of inference scales with the number of floating‑point operations that must be performed on every token, which in turn depends on:

1. **Model size** – a 13 B‑parameter transformer needs ≈ 200 Giga‑flops per token.
2. **Batch size** – each request is usually a single prompt, so the GPU’s parallelism is underutilised.
3. **Latency requirement** – real‑time applications demand instant responses, forbidding batching or caching across users.

Because of (1)–(3), Tier 3 deployments run on *dedicated GPUs* that are provisioned for a single customer’s requests. Each request forces the entire model to be loaded into memory and all attention matrices to be computed from scratch, incurring ≈ $5 per 1 k tokens. The economics come from:

- **Capital‑intensive hardware**: a 80 GB GPU costs > $10 k; amortised over thousands of requests it yields the $5/1K figure.
- **Operational simplicity**: no shared queue or rate limits, guaranteeing consistent latency and avoiding “cold‑start” delays.

A non‑obvious insight is that *caching intermediate activations* (e.g., past key/value vectors) can reduce cost by ~30 % but only if the same prompt is reused frequently. Tier 3’s single‑prompt nature means such optimisations are ineffective, justifying its higher price. Thus, Tier 3 exists where absolute latency and model fidelity outweigh any shared‑resource savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
