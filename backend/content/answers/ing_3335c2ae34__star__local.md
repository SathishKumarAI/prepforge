---
qid: ing_3335c2ae34__star__local
question: 'Explain: Plot any metric — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 315
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:58-05:00'
sources: []
---

**Situation** – In my last role I was leading the test harness for a conversational AI that needed to hit a target of 85 % intent‑recognition accuracy before launch. The QA team had been manually inspecting logs, but we were missing real‑time visibility into how performance changed across different user intents.

**Task** – I was asked to create an automated dashboard that plotted the intent‑accuracy metric over time, broken down by intent type, so developers could see trends and pinpoint regressions before they hit production.

**Action** – I leveraged LangWatch’s built‑in test runner to execute a suite of 3,200 scripted dialogues nightly. The output JSON was streamed directly into a Pandas DataFrame; I calculated per‑intent precision/recall and plotted them with Plotly in an interactive Dash app. To keep the data fresh without overloading the cluster, I used a rolling window of the last 30 days and scheduled the job on AWS Fargate with CloudWatch alerts for any metric dropping below 80 %.

**Result** – The dashboard reduced mean time to detect regressions from three days to under an hour. Accuracy stayed above 87 % for two consecutive release cycles, and I learned that coupling automated test metrics with real‑time visualisation can dramatically improve quality assurance speed and confidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
