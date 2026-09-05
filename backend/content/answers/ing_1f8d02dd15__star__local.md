---
qid: ing_1f8d02dd15__star__local
question: 'Explain: Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 333
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:24-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, our flagship fraud‑detection model was highly accurate but too heavy for real‑time mobile transactions—each inference took ~350 ms and consumed 120 MB of RAM.

**Task:** I had to create a lean version that could run on users’ phones without sacrificing more than 3% in detection accuracy, so we could offer instant fraud alerts.

**Action:** I applied knowledge distillation: I trained a compact “student” neural net (a single‑layer CNN with 32 filters) to mimic the soft output probabilities of our heavy “teacher” ensemble. First, I generated a large synthetic dataset by feeding real transaction logs through the teacher and recording its probability distributions over fraud/non‑fraud classes. Then I used a combined loss function—cross‑entropy for hard labels plus Kullback–Leibler divergence to capture the teacher’s softened knowledge—tuning temperature to 4. During training, I monitored AUC on a held‑out validation set and early‑stopped when it plateaued.

**Result:** The student model ran in ~45 ms with <10 MB RAM, meeting our mobile constraints. Its AUC dropped only from 0.96 to 0.93—well within the 3% threshold—and live A/B testing showed a 12% reduction in false positives compared to the baseline. I learned that distillation can preserve nuanced decision boundaries while dramatically reducing resource usage, making it ideal for edge deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
