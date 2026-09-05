---
qid: ing_c3cdb67180__eli5__local
question: 'Explain: Effect of Message Size — Benchmarking Apache Kafka: 2 Million
  Writes Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 270
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:46:24-05:00'
sources: []
---

Imagine you’re filling a train with parcels. Each parcel is a Kafka “message.” If every parcel is tiny (a single grain of sand), the train can carry thousands per minute because it takes little time to load and unload each one. But if each parcel is huge (like a full couch), the train slows down: it needs more space, longer loading times, and more effort to keep the wheels turning smoothly.

In Kafka’s benchmark, the “message size” plays exactly that role. Small messages let the broker push millions of writes per second because the network and disk can move data quickly. As you increase the message size, each write consumes more bandwidth and storage space, so the same machines can handle fewer messages per second—even if they’re cheap.

**Key terms**

- **Message:** a unit of data that Kafka stores and forwards.  
- **Broker:** a server that runs Kafka and holds partitions of topics.  
- **Throughput:** how many writes (or reads) happen in a given time.

So, the larger each message, the fewer messages per second the cheap machines can process—just like a train carrying fewer but heavier parcels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
