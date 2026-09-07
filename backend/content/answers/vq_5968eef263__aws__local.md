---
qid: vq_5968eef263__aws__local
question: Mention the difference between an object and a class ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 399
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:42-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role building the **Data Lake pipeline for a fintech client**, I often had to explain OOP fundamentals to non‑technical stakeholders so they could understand why we chose **AWS Glue ETL jobs over custom scripts**.  
- **Situation:** Stakeholders asked, *“What’s the difference between an object and a class?”* because they were concerned about schema evolution in our Lake Formation catalog.  
- **Task:** Translate the concept into business terms while justifying our use of Glue’s dynamic frames (which are essentially objects).  
- **Action:** I explained that a **class** is a blueprint—an abstract definition of attributes and behaviors (e.g., `TransactionRecord` with fields like `id`, `amount`). An **object** is an instantiated copy of that class, carrying actual data for a single record. In Glue, each dynamic frame row is an object; the schema defined in the catalog is the class. This abstraction lets us add new columns (extend the class) without breaking existing objects or jobs.  
- **Result:** Stakeholders understood how we could *add a “risk_score” field* without re‑engineering downstream consumers, and the pipeline’s data quality metrics improved from 92 % to 99 % over two weeks.

**Leadership Principles Anchored:**  
1. **Customer Obsession** – clarify concepts for non‑technical customers.  
2. **Dive Deep** – link OOP theory directly to Glue’s implementation and Lake Formation schema management.

By framing the explanation around business impact, I showcased ownership, depth of knowledge, and a data‑driven outcome—exactly what a bar‑raiser looks for in an AWS interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
