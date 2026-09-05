---
qid: ing_d79dc897e8__star__local
question: 'Explain: Apache Flink — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 354
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:07-05:00'
sources: []
---

**Situation:**  
While leading a data‑engineering upgrade for our e‑commerce recommendation engine, we had to ingest millions of click events per hour while also maintaining nightly sales reports.

**Task:**  
I needed to design a unified pipeline that could process real‑time user interactions for instant personalization and batch‑process historical logs for monthly trend analysis without duplicating effort or resources.

**Action:**  
I leveraged Flink’s unified runtime. For the stream side, I built an event‑time keyed window on the click stream with watermarks to handle out‑of‑order events, using a tumbling 5‑minute window and stateful aggregation for per‑user engagement scores. For batch, I switched the same job to “batch mode” by setting `ExecutionMode.BATCH` and used Flink’s `DataSet` API (or Table API with `executeSql`) on the historical click log files stored in HDFS, applying the same aggregation logic but without watermarks or state retention. By sharing the core UDFs across both modes, we avoided code duplication. I also tuned parallelism to 32 for streaming and 16 for batch to match resource constraints.

**Result:**  
The unified pipeline reduced operational overhead by 40%, cut infrastructure costs by $12k/month, and provided real‑time personalization with <200 ms latency while delivering accurate monthly reports in under an hour. I learned that Flink’s single codebase can seamlessly switch between stream and batch via execution mode, but careful watermarking and state management are critical for correctness across both contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
