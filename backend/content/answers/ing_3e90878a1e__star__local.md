---
qid: ing_3e90878a1e__star__local
question: What do you log and trace for an LLM-backed endpoint? How is it different
  from normal API observability?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 374
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:34-05:00'
sources: []
---

**Situation** – When I launched a chatbot service powered by GPT‑4 at my last company, the SLA required 99.9% uptime and a latency under 300 ms for every user query. The existing monitoring stack (Prometheus + Grafana) was great for REST endpoints but didn’t capture model‑specific failures.

**Task** – I had to design observability that logged everything the LLM consumed, produced, and any internal safety checks, while keeping cost and latency in check.

**Action** – First, I instrumented the request pipeline with OpenTelemetry. For each query I captured:  
1) The raw user prompt (redacted), model ID, token count, temperature, top‑p, and system prompt.  
2) The response tokens, token usage, and the “dangerous content” score from the safety filter.  
3) Latency split into prompt‑generation, inference, post‑processing, and network hops.  
I stored these in a time‑series DB (InfluxDB) for metrics and sent structured events to Elastic for full‑text search. I also added a “confidence heatmap” that visualized token‑level entropy across the response. To avoid leaking private data, prompts were hashed before storage.

**Result** – The new observability cut debugging time by 70 % during incidents, allowed us to spot a sudden rise in token usage (10 % higher than baseline) and adjust prompt length accordingly, keeping latency within SLA. I learned that LLM observability must balance rich semantic data with privacy and cost—unlike normal APIs, you need per‑token metrics, safety scores, and model‑specific latency slices to truly understand performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
