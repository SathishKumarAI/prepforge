---
qid: ing_dd754b78a8__eli5__local
question: 'Explain: 3.3 CA: Consistency + Availability — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 225
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:25:00-05:00'
sources: []
---

Imagine a library that can do three things at once: **Consistency** (everyone sees the same book list), **Availability** (the books are always ready to be borrowed), and **Partition tolerance** (the library still works even if some computers lose connection). The CAP theorem says you can’t have all three perfectly together.  

Think of a group chat where every message must reach everyone (consistency) while also being instant for anyone who opens the app (availability). If the internet splits into two islands (partition), the chat can either **wait** until both sides reconnect—keeping consistency but making the app seem slow (loss of availability)—or it can let each side send messages independently, which feels fast (high availability) but may cause two different “final” versions of the conversation (violating consistency).  

So in practice, designers pick whether their system will **always stay consistent** at the cost of being sometimes unavailable during splits, or keep it available while tolerating temporary differences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
