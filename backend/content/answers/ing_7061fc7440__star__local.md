---
qid: ing_7061fc7440__star__local
question: What Are Code-Based Evals? — Ai Evals Complete Guide Langwatch Langfuse
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 338
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:11:46-05:00'
sources: []
---

**Situation:**  
During my last internship at a fintech startup, we were launching an AI‑driven fraud detection model that had to be evaluated against thousands of real transaction scripts before going live. The QA team was struggling with manual test cases and couldn’t keep up with the rapid release cycle.

**Task:**  
I was tasked with designing an automated evaluation pipeline that could run code‑based tests—scripts that generate synthetic transactions, inject anomalies, and assert model outputs—in a scalable way while providing clear metrics for stakeholders.

**Action:**  
Using Python’s `pytest` framework coupled with `hypothesis` for property‑based testing, I built a suite of parametrized evals. Each test script imported the fraud model, generated transaction data on‑the‑fly, and compared predictions against ground truth labels stored in a PostgreSQL sandbox. Results were logged to Langfuse dashboards for real‑time visualization, and a CI pipeline in GitHub Actions triggered re‑runs whenever new model weights were pushed. I also added a coverage metric that flagged any branch of the codebase untouched by tests.

**Result:**  
The automated evals cut manual testing time from 5 days to 2 hours per release cycle, increased test coverage from 45 % to 92 %, and helped catch a previously unseen edge case that saved the company an estimated $350K in potential fraud losses. I learned how code‑based evaluations blend software engineering rigor with AI model validation, ensuring both reliability and speed in production deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
