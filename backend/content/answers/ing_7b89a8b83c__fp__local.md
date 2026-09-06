---
qid: ing_7b89a8b83c__fp__local
question: 'Explain: Vague Instructions — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 394
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:27:30-05:00'
sources: []
---

## Vague Instructions as an Anti‑Pattern

### The Core Problem  
When a user tells an AI *“make something better”* or *“do it more efficiently,”* the system must decide **what** “better” and “efficient” mean, how to measure them, and which trade‑offs are acceptable. Without explicit signals, the model can wander through an astronomically large space of interpretations, wasting compute and often producing outputs that satisfy no one’s real intent.

### Why Clarity Is Mandatory  
1. **Optimization Landscape** – Each objective (speed, accuracy, fairness) defines a different loss surface. A vague prompt merges these surfaces into a single ill‑posed problem with no gradient guidance.  
2. **Information Bottleneck** – The prompt is the only channel of information from user to model. If it carries low mutual information about the desired outcome, the posterior over possible completions collapses toward generic defaults.  
3. **Geometric Ambiguity** – Think of the instruction as a vector in semantic space. A vague vector points near the origin; its direction is unclear, so the model projects onto any nearby ridge of high probability.

### Non‑Obvious Insight  
Most people overlook that *vagueness amplifies the model’s prior biases.* In absence of explicit constraints, the AI defaults to the most frequent patterns in its training data. Thus a vague prompt can systematically skew results toward the developer’s implicit assumptions rather than the user’s true needs.

### Bottom Line  
Specify **what** you want, **how** to measure success, and **which trade‑offs** are acceptable. Only then does the AI have a well‑defined objective landscape to navigate efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
