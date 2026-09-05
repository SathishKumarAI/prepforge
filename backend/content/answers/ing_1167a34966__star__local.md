---
qid: ing_1167a34966__star__local
question: 'Explain: Index validation — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 351
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:03:33-05:00'
sources: []
---

**Situation**  
When I joined the data infrastructure team at Uber, our routing service was generating a new index for every user‑generated segment in real time—over 2 billion users, each with dozens of trips. The existing PostgreSQL cluster began choking on write latency and storage bloat; we needed a way to keep billions of indexes without blowing up the database.

**Task**  
Design and implement an index validation layer that could handle trillions of logical indexes while guaranteeing consistency and low overhead for our microservices.

**Action**  
I introduced LedgerStore, a lightweight append‑only log built on Amazon Kinesis and DynamoDB. Each service writes its intended index key to the stream; LedgerStore shards by hash bucket and persists entries in a compressed columnar format. For validation, I implemented a Bloom filter per shard that flags duplicates before they hit the write path, followed by an incremental Merkle tree for auditability. This allowed us to batch commits every 500 ms, reducing write amplification from ~10× to <2×. We also added a background reconciler that compared LedgerStore entries against the primary PostgreSQL index and automatically repaired any drift.

**Result**  
The new system handled >3 trillion logical indexes with an average validation latency of 12 ms per request, cutting routing‑service write times by 35%. Storage costs dropped 40% because we eliminated redundant physical indexes. I learned how to balance probabilistic data structures with auditability in a high‑throughput environment, and how to design for eventual consistency while keeping operational risk low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
