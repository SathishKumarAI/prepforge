---
qid: ing_f9500c23d9__eli5__local
question: 'Explain: Using time to solve consensus — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 279
total_tokens: 453
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:09:31-05:00'
sources: []
---

Think of a group of friends trying to decide who gets the last slice of pizza at a party that has no waiter. Each friend can only eat if they have the “pizza key.” To avoid fights, they agree on a simple rule: whoever asks for the key first must wait a short, agreed‑upon time before anyone else can claim it again.

In distributed systems this is called **distributed locking** with **time‑based consensus**. Each computer (node) that wants to use a shared resource sends a request to a tiny “lock server.” The lock server records the request’s timestamp and lets only one node hold the lock at any moment. If another node asks while the first still holds it, the second must wait until the first’s allotted time expires, then it can try again.

The key terms:  
- **Lock** – a promise that only one node may use a resource at once.  
- **Timestamp** – the exact clock reading when the request was made.  

By using the shared clock and respecting the waiting period, all nodes agree—without a human waiter—who owns the pizza (or the resource) at any given time. This keeps everyone honest and prevents conflicts in the absence of a central authority.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
