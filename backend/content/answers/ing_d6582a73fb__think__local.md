---
qid: ing_d6582a73fb__think__local
question: 'Explain: lot of people don''t really like very — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 213
output_tokens: 284
total_tokens: 497
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:04:16-05:00'
sources: []
---

**Answer**

The title “*Lot of people don’t really like very — The Many Meanings of Event‑Driven Architecture*” is a playful, truncated way of saying that many developers find **event‑driven architecture (EDA)** confusing or off‑putting because the term means *different things to different people*. In practice, EDA can refer to:

| Meaning | Core idea | Typical use |
|---------|-----------|-------------|
| **Event‑based programming** | Code reacts to events (button clicks, timers) | UI frameworks, simple scripts |
| **Message‑oriented middleware** | Applications communicate via asynchronous messages/queues | Microservices, distributed systems |
| **Domain‑event driven design** | Domain events capture business state changes; other parts react | CQRS + event sourcing, audit trails |
| **Reactive streams** | Back‑pressure‑aware data flow | High‑throughput pipelines (Kafka Streams, Akka) |

Because the same phrase covers all these patterns, people often “don’t like very” it—they feel it's vague or too broad. Martin Fowler’s talk clarifies that EDA is not a single technology but an umbrella term; understanding which meaning applies to your problem space helps avoid confusion and design mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
