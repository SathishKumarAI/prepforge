---
qid: ing_bdac2ad837__eli5__local
question: 'Explain: The Thundering Herd — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 208
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:37:43-05:00'
sources: []
---

**The Thundering Herd – What Is Caching?**

Imagine a busy coffee shop that only makes one batch of the same special latte each morning. If everyone walks in at once, they all line up for that single pot—slow, frustrating, and wasteful. Now picture the shop installing a small fridge where a fresh cup is kept ready; customers can grab a latte instantly without waiting. That fridge is *caching*: it stores a recent, frequently requested item (the latte) in a place that’s quick to access.

In computer systems, a cache holds copies of data or results that are expensive to compute or fetch from faraway storage. When many users request the same information simultaneously—the “thundering herd”—they all hit the fast, local cache instead of each hitting the slow database. This reduces load, speeds responses, and keeps everyone satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
