---
qid: ing_3d37e0d91b__star__local
question: 'Explain: Distillation for personalization — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 339
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:30:33-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were launching a recommendation engine for credit‑card offers. Our main model was a large transformer that delivered 0.73 AUC on the test set but could not run in real time on edge devices, so customers had to wait for a server call.

**Task:**  
I needed to create a lightweight student network that matched the teacher’s personalized predictions while staying under 10 ms inference per request and respecting privacy constraints (no raw user data).

**Action:**  
First I performed on‑policy distillation: we collected a stream of live interactions, logged the teacher’s logits for each user query, and fed those pairs into a smaller MLP. To keep personalization, I added a user‑embedding layer trained jointly with the student, using contrastive loss to preserve relative ranking between offers. We also implemented knowledge‑distilled rewards by weighting samples where the teacher’s confidence exceeded 0.9, ensuring the student learned from its most reliable predictions. Finally, we deployed the model on-device and ran A/B tests against the server‑based pipeline.

**Result:**  
Inference time dropped to 6 ms, battery usage fell by 30%, and the student achieved 0.71 AUC—just 2 % below the teacher. User engagement grew 12 % over two months, and we learned that on‑policy distillation with selective weighting can bridge the gap between heavy models and edge constraints while preserving personalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
