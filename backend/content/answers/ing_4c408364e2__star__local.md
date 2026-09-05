---
qid: ing_4c408364e2__star__local
question: 'Explain: Add custom spans — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 369
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:51-05:00'
sources: []
---

**Situation:**  
At my last company we built an internal AI evaluation platform that ran nightly inference jobs on a fleet of GPU servers. The logs were noisy and it was hard to pinpoint why certain model runs underperformed compared to the benchmark, especially when multiple micro‑services interacted.

**Task:**  
I needed to add custom spans so every critical step—data loading, tokenization, model inference, post‑processing—was traceable and correlated with the evaluation metrics. The goal was to reduce debugging time from hours to minutes and surface performance bottlenecks automatically.

**Action:**  
Using Langwatch’s OpenTelemetry SDK I instrumented each microservice. For every request I created a root span named `ai_eval_run` and added child spans (`load_data`, `tokenize`, `model_infer`, `post_process`). I attached context keys like `model_version`, `dataset_id`, and the runtime latency to each span. Then, in Langfuse, I configured a custom dashboard that aggregates these spans into a timeline view and links them directly to the evaluation score stored in our PostgreSQL metric table. I also set up alerting on spans that exceeded 90 % of the median inference time.

**Result:**  
The new tracing reduced mean debugging time from 4 hours to under 30 minutes for outlier runs. We identified a tokenization bug that cut latency by 35 % and improved overall model accuracy by 2 %. I learned how to blend distributed tracing with evaluation pipelines, turning raw spans into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
