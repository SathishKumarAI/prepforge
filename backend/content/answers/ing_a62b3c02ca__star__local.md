---
qid: ing_a62b3c02ca__star__local
question: What is LLM-as-judge? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 295
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:05:29-05:00'
sources: []
---

**Situation:**  
In my last role as a product manager for an online education platform, we noticed our automated grading system was missing nuance on essay‑style assignments, leading to a 12 % mismatch between instructor and system scores.

**Task:**  
I needed to design a prototype that could evaluate written responses with the depth of a human grader while scaling to thousands of submissions daily.

**Action:**  
We built an LLM-as-judge pipeline using GPT‑4.5 Turbo, fine‑tuned on 3,000 annotated essays and instructor rubrics. The system first parsed key arguments via prompt engineering, then scored each criterion with a numeric rubric. We added a confidence flag: if the model’s internal loss exceeded a threshold, the submission was routed to a human reviewer. Integration into our LMS used Docker containers behind an API gateway; we also implemented a rollback mechanism that stored raw LLM output for audit.

**Result:**  
Within three weeks of rollout, grading accuracy improved from 88 % to 96 %, and processing time dropped by 70 %. The confidence flag reduced human review load by 55 %, freeing instructors to focus on higher‑level feedback. I learned that coupling LLM inference with a lightweight confidence metric balances automation speed with quality assurance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
