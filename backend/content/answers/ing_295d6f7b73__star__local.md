---
qid: ing_295d6f7b73__star__local
question: 'Explain: Stock Market Trading — Event-Driven Architecture (EDA): A Complete
  Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 354
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:51:14-05:00'
sources: []
---

**Situation**  
At my last internship I was tasked with building a real‑time trading signal system for a small quant fund. The data feed was a live WebSocket stream of price ticks and order book snapshots that arrived at irregular intervals, sometimes dozens per second.

**Task**  
I needed to design an architecture that could ingest the events, trigger downstream analytics instantly, and execute trades with sub‑millisecond latency while keeping the system fault‑tolerant.

**Action**  
I chose an Event‑Driven Architecture (EDA). Using Kafka as a durable event bus I defined partitions for each symbol so consumers stayed isolated. A lightweight “price‑update” microservice produced events; downstream services—an anomaly detector, a mean‑reversion strategy, and a risk manager—subscribed via consumer groups. Each service processed only the relevant events, emitting “trade‑signal” events back to Kafka. I added a Redis cache for low‑latency lookups of recent quotes and used Docker Compose with health checks for zero downtime deployments. To guarantee ordering within symbols, I set Kafka’s `acks=all` and enabled idempotent producers.

**Result**  
The system processed 120 k events per second with an average latency of 12 ms from tick to signal. The fund’s back‑test showed a 3.5% Sharpe ratio improvement versus the legacy batch pipeline. I learned that proper event partitioning and consumer group isolation are key to scaling low‑latency financial systems, and that adding simple caching can shave precious milliseconds off end‑to‑end latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
