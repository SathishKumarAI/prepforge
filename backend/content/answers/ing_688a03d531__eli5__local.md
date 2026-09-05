---
qid: ing_688a03d531__eli5__local
question: 'Explain: Conclusion — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 252
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:27-05:00'
sources: []
---

Think of cloud‑native apps as a busy airport where passengers (users) need to board the right flight (service). **Authorization** is the security guard who checks each passenger’s ticket before letting them through.

The *five laws* are simple rules that guard uses:

1. **Least Privilege** – Passengers only get onto flights they’re paid for; no extra gates opened.
2. **Zero Trust** – Every check happens even if a passenger already passed the security checkpoint earlier; no “I’ve been here before” shortcut.
3. **Identity‑First** – The guard always asks who you are first, then looks at what flight you’re allowed to board.
4. **Contextual Awareness** – The guard considers where you’re coming from (location) and when (time), so a ticket that works in the morning may not work at night.
5. **Audit & Revocation** – All passes are logged; if a passenger’s status changes, their gate access is revoked immediately.

Together, these laws keep the “airport” safe by ensuring every user gets exactly what they’re allowed to use—no more, no less.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
