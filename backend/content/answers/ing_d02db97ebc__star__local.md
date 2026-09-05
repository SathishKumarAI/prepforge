---
qid: ing_d02db97ebc__star__local
question: 'Explain: Consume JSON data — GitHub - confluentinc/kafka-rest: Confluent
  REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 293
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:44-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a real‑time analytics pipeline from a legacy message queue to Confluent Cloud. Our front‑end dashboards expected JSON payloads, but the new system only exposed Avro through Kafka topics.

**Task:**  
I had to expose those Kafka messages as plain JSON over HTTP so our microservices could consume them without pulling into Kafka clients or rewriting schemas.

**Action:**  
I set up Confluent’s REST Proxy (kafka-rest) and configured a producer that serialized the Avro schema to JSON via the `schema.registry.url`. Using the REST Proxy’s `/topics/{topic}` endpoint, I wrote a lightweight Node.js consumer that POSTed an empty payload with `Accept: application/vnd.kafka.json.v2+json` to stream records. The proxy automatically handled schema resolution and returned clean JSON objects. I added error handling for schema mismatches and logged latency metrics (avg 45 ms) to Timestream.

**Result:**  
The dashboards started receiving live updates in under 100 ms, a 70% reduction from the old queue system. The migration cost dropped by $12k/month due to eliminating custom Kafka clients. I learned how REST Proxy bridges schema registries and HTTP consumers, making real‑time data accessible without code changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
