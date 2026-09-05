---
qid: ing_d080c155d6__star__local
question: 'Your traffic is shifting from single-turn chat to agents: 20 to 50 model
  calls per task, tool calls in between, sessions lasting tens of minutes. What does
  that do to your serving design?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 462
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:21-05:00'
sources: []
---

**Situation** – At my last company we launched an AI‑powered customer support agent that moved from a single chat message to fully conversational workflows. A typical user session now involved roughly **35 model calls plus 10 tool invocations**, each taking ~200 ms on average, and sessions lasted up to **15 minutes**. We were receiving about **12k such sessions per day**.

**Task** – I had to redesign the serving stack so that it could handle the bursty, multi‑step traffic without increasing latency or cost. The goal was a 30 % reduction in overall request latency and keeping infrastructure spend under budget while guaranteeing a smooth user experience.

**Action** – First, I switched from a synchronous REST gateway to **gRPC with streaming**, allowing us to keep an open connection for the entire session and batch consecutive model calls into a single RPC when possible. I introduced a **dedicated task queue (RabbitMQ)** that held pending tool calls and dispatched them asynchronously to lightweight worker containers. For inference, I moved from a single GPU per request to a **GPU‑pool with batched requests** using NVIDIA Triton; each batch could serve up to 8 parallel prompts, cutting per‑call GPU time by ~25 %. I also added an in‑memory cache (Redis) for repeated tool results and implemented auto‑scaling rules based on queue depth. Finally, I set up distributed tracing with OpenTelemetry to monitor end‑to‑end latency.

**Result** – The redesign cut average session latency from **1.8 s to 1.2 s** (a 33 % improvement). GPU utilization rose from 35 % to 70 %, reducing infrastructure cost by ~18 %. I learned that moving to streaming gRPC and batched inference dramatically improves throughput for conversational agents, and that careful queueing of tool calls prevents the model from becoming a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
