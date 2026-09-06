---
qid: ing_a40a2b49fa__think__local
question: 'Explain: Application Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 450
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:55:14-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify that “Application Cache” refers to browser‑side caching (e.g., HTML5 ApplicationCache) rather than server‑side cache layers.  
   - Assume the audience knows basic web architecture but may not know how the cache is populated, invalidated, or used in a system design interview.

**2. Adopt a mental model**  
   - Treat the cache as a *staging area* between the network and the application:  
     1) **Request** → 2) **Cache lookup** → 3) **Serve from cache or fetch from origin** → 4) **Store response for future requests**.  
   - Map this to typical cache attributes: *key, value, size, eviction policy, consistency*.

**3. Step‑by‑step reasoning**  
   - Explain how the ApplicationCache works: the manifest file lists resources; the browser downloads them once and keeps them until the manifest changes.  
   - Discuss cache life‑cycle: installation, activation, update triggers.  
   - Highlight use cases in system design (offline support, reduced bandwidth, faster load).  
   - Mention trade‑offs: stale data risk, large initial payload, complexity of managing manifests.

**4. Avoid common pitfalls**  
   - Don’t conflate ApplicationCache with Service Workers or CDN caching.  
   - Beware of the “ApplicationCache is deprecated” fact; clarify that modern designs favor Service Workers for fine‑grained control.  
   - Don’t ignore cache invalidation logic—users expect fresh content.

**5. Sanity‑check & verbalize**  
   - Recount a quick example: a news app with an `appcache.manifest` listing CSS, JS, and article images; explain how the first visit triggers download, subsequent visits hit the cache, and when the manifest updates the browser re‑downloads everything.  
   - End by summarizing key points: purpose, mechanism, benefits, limitations, and modern alternatives—this shows you understand both theory and practical system design implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
