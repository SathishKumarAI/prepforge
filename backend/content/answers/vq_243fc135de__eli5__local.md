---
qid: vq_243fc135de__eli5__local
question: Is there a simple, elegant way to define Singletons?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 251
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:40-05:00'
sources: []
---

Think of a singleton like a **single‑source water tap** that all your cups draw from. No matter how many times you ask for a new cup, the tap stays one and only one; every cup gets water from that same source.

In Python you can make this “tap” by creating a small helper that stores one instance in a special place (a dictionary or a module‑level variable). The first time your code asks for the object it builds it, remembers it, and returns that exact same object on every later request. Because all parts of your program use the same function to get the object, they automatically share the single instance.

Here’s the idea in plain steps:

1. **Define a factory function** that checks if an instance already exists.
2. If not, create it and store it in a hidden place (e.g., a private variable).
3. Return that stored instance every time the function is called.

This keeps the “single tap” logic out of your main code while still giving you one shared object—no fancy metaclasses or heavy patterns needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
