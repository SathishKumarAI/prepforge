---
qid: ing_43c3327619__eli5__local
question: 'Explain: Consistency — CAP Theorem: One of the Most Misunderstood Terms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 184
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:24:04-05:00'
sources: []
---

**Consistency (in the CAP Theorem)**  
Think of a library that keeps copies of every book on many shelves in different rooms. If you ask for “the latest edition of *Algorithms*,” **consistency** means every room shows you the same copy at the same time—no one gets an old version while another sees the newest.  

In computer terms, consistency is the guarantee that when a user reads data after it has been written, they always see that write (or a later one). It’s not about how fast the system is (latency) or whether all rooms are reachable (availability), just that everyone agrees on what the data looks like right now.  

So, consistency in CAP is simply: *after a write finishes, every reader sees that write immediately.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
