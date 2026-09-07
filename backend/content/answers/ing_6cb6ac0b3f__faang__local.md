---
qid: ing_6cb6ac0b3f__faang__local
question: 'Explain: Metadata Request — Producerapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 516
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:09-05:00'
sources: []
---

**Clarify**

> *“Explain the Metadata Request in Kafka’s Producer API.”*  
> I’ll assume you want to know what a metadata request is, when it’s sent, and how the producer uses the reply to route records.

---

**Approach**

1. **Define the request/response pair.**  
2. **Describe the lifecycle: initial bootstrap → metadata fetch → cache update.**  
3. **Show key fields (topics, partitions, leaders).**  
4. **Explain usage in send() logic and error handling.**  

---

**Depth**

In Kafka, a *Metadata Request* is an RPC from the client to the broker asking for the current topology of one or more topics: topic names → partition count, leader broker ID, replica list, ISR.  
- The producer sends this on startup (or when it receives `UnknownTopicOrPartition` / `NotLeaderForPartition`).  
- Brokers reply with a *Metadata Response* containing:
  - **topic metadata**: name, partitions
  - **partition metadata**: id, leader, replicas, isr
  - **broker list**: host/port for each broker ID.  

The producer caches this map and uses it to pick the correct leader when `send()` is called. Complexity: O(1) lookup per partition; refresh cost is O(#topics * #partitions). Trade‑off: keeping cache fresh reduces latency but increases traffic.

---

**Edge Cases**

- **Stale metadata** → leads to retries or `TimeoutException`.  
- **Topic creation after send** → triggers another metadata request.  
- **Network partitions** → cached metadata may be out of date; the producer falls back to a random broker and fetches again.  

Testing: simulate broker failures, topic deletions, rapid partition changes.

---

**Optimize & Communicate**

To reduce load, producers can:
1. **Set `metadata.fetch.timeout.ms`** to control how long they wait for fresh data.
2. Use **topic-level cache invalidation** instead of full refresh on every error.  
When explaining, I’d narrate: “The producer’s first step is to ask the cluster what it knows about topics; it then keeps that snapshot and only updates when something changes or a send fails.” This shows clear problem‑solution flow, aligns with FAANG interview expectations, and stays within 160–240 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
