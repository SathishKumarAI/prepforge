---
qid: ing_8cbd58a167__think__local
question: 'Explain: Throttling type and algorithms — System Design Interview Cheat
  Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 497
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:21:55-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   * Define “throttling” as limiting request rate per client (user, IP, API key).  
   * Assume we’re designing a scalable micro‑service exposed over HTTP/REST or gRPC, with traffic from millions of clients.  
   * Note constraints: low latency, high availability, and ability to adjust limits dynamically.

**2️⃣ Mental model / framework**  
   * **Throttle layers** – client‑side (rate limiting libraries), edge gateway (API gateway, CDN), and service‑side (in‑service token buckets).  
   * **Stateful vs stateless** – choose where to store counters (Redis, DynamoDB, in‑process cache).  
   * **Policy types** – fixed window, sliding window, leaky bucket, token bucket, quota per day/month.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the key entities (client ID, endpoint).  
   2. Pick a base algorithm: token bucket for smooth traffic + burst allowance.  
   3. Decide state store: Redis with TTL for counters; atomic increments via Lua scripts to avoid race conditions.  
   4. Add edge gate‑keeping: API gateway enforces preliminary limits before hitting the backend, reducing load.  
   5. Implement adaptive throttling: adjust limits based on real‑time metrics (CPU, queue depth).  
   6. Log violations and expose metrics for monitoring.

**4️⃣ Common traps to avoid**  
   * “Burst” misconfiguration causing sudden spikes to overwhelm services.  
   * Using in‑process counters – they fail on scale‑out or restarts.  
   * Ignoring clock drift between distributed nodes (use monotonic time).  
   * Over‑restricting with fixed windows—creates unfair penalties for clients that hit the boundary.

**5️⃣ Sanity‑check & verbalize**  
   * Verify latency: lookup + increment in < 10 µs.  
   * Confirm that a 1 ms request still sees a consistent rate limit.  
   * Explain to an interviewer: “We throttle at the gateway for quick rejection, then enforce a token bucket per client in Redis so the service stays responsive and we can tune limits without redeploying.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
