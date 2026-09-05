---
qid: ing_38b76fe0ee__eli5__local
question: 'Explain: Cost — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 200
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:06:05-05:00'
sources: []
---

Imagine you’re a book publisher who wants readers all over the world to get your new novel instantly.  
If every reader had to fetch the book from one distant warehouse, they’d wait a long time and the warehouse would be overwhelmed.  
A Content Delivery Network (CDN) is like having dozens of small, local libraries that copy the book. When someone orders it, the nearest library ships it, so delivery is fast and cheap for both the reader and you.

In system design, we pay the CDN for each “copy” we keep in those local spots and for every time a user downloads it. The more copies (more servers) and the farther users are from them, the higher the cost. So, when building an app that streams videos or serves images, you plan how many CDN locations to use so you balance speed with budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
