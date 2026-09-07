---
qid: ing_6155dc6a17__faang__local
question: 'Explain: Error Handling Pattern — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:05-05:00'
sources: []
---

**Clarify**  
The question asks for an *error‑handling pattern* used by “computer‑use agents” (e.g., bots that interact with UI or APIs). We’ll assume the agent runs autonomously, may face transient failures (network glitches, timeouts) and persistent errors (invalid data, missing elements), and must report outcomes without crashing.

**Approach**  
1. **Define error classes**: `TransientError`, `PermanentError`.  
2. **Retry strategy**: exponential back‑off + jitter for transients.  
3. **Circuit breaker**: trip after N consecutive failures to avoid hammering a broken endpoint.  
4. **Fallbacks**: use cached data or alternate flows when possible.  
5. **Logging & telemetry**: capture context (timestamp, action, payload).  
6. **Graceful degradation**: mark the step as failed but continue with next steps if the workflow allows.

**Depth**  
- *TransientError* → retry up to 3 times; back‑off: `wait = base * 2^attempt + random(0, jitter)`.  
- After retries, downgrade to *PermanentError*.  
- Circuit breaker keeps a sliding window of failures; if >50% fail, open the circuit for 30 s.  
- Fallback retrieves cached result; if unavailable, logs and aborts with `PermanentError`.  
- All errors are wrapped in a structured object (`{code, message, context}`) sent to monitoring.

**Edge Cases**  
- Infinite retry loops on mis‑identified permanent failures → guard by max attempts.  
- Circuit breaker stale state after restart → persist state or reset safely.  
- Partial success scenarios (e.g., some tasks fail) → ensure downstream steps still run if designed for it.

**Optimize & Communicate**  
Explain that this pattern balances resilience with cost: retries handle flaky services; circuit breakers protect downstream systems; fallbacks keep the user experience smooth. Mention that telemetry allows operators to tune thresholds. Conclude by highlighting that such a structured error‑handling flow is critical for high‑availability AI agents in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
