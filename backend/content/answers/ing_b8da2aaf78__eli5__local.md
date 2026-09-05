---
qid: ing_b8da2aaf78__eli5__local
question: 'Explain: Distillation: The Cheaper Path — Rlvr And Reasoning Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 274
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:30:17-05:00'
sources: []
---

Imagine a huge library of encyclopedias (the big AI model). Reading every page is slow and expensive. **Distillation** is like having a wise librarian who reads all those books and then writes a concise cheat‑sheet that captures the most important facts. The cheat‑sheet is a *smaller* model that can answer questions quickly, yet still uses the knowledge of the big library.

In AI, we train a tiny “student” network to mimic the predictions of a large “teacher.” During training, the student learns from both the teacher’s outputs and the true answers, so it picks up reasoning patterns without needing the full size. The result: cheaper inference (faster, less memory) while keeping much of the original model’s intelligence—just like the librarian’s cheat‑sheet lets you solve problems efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
