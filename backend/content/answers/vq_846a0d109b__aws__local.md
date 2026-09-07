---
qid: vq_846a0d109b__aws__local
question: Can one only retrieve the Nth row from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 485
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:01:12-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked by product to “show the 10 000‑th user” on a massive users table (≈ 500 M rows). The requirement was to return that single row in < 200 ms, while keeping the service cost‑effective and highly available.

**Action**  
I first mapped the data model: each user had a monotonically increasing `user_id` (primary key). Rather than doing a full scan or ordering by non‑key columns, I leveraged **Amazon DynamoDB** with an auto‑incrementing counter table (`UserSequence`) that stored the current max ID. Using **DynamoDB Global Secondary Indexes** on `user_rank`, I could directly fetch the Nth item via a key lookup. For very large ranks I added a small “shard” prefix to spread writes and avoid hot partitions, keeping read latency < 30 ms.

I also implemented a **fallback cache layer** in Amazon ElastiCache (Redis) that kept the last 10 k rows for ultra‑fast reads during peak traffic. The system automatically refreshed every hour from DynamoDB.

**Result**  
The feature hit its SLA: 99.9% of requests returned within 150 ms, and cost per request dropped by **35%** compared to the original MySQL scan approach. User feedback improved, leading to a 12% lift in conversion on the page that displayed the Nth user.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for redesigning the data path and managing cross‑service integration.
- **Dive Deep** – I profiled latency, identified hot spots, and tuned DynamoDB partitions and cache TTLs.  
- **Deliver Results** – Quantified performance gains and cost savings were clearly measurable.

---

### What a Bar‑Raiser Looks For
- Clear ownership of the problem space.  
- Technical depth: justification of DynamoDB vs RDS, shard strategy, caching trade‑offs.  
- Data‑driven impact (latency, cost, conversion).  
- Reflection on failure: earlier attempts with RDS failed due to table scan bottlenecks; learning led to NoSQL + cache combo.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
