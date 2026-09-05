---
qid: ing_9712decf26__star__local
question: 'Explain: Re-architecture — Asynchronous computing at Meta: Overview and
  learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 358
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:10-05:00'
sources: []
---

**Situation** – While leading the training of a large‑scale recommendation model at Meta, we hit a bottleneck: our nightly batch jobs stalled on GPU queues and consumed over 10 k GPU‑hours per day with no visibility into back‑pressure.

**Task** – Re‑architect the pipeline so that data ingestion, feature extraction, and model training ran asynchronously, decoupling stages to improve throughput and reduce idle GPU time.

**Action** – I designed an event‑driven microservice architecture using Apache Kafka for stream orchestration. Feature workers were rewritten in Python with Ray actors, allowing us to launch thousands of lightweight tasks that automatically scaled on the cluster. The training job itself was split into a pipeline of Spark jobs; each stage emitted checkpoints back to Kafka so downstream services could start immediately without waiting for the previous stage to finish. I introduced a dynamic resource manager that monitored GPU utilization and throttled new workers when saturation approached, preventing queue buildup.

**Result** – Throughput jumped from 1 GB/day to 3 GB/day, cutting GPU hours by 35 % and reducing nightly costs by $12k/month. The system now exposes real‑time latency metrics, letting us iterate on feature pipelines faster. I learned that true asynchrony requires careful back‑pressure handling and that a fine‑grained actor model can unlock hidden parallelism in ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
