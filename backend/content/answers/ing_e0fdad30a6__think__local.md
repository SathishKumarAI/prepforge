---
qid: ing_e0fdad30a6__think__local
question: 'Explain: Browser Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 427
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:50:42-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume the reader knows basic web concepts (HTTP, browsers).  
- Focus on *browser caching* as a performance optimization in client‑side system design.  
- Treat “what is caching?” as both a general concept and its specific application to browsers.

**2️⃣ Adopt a mental model: “Cache = fast copy of expensive data”**  
- Identify the *resource*, *cost*, and *access pattern*.  
- Map browser cache onto the classic producer–consumer diagram: server → network → client; cache sits between consumer (browser) and producer (origin server).  

**3️⃣ Step‑by‑step reasoning**  
1. **Define caching** – storing a copy of data so future requests can be served faster.  
2. **Explain why browsers cache** – reduce latency, save bandwidth, improve UX.  
3. **Show how it works** – HTTP headers (`Cache-Control`, `ETag`, `Last-Modified`), storage mechanisms (memory, disk).  
4. **Illustrate the lifecycle** – request → check cache → serve or fetch → store response.  
5. **Mention invalidation & freshness policies** – max‑age, stale‑while-revalidate, conditional requests.  

**4️⃣ Avoid common traps**  
- Don’t conflate *browser cache* with *server cache*; keep roles distinct.  
- Beware of over‑simplifying: caching isn’t just “store everything”; it’s selective and governed by policies.  
- Don’t ignore security/privacy concerns (e.g., sensitive data shouldn’t be cached).  

**5️⃣ Sanity‑check & verbalize**  
- Re‑state the benefit in plain terms (“It keeps a local copy so next time you visit, the page loads instantly”).  
- Confirm that each step follows logically: resource → cost → cache → policy → outcome.  
- End with a concise summary linking back to system design goals (latency, bandwidth, scalability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
