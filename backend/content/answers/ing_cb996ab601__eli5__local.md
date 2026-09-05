---
qid: ing_cb996ab601__eli5__local
question: 'Explain: High Level for Search — The Architecture Twitter Uses to Deal
  with 150M Active Users, 300K QPS, a 22 MB/S Firehose, and Send Tweets in Under 5\u00a0Seconds
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 267
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:57:31-05:00'
sources: []
---

Imagine Twitter as a gigantic kitchen that must cook millions of orders (tweets) every minute while keeping the food fresh for customers who arrive at any time.

**The “order list” is the Firehose** – it streams every tweet at 22 MB/s, like an endless conveyor belt of ingredients.  
**The “cookbooks” are the search indices** – each book contains a quick lookup table (sharded by user or hashtag) so the kitchen can find any dish in seconds.

When a new order comes in, it is first put on a queue (a message broker). Several **“chefs” (search nodes)** pull from this queue, update their cookbooks, and write the result to fast storage.  
If many customers ask for the same recipe at once, the system splits the request among dozens of chefs so no single one gets overwhelmed.

The kitchen also keeps a small “cold‑storage pantry” (caching) so repeat orders can be served instantly, and it uses load balancers (traffic routers) to spread people across all chefs.  

This layered, parallel approach lets Twitter handle 300 000 queries per second and deliver any tweet in under five seconds, even with 150 million active users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
