---
qid: ing_a3b3b4bff0__eli5__local
question: What is the lethal trifecta, and how would you use it in a design review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 310
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:57:40-05:00'
sources: []
---

**The lethal trifecta of AI** is the trio of pitfalls that can turn a helpful system into a dangerous one:  
1. **Bias** – when the model favors some groups over others.  
2. **Opacity** – when it’s unclear how the machine reached its decision.  
3. **Adversarial fragility** – when tiny changes to input can flip the outcome.

Think of building a bridge with three critical beams. If one beam is warped (bias), another is hidden in a wall (opacity), and the third breaks under a sudden gust (fragility), the whole structure collapses.

During a design review, treat each beam as a checklist item:

* **Bias** – run fairness tests on diverse data sets.  
* **Opacity** – demand an explanation or “why‑this” report for key decisions.  
* **Fragility** – stress‑test with adversarial examples to see if outputs stay stable.

If any beam fails, redesign before deployment—just as a bridge would be rebuilt before it’s used.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
