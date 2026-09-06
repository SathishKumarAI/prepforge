---
qid: ing_75ab38c545__fp__local
question: 'Explain: Performing highly targeted queries — Use vertical partitioning
  to scale data efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 399
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:15:15-05:00'
sources: []
---

**Why Amazon DynamoDB needs vertical partitioning for “highly‑targeted” queries**

The core problem is that DynamoDB’s capacity model is *per‑partition*; each table is sliced into 10 GB blocks (partitions) and every read or write must hit the right block. If a query scans many attributes of a wide row, it still consumes read capacity on all partitions that hold those rows—wasting throughput and raising costs.

Vertical partitioning solves this by *decoupling* hot, frequently queried columns from the rest of the data:

1. **Key design** – Create one table whose primary key is the natural query key (e.g., `UserId`) and contains only the attributes you need for the target query.
2. **Secondary tables** – Store the remaining attributes in separate tables that share the same partition key but are queried less often.

When a client asks “What’s this user’s name?” it reads from the small, hot table; the system never touches the large table that holds photos or logs. Because each read now consumes capacity only on one partition, throughput scales linearly with the number of users and costs drop dramatically.

**Non‑obvious insight:**  
Vertical partitioning turns *query locality* into a first‑class design principle. By aligning physical storage (partitions) with logical access patterns, you avoid “hot spots” not just in write traffic but also in read traffic—something that is often overlooked when people only think of hot writes. This alignment lets DynamoDB’s automatic sharding keep each partition balanced while still delivering sub‑millisecond reads for the most common queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
