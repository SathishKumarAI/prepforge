---
qid: ing_125fa64a66__eli5__local
question: Design a customer-facing agent for an airline that can cancel and rebook
  flights. How do you keep it from violating fare policy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 248
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:49-05:00'
sources: []
---

Imagine the airline’s booking system as a library with special rules about borrowing books (the “fare policy”). The customer‑facing agent is like a helpful librarian who can take a book back and give a different one, but only if it follows the library’s policies.

**How to keep the agent honest**

1. **Rule‑book check** – Before the agent cancels or rebooks, it reads the fare policy (the “rules file”) for that ticket: how many changes are allowed, any fees, and blackout dates.
2. **Permission flag** – The agent sets a “change permission” flag on the ticket. If the flag says “no change,” the agent refuses to act or asks the customer to contact human support.
3. **Audit trail** – Every action is logged with time, user ID, and the rule that allowed it. This lets the airline see exactly why a cancellation was accepted.

By treating each ticket like a library book that must be returned in good condition before a new one can be borrowed, the agent stays within fare policy while still helping customers smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
