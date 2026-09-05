---
qid: ing_4197524a49__think__local
question: 'Explain: Retries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 372
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:59:34-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- Ask whether the learner wants a *conceptual* explanation or a *design‑pattern* view (e.g., retry logic for APIs).  
- Assume they know basic networking but not retry back‑off strategies.

**2️⃣ Adopt a mental model**  
Use the “client–server request cycle” framework:  
1. Client → API endpoint  
2. Server processes → Response or error  
3. Client may *retry* on failure, following a policy (max attempts, exponential back‑off, circuit breaker).

**3️⃣ Step‑by‑step reasoning**  
- Define an **API** as a contract exposing operations over HTTP/REST, gRPC, etc.  
- Explain typical failure modes: transient network glitches, rate limits, temporary service outages.  
- Show how retries help reliability but can cause overload if not throttled.  
- Detail retry parameters (max attempts, delay strategy, jitter).  
- Illustrate with pseudocode or diagram of a request → error → back‑off loop.

**4️⃣ Common traps to avoid**  
- Forgetting idempotency: only safe to retry idempotent methods (GET, PUT).  
- Ignoring side effects: retries on POST can create duplicates.  
- Over‑retrying: leading to cascading failures or violating SLA.  

**5️⃣ Sanity‑check & verbalize**  
- Verify that the explanation covers *why* we retry, *how* to implement it safely, and *when* not to.  
- Communicate clearly: start with “An API is…”, then “When a call fails…”, finish with “Best practice…” This keeps the learner’s focus on purpose before mechanics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
