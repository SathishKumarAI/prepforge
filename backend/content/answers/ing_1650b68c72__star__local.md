---
qid: ing_1650b68c72__star__local
question: 'Explain: Design a multi-provider LLM gateway: routing, fallbacks, and the
  pitfalls teams hit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 383
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:13:13-05:00'
sources: []
---

**Situation** – In my last role I led the redesign of a chat‑bot platform that was suddenly required to support three different LLM providers (OpenAI, Anthropic, and Cohere) because our SLA had dropped to 95 % after an outage with one vendor.

**Task** – Build a gateway that could route requests based on intent and cost, automatically fall back when a provider failed, and expose metrics for each path without leaking secrets.

**Action** – I introduced a lightweight service mesh layer written in Go. The router inspected the prompt’s “topic” field from the request payload, used a weighted policy (OpenAI 60 %, Anthropic 25 %, Cohere 15 %) and sent the request to the chosen provider via HTTP/2 with gRPC‑style streaming for latency. I added a circuit‑breaker per provider: if a response time exceeded 500 ms or returned an error code, the request was retried on the next provider in priority order. We logged each hop in OpenTelemetry and exposed Prometheus metrics so we could see success rates, token usage, and cost per model. The biggest pitfall was stateful prompts; I solved it by normalizing context size to 2000 tokens before forwarding.

**Result** – Within two weeks the platform’s uptime rose from 92 % to 99.8 %, response latency dropped by 30 %, and we cut monthly LLM spend by 18 % through smarter routing. I learned that careful fallback logic and observability are as critical as raw performance when juggling multiple AI providers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
