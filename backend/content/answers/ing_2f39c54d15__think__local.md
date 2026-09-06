---
qid: ing_2f39c54d15__think__local
question: 'Explain: Subscription — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 577
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:47:24-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm that “Subscription – Pub/Sub” refers to a publish‑subscribe messaging pattern used in distributed systems (e.g., Kafka, Google Cloud Pub/Sub).  
   - Assume we need to design a system that decouples producers from consumers, supports high throughput, durability, and at‑least‑once delivery.  
   - Note constraints: latency tolerance, scaling requirements, fault tolerance, message ordering needs.

**2. Adopt a mental model / framework**  
   - Use the *Decouple + Buffer* pattern: producers publish to topics; subscribers consume from subscriptions (queues).  
   - Apply the *Publish–Subscribe System Design Checklist*: topic partitioning, broker placement, load balancing, back‑pressure handling, data retention, and security.  
   - Think in terms of components: Publisher API, Broker cluster, Topic metadata store, Subscription manager, Consumer clients.

**3. Step‑by‑step reasoning toward the design**  
   1. Define the **topic abstraction** (metadata, partitions).  
   2. Decide on **partitioning strategy** (hash key, round‑robin) to enable parallelism.  
   3. Design the **broker architecture**: replicated logs for durability, leader election, and sharding across nodes.  
   4. Implement **subscription logic**: each consumer group gets a unique offset per partition; use checkpoints for at‑least‑once semantics.  
   5. Add **back‑pressure mechanisms** (buffer limits, flow control).  
   6. Secure the system with authentication/authorization and encryption in transit.  
   7. Provide **monitoring & observability**: metrics on lag, throughput, errors.

**4. Common traps to avoid**  
   - *Assuming all consumers need identical data*: ignore consumer group semantics.  
   - *Over‑optimizing for latency at the expense of durability*: balance replication factor vs. write speed.  
   - *Neglecting offset management*: leads to message loss or duplication.  
   - *Ignoring partition skew*: uneven load can bottleneck brokers.

**5. Sanity‑check & verbalize**  
   - Re‑examine each requirement: Does the design meet scalability, durability, and ordering?  
   - Run a mental scenario (e.g., a burst of 10k publishes per second) to test back‑pressure logic.  
   - Summarize key decisions aloud: “We’ll use a replicated log with partitioned topics; consumers will belong to groups that maintain offsets, ensuring at‑least‑once delivery and horizontal scalability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
