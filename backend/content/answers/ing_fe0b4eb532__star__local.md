---
qid: ing_fe0b4eb532__star__local
question: 'Explain: Reducing redundancy — What Is a Data Architecture? | IBM'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 320
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:52-05:00'
sources: []
---

**Situation:**  
In my previous role as a data engineer at a fintech startup, our transactional database grew from 2 GB to over 50 GB in one year. The “sales” table duplicated customer profiles across every transaction record, causing slow queries and inconsistent updates when a customer changed their address.

**Task:**  
I was tasked with redesigning the schema to eliminate redundancy while keeping read performance high for our daily sales reports.

**Action:**  
First, I mapped out the existing data flow using ER diagrams in Lucidchart. I identified that customer details could be extracted into a separate `customers` table and referenced via foreign keys. I then implemented a star‑schema: a central fact table (`sales_fact`) linked to dimension tables (`dim_customer`, `dim_product`). To preserve query speed, I created composite indexes on the foreign keys and materialized views for the most frequent report slices. Finally, I wrote migration scripts in Python with SQLAlchemy that de‑duplicated existing rows, populated the new dimensions, and updated all transaction records atomically.

**Result:**  
The refactored schema reduced storage by 70 % (from 50 GB to 15 GB) and cut query times for our daily sales dashboard from 45 seconds to under 5 seconds. I learned that thoughtful data architecture—separating facts from dimensions and enforcing referential integrity—both eliminates redundancy and drives performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
