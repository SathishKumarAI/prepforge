---
qid: ing_eb08d82f1a__star__local
question: 'Explain: 1️⃣ Create new project — GitHub - langfuse/langfuse: \ud83e\udea2
  Open source AI engineering platform: LLM evals, observability, metrics, prompt management,
  playground, datasets. Integrates with OpenTelemetry, LangChain, OpenAI SDK, LiteLLM,
  and more. \ud83c\udf4aYC W23 \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 314
output_tokens: 350
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:11-05:00'
sources: []
---

**Situation:**  
When I joined a fast‑growth startup, we were building a chatbot that used multiple LLMs from OpenAI and Anthropic. The team struggled with inconsistent responses, lack of observability, and no way to compare models or tune prompts in production.

**Task:**  
I was tasked with creating an end‑to‑end AI engineering platform so the data science, devops, and product teams could evaluate, monitor, and iterate on LLM usage without writing custom pipelines for each model.

**Action:**  
I forked the open‑source Langfuse repository (langfuse/langfuse) and set up a Docker‑Compose stack with PostgreSQL, Redis, and the Langfuse API. I integrated OpenTelemetry to capture request latency and error rates, wired LangChain to our prompts, and connected LiteLLM as a proxy for all LLM calls. I built a lightweight playground UI that stored prompt templates in Langfuse’s prompt store, added dataset ingestion scripts, and set up automated evaluation jobs that ran nightly against our curated test suite. For observability, I defined custom metrics (e.g., token usage per model, temperature variance) and pushed them to Grafana dashboards.

**Result:**  
Within two weeks the platform was live; we cut prompt‑tuning time from days to hours, reduced hallucination incidents by 35 %, and lowered overall LLM spend by 18 % through better model selection. I learned that open‑source tooling like Langfuse can be rapidly customized to meet a company’s unique AI workflow needs while keeping the stack lightweight and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
