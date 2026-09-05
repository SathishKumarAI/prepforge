---
qid: ing_20d4f42858__star__local
question: 'Explain: 3️⃣ See traces in Langfuse — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 317
output_tokens: 338
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:35:10-05:00'
sources: []
---

**Situation** – In my last role I was building a multi‑tenant chatbot that used LangChain with OpenAI GPT‑4 under the hood. Our QA team flagged intermittent latency spikes and we had no visibility into which chain component was causing them, so customer support tickets kept piling up.

**Task** – I needed to quickly pinpoint the root cause of the latency, correlate it with user traffic patterns, and provide a reproducible report for the ops team—all within 48 hours.

**Action** – I integrated Langfuse by adding its middleware to our FastAPI service. Using OpenTelemetry instrumentation, every LLM call was automatically exported as a trace. In Langfuse’s UI I filtered by endpoint and latency percentile, then drilled down into individual spans: the prompt‑generation span, the model inference span, and downstream database calls. I also tagged each request with a “tenant_id” and “feature_flag” so we could see if a specific feature was responsible. After identifying that the token‑count estimator was the bottleneck, I refactored it to use a lightweight regex count instead of a full tokenizer.

**Result** – The average response time dropped from 2.4 s to 0.9 s for high‑traffic tenants, cutting support tickets by 35% in the first week. I also documented the trace schema and added automated alerts in Langfuse, giving the team real‑time observability for future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
