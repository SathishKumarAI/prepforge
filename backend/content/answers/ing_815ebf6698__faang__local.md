---
qid: ing_815ebf6698__faang__local
question: Product wants the assistant to answer from data no older than 15 minutes.
  How do you design and monitor that freshness SLA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 481
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:37-05:00'
sources: []
---

**Clarify**  
We need an *assistants* service that guarantees responses are generated from data that is ≤ 15 min old.  
Assumptions:  
- Data arrives in real‑time streams (e.g., Kafka).  
- The assistant queries a vector store or RAG backend.  
- SLA is measured per request, not per batch.

**Approach**  
1. **Timestamping** – tag every data record with ingestion time.  
2. **Versioned index** – keep an incremental, time‑stamped index (e.g., Pinecone or Elastic) that supports “max‑timestamp ≤ now‑15m”.  
3. **Query gate** – at request time, the query engine filters by timestamp and rejects if the latest record is > 15 min old.  
4. **Monitoring** – expose a metric `latest_data_timestamp` per shard; alert when it lags > 15 min.  

**Depth**  
- *Data pipeline*: Ingest → parse → attach `ingestion_ts`.  
- *Indexing*: Use a time‑series aware index (e.g., “date‑field” in Elasticsearch). Query syntax: `WHERE ingestion_ts >= now() - 15m`.  
- *Latency*: Index updates are ~1 s; query latency < 200 ms.  
- *SLA enforcement*: If the filter returns empty, return a “data too stale” error.  

**Edge Cases**  
- Clock skew between producers and consumers → use NTP or vector clock.  
- Network partitions causing delayed writes → fall back to a “stale‑allowed” mode with higher latency warning.  
- Bulk updates: ensure bulk commits flush before queries.  

**Optimize & Communicate**  
1. **Batch indexing** reduces overhead; keep a rolling buffer of the last 15 min.  
2. **Cache warm‑up**: prefetch recent data into an in‑memory cache to lower query latency.  
3. **Explainability**: log the timestamp used per response for auditability.  

*Result*: A clear, measurable freshness SLA with real‑time monitoring and fail‑safe responses that keeps the assistant’s answers within the 15‑minute window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
