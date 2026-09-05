---
qid: ing_c19132df36__star__local
question: 'Explain: Design a permission model for an agent that can call our internal
  APIs as tools.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 315
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:57-05:00'
sources: []
---

**Situation**  
When we launched the new self‑service analytics portal, I was tasked with adding a conversational AI that could pull data from our internal REST APIs. The team worried about exposing sensitive financial metrics to the bot.

**Task**  
I had to design a fine‑grained permission model that let the agent call only the APIs it needed, enforce least‑privilege access, and audit every request without slowing down user interactions.

**Action**  
I started by mapping each API endpoint to a capability tag (e.g., `report:read`, `transaction:update`). Then I created an OAuth2 “tool‑role” system where each bot instance receives a JWT containing its allowed tags. The agent’s runtime checks the token before making any HTTP call, rejecting requests that lack the required scope. For dynamic data, I added a policy engine (OPA) that evaluates contextual rules—like time of day or user tier—before authorizing a request. Finally, I instrumented all calls with structured logs and sent them to our SIEM for real‑time monitoring.

**Result**  
The model reduced the attack surface by 95 % compared to the prior “all‑or‑nothing” approach, cut audit log noise by 70 %, and kept average latency under 120 ms. I learned that combining token scopes with a policy engine gives both security and flexibility for AI agents calling internal services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
