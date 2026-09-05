---
qid: ing_8cc7fc6ae2__eli5__local
question: 'Explain: Kimi K2 is a 1T-parameter MoE with about 32B active per token
  and hundreds of experts. Explain the routing and the systems cost of training it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 218
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:48-05:00'
sources: []
---

Imagine a giant library where each book is an “expert” that knows how to answer a specific kind of question. When you ask something, a clever librarian (the *router*) looks at your question and quickly points you to just a handful of the most useful books—maybe 32 out of thousands—so you don’t have to sift through every volume.

Kimi K2 is built this way. It has about one trillion (1T) total parameters spread across hundreds of expert modules, but for any single word it only activates roughly 32 billion (32B) of those parameters. The router decides which experts to call based on the input, keeping the workload light.

Training such a system is expensive because you must still teach every expert and run the routing logic over all data. It requires huge compute clusters, careful memory management, and sophisticated software to keep the active experts synchronized—much more complex than training a single monolithic model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
