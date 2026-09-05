---
qid: ing_1fff2ba47d__eli5__local
question: 'Explain: It requires a table scan. With 200 — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 266
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:56-05:00'
sources: []
---

Imagine you’re a detective trying to find every house on a street that sells pizza. If you only have a list that tells you where each pizza place is, you can jump straight to the right houses—no need to look at every home. That’s what indexes do for databases.

But in some machine‑learning tasks, especially when we’re training or scoring a model on all customers’ past orders, there isn’t an index you can use. The system must read every row of the “orders” table to compute statistics (like average rating) or to feed data into the algorithm. This is called a **table scan**: the database walks through each record one by one.

In designing a location‑based service like Yelp or Google Places, we need fast lookups for nearby spots—so we build spatial indexes (think of a map with pins). Yet when we want to train a recommendation model on every user’s visit history, we still have to scan the entire table because the algorithm needs the whole picture. Thus, ML often forces a full table scan even though our service itself relies on indexed queries for speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
