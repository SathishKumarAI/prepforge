---
qid: ing_7e8a2ddfbd__eli5__local
question: 'Explain: Contact Us — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 236
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:57:28-05:00'
sources: []
---

Think of a coffee shop that serves two kinds of orders: **“toss‑in” drinks** (simple, one‑step requests) and **full‑barista service** (more elaborate, multi‑step).  
- **TPS (Transactions Per Second)** is the number of complete “toss‑in” drinks the shop can finish each second. Each transaction must be fully processed before the next starts.  
- **QPS (Queries Per Second)** counts how many individual questions about the menu or order status the shop receives every second, regardless of whether they end in a finished drink.

So TPS measures *finished products per time*, while QPS measures *raw requests per time*. If the shop gets 100 QPS but only 30 TPS, it’s busy answering questions but not finishing drinks fast enough. Both metrics help you gauge capacity, but TPS tells you how many full jobs you can deliver, whereas QPS tells you how many calls your system must handle at once.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
