---
qid: ing_4ec262e21b__eli5__local
question: What is prompt (prefix) caching, and why is it one of the biggest cost levers
  available?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 241
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:41:57-05:00'
sources: []
---

Imagine you’re baking a batch of cookies for a big party. Every time someone orders a cookie, you have to mix the dough from scratch—flour, sugar, butter, all the ingredients. That’s slow and uses up resources. Now suppose you pre‑mix a huge portion of dough once, store it in a large cooler, and just grab what you need for each order. The prep time drops dramatically, and you’re not buying new ingredients every single cookie.

In AI, “prompt (prefix) caching” works the same way. A prompt is the text you feed to a language model; the model first processes that text before generating an answer. If many users ask similar or identical questions, the system can store the result of processing that common prefix and reuse it for every new request instead of re‑computing from scratch. This saves compute cycles (the “cooler” of the analogy), reduces latency, and cuts the cost per query. Because large language models are expensive to run, reusing prompt work is one of the biggest levers for lowering overall operating costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
