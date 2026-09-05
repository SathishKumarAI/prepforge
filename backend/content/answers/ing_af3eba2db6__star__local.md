---
qid: ing_af3eba2db6__star__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 375
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:22:45-05:00'
sources: []
---

**Situation**  
While working on a new feature for our recommendation engine, the team noticed that the latency of our data pipeline was creeping up past the SLA during peak traffic hours. We had to diagnose whether the issue stemmed from the data store or the processing layer.

**Task**  
I was tasked with documenting the key *state assumptions*—the implicit conditions we relied on about data freshness, consistency, and system load—that could be breaking under production loads, so we could design a more resilient architecture.

**Action**  
I started by mapping out all stateful components: our Redis cache, PostgreSQL replicas, and Kafka consumer group. I ran a series of load tests while logging metrics such as write latency, read consistency gaps, and consumer lag. By correlating these with the observed spikes, I identified that our assumption of “eventual consistency within 200 ms” was violated when the consumer lag exceeded 5 min. I then documented each assumption (e.g., cache TTL > 10 s, replica sync delay < 500 ms) and created a risk matrix highlighting how violations would propagate.

**Result**  
With the assumptions clearly laid out, we re‑architected the pipeline: added a dedicated consumer group for hot data, reduced cache TTL to 5 s, and switched to asynchronous writes for non‑critical fields. Latency dropped from 1.2 s to 0.4 s during peak hours (a 67% improvement), and our SLA compliance rose from 92% to 99.8%. I learned that explicitly stating state assumptions early in design prevents hidden bottlenecks and makes scalability decisions more transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
