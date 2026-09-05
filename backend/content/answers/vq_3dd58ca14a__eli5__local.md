---
qid: vq_3dd58ca14a__eli5__local
question: What is a Fact Table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 223
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:58-05:00'
sources: []
---

Imagine you’re running a big theme park that keeps track of every ticket sold, ride ridden, and snack bought. A **fact table** is like the park’s master ledger: it records all the measurable events—sales amounts, quantities, times—so you can later ask questions such as “How many tickets did we sell in July?” or “What was the total revenue from popcorn last month?”

In data‑engineering terms, a fact table stores **facts** (numeric measurements) and links to descriptive tables called **dimension tables** (e.g., date, product, store). The facts are what you measure; the dimensions tell *who*, *when*, *where*, and *what* about those measures. Think of it as the park’s cash register log that lets managers analyze business performance across different aspects—just like a fact table lets analysts drill down into data from many angles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
