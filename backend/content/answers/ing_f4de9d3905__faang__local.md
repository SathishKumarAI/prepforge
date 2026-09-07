---
qid: ing_f4de9d3905__faang__local
question: 'Explain: up to five global secondary indexes so — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 502
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:09:25-05:00'
sources: []
---

**Clarify**  
You’re asking how DynamoDB can expose *up to five* global secondary indexes (GSIs) per table, what that means for data modeling and performance, and why the limit exists.

**Approach**  
1. Define a GSI: separate partition/sort key pair, projection type.  
2. Explain the storage & update path (write‑through).  
3. Discuss throughput allocation per index.  
4. Highlight the five‑index ceiling: design trade‑offs, cost, consistency guarantees.

**Depth**  
- **Structure**: A GSI is a physically separate table that receives every write to the base table. The primary key of the GSI can be any attribute(s). Each write copies the projected attributes into the index; updates are *eventually consistent* unless you request strong consistency on reads.  
- **Throughput**: Provisioned or on‑demand capacity is specified per GSI, independent of the base table. Reads/writes to a GSI consume its own read/write units.  
- **Storage**: GSIs live in the same partitioning scheme but can have different key distributions; they are replicated across partitions just like the main table.  
- **Limit rationale**: Five indexes balance *model flexibility* against *resource usage*. Each index incurs additional storage, write amplification (each base write touches up to five indexes), and per‑index capacity costs. A hard cap prevents runaway resource consumption while still covering most use cases.

**Edge Cases**  
- Highly skewed key distributions cause hot partitions in an index.  
- Updates that touch many attributes can exceed provisioned write units for all indexes simultaneously.  
- Using more than five indexes would require redesigning the table or merging logic into fewer GSIs.

**Optimize & Communicate**  
- **Batch writes** to reduce per‑index overhead.  
- **Projection type ALL** only when needed; otherwise use KEYS_ONLY or INCLUDE to cut storage and write cost.  
- **Read patterns**: keep most frequent queries on the base table; reserve GSIs for less common access paths.  

When explaining this, frame it as a trade‑off between *model expressiveness* and *operational overhead*, noting that the five‑index cap is a practical design decision to keep DynamoDB scalable while still offering powerful query flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
