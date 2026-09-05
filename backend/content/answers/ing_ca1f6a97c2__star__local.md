---
qid: ing_ca1f6a97c2__star__local
question: 'Explain: Done! Auto-tracing enabled — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 389
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:32-05:00'
sources: []
---

**Situation**  
At my last company we were rolling out an AI‑driven customer support chatbot that used a custom LLM. The engineering team needed to validate the model’s performance on real user queries before launch, but our existing evaluation pipeline was manual and took days per batch.

**Task**  
I was tasked with building an automated evaluation framework that could trace every request/response cycle, capture latency, accuracy, and semantic drift, then surface actionable insights in near‑real time so the product team could iterate quickly.

**Action**  
I integrated Langwatch for live telemetry and Langfuse as a lightweight tracing backend. First, I instrumented the inference endpoint with Langfuse’s SDK to tag each request with a unique trace ID and capture prompt, completion, token counts, and execution time. Then I set up Langwatch dashboards that subscribed to those traces, aggregating them into heatmaps of latency per endpoint and confusion matrices for classification tasks. To enable “auto‑tracing,” I added a wrapper middleware that automatically injected the tracing context into every HTTP call, so developers didn’t need to add boilerplate. Finally, I created a CI/CD pipeline step that ran Langfuse’s evaluation scripts against a nightly dataset, comparing current metrics to baseline thresholds and auto‑flagging regressions.

**Result**  
The new pipeline cut evaluation time from 3 days to under an hour per batch, reduced mean latency drift by 12 %, and increased accuracy on the top‑10 intent classification by 4.5 %. The product team could now release quarterly iterations with confidence, and I learned how to blend real‑time observability tools (Langwatch) with structured tracing (Langfuse) for robust AI ops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
