---
qid: vq_e0e0348a12__eli5__local
question: WHAT ARE PRIMARY AND FOREIGN KEYS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 182
total_tokens: 338
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:34-05:00'
sources: []
---

Think of a library where every book has a unique barcode.  
The **primary key** is that barcode—something that identifies one row (or book) exactly and never repeats in the same table. It’s like a person’s social‑security number for their record.

Now imagine you’re writing a catalog that lists each book’s author. The author’s name comes from another table, “Authors.” In the books table we store only that author’s barcode (the primary key from the Authors table). That stored value is a **foreign key**: it points back to another table’s primary key and guarantees that every author mentioned actually exists.

So, primary keys uniquely label rows in one table; foreign keys are references that link those rows to the unique labels of rows in another table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
