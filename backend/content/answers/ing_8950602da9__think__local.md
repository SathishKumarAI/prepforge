---
qid: ing_8950602da9__think__local
question: 'Explain: Pattern 4: Circuit Breaker — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 476
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:07:33-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
*What exactly is “Pattern 4: Circuit Breaker – Availability” in system design?*  
Assume the user wants a conceptual overview (purpose, how it works, typical use‑cases) rather than code samples. Assume the audience has basic distributed‑systems knowledge but not deep expertise.

**2️⃣ Adopt a mental model**  
Use the *“Reliability & Fault‑Tolerance”* framework:  
- **Goal:** keep services available when a downstream component fails.  
- **Pattern type:** defensive (prevents cascading failures).  
- **Key actors:** client, circuit breaker library, target service.

**3️⃣ Step‑by‑step reasoning**  

| Step | Reasoning |
|------|-----------|
| **Identify the problem** – a failing or slow dependency can bring down callers. |
| **Define what the circuit breaker does** – monitors calls, opens on failure threshold, short‑circuits subsequent requests for a cooldown period. |
| **Outline states** – *Closed*, *Open*, *Half‑Open*; explain transitions based on success/failure ratios and timeouts. |
| **Show benefits** – protects downstream systems, gives backpressure, improves overall availability. |
| **Mention trade‑offs** – false positives if thresholds too tight, added latency for state checks. |
| **Provide typical use‑cases** – microservice calling another over unreliable network, external APIs with rate limits. |

**4️⃣ Avoid common pitfalls**  
- Don’t conflate circuit breaker with retry logic; they are complementary but distinct.  
- Beware of “open forever” if cooldown isn’t set or if the failure is persistent.  
- Remember that a circuit breaker doesn’t fix the underlying bug; it only masks its impact.

**5️⃣ Sanity‑check & verbalize**  
Quickly recap: *“A circuit breaker protects service availability by cutting off calls to a failing dependency, giving it time to recover.”* If any part feels vague, drill deeper into state transitions or threshold tuning. Use analogies (traffic lights) if the audience is non‑technical. This ensures you’ve covered intent, mechanics, benefits, and caveats in a coherent narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
