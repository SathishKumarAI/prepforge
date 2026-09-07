---
qid: ing_835579cc5a__faang__local
question: 'Q: What is the difference between circuit breaker and retry?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 435
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:50:20-05:00'
sources: []
---

**Clarify**  
You’re asking about two common fault‑handling patterns in distributed systems: *circuit breaker* and *retry*. The core question is how they differ in purpose, behavior, and when to use each.

**Approach**  
1. Define each pattern.  
2. Contrast goals (prevention vs recovery).  
3. Explain mechanics (state transitions, timing).  
4. Summarize trade‑offs and typical use cases.

**Depth**  

| Aspect | Circuit Breaker | Retry |
|--------|-----------------|-------|
| **Goal** | Prevent cascading failures by stopping calls to a failing service. | Attempt to recover from transient errors by re‑issuing the request. |
| **State** | Closed → Open (after threshold) → Half‑Open (test). | No state; each call is independent, optionally with back‑off. |
| **Trigger** | Exceeded error/failure ratio or timeout over a window. | Specific transient errors or timeouts, often with exponential back‑off. |
| **Effect on traffic** | Blocks further requests until service stabilizes (reduces load). | Keeps sending traffic; may add latency if many retries. |
| **Typical use** | External APIs that can become unavailable; protects downstream services. | Network hiccups, database timeouts, rate‑limit windows. |

**Edge Cases**  
- Circuit breaker mis‑configured thresholds cause premature blocking.  
- Retries without back‑off can overwhelm a recovering service.  
- Both patterns must handle idempotency to avoid side effects.

**Optimize & Communicate**  
Start with a clear definition, then use a comparison table for quick visual grasp. Highlight that *circuit breaker* is proactive protection; *retry* is reactive recovery. Emphasize that in practice you often combine them: retry first, but if failures persist, the circuit breaker trips to safeguard the system. This structured answer shows problem‑solving clarity, depth of knowledge, and concise communication—exactly what FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
