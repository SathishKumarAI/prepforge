---
qid: ing_544314d8f5__eli5__local
question: 'Explain: Types of RPC — Remote Procedure Call (RPC) in Operating System
  - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 232
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:50:25-05:00'
sources: []
---

Imagine you’re at a kitchen where everyone can send a “recipe request” to the chef and get back the dish without standing in line. In computing that’s a Remote Procedure Call (RPC). The *procedure* is just a function or method; *remote* means it lives on another computer; *call* is the request you send.

There are two main styles:

1. **Synchronous RPC** – You shout “Make me pasta!” and wait at the counter until the chef hands you the plate. Your program pauses until the answer arrives (blocking).

2. **Asynchronous RPC** – You say “Send me pizza when ready.” The chef sends a delivery number, you keep cooking other things, and later pick up your pizza when it’s done (non‑blocking).  

Think of synchronous as a phone call where you wait for an answer; asynchronous is like dropping a note in a mailbox. Both let programs use remote services the same way they’d use local functions, but the waiting strategy differs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
