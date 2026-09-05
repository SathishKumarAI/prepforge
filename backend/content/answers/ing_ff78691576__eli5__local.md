---
qid: ing_ff78691576__eli5__local
question: 'Explain: The scale deep dive — OpenAI System Design Interview (2026 Guide)
  - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 215
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:19:35-05:00'
sources: []
---

Imagine you’re building a library that holds books. A **scale** is how many shelves you add as the library grows—more shelves let you fit more books. In AI, the “scale deep dive” looks at how adding more compute (like extra shelves) changes performance.

The **exponent** tells us *how fast* the gains grow when we increase scale. If the exponent is 1, doubling the compute roughly doubles the result—just like adding two identical shelves doubles your capacity. An exponent greater than 1 means you get more than double the benefit (the library becomes disproportionately better), while less than 1 means the benefit tapers off.

So in a system design interview, you’ll be asked to explain why a model’s performance might grow with an exponent of, say, 0.8 versus 1.2, and how that shapes decisions about hardware, cost, and architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
