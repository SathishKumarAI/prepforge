---
qid: ing_93323f9bb8__eli5__local
question: 'Explain: Secondary Indexes - DynamoDB — AWS-Services/1_Databases/AmazonDynamoDB/SecondaryIndexes.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 230
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:08-05:00'
sources: []
---

Imagine a library that stores books only by author name (the table’s primary key). If you want to find all books written in a specific year, the library would have to read every book one by one—slow and costly.  
A **secondary index** is like a separate shelf that lists books by publication year instead of author. The books themselves stay on the main shelf; the secondary shelf just keeps pointers (the same book IDs) sorted differently. When you ask “Show me all books from 2020,” DynamoDB looks straight at this extra shelf, finds the relevant pointers, and fetches those few items—fast and efficient.

**Key terms**
- **Primary key**: main way to locate an item in a table (e.g., author).
- **Secondary index**: an alternate lookup path that keeps item IDs sorted by another attribute (e.g., year).  
It does not duplicate data; it only stores references, so queries using the secondary key are quick without scanning the whole table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
