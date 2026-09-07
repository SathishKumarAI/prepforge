---
qid: ing_1eee6a6845__faang__local
question: How do you design fallbacks across multiple LLM providers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 471
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:56:49-05:00'
sources: []
---

**Clarify**  
You’re building a system that can query several LLMs (OpenAI, Anthropic, Azure GPT, etc.) and must gracefully fall back when one fails or returns poor quality. Key assumptions:  
* All providers expose HTTP APIs with similar request/response shapes.  
* You have latency, cost, and reliability SLAs for each.  
* The fallback logic should be transparent to downstream consumers.

**Approach**  
1. **Provider abstraction** – define a `LLMClient` interface (`generate(prompt)`).  
2. **Health‑check & metrics** – periodic ping, track error rate, latency, token cost per provider.  
3. **Decision engine** – rank providers by current health + weighted SLA criteria.  
4. **Retry policy** – on failure try next ranked provider up to `k` times; exponential backoff for repeated errors.  
5. **Circuit breaker** – if a provider exceeds threshold failures, temporarily blacklist it.

**Depth**  
*Implementation:* Use a priority queue of providers sorted by `(latency_score * cost_weight)`. On each request: pop top provider → call client. If response is `null`/error → log and loop to next.  
*Complexity:* O(n log n) for sorting health metrics (small n). Each API call is O(1).  
*Trade‑offs:* More providers increase redundancy but add orchestration overhead; circuit breaker reduces noise but may delay recovery.

**Edge Cases**  
*All providers down* → return a cached “last good” response or user‑friendly error.  
*Provider returns nonsensical output* → run a lightweight sanity check (e.g., language model confidence) before accepting.  
*Cost spikes* → dynamic throttling based on budget constraints.

**Optimize & Communicate**  
Explain to interviewers: we’re treating each LLM as a micro‑service, using health metrics for adaptive routing; this yields high availability with cost control. Highlight that the design is modular—adding a new provider just implements `LLMClient` and registers in the registry. This satisfies FAANG’s focus on scalable, maintainable architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
