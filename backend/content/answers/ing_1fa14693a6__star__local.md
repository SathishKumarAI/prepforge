---
qid: ing_1fa14693a6__star__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 362
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:31-05:00'
sources: []
---

**Situation** – In my last role as a research engineer at a fintech startup, we were building an AI-powered customer support chatbot that needed to meet a 95 % accuracy target on intent classification before our Q3 launch. Our existing unit tests were fine for syntax but didn’t capture real‑world user inputs or edge cases.

**Task** – I was tasked with creating a robust, code‑driven evaluation framework that would automatically test the model against a growing set of prompts and provide actionable metrics to guide retraining cycles.

**Action** – I built an end‑to‑end eval pipeline using **LangWatch** for real‑time monitoring of inference latency and error rates, and integrated it with **LangFuse** to fuse multiple evaluation datasets (public intent corpora plus our internal logs). The pipeline pulls fresh prompts every night, runs them through the model, captures predictions, and compares them against gold labels. I added a scoring module that aggregates per‑intent precision/recall and flags drift when performance drops below 92 %. The system writes detailed JSON reports to S3 and triggers Slack alerts for any anomalies.

**Result** – Within two weeks of deployment, we reduced the model’s error rate from 8 % to 4 %, meeting our launch target. The automated evals cut manual testing time by 70 % and gave us a clear signal‑to‑action loop for continuous improvement. I learned that coupling observability tools like LangWatch with a flexible dataset fusion engine such as LangFuse is key to turning code‑based evaluations into real business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
