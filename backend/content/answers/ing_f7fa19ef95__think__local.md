---
qid: ing_f7fa19ef95__think__local
question: 'Explain: Leaky Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 437
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:22:16-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is a leaky‑bucket?*  Think of it as a metaphor: a bucket that leaks at a fixed rate; when you pour in water (requests) faster than it can leak, the bucket overflows and you must reject or delay the excess.  
   - *Assume we’re dealing with token‑based rate limiting*: each request consumes a “token”; tokens are replenished at a steady rate.  We’ll ignore burstiness unless explicitly needed.  

**2. Adopt a mental model**  
   - *State variables*: `tokens`, `lastRefillTime`.  
   - *Invariant*: `0 ≤ tokens ≤ capacity`.  
   - *Replenishment rule*: after Δt seconds, add `rate × Δt` tokens, capped at `capacity`.  

**3. Step‑by‑step reasoning**  
   1. On each request, compute elapsed time since `lastRefillTime`.  
   2. Update `tokens = min(capacity, tokens + rate * elapsed)`.  
   3. If `tokens ≥ 1`, consume one token and allow the request; otherwise reject or queue.  
   4. Record current timestamp as `lastRefillTime` for next call.  

**4. Common pitfalls to avoid**  
   - Forgetting to cap at capacity → infinite growth.  
   - Using integer division when computing fractional tokens → loss of precision.  
   - Ignoring clock drift or synchronization in distributed settings.  

**5. Sanity‑check & verbalize**  
   - *Test*: send 10 rapid requests; only the first `capacity` should pass, then subsequent ones fail until enough time passes.  
   - *Explain*: “The bucket leaks at a fixed rate; each request is like pouring water. If we pour too fast, the bucket overflows—our algorithm rejects excess traffic.”  

Follow this checklist whenever you need to design or explain a leaky‑bucket limiter in code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
