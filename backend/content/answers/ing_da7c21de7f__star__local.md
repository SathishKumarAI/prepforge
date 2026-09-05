---
qid: ing_da7c21de7f__star__local
question: 'Explain: Transactions — Cloud Spanner Database - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:45:03-05:00'
sources: []
---

**Situation**  
At my previous company we were building a global e‑commerce platform that needed to support millions of concurrent purchases while keeping inventory, orders and payments perfectly consistent across all regions. We chose Cloud Spanner because it promised strong consistency at scale.

**Task**  
I had to design the transaction layer for order placement: deduct stock, create an order record, and lock the payment method in a single atomic operation, all within 50 ms latency, even under peak traffic.

**Action**  
I leveraged Spanner’s two‑phase commit (2PC) internally by using a single `BEGIN TRANSACTION` statement that spanned multiple tables (`Inventory`, `Orders`, `Payments`). I used the “row‑level” transaction feature to keep contention low: each order touched only its own SKU rows. To reduce write amplification, I batch inventory updates for bulk restocks and applied optimistic concurrency checks on a `version` column. I also tuned Spanner’s read/write consistency by setting `Strong` reads for inventory but `ReadCommitted` for payment status, balancing latency and correctness.

**Result**  
The new transaction flow cut order‑placement latency from 120 ms to 42 ms and reduced abort rates from 8% to <1%. We handled a 10× traffic spike during a flash sale without any lost or duplicated orders. This experience taught me how Spanner’s built‑in distributed transactions can be engineered for real‑world, high‑volume e‑commerce workloads while keeping code simple and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
