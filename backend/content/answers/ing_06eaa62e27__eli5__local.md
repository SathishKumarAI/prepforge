---
qid: ing_06eaa62e27__eli5__local
question: Design a Text2SQL agent for business users querying a warehouse with 5,000
  tables. What's hard, and how do you evaluate it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 300
total_tokens: 476
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:35-05:00'
sources: []
---

Imagine a giant library where every book is a table of data—there are 5,000 books! A Text2SQL agent is like a super‑smart librarian who listens to a question (“How many sales were made last month in New York?”) and then writes the exact recipe (SQL query) that pulls the answer from the right books.

**What’s hard?**

1. **Finding the right book** – The system must decide which of 5,000 tables contain “sales” or “New York.”  
2. **Understanding language quirks** – Users may ask in many ways; the agent needs to map words like “last month” to a date range.  
3. **Building correct recipes** – It has to join tables correctly, handle filters and aggregates, and avoid syntax mistakes.

**How do we evaluate it?**

- **Accuracy test set:** Give it real questions and see if the produced query returns the same answer as a human‑written one.  
- **Speed & scalability:** Measure how long it takes on a 5,000‑table catalog.  
- **User satisfaction survey:** Ask business users whether the answers were useful and easy to understand.

If the agent passes these tests, you know it’s ready to help real people pull insights from the data warehouse without needing SQL knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
