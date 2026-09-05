---
qid: ing_8c00eca9b0__star__local
question: How do you evaluate a reward model? Why is held-out pairwise accuracy not
  enough?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 376
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:42-05:00'
sources: []
---

**Situation**  
When I was building a conversational agent for a fintech client, the reward model had to judge which responses were more helpful. The initial training set consisted of 12 k human‑rated pairs and we split it 80/20 for validation.

**Task**  
I needed to ensure the reward model didn’t just overfit the pairwise comparisons but truly reflected user satisfaction across diverse contexts, especially for edge cases like privacy‑related queries.

**Action**  
First, I computed held‑out pairwise accuracy (≈ 82 %) as a baseline. Then I added three complementary tests:  
1. **Calibration curves** against an independent “golden” set of 3 k single‑label ratings to see if predicted scores matched actual preferences.  
2. **Correlation with engagement metrics** (click‑through, time‑on‑page) on a live A/B group, yielding a Spearman ρ of 0.45 versus the baseline’s 0.28.  
3. **Adversarial robustness checks**, generating synthetic paraphrases that flipped user intent; the reward model’s error rate rose from 8 % to 18 %, prompting a fine‑tune with domain‑specific data.

**Result**  
Combining these metrics reduced overall user churn by 12 % and improved satisfaction scores from 3.7 to 4.2/5. I learned that pairwise accuracy alone can mask calibration drift and real‑world impact, so a multi‑metric evaluation is essential for trustworthy reward modeling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
