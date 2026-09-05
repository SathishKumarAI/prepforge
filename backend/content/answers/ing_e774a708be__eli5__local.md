---
qid: ing_e774a708be__eli5__local
question: 'Explain: Availability — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 227
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:11-05:00'
sources: []
---

Imagine a library that must decide how to serve its visitors, keep the books safe, and make sure everyone can find what they need at any time. The **CAP theorem** says a database (like that library) can only guarantee two of three things simultaneously:

* **Consistency** – every reader sees the exact same copy of the data, just as every patron would see the same book list.
* **Availability** – the system always responds to requests, like the library’s doors being open all day.
* **Partition tolerance** – the system still works even if a network “breaks” (like a road block that separates two branches).

When a network partition happens, you must choose which of consistency or availability to keep. If you prioritize **availability**, the database will continue answering queries—maybe with slightly out‑of‑date data—so users never see a dead lock. That’s the “availability” side of CAP: always give an answer, even if it might not be perfectly current.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
