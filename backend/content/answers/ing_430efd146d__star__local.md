---
qid: ing_430efd146d__star__local
question: 'Explain: Entropy and Entropy Gap. — Rethinking On-Policy Distillation of
  Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 321
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:48-05:00'
sources: []
---

**Situation:**  
While working on a project to compress our proprietary LLM for deployment on edge devices, we noticed that the student model’s predictions were overly confident compared to the teacher. The confidence scores (softmax probabilities) were too peaked, which hurt downstream tasks like intent classification.

**Task:**  
I needed to quantify and reduce this overconfidence by analyzing the entropy of the teacher versus the student, effectively closing the “entropy gap” so that the distilled model retained more uncertainty where appropriate.

**Action:**  
First, I computed the Shannon entropy \(H(p) = -\sum p_i \log p_i\) for each token distribution from both models. Then I plotted the entropy difference across layers to locate the biggest gaps. Using a temperature‑scaled softmax and an additional KL‑divergence loss term weighted by the entropy gap, I adjusted the student’s logits during fine‑tuning. This approach preserved the teacher’s knowledge while encouraging higher entropy where the teacher was uncertain.

**Result:**  
After training, the average token entropy increased from 1.2 to 1.8 bits for the student—matching the teacher within a 0.05‑bit margin. Validation accuracy on our intent dataset improved by 3%, and inference latency dropped by 30% thanks to a smaller model size. I learned that actively monitoring and aligning entropy can prevent overconfidence and improve generalization in distilled language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
