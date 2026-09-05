---
qid: ing_be63ac8193__eli5__local
question: 'Explain: Types of CoT prompts — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 278
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:56-05:00'
sources: []
---

Imagine you’re giving a recipe to a robot chef that can only cook if it first thinks through the steps. **Chain‑of‑Thought (CoT) prompts** are like different ways you write that recipe, telling the chef how much detail and structure to follow.

| Prompt type | What it does | Recipe analogy |
|-------------|--------------|----------------|
| **Plain prompt** | “Make a sandwich.” | Just says the final dish. The chef jumps straight to slicing bread. |
| **CoT prompt** | “First, lay out bread… Then spread peanut butter…” | Gives step‑by‑step instructions, so the chef thinks about each action before doing it. |
| **Self‑consistent CoT** | Repeats the steps many times and picks the most common sequence. | The chef writes several versions of the recipe, then chooses the one that appears in all. |
| **Few‑shot CoT** | Shows a few example recipes first. | Gives the chef sample sandwiches to learn from before writing its own. |

In all cases, the goal is the same: help the model “think” through the reasoning, just like a chef follows a clear recipe to avoid burning the toast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
