---
qid: ing_a73b0ef518__star__local
question: Isn't it common sense that RL should turn pass@ k into pass@1?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 379
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:07:14-05:00'
sources: []
---

**Situation:**  
At my last company we were deploying a language‑model for code completion in an IDE. The model’s performance was measured by *pass@k* (the probability that the correct snippet appears within the top k suggestions). At launch, pass@10 sat at 38 % and our customers complained that they still had to sift through many wrong options.

**Task:**  
I was tasked with boosting the ranking quality so that the correct answer would appear as the first suggestion (pass@1) without sacrificing overall recall. The goal was a 15‑percentage‑point lift in pass@1 within three months.

**Action:**  
We re‑engineered the decoding pipeline:  
- Implemented a lightweight reinforcement‑learning (RL) fine‑tuning loop that rewarded the model when the ground‑truth snippet ranked first, using Proximal Policy Optimization.  
- Added an auxiliary loss that penalized large entropy in the top‑k distribution, encouraging sharper predictions.  
- Trained on a curated dataset of 200 K real IDE sessions, with a custom reward shaping function that balanced precision and diversity.  
- Deployed the RL policy as a microservice behind the existing inference engine so latency stayed under 30 ms.

**Result:**  
After three weeks of fine‑tuning, pass@1 jumped from 12 % to 27 %, while pass@10 rose to 46 %. The customer satisfaction score for code completion improved by 18 %, and we learned that a small RL head can effectively collapse a pass@k distribution into a single high‑confidence prediction without costly infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
