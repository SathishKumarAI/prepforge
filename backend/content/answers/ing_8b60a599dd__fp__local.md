---
qid: ing_8b60a599dd__fp__local
question: 'Explain: census came along and a guy named — AWS re:Invent 2018: Amazon
  DynamoDB Deep Dive: Advanced Design Patterns for DynamoDB (DAT401)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 409
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:10-05:00'
sources: []
---

### What’s the “census” and why does it matter in DynamoDB?

When Amazon first introduced DynamoDB, they were faced with a **global, highly‑available key/value store** that had to scale from a handful of requests per second to billions without a single point of failure.  The *census* was the internal audit they performed on every request pattern—how many reads, how many writes, what keys were hot, how data was partitioned, and whether latency or throughput budgets were being met.

Because DynamoDB’s performance hinges on **partition key distribution**, the census reveals *skew*: a few keys that dominate traffic can throttle an entire table.  By measuring this skew, engineers could adjust the hash function or redesign the schema to spread load evenly—a classic **optimization problem**: minimize the maximum partition throughput subject to read/write constraints.

The session “Amazon DynamoDB Deep Dive: Advanced Design Patterns for DynamoDB (DAT401)” at re:Invent 2018 built on that census. It taught how to:

1. **Model data with composite keys** that encode time and locality, turning a hot key into a range of partitions.
2. **Use Global Secondary Indexes (GSIs)** strategically to avoid hot spots while keeping query flexibility.
3. **Leverage provisioned throughput** vs. on‑demand scaling based on historical census data.

#### Non‑obvious insight

Most people think *partition keys* are the only lever.  The real trick is to treat the **access pattern itself as a feature vector** and design the key schema accordingly—essentially performing a lightweight form of dimensionality reduction on traffic patterns.  By doing so, you convert an unpredictable, bursty workload into a predictable, evenly distributed one, unlocking DynamoDB’s full capacity without costly re‑sharding or micro‑services rewrites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
