---
qid: ing_9b5c791814__eli5__local
question: Design a secure architecture for an agent that reads untrusted web/email
  content AND has access to a user's private data. How do you defeat prompt injection
  by construction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 314
total_tokens: 493
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:47-05:00'
sources: []
---

Think of the agent as a chef who can read recipes (web/email) and use secret spices (user data). To avoid a malicious recipe that tells the chef to ruin the dish, we give him two separate kitchens.

**Kitchen A (sandbox)** is where the chef only sees the recipe. It has no access to the spice jar; it can only taste a tiny sample of each ingredient. The chef follows the recipe but cannot add any secret spices because the kitchen walls block them.

**Kitchen B (spice room)** holds all private data. Only trusted helpers that have been given explicit permission can enter this room, and they do so through a single “safe door” that only allows them to hand over one spice at a time and never lets the chef see the whole jar.

The two kitchens are connected by a **conveyor belt** that moves the final dish back for serving. The belt never carries any secret spices; it just delivers the finished meal. Because the chef never touches the private data directly, prompt injection (a malicious recipe trying to steal or misuse data) cannot succeed—there’s no path from the recipe kitchen to the spice room.

In short: isolate untrusted content in a sandboxed environment that can only “sample” user data through controlled, one‑at‑a‑time gates. That construction blocks injection by design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
