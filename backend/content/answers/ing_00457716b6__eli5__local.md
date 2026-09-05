---
qid: ing_00457716b6__eli5__local
question: 'Q: Why are naive retries and checkpoints insufficient for a production
  agent with side effects?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 278
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:35:42-05:00'
sources: []
---

Think of a production agent as a chef in a busy kitchen who can order ingredients, cook dishes, and serve customers.  
A **side effect** is like the chef’s actions that change the world: ordering more stock, turning on lights, or sending an email to a supplier. These changes persist even if the recipe later fails.

If the chef only uses **naive retries** (trying the same step again) or **checkpoints** (saving the kitchen state), problems arise:

* **Retries** may repeat the same mistake—ordering extra ingredients that are now out of stock, or over‑cooking a dish that was already served.
* **Checkpoints** capture the state *before* the side effect, so when you roll back you undo the cooking but not the order placed, leaving suppliers waiting and inventory misaligned.

A production agent must therefore keep an accurate log of every external change (a “transaction record”) and be able to **compensate**—undo or adjust those side effects if later steps fail. Only then does the system stay consistent, much like a chef who keeps track of orders so that any mishap can be corrected without wasting food or confusing customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
