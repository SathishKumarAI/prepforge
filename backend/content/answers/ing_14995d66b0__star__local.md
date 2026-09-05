---
qid: ing_14995d66b0__star__local
question: 'Q40: When would you use Self-Consistency vs Best-of-N sampling?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 350
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:18-05:00'
sources: []
---

**Situation:**  
In a recent NLP product launch I was tasked with generating multiple-choice explanations for a medical diagnosis assistant. The model had to produce coherent, factually correct answers in real time while keeping latency below 200 ms.

**Task:**  
I needed to decide between using Self‑Consistency (SC) and Best‑of‑N (BoN) sampling to balance quality against speed. SC would require re‑sampling the same prompt many times and voting, whereas BoN would generate a handful of diverse outputs once.

**Action:**  
I benchmarked both approaches on a validation set of 5 k clinical scenarios. For SC I ran 10 iterations per query, aggregating the most frequent answer; for BoN I generated N=3 outputs and picked the one with the highest log‑probability. I profiled GPU utilization and measured BLEU scores versus latency. SC improved factual accuracy by 8 % (BLEU ≈ 0.62 vs 0.57) but doubled inference time to ~350 ms, exceeding our SLA. BoN hit the 200 ms target with only a 2 % drop in accuracy.

**Result:**  
I deployed Best‑of‑3 sampling for production, meeting latency constraints while keeping quality high. The exercise taught me to treat SC as a fine‑tuning tool for post‑hoc audits or low‑latency environments, and BoN as the go‑to strategy when real‑time performance is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
