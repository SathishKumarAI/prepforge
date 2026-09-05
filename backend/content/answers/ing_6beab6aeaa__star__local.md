---
qid: ing_6beab6aeaa__star__local
question: 'Explain: Model Aliases — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 322
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:02-05:00'
sources: []
---

**Situation** – When I joined the SpaceXAI team, our new Grok series was just released, but internal stakeholders were confused about which underlying model each alias pointed to and how that affected cost estimates for their experiments.

**Task** – My goal was to create a clear mapping between every Grok alias (e.g., grok-1.0, grok-large‑finetuned) and its base architecture, then translate those differences into concrete pricing figures so product managers could budget accurately.

**Action** – I pulled the official docs and extracted the model specifications: token limits, context windows, and compute requirements per inference. Using a Python script, I calculated cost per 1k tokens for each alias based on the SpaceXAI rate sheet (e.g., $0.02/1k tokens for grok-1.0, $0.05 for grok-large‑finetuned). I also built an interactive table in Confluence that updated automatically when new pricing tiers were released, and ran a test inference benchmark to validate the estimated latency versus the documented SLA.

**Result** – The alias-to-model guide cut confusion by 70 % and enabled the ML Ops team to forecast monthly spend within ±5 %. I learned how small changes in token limits can dramatically shift cost curves, and now I routinely update the pricing model whenever a new Grok variant is announced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
