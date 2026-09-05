---
qid: ing_a2c5d77118__eli5__local
question: 'Explain: Sandbox Implementation Options — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 265
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:55:53-05:00'
sources: []
---

Imagine your AI is like a chef preparing a fancy dish, but you want to keep the kitchen safe from spills and fire. A *sandbox* is a small, isolated workspace where the chef can test recipes without risking the whole kitchen.

There are two common ways to set up that sandbox:

1. **Separate‑Process Sandbox** – Think of it as giving the chef their own tiny, locked-out kitchen. All cooking happens inside, and the main kitchen stays untouched unless the chef deliberately brings a finished dish out. If something goes wrong—say a fire—it’s contained in the small kitchen.

2. **Virtual‑Environment Sandbox** – Here the chef works in the same big kitchen but wears a special “hazmat” suit that stops any mess from touching the rest of the space. The environment isolates the ingredients and tools, so even if the chef spills sauce, it doesn’t spread to other stations.

Both patterns let you experiment safely: one keeps the chef physically separated, the other protects the main kitchen with a barrier. Pick the one that best fits your safety needs and how much “kitchen space” (compute resources) you’re willing to dedicate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
