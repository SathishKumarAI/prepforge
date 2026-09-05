---
qid: vq_d64400701c__eli5__local
question: What is normalization? What are the types?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 266
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:29:49-05:00'
sources: []
---

Imagine you’re tidying a messy kitchen.  
Each cupboard should hold only one type of item—spices go in one shelf, canned goods in another, and baking supplies elsewhere. If you keep all the items together, it’s hard to find anything and you’ll often spill things when adding new stock.

In databases, **normalization** is that same tidying process: we organize data into separate tables so each table stores only one kind of information (one “entity”) and keeps records unique.  

The main stages are:

1. **First Normal Form (1NF)** – every column holds a single value; no repeating groups.  
2. **Second Normal Form (2NF)** – all non‑key data depends on the whole primary key, not just part of it.  
3. **Third Normal Form (3NF)** – no non‑key data can be derived from other non‑key data.

Higher levels exist (BCNF, 4NF, etc.) for more complex rules, but most everyday tables stop at 3NF.  

Just like a well‑organized kitchen makes cooking easier, a normalized database keeps data consistent and efficient to query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
