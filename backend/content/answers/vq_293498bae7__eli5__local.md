---
qid: vq_293498bae7__eli5__local
question: What are the four different types of searching information in a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 277
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:06:40-05:00'
sources: []
---

Imagine your data table is a giant library shelf filled with books. When you want to find a book, you can use four different “search keys” that the librarian (the database) understands:

1. **Exact‑match search** – like looking for the exact title “Moby‑Dick.” The system checks only the rows whose key field equals that value.  
2. **Range search** – like asking for all books published between 1900 and 1950. The engine scans rows whose numeric or date column falls inside that interval.  
3. **Pattern (wildcard) search** – similar to “books starting with ‘A’.” The query uses symbols such as `%` or `*` to match any sequence of characters, letting the database sift through many possibilities.  
4. **Full‑text search** – think of a word‑finder that reads every page for a keyword like “adventure.” It indexes words inside text columns and retrieves rows where those words appear.

Each method tells the database how to narrow down the shelf, just as different library cards help you locate exactly what you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
