---
qid: ing_18b7d40706__eli5__local
question: 'Explain: Types of data replication — Data replication explained: types,
  examples & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 309
total_tokens: 473
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:15:05-05:00'
sources: []
---

Imagine you’re a chef who wants every diner in a city to taste the same special soup. To make sure each table gets an identical bowl, you can use three different tricks.

**1. Master‑Slave (Primary‑Replica) replication** – Think of one kitchen as the master that cooks all the soup. Every other kitchen (the slaves) simply copies the master’s pot line by line and serves it to diners. If the master breaks a spoon, everyone knows what went wrong because they’re all watching the same recipe.

**2. Peer‑to‑Peer replication** – Now every kitchen is both chef and waiter. They each cook their own soup but also share any new spice blends with one another so that all bowls stay similar. It’s like friends swapping secret ingredients to keep everyone happy.

**3. Multi‑Master replication** – Picture a cooking competition where every kitchen can add its own twist, but the final dish must still taste great. Each kitchen updates the recipe independently, and when two kitchens clash, a rule‑based system (like a judge) decides which change wins so that all diners receive a consistent flavor.

These tricks let databases keep identical copies of data across servers: master‑slave for simple read‑heavy loads, peer‑to‑peer for balanced workloads, and multi‑master for high availability and fast writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
