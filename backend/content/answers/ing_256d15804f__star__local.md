---
qid: ing_256d15804f__star__local
question: 'Explain: All evaluators (code + LLM) in one place'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 339
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:43:34-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our QA team was split between manual tests, automated code‑based unit tests, and a separate prompt‑engineering group that ran evaluations on our conversational AI model. The result was duplicated effort, inconsistent reporting, and slow feedback loops—bug fixes took 3–4 days to see in production.

**Task:**  
I was tasked with unifying all evaluators into a single pipeline so developers could get instant, reliable feedback from both code tests and LLM‑specific metrics without switching tools or environments.

**Action:**  
First, I mapped the existing test suites and identified overlapping coverage. Using GitHub Actions as the orchestrator, I built a Dockerized “evaluation runner” that pulls the latest build, executes unit tests with PyTest, then spins up an OpenAI API sandbox to run prompt‑based evaluation scripts (e.g., BLEU, ROUGE, and custom intent accuracy). Results are collected into a single JSON report, stored in S3, and visualized on Grafana dashboards. I also added feature flags so new test cases could be rolled out incrementally.

**Result:**  
The unified pipeline cut feedback time from 4 days to under an hour for most critical issues, reduced duplicated effort by ~35%, and increased overall defect detection rate by 22%. It taught me that a single, well‑orchestrated evaluation hub not only saves time but also improves consistency across code quality and AI performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
