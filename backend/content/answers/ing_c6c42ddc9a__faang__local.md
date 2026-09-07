---
qid: ing_c6c42ddc9a__faang__local
question: 'Explain: Pre-processing: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 563
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:22:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise comparison of *batch* and *stream* pre‑processing in ML pipelines.  
Assumptions: (1) data arrives from external sources; (2) we need to transform it before training or inference; (3) latency, resource budget, and model requirements differ.

---

**Approach**  
1. Define each paradigm.  
2. Highlight key operational differences.  
3. Illustrate with typical use‑cases.  
4. Note trade‑offs in complexity, latency, and consistency.

---

**Depth**  

| Aspect | Batch Pre‑processing | Stream Pre‑processing |
|--------|----------------------|-----------------------|
| **Execution model** | Periodic jobs (hourly/daily). Data collected, then a single run transforms all records. | Continuous, event‑driven. Each record is processed as it arrives or in micro‑batches. |
| **Latency** | High (minutes to hours). Suitable for offline training or nightly reports. | Low (milliseconds to seconds). Needed for real‑time inference or alerts. |
| **Statefulness** | Stateless per run; full dataset available, so global statistics (means, histograms) are accurate. | Stateful: must maintain rolling windows or incremental aggregates; state consistency is harder. |
| **Fault tolerance** | Re‑run entire job on failure – simpler recovery. | Requires checkpointing and replay mechanisms to avoid data loss or duplication. |
| **Resource scaling** | Elastic batch clusters (e.g., Spark, Flink). | Dedicated streaming engines (Kafka Streams, Flink, Beam) with fine‑grained parallelism. |

*Example*:  
- *Batch*: Retraining a recommendation model nightly on user logs.  
- *Stream*: Normalizing sensor telemetry in real time for anomaly detection.

---

**Edge Cases**  

1. **Data skew** – batch can reallocate resources; stream may stall if one partition floods.  
2. **Schema evolution** – streams need dynamic handling (e.g., schema registry).  
3. **Late arrivals** – batch tolerates them naturally; stream must buffer or drop.

---

**Optimize & Communicate**  

- For hybrid workloads, use *micro‑batching* (Spark Structured Streaming) to blend low latency with fault‑tolerant checkpoints.  
- Emphasize that choosing between batch and stream hinges on the downstream ML task’s SLA: offline training → batch; online inference/monitoring → stream.

Conclude by noting that mastering both paradigms allows engineers to build end‑to‑end ML systems that meet diverse business requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
