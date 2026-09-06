---
qid: ing_815ebf6698__fp__local
question: Product wants the assistant to answer from data no older than 15 minutes.
  How do you design and monitor that freshness SLA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 549
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:40:14-05:00'
sources: []
---

**Freshness SLA for a Real‑Time AI Assistant**

1. **Problem framing**  
   The assistant must respond with data that is *no older than 15 min*. That is a *temporal consistency* requirement: the system’s knowledge state must stay within a moving window.

2. **Why it must work this way**  
   Any lag beyond 15 min risks feeding stale facts, eroding user trust and violating compliance (e.g., financial tickers). The SLA is thus a *bounded latency* constraint on the data ingestion pipeline.

3. **Design from first principles**

| Layer | Mechanism | Rationale |
|-------|-----------|-----------|
| **Data source** | Push‑based streams (Kafka, Pulsar) with per‑event timestamps | Guarantees ordering and precise age; push is faster than pull polling. |
| **Ingestion** | Stateless microservice that validates timestamp → rejects >15 min | Keeps the window tight; statelessness enables horizontal scaling for bursty traffic. |
| **Storage** | Time‑series DB (e.g., TimescaleDB) with TTL of 16 min + “last‑seen” index | Automatic eviction ensures no stale records remain; TTL is a declarative way to enforce the SLA. |
| **Serving** | Cache layer (Redis) keyed by query + time bucket, refreshed on ingestion | Reduces latency and protects DB from read storms. |

4. **Monitoring**

* **Age metric** – `max(event_timestamp - now)` per topic; alert if >15 min.
* **Throughput‑latency heatmap** – shows ingestion delay distribution; drift indicates bottlenecks.
* **TTL hit‑rate** – high miss rate signals that cache is evicting too early, hinting at a mis‑configured TTL.

5. **Non‑obvious insight**

> *The 15 min SLA is fundamentally an optimization problem on the **entropy of the data stream**.*  
> If we treat each event as adding information to the assistant’s knowledge base, the freshness constraint bounds the *information decay rate*. By maintaining a strict TTL and push‑based ingestion, we enforce that the entropy of the served state never exceeds that of a 15 min window, guaranteeing both consistency and minimal resource waste.  

This principled approach turns a simple “no older than X” rule into a measurable, self‑correcting system grounded in information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
