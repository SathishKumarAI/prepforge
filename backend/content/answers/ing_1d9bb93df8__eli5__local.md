---
qid: ing_1d9bb93df8__eli5__local
question: How do you sandbox a code-executing agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 262
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:23:16-05:00'
sources: []
---

Imagine your code‑executing agent is a curious robot in a big factory.  
The **sandbox** is like a small, isolated workshop inside that factory—its own room, its own power supply, and its own set of tools.  

1. **Isolation (the workshop walls)** – The agent runs inside a virtual machine or container so it can’t reach the factory’s main floor (your host system).  
2. **Resource limits (energy meter)** – You cap how much CPU time, memory, and disk space it can use; if it tries to over‑use them, its power is cut off.  
3. **Restricted I/O (locked doors)** – The agent can read only files you explicitly allow and can’t write or delete others. It also can’t open network sockets unless you whitelist the address.  
4. **Monitoring (security camera)** – A watchdog watches for suspicious actions—like trying to break out of the workshop—and stops the robot if it violates rules.

By combining these controls, the agent gets everything it needs to run its code but is kept safely inside its own “sandbox” so nothing harmful escapes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
