---
qid: ing_6302e2169f__eli5__local
question: 'Explain: The Common Misreading — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 271
total_tokens: 432
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:12:54-05:00'
sources: []
---

**CAP the “three‑card” rule**

Imagine you’re playing a game with three friends, each holding one card: **Consistency (C)**, **Availability (A)**, and **Partition Tolerance (P)**. In a perfect world, you could hold all three cards at once, but the rules of the game say that if a friend leaves the room (a network “partition”), you can’t keep every card in play forever.

The *common misreading* is thinking CAP says “pick two and ignore the third.” That’s not true. The theorem simply tells us: **in any distributed system, at most two of those three guarantees can be satisfied simultaneously when a partition occurs**. If you choose C+P (the database always agrees on data, even if it goes offline), you sacrifice A—some users may get no response. If you choose A+P, you sacrifice strict consistency—different users might see different data. The third card is the trade‑off you accept.

So CAP isn’t a “choose two” rule; it’s a reminder that partitions force us to decide which guarantees matter most for our application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
