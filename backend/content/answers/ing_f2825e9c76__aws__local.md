---
qid: ing_f2825e9c76__aws__local
question: How do you handle streaming when the model is emitting tool calls or structured
  JSON?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:56-05:00'
sources: []
---

**Situation** – While building a real‑time customer support chatbot for a fintech client, we needed to stream the model’s responses *and* capture any tool calls (e.g., “lookup balance”) or structured JSON (intent + entities) without blocking the UI.  

**Task** – Design an end‑to‑end pipeline that delivers low latency, high throughput, and fault tolerance while keeping costs predictable.

**Action** –  
1. **Model inference**: Deployed a SageMaker Endpoint with *GPU instances* for large LLMs and used the `StreamingInference` API to receive partial tokens.  
2. **Stream processing**: Piped the token stream into an AWS Kinesis Data Stream; each record carried the partial text plus a flag when the model emitted a tool call or finished JSON.  
3. **Consumer microservice** – A Fargate task subscribed to the stream, performed *real‑time parsing* (using `jsonschema` and regex) and routed calls to the appropriate Lambda (e.g., BalanceLookup).  
4. **State machine** – An AWS Step Functions state machine orchestrated the flow: receive token → detect tool call → invoke Lambda → append result → continue streaming.  
5. **Observability** – CloudWatch metrics tracked “Tokens per second”, “Tool‑call latency” and “JSON parse errors”. Auto‑scaling was tied to these KPIs.

**Result** –  
- Reduced average user wait time from 1.8 s to **0.6 s** (70% improvement).  
- Achieved **99.9% availability** during a peak load test of 10k concurrent sessions.  
- Cost per session fell by **15%** thanks to burst‑scalable Fargate and Lambda usage.

**Leadership Principles** – *Customer Obsession* (fast, accurate replies) & *Ownership* (built end‑to‑end, monitored, iterated).  

**Bar‑raiser focus** – I demonstrated deep technical depth (Kinesis + Step Functions), quantified impact (latency & cost metrics), and learned from early parse failures by adding schema validation and fallback logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
