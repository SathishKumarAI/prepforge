---
qid: ing_47811f4b29__star__local
question: 'Q: What are the limitations of LLM-as-judge?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 353
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:51-05:00'
sources: []
---

**Situation:**  
During a hackathon for an online tutoring platform, we were tasked with building an automated grading system for open‑ended math proofs. The judges’ panel suggested using a large language model (LLM) to evaluate the correctness of each solution in real time.

**Task:**  
I had to design and prototype an LLM‑as‑judge component that could reliably score student submissions, flag errors, and provide constructive feedback within 2 seconds per answer, all while keeping costs under $0.05 per evaluation.

**Action:**  
First, I mapped the grading rubric into a prompt template and experimented with few‑shot examples to bias the model toward precision over verbosity. I introduced a confidence threshold and built a fallback rule engine that cross‑checked key logical steps against deterministic theorem provers for high‑stakes problems. To reduce latency, I cached embeddings of common sub‑expressions and used OpenAI’s 16‑k context model with token‑limit pruning. Finally, I set up an A/B test comparing LLM scores to human graders, collecting metrics on precision, recall, and inter‑rater agreement.

**Result:**  
The hybrid system achieved 88 % precision and 82 % recall against the gold standard, reducing grading time from 4 minutes per student to under 10 seconds. The cost dropped to $0.03 per evaluation. I learned that LLMs excel at pattern recognition but still need deterministic checks for logical rigor; combining them with lightweight rule‑based post‑processing yields a practical, scalable judge while keeping errors in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
