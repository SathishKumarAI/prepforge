---
qid: ing_c25c69cc36__eli5__local
question: 'Explain: Replication — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 228
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:44:08-05:00'
sources: []
---

Imagine your database is a library that keeps growing every day. **Replication** is like hiring extra librarians who copy the entire book collection so everyone can read from their own shelf without waiting for the original to finish a task.  

When you want more “librarians” (database servers), you simply add another copy of the books (data) and let all visitors choose any librarian’s shelf. The system automatically keeps each copy in sync: every time someone adds, updates, or deletes a book, the change is sent to all copies.  

Key terms:  
- **Database** – a structured file that stores data like a catalog.  
- **Replication** – making identical copies of that database on other servers.  
- **Scalability** – adding more copies so the system can handle more users or data without slowing down.  

By spreading the workload across many replicas, your “library” stays fast and reliable even as it grows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
