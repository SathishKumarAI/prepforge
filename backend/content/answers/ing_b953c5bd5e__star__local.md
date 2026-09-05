---
qid: ing_b953c5bd5e__star__local
question: 'Explain: NoSQL DBs — Types of Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 329
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:57-05:00'
sources: []
---

**Situation:**  
While leading a data‑engineering sprint for our recommendation engine, we discovered that the relational schema we’d used to store user interactions was choking on write traffic during peak hours—latency spiked from 50 ms to over 1 second.

**Task:**  
I had to redesign the persistence layer so that event logs could be ingested at 10k writes per second while still supporting fast reads for real‑time personalization.

**Action:**  
First, I mapped out our data model: a high‑cardinality stream of click events and a relatively static catalog. I chose a polyglot approach—using a document store (MongoDB) for the event logs because its flexible schema accommodates evolving fields without costly migrations, and a wide‑column store (Cassandra) for the catalog to exploit its tunable consistency and efficient range scans across product attributes. I leveraged Mongo’s capped collections to auto‑expire old events and Cassandra’s time‑to‑live (TTL) columns for cache‑like eviction. The deployment used Kubernetes with rolling updates, and I added Prometheus metrics to track read/write latencies.

**Result:**  
Write throughput rose from 2k to 12k writes/sec, latency dropped below 70 ms under load, and we reduced storage costs by 30% through TTL policies. The exercise reinforced that selecting the right NoSQL type—document vs. wide‑column—depends on access patterns, schema volatility, and consistency needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
