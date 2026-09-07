---
qid: ing_2d5aeeaf5d__faang__local
question: 'Explain: Metrics and Text Search Engine — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 475
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:28:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a high‑level design of two systems that often coexist in ML pipelines: (1) a metrics dashboard for model monitoring, and (2) a text search engine that feeds data into those models. I’ll assume we need real‑time ingestion, low latency queries, and the ability to store millions of documents while still computing per‑model statistics.

**Approach**  
1. **Metrics Layer** – Ingest logs → time‑series DB (InfluxDB/TimescaleDB) → aggregation microservice → Grafana dashboard.  
2. **Search Engine** – Use an inverted index (Elasticsearch or OpenSearch). Store documents in a distributed KV store for redundancy, shard the index horizontally, and use Lucene analyzers for tokenization.  

**Depth**  
*Metrics*: Each model emits metrics as key/value pairs tagged with `model_id` and `timestamp`. A Kafka consumer writes to the TSDB; an aggregator runs hourly to compute moving averages, drift scores (e.g., KS test), and alerts. Complexity: O(1) write per metric, O(log n) query for ranges.  
*Search*: Documents are ingested via REST → Indexer → shards. Query latency < 200 ms at 10k QPS. Use BM25 scoring; support faceted search by metadata (date, label). Storage: ~30 bytes per term + postings.  

**Edge Cases**  
- Metric spikes causing TSDB backpressure – use batching and retry.  
- Search index corruption → shard recovery from snapshot.  
- Drift detection false positives – calibrate thresholds or use ensemble detectors.

**Optimize & Communicate**  
To scale, add a caching layer (Redis) for hot metrics and query results; enable sharding on `model_id` to avoid hotspotting. For the search engine, implement rollover indices to keep shards small and enable near‑real‑time indexing. I’d explain each trade‑off: write amplification vs. read latency, consistency models (eventual vs. strong) for metrics, and relevance tuning in search scoring. This structure demonstrates clear thinking, technical depth, and an awareness of operational concerns—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
