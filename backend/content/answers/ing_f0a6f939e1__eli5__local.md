---
qid: ing_f0a6f939e1__eli5__local
question: Your new prompt improves aggregate pass rate by 3 points, but one customer
  segment drops 8. How do you catch this before shipping, and what do you do about
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 257
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:55:30-05:00'
sources: []
---

Imagine your AI is a recipe that everyone will eat.  
You add a new spice (the prompt) that makes the dish tastier overall—average diners rate it three points higher. But a small group of diners who only like very mild food suddenly find it too strong and stop eating, dropping their satisfaction by eight points.

**How to catch this early**  
1. **Segmented tasting tests** – Run A/B experiments on each customer segment separately, not just the overall score.  
2. **Track “drop‑off” metrics** – Watch for any group whose scores fall below a threshold.  

**What to do about it**  
* If the drop‑off is serious, tweak the spice: make a milder version of the prompt or add an optional “soften” flag that customers can choose.  
* Offer two versions: one bold (for most users) and one gentle (for the sensitive segment).  
* Keep iterating until every group sees improvement or at least no harm.

In short, test in slices, spot the slice that hurts, then give it a gentler touch before shipping the recipe to everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
