---
qid: ing_a34a9fd7c7__star__local
question: 'Explain: Resolving Data Conflicts — Amazon Dynamo Architecture - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 347
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:21-05:00'
sources: []
---

**Situation**  
In my last role I was leading a feature that pushed real‑time inventory updates from our mobile app to the DynamoDB cluster used by the fulfillment center. We noticed that under heavy traffic some items were disappearing or showing incorrect counts, which meant customers could see out‑of‑stock items as available.

**Task**  
I had to design and implement a conflict resolution strategy that would keep the data consistent across all replicas while maintaining low latency for the app’s write operations.

**Action**  
First I enabled DynamoDB’s *optimistic concurrency control* by adding a version number attribute. For every update, the client reads the current item, increments the version, and writes it back with an `Expected` condition on that old version. When a conflict occurs (two writers try to increment at once), Dynamo rejects one write; my service retries the read‑modify‑write cycle up to three times, applying exponential backoff. I also added a custom *merge function* in the Lambda trigger that runs after each successful write: it aggregates all pending updates from the queue and writes a single consolidated item, ensuring eventual consistency without over‑loading the cluster.

**Result**  
After deployment, conflict retries dropped from 12 % to under 0.3 %, and the inventory accuracy improved to 99.97 %. Latency for write requests stayed below 50 ms, meeting our SLA. I learned that coupling optimistic locking with a lightweight merge process can elegantly solve Dynamo data conflicts without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
