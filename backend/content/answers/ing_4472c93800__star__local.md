---
qid: ing_4472c93800__star__local
question: 'Explain: Step 7: Run on All Traces at Scale — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 357
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:45:52-05:00'
sources: []
---

**Situation** – At my last startup we were launching a conversational AI for customer support and the pilot test on 1,000 live chats revealed inconsistent sentiment handling; our eval dashboards flagged ~30% of responses as “off‑topic” with an average latency of 3 s, far above the SLA.

**Task** – I was tasked to run a full-scale evaluation across all production traces (≈150k interactions per day) to quantify accuracy, latency, and cost, then surface actionable insights for the engineering team.

**Action** – First, I instrumented every request with Langwatch’s trace logger, tagging each prompt, model ID, and response time. Then I exported the logs to a Snowflake warehouse where I wrote SQL jobs that aggregated metrics per user segment and model variant. Using Langfuse’s evaluation framework, I defined a custom scoring rubric (relevance, politeness, compliance) and ran the evaluator on every trace in parallel via Airflow DAGs, scaling up to 200 workers. The results were visualized in Grafana dashboards, highlighting that the newer “ChatGPT‑Turbo” model cut off‑topic rates by 12% but increased cost by 18%.

**Result** – After refining prompts and adjusting temperature settings based on the insights, we achieved a 25% drop in off‑topic responses and brought latency down to 1.8 s, meeting SLA while keeping costs within budget. I learned that systematic trace-level evaluation with Langwatch/Langfuse is essential for turning raw AI output into production‑ready metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
