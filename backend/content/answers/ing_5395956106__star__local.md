---
qid: ing_5395956106__star__local
question: 'Explain: Aggregate and visualize — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 344
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:14-05:00'
sources: []
---

**Situation**  
During the launch of our new recommendation engine, we noticed that model performance metrics were scattered across multiple dashboards—one for raw accuracy, another for latency, and a third for user engagement. Stakeholders couldn’t get a holistic view, so we risked misaligned decisions.

**Task**  
I needed to build an end‑to‑end AI evaluation pipeline that aggregated key metrics (precision@k, AUC, inference time) and visualized them in a single, interactive report using Langwatch and Langfuse, so product managers could spot trade‑offs instantly.

**Action**  
First, I instrumented the inference API with Langfuse to capture request traces, latency, and prediction confidence. Then I set up Langwatch to pull these traces plus external A/B test results into a unified schema. Using Pandas for aggregation, I computed rolling averages and confidence intervals. For visualization, I leveraged Streamlit combined with Altair: each metric plotted as a small multiple, color‑coded by version. I added drill‑down filters that let users slice by user segment or time window. Finally, I automated the pipeline to run nightly, pushing updates to our internal Confluence page via API.

**Result**  
The consolidated dashboard reduced decision latency from 3 days to 2 hours and revealed that version B’s higher precision came at a 15% latency cost—prompting a model compression tweak that cut inference time by 30% without losing accuracy. I learned the power of combining real‑time tracing (Langfuse) with aggregate analytics (Langwatch) to surface actionable insights quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
