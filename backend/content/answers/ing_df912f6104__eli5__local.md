---
qid: ing_df912f6104__eli5__local
question: 'Explain: Durability: — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 221
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:44-05:00'
sources: []
---

Think of a database like a **digital diary** that you keep in a safe place.  
When you write an entry (a transaction) you want to be sure it stays exactly how you wrote it, no matter what happens next.

*Durability* is the promise that once the diary says “yes, this entry is saved,” it will **always remain there**—even if the power goes out or the computer crashes.  
Imagine you write your name on a piece of paper and then drop it into a sealed envelope. Even if you later throw away the envelope, the name inside never disappears; it’s still safe.

In database terms, durability means that after a transaction commits, its changes are permanently recorded in stable storage (like disk or SSD). The system guarantees this even if the next moment brings an unexpected failure. It’s one of the four ACID properties—**Atomicity, Consistency, Isolation, Durability**—that make databases reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
