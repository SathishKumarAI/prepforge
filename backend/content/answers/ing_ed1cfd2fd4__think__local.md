---
qid: ing_ed1cfd2fd4__think__local
question: Your app is getting 429s from your LLM provider at peak traffic. How do
  you handle rate limits properly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 591
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:40:09-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- Identify *which* endpoint(s) are hitting the 429 (e.g., chat, embeddings).  
- Confirm that the limit is per‑minute or per‑second and whether it’s shared across accounts or isolated to your key.  
- Assume you can’t change the provider’s quota but can adjust traffic patterns.

**2️⃣ Adopt a layered mental model**  
1. *Rate‑limit detection* – intercept 429 responses.  
2. *Back‑off strategy* – exponential or fixed delay, respecting `Retry-After`.  
3. *Traffic shaping* – queueing, throttling, and request batching.  
4. *Graceful degradation* – fallback logic or cached results.

**3️⃣ Step‑by‑step reasoning**  

| Step | Action | Why |
|------|--------|-----|
| 1 | Log all 429s with timestamps and endpoint info. | Understand peak periods and which calls trigger limits. |
| 2 | Parse `Retry-After` header; if absent, use exponential back‑off (e.g., 1 s → 2 s → 4 s). | Provider may enforce a minimum wait; back‑off avoids hammering the API. |
| 3 | Introduce an in‑app token bucket or leaky bucket that matches the provider’s quota. | Ensures we never exceed the allowed rate, smoothing spikes before they hit the external service. |
| 4 | Batch similar requests (e.g., embeddings for a batch of texts) if supported. | Reduces number of calls while still serving user needs. |
| 5 | Cache recent responses and serve stale data when rate‑limited. | Maintains responsiveness without additional API hits. |
| 6 | Notify users during high load (spinner + “service busy, try again in X s”). | Sets realistic expectations and reduces retry traffic from the client side. |

**4️⃣ Common traps to avoid**  
- *Blind retries*: immediately re‑sending a request can trigger another 429.  
- *Ignoring `Retry-After`*: leads to unnecessary delays or continued violations.  
- *Over‑throttling*: setting limits too low hurts user experience.  
- *Cache invalidation mistakes*: stale data may be served indefinitely if cache TTL is misconfigured.

**5️⃣ Sanity‑check & communicate**  
- Run a simulation with the same traffic pattern to verify that 429s drop below acceptable thresholds.  
- Document the logic in your code comments and share the strategy with the ops team so they can monitor queue lengths and back‑off behavior.  

By layering detection, respectful back‑off, traffic shaping, and graceful degradation, you’ll handle rate limits cleanly while keeping users happy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
