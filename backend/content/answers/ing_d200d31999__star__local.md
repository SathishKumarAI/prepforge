---
qid: ing_d200d31999__star__local
question: 'Explain: Output: — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 318
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:42-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we had to shift from generating daily risk reports (batch) to real‑time fraud alerts for a high‑volume payment gateway that processed ~50k transactions per minute.

**Task**  
I was tasked with redesigning our ML pipeline so that the fraud detection model could ingest data continuously and push predictions within milliseconds, while still maintaining the accuracy guarantees of the existing batch system.

**Action**  
First, I evaluated the current Spark‑based batch workflow: nightly jobs that aggregated logs into HDFS, trained a Random Forest, and output a CSV of flagged accounts. To enable streaming, I migrated to Kafka for ingestion and used Flink’s event‑time windows to keep state per user session. The model was re‑implemented as a TensorFlow Serving endpoint; we wrapped it in a lightweight C++ inference engine so that each transaction triggered a single forward pass. For latency control, I introduced backpressure handling and capped the window size at 5 seconds, trading off a slight increase in false positives for sub‑50 ms response time.

**Result**  
The new stream pipeline reduced detection latency from 2 hours to under 30 ms per transaction, cutting fraud losses by 35% within three months. I learned that batch excels when accuracy and complex feature engineering are paramount, whereas stream processing shines where immediacy is critical; choosing the right tool hinges on the specific business trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
