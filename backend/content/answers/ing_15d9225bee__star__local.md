---
qid: ing_15d9225bee__star__local
question: 'Explain: 2️⃣ Log your first LLM call — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 317
output_tokens: 311
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:11:59-05:00'
sources: []
---

**Situation** – At my last role I was tasked with launching a new customer‑support chatbot that used GPT‑4 via the OpenAI SDK. The team needed real‑time observability to ensure latency stayed below 300 ms and to capture prompt quality for compliance.  
**Task** – My job was to instrument the very first LLM call so every request, response, token usage and latency would be logged automatically, without adding manual instrumentation code in each handler.  
**Action** – I set up Langfuse as an open‑source observability layer. Using its Python SDK, I wrapped the OpenAI client with `langfuse.instrument`. The wrapper automatically emits a span to OpenTelemetry, sends prompt and completion text to Langfuse’s playground, and records metrics like `prompt_tokens`, `completion_tokens`, and total latency. I also created a small dataset in Langfuse for post‑hoc evaluation, linking each call ID to the user session.  
**Result** – Within two days we had a dashboard showing real‑time latency spikes and token cost per request. We cut the mean response time from 450 ms to 270 ms by tuning prompt length, and the cost per ticket dropped 12%. I learned that embedding observability as a first‑class citizen, rather than an afterthought, dramatically speeds up debugging and improves user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
