---
qid: ing_923b282739__aws__local
question: 'Explain: Flight Booking design problem - Search — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:46-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing the search layer for a global flight‑booking platform that must return results in < 200 ms while supporting > 10 M queries/day and 1 B active users.

**Action (Technical Design)**  
* **Data model:** A wide‑row schema – `search_flights(airline, origin, dest, depart_date) → {flight_id, price, seats_left}` – exploits Cassandra’s partitioning on the composite key.  
* **Indexing & caching:** Global secondary indexes on `price` and `seats_left` (via materialized views) for fast range queries; a Redis cache for hot routes to hit 95 % of read traffic in < 10 ms.  
* **Scalability & Availability:** Multi‑region Cassandra clusters with hinted handoff + tunable consistency (`QUORUM`) guarantee 99.999 % uptime while keeping latency low.  
* **Cost & Trade‑offs:** Using DynamoDB for the write path (booking, seat updates) keeps writes fast; Cassandra handles heavy read traffic, reducing overall cost by ~30 %.  
* **Observability:** Prometheus + Grafana dashboards track query latency and error rates; automated alerts trigger rebalancing when a node becomes hot.

**Result**  
After rollout, search latency dropped from 350 ms to 140 ms (70 % reduction). The system handled a 400 % traffic spike during the holiday season without any outages. We saved $1.2 M annually in infrastructure spend by balancing Cassandra and DynamoDB workloads.

**Leadership Principles**  
* **Ownership & Deliver Results:** I owned the end‑to‑end design, iterated on failure modes (e.g., hot key mitigation), and delivered measurable performance gains.  
* **Dive Deep:** The choice of partition keys, consistency levels, and cache strategy came from profiling real traffic patterns and stress testing.

**Bar‑raiser Takeaway** – Demonstrating deep architectural choices backed by metrics shows ownership; quantifying impact proves delivery; learning from the hot‑key failure loop demonstrates continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
