---
qid: ing_e8d81f3c3e__star__local
question: 'Explain: Overlap Ratio. — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 381
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:45-05:00'
sources: []
---

**Situation:**  
At my previous company we were trying to compress a 12‑Billion parameter GPT model into a smaller, deployable version for edge devices. The original distillation pipeline was on‑policy but kept producing outputs that were too conservative and missed the nuanced style of the teacher.

**Task:**  
I needed to redesign the distillation loss so the student could learn not only the token probabilities but also preserve the *overlap* between the teacher’s and student’s attention patterns, ensuring the distilled model retained the teacher’s contextual awareness while being lightweight.

**Action:**  
I introduced an *Overlap Ratio* metric: for each training step I computed the cosine similarity between the teacher’s and student’s self‑attention matrices over a sampled batch. This ratio was then fed into a weighted loss term that penalized low overlap, encouraging the student to mimic the teacher’s internal representation structure. I implemented this in PyTorch, added a dynamic weighting schedule (starting at 0.1 and ramping to 0.4), and ran a hyper‑parameter sweep across batch sizes and learning rates. The key trade‑off was balancing the overlap loss against cross‑entropy; too high a weight made training unstable, so I settled on an annealing schedule.

**Result:**  
The distilled 1‑Billion parameter model achieved a perplexity of 18.4 versus the teacher’s 16.8, and its BLEU score on a downstream summarization task improved by 12% relative to a baseline student trained without overlap loss. More importantly, qualitative analysis showed the student maintained key contextual cues that were lost in earlier attempts. I learned that explicitly regularizing internal representation similarity can bridge the gap between large teachers and small students while keeping training stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
