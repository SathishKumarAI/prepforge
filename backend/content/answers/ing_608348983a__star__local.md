---
qid: ing_608348983a__star__local
question: 'Explain: Publisher — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 392
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:15-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an anomaly‑detection pipeline for credit card fraud. The data lake was ingesting millions of events per day from our transaction servers, but the downstream ML models needed real‑time streams to trigger alerts within seconds. Our existing batch ETL couldn't meet latency requirements.

**Task** – I had to design a scalable publisher component that would push transaction records into a Pub/Sub system, ensuring exactly‑once delivery, minimal lag, and high throughput while keeping costs under control.

**Action** – I chose Google Cloud Pub/Sub for its managed scalability. I implemented a lightweight Go microservice that batched events in 200 ms windows, keyed by user ID to preserve ordering. Using the `Publish` API with `BatchingOptions`, I set a max batch size of 10 kB and a timeout of 500 µs to balance latency and throughput. I added idempotent message keys and leveraged Pub/Sub’s exactly‑once delivery semantics via the “transaction” mode in Cloud Dataflow for downstream consumption. To monitor, I exposed Prometheus metrics on publish latency and error rates, and set up alerts for any backpressure.

**Result** – The new publisher reduced end‑to‑end alert latency from 5 s to under 200 ms while processing 2 million events per hour with <0.1% message loss. Cost savings of ~25 % were achieved by tuning batch size and using preemptible VMs for the ingestion workers. I learned that careful batching, keying, and leveraging managed Pub/Sub features can turn a high‑volume data lake into a low‑latency ML pipeline without reinventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
