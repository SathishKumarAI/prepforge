---
qid: ing_295d6f7b73__faang__local
question: 'Explain: Stock Market Trading — Event-Driven Architecture (EDA): A Complete
  Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 438
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:19:48-05:00'
sources: []
---

**Clarify**

You’re asking how an event‑driven architecture (EDA) can be applied to algorithmic stock‑market trading.  
Key assumptions: real‑time market data feed, low latency requirements (< 1 ms), and a need for fault‑tolerant, scalable execution of multiple ML models.

**Approach**

1. **Event source** – Market data feeds (price ticks, order book updates).  
2. **Event bus** – Kafka/Redis Streams to publish events with timestamps.  
3. **Processors** – Stateless microservices that run ML inference on the event stream (e.g., price‑prediction, sentiment analysis).  
4. **Orchestrator** – A rule engine (Drools/Flink) decides trade actions from combined model outputs.  
5. **Sink** – Order execution service that sends orders to broker APIs.

**Depth**

- *Latency*: Use Kafka’s low‑latency partitions and zero‑copy serialization; keep inference in memory or GPU‑accelerated containers.  
- *Scalability*: Horizontal scaling of processors via container orchestration (K8s).  
- *State management*: Flink’s managed state for time‑window aggregations (e.g., 5‑second VWAP).  
- *Fault tolerance*: Exactly‑once semantics on Kafka, checkpointing in Flink.  
- *Complexity*: Overall O(1) per event processing; overall system latency dominated by network + inference time.

**Edge Cases**

- Market data gaps or duplicate events → deduplication logic.  
- Sudden spikes (flash crashes) → back‑pressure handling, graceful degradation.  
- Model drift → online retraining pipeline triggered by monitoring metrics.

**Optimize & Communicate**

Explain trade‑offs: Kafka vs. Pulsar for throughput; GPU inference vs. CPU for cost. Highlight that EDA decouples data ingestion from computation, enabling rapid iteration of ML models without downtime—exactly what FAANG teams need for high‑frequency trading pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
