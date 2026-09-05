---
qid: ing_f8aa2c467f__star__local
question: 'Explain: Premature Fine-Tuning — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 320
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:53-05:00'
sources: []
---

**Situation**  
At a fintech startup, we were building a fraud‑detection model for credit card transactions. The data science team had trained a baseline transformer on transaction logs and got a 92 % F1 score on the validation set.

**Task**  
I was tasked with improving recall to catch more fraudulent cases before launching the system in production, while keeping false positives low enough not to annoy users.

**Action**  
Instead of waiting for a larger labeled fraud dataset, I immediately fine‑tuned the transformer on the existing 5 % of manually annotated fraud examples. I added a weighted loss and used early stopping based on validation recall. I also performed cross‑validation with only the small fraud set, which inflated performance metrics. When we rolled it out, recall dropped from 85 % to 70 % because the model overfit to the noisy labels.

**Result**  
After collecting a month of real traffic data and re‑labeling 3 k new fraud cases, I retrained with proper stratified sampling and domain‑specific features. Recall improved to 88 %, precision stayed above 93 %, and user complaints fell by 45 %. The lesson: fine‑tune only when you have a sufficiently large, representative dataset; otherwise you’ll create an anti‑pattern that hurts real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
