---
qid: ing_d0c2ae2b98__eli5__local
question: 'Explain: Rate limiting per identity, not per IP — Mcp Knowledge Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 205
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:06:05-05:00'
sources: []
---

Imagine a library that lets you borrow books but only a few at a time.  
If the rule says “one book per shelf,” then every desk on the same shelf can’t take more than one—regardless of who sits there. That’s like rate‑limiting by IP: all devices behind the same network address are treated as one user.

Now change the rule to “one book per library card.” Each person gets their own quota, even if they sit at different desks or share a computer. That’s rate‑limiting by identity. The system checks a unique ID (a token or account name) instead of the device’s address.  

So, with identity‑based limits, a single user can use many devices, but still cannot exceed their personal allowance. IP‑based limits can unfairly block everyone behind one router, while identity limits keep fairness for individual users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
