---
qid: ing_edc43e96ee__faang__local
question: 'Explain: Design a rate limiter for an LLM API where cost scales with tokens,
  not requests.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 466
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:16-05:00'
sources: []
---

**Clarify**  
We need a rate‑limiter that throttles usage of a large‑language‑model (LLM) API where the billing unit is *tokens* (input + output), not raw HTTP calls. Key assumptions:  
1. Tokens per request are known after the call returns, but we may want to predict or cap beforehand.  
2. The cost model is linear in tokens; no tiered discounts.  
3. We must enforce a budget window (e.g., $X per minute/hour).  

**Approach**  
Treat the problem as a sliding‑window token bucket:  
- **Token bucket** holds the remaining spendable tokens for the current period.  
- Each request checks if `estimated_tokens ≤ bucket`. If not, reject or delay.  
- On success, decrement the bucket by actual tokens returned (input+output).  
- Periodically refill the bucket based on budget and elapsed time.  

To handle unknown output length, use a conservative estimate (`max_output_tokens`) and optionally tighten after response.  

**Depth**  
Implementation can be in-memory for single‑instance or distributed via Redis/Consul counters. Complexity is O(1) per request; refill is O(1). Trade‑offs:  
- **Accuracy vs Latency**: tighter estimates reduce over‑spending but risk rejecting valid calls.  
- **Consistency**: distributed counters may suffer from race conditions—use atomic increments or Lua scripts in Redis.  

**Edge Cases**  
- Burst of short requests exceeding budget → reject until refill.  
- Large single request > bucket size → either split into smaller prompts or block entirely.  
- Clock drift across services → use NTP‑synchronized time for refill windows.  

**Optimize & Communicate**  
Add a *back‑pressure* mechanism: if the bucket is near empty, signal clients to slow down (e.g., HTTP 429 with retry‑after). Log token usage per user for auditing. Communicate clearly in documentation: “Rate limit based on token consumption; estimated cost shown before request.” This balances cost control with developer experience while keeping the system simple and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
