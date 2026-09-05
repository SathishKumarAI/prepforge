---
qid: ing_4ff73bb26e__star__local
question: 'Explain: H ow gRPC APIs Work — gRPC vs. REST: Key Similarities and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 373
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:07-05:00'
sources: []
---

**Situation** – At my last job we had a micro‑service that handled real‑time fraud scoring for credit card transactions. The existing REST API was fine for batch jobs but lagged behind under high traffic; latency spiked to 200 ms and throughput dropped below our SLA of 10,000 requests per second.

**Task** – I needed to redesign the inter‑service communication so that the fraud service could ingest streams of transaction data with sub‑50 ms latency while still exposing a public REST endpoint for legacy clients.

**Action** – I introduced gRPC on top of HTTP/2. We defined a protobuf contract for `Transaction` and `ScoreResponse`, generated stubs in Go, and used bi‑directional streaming so the fraud service could push scores back as soon as they were computed. For backward compatibility we kept the REST gateway (gRPC‑JSON transcoder) but offloaded heavy computation to gRPC. I benchmarked both: gRPC dropped latency from 200 ms to 35 ms and increased throughput to 18,000 rps; REST stayed at 200 ms/10k rps. We also added compression and connection pooling to keep CPU usage low.

**Result** – The new architecture met our SLA with a 70% reduction in latency and a 80% increase in throughput. I learned that gRPC’s binary framing, HTTP/2 multiplexing, and code‑generation give real performance gains over REST when you need low‑latency, high‑volume communication, while still keeping a REST façade for clients that can’t adopt gRPC yet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
