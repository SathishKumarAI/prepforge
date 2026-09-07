---
qid: ing_b87652072c__aws__local
question: How do you construct the data mixture for a fine-tune to prevent capability
  regressions - and how do you validate the mixture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 380
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:11-05:00'
sources: []
---

**Situation / Task**  
I was leading a team that had to fine‑tune a GPT‑style model for an internal recommendation engine. The risk was *capability regression*—the new model might lose performance on niche queries while excelling on common ones.  

**Action**  
1. **Constructing the mixture** – I defined three strata: (a) high‑frequency “core” data, (b) low‑frequency “edge” data, and (c) synthetic safety‑data generated via prompt engineering. Using *Amazon SageMaker Ground Truth* we annotated a 5 % random sample for quality.  
2. **Sampling strategy** – I applied *importance weighting* so that edge samples contributed 4× the loss per token. This ensured gradients reflected rare but critical patterns.  
3. **Validation pipeline** – In SageMaker Pipelines, I built an automated test harness that ran every epoch against a held‑out “regression” set (≈50 K queries). Results were logged to *Amazon CloudWatch* and visualized in *QuickSight*.  

**Result**  
After two iterations the fine‑tuned model achieved **+12.4 % recall on edge queries** while maintaining <0.5 % drop on core queries, a 30 % improvement over baseline. Deployment cost was $1.8k/month versus $2.6k for a naïve retrain.  

**Learning**  
The key insight: *balance* is more important than sheer data volume. By quantifying edge impact I avoided overfitting and preserved overall quality—an example of **Ownership** and **Dive Deep** that the bar‑raiser would applaud.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
