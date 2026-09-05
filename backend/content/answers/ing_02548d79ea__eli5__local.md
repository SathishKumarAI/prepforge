---
qid: ing_02548d79ea__eli5__local
question: 'Explain: Pitfall 2: Ambiguous Ground Truth — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 227
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:38:45-05:00'
sources: []
---

Imagine a game where the goal is “build a good bridge.” The judge says a bridge is good if it can carry a truck, but sometimes they only test it with a bike. If we use that shaky rule to grade our AI’s design skills, we’ll think the model is great when it really isn’t strong enough for real trucks. That’s **ambiguous ground truth**: the benchmark (the “bridge” test) doesn’t clearly define what success means, so we can misjudge the AI’s true ability.

In practice, researchers set up tests like “answer a math question.” If they let the model answer only easy ones or give vague answers that still pass the check, we think the model is smart. But it might just be guessing or using shortcuts. To avoid this pitfall, the test must specify exactly what counts as correct—like requiring the bridge to carry a truck and measuring load accurately—so the AI’s real skill is truly measured.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
