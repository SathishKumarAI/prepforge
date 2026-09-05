---
qid: ing_f404e30329__eli5__local
question: 'Explain: In-Flight Batching (Prefill-Decode Fusion)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 181
total_tokens: 342
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:00:36-05:00'
sources: []
---

Imagine a chef preparing many dishes at once. The chef first gathers all the ingredients (prefilling) and places them on the counter. While the kitchen is busy, the chef then starts cooking each dish one by one (decoding). In‑flight batching does exactly this for an AI model: it loads many input “tokens” into memory ahead of time and keeps them ready while the model works through the next steps. The key trick is to keep the ingredients (inputs) and the cooking process (computation) tightly coupled, so the model can pull what it needs right when it’s needed, without waiting for new data or restarting from scratch. This speeds up generation because the AI keeps busy with multiple tasks in parallel, just like a chef who never leaves the stove idle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
