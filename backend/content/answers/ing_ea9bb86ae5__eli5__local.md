---
qid: ing_ea9bb86ae5__eli5__local
question: 'Explain: Q: Explain GRPO and one of its known failure modes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 212
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:46-05:00'
sources: []
---

**GRPO (Generalized Reward‑Propagating Optimizer)** is a learning method that teaches an AI by letting it *propagate* feedback through the chain of actions it took.  
Imagine a long relay race where each runner passes a baton to the next. In GRPO, when the final runner finishes and receives applause (the reward), the applause signal travels backward along the runners’ hands—each one knows how much they contributed to the finish. The AI uses this backward flow to adjust every step it took.

**A known failure mode:**  
If the race is very long or has many branching paths, the applause can become *diffused* and weak by the time it reaches the first runner. Then early actions get little credit, so the AI may keep repeating bad early moves because it thinks they had no impact on the final applause. This “reward dilution” makes learning slow or stuck in poor strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
