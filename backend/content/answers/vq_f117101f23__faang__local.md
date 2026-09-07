---
qid: vq_f117101f23__faang__local
question: What are the four types of SP?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 798
total_tokens: 1029
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:00-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about the *four canonical types of stream‑processing paradigms* that we see in modern data pipelines—i.e., how data can be ingested, transformed, and surfaced in real time versus near‑real time.

**Assumptions to confirm**  
- “SP” refers to **stream processing** (not stored procedures).  
- We’re looking for the high‑level categories that map to common frameworks (Kafka Streams, Flink, Spark Structured Streaming, etc.).

---

### 1. Real‑time / event‑driven streaming  
*Ingests and processes each record as it arrives.*  
- Low latency (< 1 s).  
- Used for alerts, fraud detection, click‑stream analytics.

### 2. Micro‑batch (micro‑batching)  
*Batches small windows of events (e.g., every few seconds).*  
- Combines the simplicity of batch with near‑real‑time feedback.  
- Typical in Spark Structured Streaming and Flink’s “event time” windows.

### 3. Windowed stateful processing  
*Maintains mutable state over sliding or tumbling windows.*  
- Enables aggregations like moving averages, sessionization.  
- Requires checkpointing for fault tolerance (e.g., Flink’s keyed streams).

### 4. Event‑time / out‑of‑order handling  
*Processes events based on the time they occurred rather than arrival time.*  
- Handles late data with watermarks and allowed lateness.  
- Critical for accurate analytics in telecom, finance, IoT.

---

**Depth**  
Each type maps to a distinct API surface: `Source → Processor → Sink`. Complexity scales from O(1) per event (real‑time) to O(log n) state lookups (stateful). Trade‑offs are latency vs. throughput and fault‑tolerance guarantees.

**Edge Cases**  
- High‑cardinality keys can exhaust memory in stateful ops.  
- Late data beyond watermark → dropped or re‑processed via “late‑arrival” logic.  
- Backpressure when sinks lag behind sources.

**Optimize & Communicate**  
When choosing a paradigm, start with the required latency and consistency guarantees, then pick the framework that exposes the needed API (e.g., Kafka Streams for pure event‑driven, Flink for complex stateful windows). Explain how you’d benchmark throughput vs. latency and monitor checkpoint health to ensure SLA compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
