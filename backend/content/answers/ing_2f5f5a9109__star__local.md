---
qid: ing_2f5f5a9109__star__local
question: 'Explain: Design and build a webhook delivery system: your service must
  deliver events to customer-registered URLs reliably.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 322
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:29-05:00'
sources: []
---

**Situation** – In my last role at a SaaS analytics platform, we introduced real‑time event notifications for our enterprise clients. Our existing HTTP callbacks were flaky; customers reported lost events during peak traffic, and support tickets surged.

**Task** – I was tasked to design a webhook delivery system that guaranteed 99.9 % on‑time delivery, retried intelligently, and exposed an admin UI for retry logs, all while keeping latency under 200 ms per event.

**Action** – I built a microservice in Go using Kafka as the ingestion queue. Each event was serialized to JSON and published to a topic partitioned by customer ID. A worker pool consumed messages, performed idempotent POSTs via an HTTP client with exponential back‑off (max 5 attempts). Successful deliveries were stored in Redis for deduplication; failures triggered a dead‑letter queue that auto‑retried after 10 min. I added a Prometheus exporter to track delivery latency and failure rates, and built a React dashboard to let admins view retry histories and manually trigger replays.

**Result** – Within two months the system processed 1.2M events daily with <0.05 % failures, and customer support tickets dropped by 70 %. I learned that coupling Kafka’s at‑least‑once guarantees with idempotent HTTP clients and a clear retry strategy turns fragile callbacks into reliable real‑time pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
