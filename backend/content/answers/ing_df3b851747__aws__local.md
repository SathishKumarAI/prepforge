---
qid: ing_df3b851747__aws__local
question: What is the "alignment tax"? How does preference tuning cause over-refusal,
  and how do you manage it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 439
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:16-05:00'
sources: []
---

**Situation / Task**  
While leading a generative‑AI product for our marketplace, we noticed that after applying *preference tuning* to align the model with user safety guidelines, the system started refusing legitimate queries—an “over‑refusal” problem. This hurt conversion rates and customer trust.

**Action**  
I treated it as a classic **Ownership** & **Dive Deep** challenge:  

1. **Diagnose the “alignment tax.”** I quantified the trade‑off between safety (0–100 % refusal) and utility (0–100 % answer rate). Using SageMaker Ground Truth, we logged 50k user intents, measuring refusal probability versus relevance score.  
2. **Re‑balance the loss function.** We introduced a *soft penalty* for over‑refusal by adding a *utility term* to the reinforcement‑learning objective (α = 0.3).  
3. **Deploy in stages with Lambda & Step Functions**, monitoring refusal rates via CloudWatch and A/B testing on 10% of traffic.  
4. **Feedback loop**: every 1,000 refusals triggered an automatic retraining cycle, reducing over‑refusal from 18 % to 7 % within two weeks while maintaining a safety score >95 %.

**Result**  
- Conversion increased by **12 %** (≈$2M annual lift).  
- Customer satisfaction scores rose 0.6 points on the NPS scale.  
- We established an automated “alignment‑tax” dashboard that alerts when the trade‑off drifts, ensuring continuous improvement.

**Bar‑raiser note:** The solution demonstrated *ownership* (end‑to‑end), *dive deep* into loss functions and metrics, quantified impact, and learned from initial over‑refusal failures to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
