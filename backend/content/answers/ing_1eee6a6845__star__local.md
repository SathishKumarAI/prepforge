---
qid: ing_1eee6a6845__star__local
question: How do you design fallbacks across multiple LLM providers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 406
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:18-05:00'
sources: []
---

**Situation** – In my last role as a backend engineer for a conversational AI startup, we were launching a multilingual chatbot that had to meet a 90 % SLA on user queries while keeping the monthly token cost under $5k. Our primary LLM was OpenAI GPT‑4, but we observed intermittent rate‑limit spikes during peak hours.

**Task** – I needed to architect a robust fallback system that could automatically route requests to alternative providers (Anthropic Claude and Azure OpenAI) without degrading user experience or inflating costs.

**Action** – First, I built a lightweight orchestrator in Go using the OpenTelemetry SDK to tag each request with provider health metrics. The orchestrator checks a rolling 5‑minute error window; if GPT‑4’s failure rate exceeds 3 %, it redirects up to 30 % of traffic to Claude, which we had already integrated via LangChain for prompt templating. If both primary and secondary providers are overloaded, the system falls back to Azure’s cheaper DaVinci model, with a cost multiplier flag that limits usage to no more than 2 % of total tokens per day. I also added exponential back‑off retries and a circuit breaker pattern to avoid cascading failures.

**Result** – After deployment, peak latency dropped from 1.8 s to 0.9 s, the overall error rate fell below 0.5 %, and we maintained monthly token costs at $4.2k. I learned that proactive health monitoring combined with dynamic routing gives you both reliability and cost control—key for any production LLM service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
