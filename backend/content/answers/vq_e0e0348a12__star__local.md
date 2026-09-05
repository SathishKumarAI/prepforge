---
qid: vq_e0e0348a12__star__local
question: WHAT ARE PRIMARY AND FOREIGN KEYS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 329
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:24:05-05:00'
sources: []
---

**Situation** – At my previous company we were migrating an on‑prem sales system to Azure SQL. The legacy tables had no enforced relationships; data was duplicated across multiple modules, and reports were inconsistent.  

**Task** – I needed to design a clean relational schema that would eliminate redundancy, enforce referential integrity, and support real‑time analytics for the new cloud platform.  

**Action** – First, I identified natural primary keys: `CustomerID` (GUID), `OrderID` (int identity), and `ProductSKU`. I added `PRIMARY KEY` constraints to these columns and created clustered indexes for faster lookups. For relationships, I introduced foreign keys: `Orders.CustomerID` REFERENCES `Customers(CustomerID)`, `OrderItems.OrderID` REFERENCES `Orders(OrderID)`, and `OrderItems.ProductSKU` REFERENCES `Products(SKU)`. I used `ON DELETE CASCADE` sparingly to avoid accidental data loss, preferring `SET NULL` where appropriate. During the migration script, I added `CHECK` constraints to validate that order totals matched line item sums.  

**Result** – After deployment, query performance improved by 35% on average, and data integrity errors dropped from dozens per week to zero. The new schema also made it trivial for BI developers to create star‑schema fact tables. I learned the importance of balancing strict enforcement with operational flexibility when choosing key strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
