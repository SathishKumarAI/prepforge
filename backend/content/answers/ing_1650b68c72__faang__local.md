---
qid: ing_1650b68c72__faang__local
question: 'Explain: Design a multi-provider LLM gateway: routing, fallbacks, and the
  pitfalls teams hit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 466
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:36:19-05:00'
sources: []
---

**Clarify**  
We need an API‑gateway that accepts LLM requests from clients, routes them to one or more provider backends (e.g., OpenAI, Anthropic, Cohere), and guarantees reliability through fallbacks. Assumptions: 1) providers expose similar REST endpoints; 2) latency & cost constraints differ; 3) we can cache responses; 4) failure is any HTTP error or timeout.

**Approach**  
1. **Request parsing & policy lookup** – decide which provider(s) to target based on request tags (model, budget).  
2. **Primary routing** – send to the chosen provider.  
3. **Fallback chain** – if primary fails, sequentially try alternates, optionally using a retry‑policy with exponential backoff.  
4. **Circuit breaker & health checks** – prevent hammering a failed provider.  
5. **Caching layer** – cache identical prompts for a short TTL to reduce costs and latency.  
6. **Metrics & observability** – track success rates, latencies per provider.

**Depth**  
- Use an async HTTP client (e.g., `aiohttp`) to parallelize fallback attempts only after primary failure.  
- Store health state in Redis; circuit breaker opens after N consecutive failures and closes after a cooldown.  
- Cache keys are deterministic hash of prompt + parameters.  
- Complexity: O(1) per request for routing, O(k) where k is number of fallbacks during failure.

**Edge Cases**  
- Provider returns partial data → validate schema before forwarding.  
- Rate‑limit exceeded → backpressure via queue or client error 429.  
- Mixed‑model requests (e.g., chat + embeddings) → split across providers if supported.  

**Optimize & Communicate**  
Explain trade‑offs: parallel fallback increases cost but reduces latency; caching saves money but may serve stale data. Emphasize monitoring dashboards to spot provider drift early, and that the gateway should be stateless for horizontal scaling. This structured plan demonstrates clear problem framing, systematic design, depth in implementation details, and foresight into real‑world pitfalls—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
