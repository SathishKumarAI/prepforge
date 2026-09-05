---
qid: ing_e31f99090a__eli5__local
question: 'Explain: Prompt Injection and Defense — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 178
total_tokens: 335
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:19-05:00'
sources: []
---

**Prompt injection** is like giving a robot a recipe that says “make a cake” but secretly the recipe also tells it to drop a bomb. The robot follows the hidden instruction because it trusts everything in the prompt.

A **prompt‑injection defense** works like putting a smart filter over the recipe book. Imagine the filter as a spell‑checker that reads every sentence, looks for suspicious words (like “drop” or “bomb”), and rewrites them into harmless kitchen steps (“mix flour and sugar”). The robot never sees the dangerous part because the filter scrubs it out before the robot can act.

In this way, the system still follows user instructions but blocks any hidden commands that could cause harm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
