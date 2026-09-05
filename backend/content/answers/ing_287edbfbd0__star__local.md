---
qid: ing_287edbfbd0__star__local
question: 'Explain: Notebook or UI — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 332
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:21-05:00'
sources: []
---

**Situation:**  
During the rollout of our conversational AI for customer support, the quality metrics from automated unit tests were fine, but real‑world interactions still showed a 12 % drop in user satisfaction scores compared to the legacy system.

**Task:**  
I had to design a robust testing and evaluation pipeline that could surface subtle failures—context drift, hallucinations, or policy violations—in both scripted scenarios and live conversations, without blocking release cycles.

**Action:**  
I set up a dual‑channel framework using LangWatch. In Jupyter notebooks, I built parameterized test suites that injected edge‑case prompts (e.g., ambiguous intents, multi‑turn dialogues) and logged the agent’s responses with timestamps, confidence scores, and policy flags. Parallelly, I integrated a lightweight UI dashboard (React + Flask) where QA engineers could replay recorded user sessions, annotate errors in real time, and trigger automated re‑runs of specific scenarios. We also enabled continuous monitoring by feeding production logs back into LangWatch for anomaly detection.

**Result:**  
Within two weeks, the combined notebook‑UI approach uncovered 27 previously hidden hallucinations and 15 policy breaches. After iterative fixes, user satisfaction rose from 78 % to 92 %, and regression test time dropped by 35 %. I learned that coupling reproducible notebook tests with interactive UI reviews gives both technical rigor and human insight—essential for trustworthy AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
