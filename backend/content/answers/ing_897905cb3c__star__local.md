---
qid: ing_897905cb3c__star__local
question: What is distillation, and how is it used in the LLM ecosystem?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 301
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:08:06-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a conversational AI for customer support. Our flagship model was a 12‑B parameter transformer that delivered great accuracy but required a GPU cluster costing $8,000/month to serve in production.

**Task:**  
I needed to reduce inference cost and latency while preserving the model’s high F1 score (0.87) so we could deploy it on edge devices for small‑business clients.

**Action:**  
I led a distillation effort: first, I selected a 2‑B “student” architecture that matched our throughput targets. Using knowledge‑distillation loss, I fine‑tuned the student on the teacher’s logits and soft labels, augmenting with temperature scaling (T=4) to soften decision boundaries. We also applied layer‑wise feature matching for the first four transformer blocks to preserve contextual nuance. Throughout, I monitored perplexity and calibration error, tweaking learning rates until the student achieved 0.84 F1.

**Result:**  
The distilled model ran on a single NVIDIA RTX 3060 GPU at 5× lower latency (20 ms vs. 100 ms) and cut inference cost to $1,200/month—an 85% savings. It maintained acceptable accuracy for our SLA, and I learned how distillation balances compression with performance by transferring knowledge rather than merely pruning weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
