---
qid: ing_56944b3536__eli5__local
question: 'Q: Why is Tensor Parallelism preferred over Pipeline Parallelism for low-latency
  serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 220
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:54:12-05:00'
sources: []
---

Think of a big recipe that makes a huge batch of soup (a large AI model).  
With **pipeline parallelism** you split the recipe into stages: first chop veggies, then simmer, then season, and each stage is done by a different kitchen station. A single pot moves from one station to the next, so if any station lags, every pot waits—latency goes up.

With **tensor parallelism** the same pot is shared among many cooks who work on it at once. Each cook takes a small portion of the soup (a tensor slice) and stirs it together with others’ portions. Because all parts are processed simultaneously, the final pot is ready almost as soon as everyone finishes their tiny job—low latency.

So for quick, one‑by‑one responses (like answering a question), having many cooks work in parallel on the same soup is faster than passing the whole soup down a line of stations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
