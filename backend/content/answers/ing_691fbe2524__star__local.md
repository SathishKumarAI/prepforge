---
qid: ing_691fbe2524__star__local
question: 'Explain: Target Metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 358
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:32-05:00'
sources: []
---

**Situation** – At my previous company we launched a conversational AI that handled customer support tickets. Early feedback showed the model was often returning irrelevant or incomplete answers, which hurt our CSAT score (down to 72%). We needed a systematic way to measure and improve performance before rolling out to all users.

**Task** – I was tasked with building a continuous evaluation pipeline that tracked key target metrics—accuracy, relevance, response time—and fed the results back into model training. The goal was to reduce errors by at least 30% within two sprints while keeping latency below 500 ms.

**Action** – I set up Langwatch to automatically pull in real‑time logs from our deployment environment and feed them into Langfuse, where we defined evaluation suites: exact‑match accuracy, BLEU for paraphrase quality, and a custom relevance score based on keyword overlap. Using Langfuse’s dashboards, I visualized daily metric trends, set alerts for spikes, and created a “golden dataset” that the model could be fine‑tuned against. I also added a latency monitor in Langwatch to ensure we stayed under our SLA.

**Result** – Within two sprints, accuracy climbed from 68% to 92%, relevance improved by 25 percentage points, and average response time remained at 480 ms. The CSAT score rebounded to 88%. I learned that coupling real‑time logging (Langwatch) with structured evaluation (Langfuse) turns raw telemetry into actionable model improvements, keeping the feedback loop tight and measurable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
