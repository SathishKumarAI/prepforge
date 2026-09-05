---
qid: ing_f68e7b81c2__star__local
question: 'Explain: Cons — Strong vs. Eventual Consistency - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 329
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:41:40-05:00'
sources: []
---

**Situation** – In a recent fraud‑detection project I was tasked with building a real‑time scoring service that ingested streaming transaction data and updated a user risk model stored in Cassandra. The team needed near‑instant predictions for each incoming payment, but also had to keep the global risk scores accurate across all nodes.

**Task** – My goal was to decide whether to use strong consistency (every write must be acknowledged by a quorum before read) or eventual consistency (writes propagate asynchronously) while ensuring low latency and high availability for the user experience.

**Action** – I first benchmarked read/write latencies under both modes using JMeter. Strong consistency added ~30 ms per transaction, pushing our SLA over 200 ms; eventual consistency dropped it to ~12 ms but caused a 4% divergence in risk scores across replicas during peak load. I then introduced a hybrid approach: critical writes (e.g., flagged high‑risk transactions) were routed through a replicated write with quorum=2, while bulk updates used lightweight replication. I also added a background reconciliation job that reconciles out‑of‑sync nodes every 5 minutes.

**Result** – The system met the 200 ms SLA for 99.8% of requests and reduced risk score drift to <1%. We achieved high availability during traffic spikes, learned that mixing consistency levels can balance latency and correctness, and documented a trade‑off matrix for future ML feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
