---
qid: ing_20d4f42858__eli5__local
question: 'Explain: 3️⃣ See traces in Langfuse — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 195
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:28:41-05:00'
sources: []
---

**Tracing in Langfuse is like a detective notebook that records every step an AI model takes while answering a question.**  
When you ask the model something, it might call other services (like an API for weather data), run several sub‑models, or loop over a dataset. Each of these actions leaves a “trace” – a tiny log entry with a timestamp, the action’s name, how long it took, and any errors that happened.  

Langfuse collects all those entries in one place, so you can see the whole journey from your prompt to the final answer, spot bottlenecks (e.g., a slow API call), or verify that every step behaved as expected. Think of it as a breadcrumb trail that lets developers debug, optimize, and audit AI workflows without digging through messy logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
