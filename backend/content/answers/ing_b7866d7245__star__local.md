---
qid: ing_b7866d7245__star__local
question: Your product is moving from a standard chat model to a reasoning model with
  extended thinking. What changes for capacity, SLOs, and design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 393
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:16-05:00'
sources: []
---

**Situation**  
At my last company we were launching a customer‑support chatbot that handled 15k tickets/day on a rule‑based model. The product roadmap demanded an AI that could chain reasoning steps—like troubleshooting multi‑layer network issues—so we had to shift from a single‑turn chat to a multi‑turn, extended‑thinking system.

**Task**  
I needed to redesign the architecture so that latency stayed under 1 s per user query, while still supporting up to 30k concurrent sessions and maintaining an error rate below 0.5%. This meant re‑evaluating compute capacity, SLO definitions, and the interaction flow.

**Action**  
First, I split the reasoning model into two services: a lightweight “prompt‑router” that parses intent and a heavy “reasoning engine” running on GPU nodes with autoscaling via Kubernetes HPA. I introduced a token budget cap of 256 tokens per turn to keep inference time predictable, and used OpenAI’s GPT‑4 Turbo for the reasoning stage because of its lower cost/latency ratio. For SLOs, I added a two‑tier SLA—instant response (<500 ms) for simple queries, and graceful degradation (queueing with a 2‑s timeout) for complex chains. Finally, I built a stateful session cache in Redis to avoid re‑computing intermediate reasoning steps.

**Result**  
The new design handled 28k concurrent users with average latency of 0.9 s and maintained an error rate of 0.3%. Our cost per inference dropped 20% thanks to token capping, and we reduced support tickets by 35% within the first quarter. I learned that balancing compute elasticity with a clear SLO hierarchy is key when moving from single‑turn chat to extended reasoning AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
