---
qid: ing_7934da3277__eli5__local
question: 'Explain: Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 251
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:48:40-05:00'
sources: []
---

Imagine you’re at a coffee shop that takes orders over the phone.

**Latency** is how long it takes from when you dial in your order to when the barista starts preparing it. A short latency means you feel the service instantly; a long one feels like waiting forever.

**Throughput** is the number of cups the shop can finish per hour. Even if each cup takes 5 minutes (high latency), the shop might still serve many cups quickly because several orders are being made in parallel—think of a line of baristas working at once.

**Bandwidth** is how wide the phone line is: the maximum amount of data that can travel from your phone to the shop’s system at one time. A wider line lets you send more information (e.g., a detailed order list) without choking, but it doesn’t change how fast each cup actually starts brewing.

So: latency = response delay per request; throughput = total finished items over time; bandwidth = capacity of the communication channel. All three matter when designing systems that need to be fast, efficient, and capable of handling many users at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
