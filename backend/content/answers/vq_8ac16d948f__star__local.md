---
qid: vq_8ac16d948f__star__local
question: What are the different events in Triggers ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:33-05:00'
sources: []
---

**Situation:** In a recent migration of our e‑commerce platform to Azure SQL, we noticed that inventory counts were frequently out of sync with the order processing system. The production database was handling thousands of orders per minute, and any lag could lead to overselling.

**Task:** I needed to design an automated mechanism that would immediately adjust stock levels whenever an order row was inserted, updated, or deleted—ensuring data integrity without manual intervention.

**Action:** I implemented a set of SQL Server triggers on the `Orders` table:
- **AFTER INSERT**: Subtracts purchased quantities from the `Products.StockQty`.  
- **AFTER UPDATE**: Calculates the difference between old and new order amounts to adjust stock accordingly.  
- **AFTER DELETE**: Restores stock for cancelled orders.  
I also added a **FOR EACH ROW** clause to handle batch inserts, wrapped each trigger in a transaction, and used indexed computed columns on `Products` for fast lookups. To avoid recursion, I set `SET NOCOUNT ON` and checked the `TRIGGER_NESTLEVEL()`.

**Result:** After deployment, inventory accuracy improved from 93% to 99.9%, cutting back‑order incidents by 70%. The triggers also reduced manual reconciliation time from several hours per day to near zero. This exercise taught me how to balance trigger performance with transactional integrity in high‑throughput environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
