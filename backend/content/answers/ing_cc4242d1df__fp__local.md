---
qid: ing_cc4242d1df__fp__local
question: 'Explain: Wish lists revisited — Use vertical partitioning to scale data
  efficiently in Amazon DynamoDB | AWS Database Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 446
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:39-05:00'
sources: []
---

**Why “wish lists” need a new layout**

A wish‑list is a *many‑to‑one* relation: one user may own thousands of items, but any single item appears in only a few lists.  
When DynamoDB stores the whole list as one item (the classic *horizontal* partition), the hot key problem appears: every read/write for that user touches the same partition key, exhausting its throughput and causing throttling.

**Vertical partitioning solves it by decomposing the logical record into independent columns**

1. **Primary table** – `UserID + ListID` → list metadata (title, last‑updated).  
2. **Item table** – `UserID + ItemID` → item details, indexed by `ListID`.  

Now reads of a single user’s lists hit only the first table; scans over items use the second table and are spread across many partition keys (`ItemID`). The throughput is *distributed* rather than concentrated.

**Deep principle: locality vs. contention**

- **Locality** – each request touches a small, relevant slice of data.  
- **Contention** – DynamoDB limits 3 000 RCU/WCU per physical partition; spreading items across many keys reduces contention linearly with the number of unique `ItemID`s.

The non‑obvious insight: *vertical partitioning turns a write‑heavy “fan‑out” problem into a read‑heavy “fan‑in” one, which DynamoDB handles better because writes are less expensive than reads when the data is spread.*

**Result**

- Throughput scales with the number of items rather than users.  
- Cost per operation drops as hot keys disappear.  
- The schema remains flexible: new attributes can be added to either table without affecting the other.

Thus, by re‑thinking the wish‑list as a set of vertically partitioned tables, Amazon DynamoDB turns a classic bottleneck into a scalable design that respects its underlying throughput model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
