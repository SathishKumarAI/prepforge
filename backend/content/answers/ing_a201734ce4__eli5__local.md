---
qid: ing_a201734ce4__eli5__local
question: 'Explain: Fine-grained authorization — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 292
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:31-05:00'
sources: []
---

Think of a library that lets you borrow books only if you’re allowed to use the reading room, the computer lab, or the special‑collections wing. Fine‑grained authorization is the system that checks *exactly* which part of the library each visitor can touch and for how long.

In cloud‑native apps, five simple “laws” keep this check smooth:

1. **Least‑Privilege** – give a user only the doors they need; no extra keys.
2. **Separation of Duties** – don’t let one person open every door; split responsibilities among roles.
3. **Immutable Policies** – lock down rules in code so they can’t be changed on the fly, just like a signed library card.
4. **Contextual Awareness** – consider where you are (device, location) and when you’re here (time), much like a librarian asking for your membership level at checkout.
5. **Auditability** – keep a clear log of who entered which room, so if something goes wrong you can trace it.

These laws act as the library’s security guard: they make sure each request is examined against strict, unchangeable rules that know *who* you are and *where* you’re allowed to go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
