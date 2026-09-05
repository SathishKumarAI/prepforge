---
qid: vq_770eccd87d__fp__local
question: What is a View?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 337
total_tokens: 502
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:41:43-05:00'
sources: []
---

A *view* is the data‑engineering equivalent of a virtual table that satisfies a **query‑by‑definition** problem: “I need column X and Y from several tables, joined on key K, with filtering rule F.”  
Instead of materialising the result set, we store the *expression* that produces it. The underlying engine then **optimises** each access by pushing predicates, re‑ordering joins, or pulling only needed columns—an instance of the *declarative* optimization principle: *what* you want is separated from *how* to compute it.

Why must a view behave this way?  
1. **Consistency** – If source rows change, the view automatically reflects them; otherwise we would need expensive refresh jobs.  
2. **Encapsulation** – Business logic (e.g., “customer‑level revenue”) lives in one place, preventing duplication and easing maintenance.  
3. **Security** – By exposing only a subset of columns or rows, views enforce fine‑grained access control without altering the base tables.

A subtle insight: *views are lazy, not eager*. Many people assume they cache results; in fact, most systems re‑evaluate the view’s definition on every query, which can be more efficient than maintaining a materialised snapshot when source data is highly volatile. This laziness preserves correctness at the cost of compute time—a trade‑off that hinges on the *selectivity* and *cardinality* of the underlying predicates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
