---
qid: ing_60e4fa11ad__fp__local
question: 'Explain: AWS re:Invent 2018: Amazon DynamoDB Under the Hood: How We Built
  a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 511
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:31:33-05:00'
sources: []
---

**Why DynamoDB is “hyper‑scale”**

The core problem: a key‑value store must serve *millions of requests per second* with sub‑10 ms latency while guaranteeing strong consistency across any number of regions.  
A naïve single‑node design fails because disk I/O and network hops become bottlenecks; a pure in‑memory cluster fails to survive failures and cannot grow beyond the memory of one machine.

**Derivation from first principles**

1. **Data partitioning (sharding)** – each key is mapped by a hash to a *tablet* (a contiguous range of keys).  
   - This gives *linear scalability*: add more tablets, add more servers; load balances automatically.
2. **Local storage + SSD** – every tablet stores its own data on local SSDs.  
   - Avoids the “hot spot” problem: no single disk becomes a choke point because each server owns only a subset of keys.
3. **Synchronous replication to two other nodes** – for durability and availability.  
   - The *two‑plus‑one* rule ensures that even if one node crashes, another holds a recent copy; the third is needed for quorum writes.
4. **Lazy compaction & bloom filters** – keep read paths cheap: a small in‑memory index tells whether a key exists before touching disk.
5. **Global secondary indexes (GSIs)** are built as *parallel streams* that re‑index data asynchronously, keeping write latency low.

**Deeper principle**

The architecture is an instance of *consistent hashing + quorum consensus* applied to persistent storage. It turns the classic CAP trade‑off into a tunable “write‑through” model: you can choose *eventual consistency* for reads or *strong consistency* by waiting for all replicas, without redesigning the system.

**Non‑obvious insight**

Because each tablet is small enough to fit in local SSD cache, DynamoDB exploits *cache locality* at scale. Even though the data set may be terabytes, a request hits only one node’s SSD and an in‑memory bloom filter—so the majority of traffic never touches any network or disk beyond that node. This hidden “locality sweet spot” is what lets DynamoDB sustain 10 ms latency while scaling to billions of items.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
