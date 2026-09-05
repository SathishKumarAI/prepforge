---
qid: ing_7c2023a5d4__eli5__local
question: 'A generated note contains a medication the patient never mentioned. Treat
  that as a safety incident: how do you detect it before a clinician sees it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 207
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:53:31-05:00'
sources: []
---

Imagine your medical notes are like a recipe book that cooks up a dish for each patient. The chef (the AI) reads the ingredients list (what the patient says) and writes down the final meal (the note). If the chef accidentally adds an ingredient the cook never mentioned—say, a hidden spice—the finished dish could be dangerous.

To catch this “secret spice” before it reaches the kitchen counter, we set up two safety checkpoints:

1. **Ingredient‑list check** – The AI’s output is automatically compared to the patient’s own words. Any medication not present in that list raises an alarm.
2. **Expert taste test** – A clinician reviews the flagged note before it’s saved. If the extra drug appears, they can correct or remove it.

This two‑step filter—first a quick automated scan, then a human review—keeps patients safe while letting the AI help with documentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
