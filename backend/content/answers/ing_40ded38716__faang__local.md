---
qid: ing_40ded38716__faang__local
question: Batch vs Stream Processing - What's the Difference?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 466
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:59-05:00'
sources: []
---

**Clarify**  
The question asks how *batch* and *stream* processing differ when training or serving ML models. I’ll assume we’re comparing data ingestion pipelines that feed a learning algorithm, not the model itself.

**Approach**  
1. Define each paradigm (input, timing, state).  
2. Contrast their typical use‑cases in ML workflows.  
3. Highlight technical trade‑offs: latency, consistency, resource use.  

**Depth**  
| Aspect | Batch Processing | Stream Processing |
|--------|------------------|-------------------|
| **Input granularity** | Large, finite sets (files, tables). | Continuous flow of events. |
| **Timing** | Periodic jobs (nightly, hourly). | Real‑time or near‑real‑time. |
| **State handling** | Stateless per job; state persisted only between runs. | Stateful operators that maintain windowed aggregates. |
| **Consistency** | Exact‑once by default with checkpoints. | Event‑time vs processing‑time semantics; possible out‑of‑order data. |
| **Resource model** | High batch throughput, bursty compute (e.g., Spark). | Low latency, steady streaming compute (Kafka Streams, Flink). |
| **ML use‑cases** | Offline training, feature store refreshes, periodic evaluation. | Online learning, real‑time inference, anomaly detection. |

**Edge cases**  
- **Late data**: batch tolerates re‑processing; stream must buffer or drop.  
- **Fault tolerance**: batch relies on job restarts; stream needs checkpointing.  
- **Cold starts**: streaming pipelines may need warm caches for model parameters.

**Optimize & communicate**  
Explain that the choice hinges on latency vs throughput requirements and the consistency guarantees needed by the ML task. Emphasize hybrid architectures (e.g., Lambda/Medusa) where batch trains a global model and stream updates it online, combining the strengths of both paradigms. This framing shows clear problem‑solving structure, depth in technical trade‑offs, and an eye toward production‑grade solutions—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
