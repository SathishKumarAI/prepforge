---
qid: ing_ce18dae2a1__eli5__local
question: 'Explain: Q119: A popular coding CLI was caught silently uploading entire
  repositories, secrets included, while its privacy toggle did nothing. Design telemetry
  for your own coding agent so this class of failure is impossible.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 252
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:01:54-05:00'
sources: []
---

Imagine your coding agent is a kitchen chef who never leaves the stove on when it’s not cooking. The problem that happened before was like a chef who, while chopping vegetables, accidentally opened the fridge and left all the food (including the secret spice mix) exposed to the air. To make this impossible, we give the chef two safeguards.

**1. “What’s in the pantry?” rule** – Before the chef starts any recipe, they must read the pantry list. If it contains a “Secret” label, the chef refuses to open that box unless an explicit, signed permission is given. This is the *access‑control policy* for secrets.

**2. “No accidental leaks” rule** – Every time the chef writes something out of the kitchen (saves a file, pushes code), a watchdog checks: “Did you just copy any item marked Secret?” If yes, it stops the action and logs an error. This is *data‑loss prevention*.

With these two rules in place—strict secret check before use and continuous leak detection—the chef can’t accidentally expose sensitive files, no matter how busy or automated the kitchen becomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
