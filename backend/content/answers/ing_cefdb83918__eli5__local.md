---
qid: ing_cefdb83918__eli5__local
question: 'Explain: Action Sandboxing (E2B/Docker) — Agentic Security And Sandboxing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 211
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:03:13-05:00'
sources: []
---

Imagine your computer is a big kitchen and every program is a chef who can cook anything you ask. In an *action sandbox* (like the one used by E2B or Docker), each chef gets its own tiny, sealed pantry—only that pantry’s ingredients are visible to them. If a recipe asks for something dangerous, the chef can’t grab it because it isn’t in their pantry. The kitchen manager (the sandbox) watches over every move and stops any attempt to use forbidden tools or leave a mess outside the pantry.

In this way, an “agent” (the AI that decides what the chef does) stays safe: it can only act inside its own isolated space, so even if it misbehaves, it can’t affect the rest of the kitchen. This is *agentic security*—giving the agent power while protecting the system from harm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
