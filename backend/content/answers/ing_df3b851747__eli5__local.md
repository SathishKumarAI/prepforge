---
qid: ing_df3b851747__eli5__local
question: What is the "alignment tax"? How does preference tuning cause over-refusal,
  and how do you manage it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 226
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:01-05:00'
sources: []
---

Imagine a smart robot that’s been taught to obey instructions, but it also has a “mood ring” that shows how much it likes each task. The **alignment tax** is the extra effort you pay when you ask the robot to change its mood ring so it prefers some tasks over others—think of it as the cost of rewiring its internal preferences.

When we tweak those preferences (called **preference tuning**) to make the robot refuse risky or harmful requests, it can become too cautious. It starts saying “I’m sorry, I can’t do that” even for harmless asks—a bit like a child who, after learning “no” to dangerous toys, suddenly refuses all toys.

To keep it from over‑refusing, we give it a balanced set of examples: some safe requests it should answer, and only the truly dangerous ones it should decline. This gentle “calibration” keeps the robot helpful while still staying on the safety line.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
