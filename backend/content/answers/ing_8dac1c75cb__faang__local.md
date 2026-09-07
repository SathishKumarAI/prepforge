---
qid: ing_8dac1c75cb__faang__local
question: 'Explain: Alerts and Anomaly Detection — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 533
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:28-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that watches real‑time metrics, flags anomalous behavior, and raises alerts. I’ll assume we need low latency (≤ 1 s), high availability (99.9%), and the ability to scale to millions of time‑series across many services.

**Approach**  
1. **Data Ingestion** – lightweight agent → message queue (Kafka) → ingestion service.  
2. **Storage & Time‑Series DB** – use a columnar TSDB (Cassandra + OpenTSDB or ClickHouse) for retention and fast queries.  
3. **Feature Engine** – compute rolling statistics, percentiles, moving averages on the fly.  
4. **Anomaly Engine** – lightweight model per metric:  
   * Simple baseline: z‑score / EWMA.  
   * Advanced: Isolation Forest or LSTM autoencoder if needed.  
5. **Alerting Layer** – rule engine that aggregates alerts (deduplication, suppression) and pushes to notification channels (PagerDuty, Slack).  

**Depth**  
- **Latency**: Ingest → Kafka → worker → compute → store in < 200 ms. Use async I/O and batching.  
- **Scalability**: Partition metrics by hash; each worker handles a shard. Store partitioned columns for query locality.  
- **Fault Tolerance**: Replicate workers, use Kafka’s consumer groups for at‑least‑once delivery.  
- **Model Training**: Periodic offline jobs (Spark) to retrain per metric or cluster of similar metrics.  
- **Complexity**: Ingestion O(1), feature compute O(k) per window size k, anomaly test O(1). Storage write O(log n).

**Edge Cases**  
- Sudden data bursts → backpressure in Kafka.  
- Concept drift → retraining trigger or adaptive learning rates.  
- Missing values → imputation or ignore windows with < threshold samples.  
- Correlated metrics → false positives; consider multi‑dimensional models.

**Optimize & Communicate**  
Start with a simple statistical baseline to prove concept and gather data. Once alerts stabilize, add machine‑learning layers incrementally. Use A/B testing for new detectors. Document alert severity taxonomy so ops can triage quickly. Finally, provide dashboards (Grafana) showing raw series + anomaly flags for visual confirmation.

This design balances speed, scalability, and model flexibility—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
