---
qid: ing_418862f80f__eli5__local
question: 'Explain: 134: Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 261
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:19:59-05:00'
sources: []
---

Think of a mobile system as a **smart city** that must keep everyone moving smoothly while staying safe, fast and cheap.

*The “design interview” is like asking you to plan this city from scratch.*  
You’ll be given a brief—say, “build an app that lets users share photos instantly.” You must decide:

1. **How people (users) will enter the city** – authentication and login.
2. **Where they go** – routing data through servers or directly between phones (peer‑to‑peer).
3. **What happens on the way** – caching images, compressing files, handling bad roads (network outages).
4. **How many people you can support** – scaling servers, load balancing, sharding the database.
5. **Safety and privacy** – encryption, permissions, data retention.

Just like a city planner balances traffic flow, budgets, and safety, you balance latency, cost, reliability, and security. You describe each component in plain terms, show how they talk to one another, and explain why your choices keep the system healthy as it grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
