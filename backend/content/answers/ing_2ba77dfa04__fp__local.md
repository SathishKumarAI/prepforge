---
qid: ing_2ba77dfa04__fp__local
question: 'Explain: Shared-nothing architecture — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 382
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:26-05:00'
sources: []
---

**Why we shard a database**

At the core of any database is *data locality*: every query touches only the rows it needs.  
When a table grows beyond what a single machine can store or process, the *latency* and *throughput* explode because every request must travel across a bottlenecked network link to that one node.  

**Shared‑nothing architecture solves this by partitioning the data set into disjoint “shards.”**  
Each shard runs on its own server (or cluster), with its own CPU, memory, storage, and network stack—hence *shared‑nothing*.  
A query now hops only to the shard that holds the relevant keys, eliminating cross‑node traffic.  

**The deeper principle: locality‑aware optimization**  
Sharding is an application of *divide‑and‑conquer* from algorithm design: split a huge problem into independent subproblems that can be solved in parallel.  
Because network I/O dominates cost at scale, the optimal solution minimizes inter‑shard communication—exactly what sharding achieves.

**Non‑obvious insight**

Many people think sharding is simply “split data by key.” In reality, *the choice of partition function directly governs load balance and fault isolation*.  
A poor hash (e.g., hashing on a slowly changing column) can create hot spots that defeat the shared‑nothing promise.  
Thus, **sharding isn’t just storage; it’s a careful design of data placement to preserve parallelism while preventing contention**.

In AWS, this is implemented with services like DynamoDB or Aurora Serverless Global Databases, where sharding is abstracted but still hinges on the same principles above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
