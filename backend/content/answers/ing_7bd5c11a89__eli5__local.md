---
qid: ing_7bd5c11a89__eli5__local
question: 'Explain: 2.1 Consistency — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 267
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:07-05:00'
sources: []
---

Think of a library that can serve books to many readers at once.  
The **CAP Theorem** says the library can guarantee only two out of three things:  

* **Consistency (C)** – every reader always sees the same version of a book.  
* **Availability (A)** – the library is always open and will give you a book immediately.  
* **Partition tolerance (P)** – even if part of the network breaks (a “partition”), the library still works.

Imagine you have two branches of the library connected by a bridge that sometimes collapses (the partition).  

If you want **Consistency**, you must wait until the bridge is fixed before letting anyone read the new edition; everyone sees the same copy, but the library may be down while waiting.  
If you choose **Availability** instead, each branch can serve books on its own even if the bridge is gone, but readers in different branches might see different editions (inconsistent).  

Thus, consistency means “all users see exactly the same data at the same time.” In a distributed system, you decide whether to keep that strict sameness or allow brief differences while keeping the service always reachable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
