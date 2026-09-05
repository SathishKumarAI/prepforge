---
qid: vq_0e0d4e4dde__eli5__local
question: What are the types of views?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 266
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:30-05:00'
sources: []
---

Think of a database like a big library and a *view* as a special “reading desk” that shows you only the books you need.

**1. Virtual (normal) view** – Imagine a desk with a magnifying glass that pulls up pages from any book in the library whenever you ask for them. It never stores anything new; it just looks at the original shelves each time.  
**2. Materialized view** – Now picture a shelf that already holds copies of those selected pages, arranged and ready to hand out. This copy is refreshed only when you decide to rebuild it, so reading from it is faster but may be slightly out‑of‑date.

*Unavoidable terms:*  
- **View**: A virtual table defined by a query; it shows data without storing it.  
- **Materialized view**: A view that actually stores the result of its query on disk, speeding up access at the cost of extra storage and refresh effort.

These two types let you trade off speed versus freshness when pulling data for analysis or reporting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
