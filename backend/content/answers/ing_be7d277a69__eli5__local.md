---
qid: ing_be7d277a69__eli5__local
question: 'Explain: Sort mode example usage — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 242
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:08-05:00'
sources: []
---

**Sorting in Elasticsearch – like a library’s “most popular books” shelf**

Imagine a huge digital library (Elasticsearch) that can instantly pull out thousands of books (search results). After the librarian lists all matching titles, you might want them arranged by how often people read them—“best‑sellers first.” That ordering is *sorting*.

- **Sort mode**: When a field can hold many values per book (e.g., multiple tags or ratings), sort mode decides which value to use for the order.  
  - **min** – pick the lowest number (cheapest price).  
  - **max** – pick the highest number (best rating).  
  - **avg** – average of all numbers (average review score).  
  - **sum** – total of all numbers (total pages across editions).

Elasticsearch lets you choose the mode that best fits your “most popular” goal. It’s just a way to tell the system, “When I list these books, rank them by this chosen number.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
