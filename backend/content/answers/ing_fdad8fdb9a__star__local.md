---
qid: ing_fdad8fdb9a__star__local
question: 'Explain: F2: Distribution shift between training and serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:07-05:00'
sources: []
---

**Situation:**  
I was leading a fraud‑detection model for an online payments platform. In production, we observed that the transaction volume spiked by 40 % during holiday sales, and the types of merchants changed from small local shops to large e‑commerce sites.

**Task:**  
The goal was to keep the false‑positive rate below 3 % while ensuring new merchant categories were correctly classified without retraining from scratch each week.

**Action:**  
I set up a monitoring pipeline that compared feature distributions (merchant category, transaction amount, device fingerprint) between the training data and real‑time traffic using KS tests. When shifts exceeded 0.1 in any dimension, I triggered an automated data‑drift alert. For mitigation, I built a lightweight online learner that updated only the last layer of the neural network with fresh labeled samples, while keeping the bulk of the model frozen to preserve stability. I also introduced a “shadow” deployment that ran both the old and new models in parallel for 24 h before fully switching.

**Result:**  
After implementation, the false‑positive rate dropped from 5.2 % to 2.8 %, and the model adapted within 12 hours of a distribution shift, reducing manual retraining effort by 70 %. I learned that continuous monitoring coupled with incremental online updates is key to handling real‑world distribution shifts without compromising performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
