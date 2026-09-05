---
qid: ing_4dd279d5f2__star__local
question: 'Explain: Output Distillation (Standard) — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 390
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:18-05:00'
sources: []
---

**Situation:**  
At my previous company we were rolling out a new recommendation engine for our e‑commerce platform. The production model was a large transformer that delivered 2–3% lift in conversion, but its inference latency of ~150 ms per request pushed us over the 200 ms SLA, causing user churn.

**Task:**  
I had to produce a lightweight version that maintained ≥90 % of the original accuracy while cutting latency by at least half, so we could deploy it on our edge servers without compromising the recommendation quality.

**Action:**  
I applied standard output (soft‑label) distillation. First I trained a “teacher” transformer and generated soft probability distributions for all 10k product categories across a held‑out validation set. Then I built a student model—a distilled BERT with only two encoder layers and a reduced hidden size of 256. During training, the loss was a weighted sum of cross‑entropy against hard labels (α=0.4) and Kullback–Leibler divergence between teacher and student logits (β=0.6). I also introduced temperature scaling (T=5) to soften the teacher’s outputs, which helped the student learn inter‑class similarities. Finally, I fine‑tuned on a smaller learning rate for 3 epochs, monitoring top‑k recall.

**Result:**  
The distilled model achieved 91.2 % of the teacher’s accuracy, reduced inference latency from 150 ms to 70 ms, and lowered GPU memory usage by 60 %. The deployment cut our server costs by $12K/month and improved user satisfaction scores by 1.5 points on post‑click surveys. I learned that carefully balancing hard and soft losses with temperature scaling is key to preserving performance while shrinking model size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
