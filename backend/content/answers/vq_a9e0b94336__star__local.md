---
qid: vq_a9e0b94336__star__local
question: WHAT ARE SQL TRIGGERS, AND WHEN SHOULD THEY BE USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 331
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:54-05:00'
sources: []
---

**Situation:**  
At my last role I was revamping the order‑processing database for an e‑commerce client. Their monthly batch job was inserting new orders and then running a separate script to update inventory counts. The job often ran out of time, causing inventory numbers to lag by hours and leading to oversold items.

**Task:**  
I needed to ensure that every time an order row was inserted or updated, the related product stock level was adjusted instantly and accurately, without relying on external scripts or risking race conditions.

**Action:**  
I designed a set of SQL triggers: an `AFTER INSERT` trigger on the `Orders` table that decremented `Products.stock_qty`, and an `AFTER UPDATE` trigger that handled quantity changes by comparing old and new values. I used transactional logic inside the triggers to roll back both operations if stock fell below zero, preventing negative inventory. I also added a logging trigger on `OrderEvents` for audit purposes. All triggers were written in PL/pgSQL with proper error handling and minimal locking to keep performance high.

**Result:**  
Inventory updates became instantaneous—stock counts reflected orders within milliseconds. The client saw a 30 % reduction in out‑of‑stock incidents, and the batch job no longer needed the costly post‑processing step. I learned that triggers are powerful for enforcing business rules at the database level when consistency is critical and can replace fragile application‑side logic if designed carefully.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
