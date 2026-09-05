---
qid: ing_569657ab42__star__local
question: Do You Need a Gateway Yet? — Ai Gateways And Model Routing
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 368
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:21:19-05:00'
sources: []
---

**Situation:**  
At my previous company we launched an internal chatbot platform that pulled from three different LLM providers—OpenAI, Anthropic, and Cohere—to satisfy our compliance and latency needs. By the third month of production a spike in traffic caused our single‑endpoint API to time out on 12 % of requests.

**Task:**  
I was tasked with designing an architecture that would let us route user queries to the most appropriate model without exposing each provider’s key or increasing cost, while keeping latency under 200 ms for 95 % of traffic.

**Action:**  
I built a lightweight gateway service in Go using gRPC‑interceptor middleware. The gateway accepted a “model‑hint” header from our front‑end and, if absent, used a rule engine that evaluated user context (region, intent, request size) against a set of routing policies stored in Redis. For high‑confidence intents the gateway forwarded directly to Anthropic; for ambiguous or low‑cost queries it routed to Cohere; otherwise it fell back to OpenAI. I added circuit‑breaker logic with Hystrix and a fallback cache to serve recent responses during provider outages. The gateway also logged routing decisions to a Kafka stream for later analytics.

**Result:**  
After deployment, request latency dropped from 350 ms average to 120 ms, and timeouts fell below 2 %. We cut overall LLM spend by 18 % while maintaining compliance, and the dynamic routing logic gave us insights that led to a new pricing model for our premium tier. I learned that a well‑designed gateway not only balances cost and performance but also becomes a single source of truth for policy enforcement across multiple AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
