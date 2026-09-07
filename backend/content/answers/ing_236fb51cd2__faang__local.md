---
qid: ing_236fb51cd2__faang__local
question: 'Explain: Batch Execution: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:06:33-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain *batch* versus *stream* processing in ML pipelines—when each is appropriate and how they differ in data handling, latency, and resource usage.

**Approach**  
1. Define batch and stream concepts.  
2. Contrast key dimensions: data volume, latency, fault tolerance, statefulness.  
3. Give concrete ML use‑cases (training vs inference).  
4. Mention tooling (Spark/Beam vs Flink/FastAPI).  

**Depth**  
- **Batch** processes a static set of records collected over a period (hours/days). It supports heavy transformations, joins, and can materialize intermediate datasets for repeated analysis. Latency is high but throughput is maximized; suitable for model training, offline evaluation, or periodic feature recomputation. Complexity: O(N) over the dataset; memory can be large but shuffling is controlled.  
- **Stream** ingests data continuously with micro‑batches or event‑by‑event processing. It offers sub‑second to millisecond latency, enabling real‑time scoring, anomaly detection, or online learning. State is maintained per key (e.g., windowed aggregations). Complexity scales with the rate λ: O(λ·t) for time t; backpressure and checkpointing are critical for fault tolerance.

**Edge Cases**  
- *Burst traffic*: stream systems must throttle; batch can absorb peaks by scaling nodes.  
- *Data skew*: both need partitioning strategies, but streams rely on consistent key hashing to avoid hotspot windows.  
- *Exactly‑once semantics*: achievable in streams via idempotent sinks; batches are simpler due to replay.

**Optimize & Communicate**  
Explain that hybrid architectures (Lambda/ Kappa) combine both: batch for robust feature pipelines and stream for low‑latency inference. Conclude with a quick trade‑off table, emphasizing that choosing depends on latency requirements, data velocity, and consistency guarantees. This structured answer showcases problem understanding, technical depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
