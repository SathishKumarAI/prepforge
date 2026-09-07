---
qid: vq_793bdd839b__aws__local
question: WHAT IS A COMPOSITE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 402
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:57-05:00'
sources: []
---

**Composite Key – Amazon‑style Answer**

> **Leadership Principles:** *Ownership* & *Dive Deep*

**Situation**  
In a recent migration of our legacy on‑prem database to Aurora Serverless, I discovered that the `Orders` table was suffering from hot spots and slow queries. The primary key was just `OrderID`, but we were often filtering by `CustomerID` and `CreatedAt`.  

**Task**  
Redesign the key strategy so that read traffic could be distributed evenly while still guaranteeing uniqueness.

**Action**  
I proposed a **composite key**:  
- **Partition key:** `CustomerID` – spreads data across shards.  
- **Sort key:** `CreatedAt` (ISO 8601 string) – preserves chronological order and allows range queries.  

Implemented in Aurora MySQL with the `PRIMARY KEY (CustomerID, CreatedAt)` syntax. Added a secondary GSI on `(OrderID)` for legacy lookups.  

I ran performance tests:  
- *Before:* 200 ms avg read latency, 1.3× CPU usage during peak hours.  
- *After:* 45 ms avg latency, CPU down to 0.6×; query cost dropped from $12/day to $4/day.

**Result**  
The new composite key eliminated write contention, cut read latency by **77%**, and reduced operating costs by **67%** while maintaining data integrity—demonstrating ownership of the system’s health and diving deep into database design.  

---

### Key Takeaway
A composite key is a multi‑column primary key that distributes data across partitions (for scalability) and orders rows within each partition (for efficient range queries). It balances **availability**, **performance**, and **cost** in large, distributed databases like Aurora or DynamoDB.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
