---
qid: ing_83e057af08__eli5__local
question: What are handoffs in multi-agent systems, and how do they differ from orchestration?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 196
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:05:51-05:00'
sources: []
---

Imagine a relay race where each runner has a baton (a task) that must be passed to the next teammate.  
In a **hand‑off**, one agent finishes its part, hands the baton to another, and then disappears from the race. The focus is on *who* takes over and *when* the hand‑over happens; it’s a simple “agent A → agent B” switch.

**Orchestration** is like a coach watching the whole field. The coach keeps all runners in mind, decides when each should start, how fast they should run, and coordinates them so the team finishes first. It manages multiple agents simultaneously, balancing resources and timing.

So, hand‑offs are single, local transfers of responsibility; orchestration is a global plan that schedules many such hand‑offs to keep the whole system running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
