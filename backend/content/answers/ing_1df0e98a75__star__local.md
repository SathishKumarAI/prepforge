---
qid: ing_1df0e98a75__star__local
question: 'Explain: F1: Teacher upgrade renders student stale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:43-05:00'
sources: []
---

**Situation** – At my last company we were training a real‑time fraud detection model using a teacher–student architecture. The teacher was a large transformer that got retrained weekly on fresh transaction data, while the student—our deployment model—was a lightweight LSTM that ran on edge devices.

**Task** – After each teacher update, I had to ensure the student stayed relevant without re‑training it from scratch. A stale student would miss new fraud patterns and our false‑positive rate spiked from 2 % to over 5 %.

**Action** – I introduced a “knowledge distillation schedule” that pushed only the most confident teacher predictions to the student each week. Using PyTorch’s `torch.no_grad()` I cached top‑k logits, then fine‑tuned the student with a weighted loss (α=0.7 for cross‑entropy on new labels, β=0.3 for distillation). I also added an online validation pipeline that compared the student’s recall against a rolling 24‑hour window of live fraud alerts; if recall dropped below 90 %, the student was re‑trained on a mini‑batch of recent samples.

**Result** – The student’s false‑positive rate fell back to 2.1 % within two weeks, and its inference latency stayed under 5 ms per transaction. I learned that incremental distillation with an adaptive trigger is far more efficient than full re‑training, saving 30 % GPU hours each cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
