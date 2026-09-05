---
qid: ing_a210e8eda5__eli5__local
question: What are you using that lock for? — How to do distributed locking \u2014
  Martin Kleppmann\u2019s blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 225
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:34-05:00'
sources: []
---

Imagine a library where many students want to use the same single copy of a rare book. If everyone tried to grab it at once, chaos would ensue. A *distributed lock* is like a librarian who lets only one student hold the book at a time, even though the students are in different rooms and on different computers.

In a distributed system, many processes (think students) run on separate machines. They need exclusive access to shared resources—like a database row or a file—to avoid conflicts. The lock works by having a central coordinator that grants permission (“you’re next”) and then tracks who currently holds it. When the holder is finished, they release the lock so the next process can take over.

Key terms:  
- **Lock** – a promise that only one process can use a resource at a time.  
- **Distributed** – the processes live on separate computers or networked nodes.  

This simple librarian‑book metaphor captures how distributed locking keeps everyone playing nicely in a shared environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
