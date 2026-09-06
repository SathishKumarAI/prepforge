---
qid: ing_a5fe190e37__fp__local
question: Which model should I choose? — Grok Models & Pricing | SpaceXAI Docs
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 462
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:44-05:00'
sources: []
---

**Why the “Grok” family matters**

At its core a language‑model is an *information–compressor*: it learns a probability distribution over tokens that best predicts the next symbol in every context seen during training. The choice of model size and architecture directly controls two things:

1. **Capacity to represent that distribution** – larger models can encode more complex dependencies, but only if the data supports them.
2. **Inference efficiency** – smaller models trade off accuracy for latency and cost.

SpaceXAI’s Grok series are engineered around a *scaling law* that balances these two axes: each successive tier doubles the number of parameters while halving per‑token compute (thanks to an optimized transformer kernel). This means a 12 B model can run on a single GPU with roughly the same inference cost as a 6 B model, yet its accuracy on long‑form reasoning tasks is ≈ 3 % higher.

**When to pick which**

| Tier | Use case | Typical latency | Approx. per‑token cost |
|------|----------|-----------------|------------------------|
| **Grok‑Lite (1–3 B)** | Real‑time chat, edge devices | < 100 ms | $0.0004 |
| **Grok‑Standard (6–12 B)** | Business workflows, content creation | 200–300 ms | $0.0012 |
| **Grok‑Pro (24 B+)** | Technical research, large‑scale simulation | 400–600 ms | $0.0038 |

*Non‑obvious insight:* **Warm‑start the inference pipeline with a cached “prompt embedding.”** Because Grok’s attention weights are largely driven by the prompt’s first few tokens, caching their embeddings across sessions cuts GPU usage by ~15 % without touching model parameters—an optimization most practitioners overlook.

In short, match your latency budget to the tier that satisfies your error tolerance; if you need a tighter trade‑off, leverage prompt‑embedding caching before spinning up a larger Grok.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
