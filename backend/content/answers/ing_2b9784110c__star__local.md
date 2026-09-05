---
qid: ing_2b9784110c__star__local
question: 'Explain: Run on each trace and log scores — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 363
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:55:03-05:00'
sources: []
---

**Situation**  
In a recent product launch, our language model’s user satisfaction score had dipped from 92 % to 85 %. The engineering team suspected the issue lay in the fine‑tuning dataset and wanted a systematic way to pinpoint problematic prompts.

**Task**  
I was tasked with creating an evaluation pipeline that ran every inference trace through AI‑Evals, logged the resulting scores, and fed them into Langwatch for real‑time monitoring, so we could identify weak spots before deploying new versions.

**Action**  
First, I wrapped our inference endpoint in a middleware that captured each request/response pair as a trace. Using Langfuse’s SDK, I attached metadata (model version, user ID) to the trace and triggered an AI‑Evals evaluation asynchronously for every trace. The evaluation script pulled the prompt and completion, ran it through the relevant AI‑Eval tasks (e.g., factuality, style consistency), and returned a composite score. I then used Langwatch’s dashboard API to push these scores as metrics, tagging them by feature flag and batch. This allowed us to set alert thresholds—any score below 0.8 triggered an automatic Slack notification for the dev‑ops team.

**Result**  
Within two weeks we identified that the “travel itinerary” prompt consistently scored 0.65 due to ambiguous location references. After adjusting the training data, scores rose to 0.92, and overall user satisfaction climbed back to 91 %. I learned how tightly coupling trace logging with evaluation metrics can turn raw telemetry into actionable insights, drastically reducing iteration time on model improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
