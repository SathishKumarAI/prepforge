---
qid: ing_8c13468fa4__star__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 317
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:57-05:00'
sources: []
---

**Situation**  
At my previous startup we were launching a new conversational agent, but the latency on certain user intents was consistently higher than our SLA of 350 ms. Our telemetry stack used Langfuse to collect traces from each request.

**Task**  
I needed to isolate the problematic spans—specifically the “AI Evals Complete” step—to understand why it was lagging and to quantify its impact on overall response time.

**Action**  
First, I queried Langfuse’s GraphQL endpoint for the last 1 000 traces that contained the span name `ai_evals_complete`. Using the filter expression `span.name:"ai_evals_complete"` I retrieved a focused dataset. Then I parsed the JSON responses with a Python script, aggregating the `duration_ms` field and grouping by `eval_type`. I visualized the results in a quick Jupyter notebook, highlighting outliers that exceeded 200 ms. With this insight, I optimized the evaluation pipeline by caching model prompts and parallelizing batch calls.

**Result**  
The average duration for `ai_evals_complete` dropped from 280 ms to 120 ms, cutting overall latency from 410 ms to 260 ms—well below our SLA. The exercise taught me how powerful targeted trace filtering is for pinpointing performance bottlenecks in complex AI workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
