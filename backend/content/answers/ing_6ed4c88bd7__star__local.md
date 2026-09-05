---
qid: ing_6ed4c88bd7__star__local
question: 'Explain: What a Transaction Looks Like — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 297
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:09:04-05:00'
sources: []
---

**Situation:**  
At my last company we built an online marketplace where every purchase had to update inventory, user balances, and order logs—all within milliseconds. A single failed step meant a customer could see the wrong stock or be overcharged.

**Task:**  
I was tasked with designing a transaction layer that guaranteed ACID properties while keeping latency under 100 ms per request.

**Action:**  
I chose PostgreSQL for its native MVCC and WAL, wrapped each purchase in a single `BEGIN … COMMIT` block. I added optimistic locking on the inventory table (`SELECT ... FOR UPDATE`) to prevent lost updates, used a two‑phase commit across the payment gateway via a local transaction log, and leveraged write‑ahead logging to ensure durability. For isolation, I set the session to `READ COMMITTED` but added explicit row locks where necessary. I also implemented a retry mechanism for deadlocks, capped at three attempts.

**Result:**  
The system achieved 99.9% success rate on orders, reduced race‑condition errors from 2.3% to <0.01%, and maintained average latency of 78 ms. I learned that combining PostgreSQL’s ACID guarantees with careful lock management and retry logic can meet strict real‑time constraints without sacrificing data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
