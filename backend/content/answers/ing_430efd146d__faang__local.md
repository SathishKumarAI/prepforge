---
qid: ing_430efd146d__faang__local
question: 'Explain: Entropy and Entropy Gap. — Rethinking On-Policy Distillation of
  Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 527
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:05-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for the definition of *entropy* in a language‑modeling context and why an *entropy gap* (difference between model entropy and data entropy) matters when distilling a large LLM on‑policy. We assume: 1) we’re dealing with discrete token distributions; 2) “on‑policy” means sampling from the teacher’s own distribution during training of the student.

**2️⃣ Approach**  
- Explain Shannon entropy \(H(p)= -\sum p_i \log p_i\).  
- Define data entropy \(H_{\text{data}}\) (true distribution of language) and model entropy \(H_{\theta}\).  
- The *entropy gap* \(\Delta H = H_{\theta} - H_{\text{data}}\).  
- Discuss how a large positive gap indicates over‑confidence (low uncertainty), while a negative gap implies under‑confidence.  
- Tie this to distillation: the student tries to match the teacher’s logits; if the teacher is too confident, the loss will be dominated by few tokens, hurting generalization.

**3️⃣ Depth**  
- Mathematically show that KL divergence \(D_{\text{KL}}(p\|q) = H(p,q)-H(p)\).  
- In on‑policy distillation, the student’s gradient scales with \(\Delta H\); a large gap inflates gradients for high‑probability tokens and suppresses low‑probability ones.  
- Empirically, reducing the entropy gap (e.g., temperature scaling or adding noise) improves coverage of rare events and leads to better downstream task performance.

**4️⃣ Edge Cases**  
- If \(\Delta H < 0\): teacher underestimates uncertainty → student overfits to noise.  
- Extremely high temperature → entropy gap shrinks too much, losing discriminative power.  
- Test with synthetic data where true entropy is known; measure KL before/after scaling.

**5️⃣ Optimize & Communicate**  
- Recommend a two‑step recipe: (a) calibrate teacher logits via temperature \(T\) to match target entropy; (b) perform on‑policy sampling, weight loss by token probability, and optionally add entropy regularization.  
- Communicate that controlling the entropy gap is the key lever for stable, efficient distillation of large LLMs, balancing faithfulness to the teacher with generalization.

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
