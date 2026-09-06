---
qid: ing_0438e2f6b3__think__local
question: 'Explain: Browser DNS caching — Why DNS Based Global Server Load Balancing
  (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 479
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:01:27-05:00'
sources: []
---

**1️⃣ Clarify the core question & assumptions**  
   - *What is being asked?* We need to explain why DNS‑based Global Server Load Balancing (GSLB) fails when browsers cache DNS entries.  
   - *Assumptions:* The reader knows basic DNS, caching, and GSLB concepts; we’re focusing on the browser’s local cache, not system or ISP caches.

**2️⃣ Mental model / framework**  
   - **DNS resolution → IP returned → browser connects**  
   - **Cache TTL → time‑to‑live for that mapping**  
   - **GSLB → dynamic DNS responses based on load/geo**  
   - Identify the *interaction point*: when a cached entry is still valid, GSLB cannot change the target.

**3️⃣ Step‑by‑step reasoning**  
   1. Browser queries DNS; receives IP + TTL.  
   2. If TTL > 0, browser stores mapping locally.  
   3. Subsequent requests use cached IP until TTL expires.  
   4. GSLB’s goal is to point clients to the best server *at query time*.  
   5. When cache holds an old IP, the browser never asks DNS again; it keeps using the stale IP regardless of current load or health.  
   6. Thus traffic can be unevenly distributed or hit a failed node.

**4️⃣ Common traps to avoid**  
   - Confusing *browser* cache with *OS/ISP* caches.  
   - Assuming GSLB can “push” changes; DNS is pull‑based.  
   - Ignoring that TTLs are set by the authoritative zone, not the client.

**5️⃣ Sanity‑check & communicate**  
   - Verify: If TTL = 0, every request goes to DNS → GSLB works.  
   - Explain with a quick analogy (e.g., “like memorizing a phone number that later changes”).  
   - Conclude: Lowering TTLs or using short‑lived records mitigates the problem but may increase query load; alternative methods (HTTP redirects, Anycast) are needed for true real‑time balancing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
