---
qid: ing_116a120589__eli5__local
question: 'Explain: Single Provider Dependency — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 173
total_tokens: 328
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:20-05:00'
sources: []
---

Imagine you’re building a house and decide that all the plumbing will come from just one brand of pipes. If that brand’s supplier suddenly stops shipping, your entire water system collapses—no alternative pipes are available. In software, “single provider dependency” is the same idea: an application relies on only one external service (like a payment gateway or database) for a critical function. When that provider goes down, freezes its API, or changes its contract, the whole app can stop working or need costly rewrites. The anti‑pattern is avoiding this risk by using multiple providers or building your own fallback layers so you’re not tied to one vendor’s uptime and policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
