---
qid: ing_cc23824508__think__local
question: 'Explain: Static Web Assets — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 500
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:25:17-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “static web assets”?* – HTML/CSS/JS files, images, fonts, etc., that never change per request.  
- *What does a CDN do?* – Replicates these assets across edge servers to serve them closer to users.  
- *Assume: high‑traffic site, low latency required, no dynamic rendering.*

**2️⃣ Adopt a design‑thinking framework**  
Use the classic **“Problem → Constraints → Goals → Architecture”** flow.  
- Problem: Users worldwide experience slow load times.  
- Constraints: Consistency of assets, cache invalidation, cost limits.  
- Goals: Maximize cache hit ratio, minimize latency, keep costs low.

**3️⃣ Step‑by‑step reasoning**  
a. Identify asset types and their update frequency.  
b. Choose a **content hash** strategy (e.g., `style.[hash].css`) so that every change forces a new URL → automatic cache busting.  
c. Pick a CDN provider or build an in‑house edge layer; evaluate edge compute vs pure caching.  
d. Define routing: origin pull for miss, edge push on deploy.  
e. Set cache-control headers (`max-age`, `immutable`) appropriately.  
f. Design monitoring: hit/miss ratios, latency dashboards, cost reports.

**4️⃣ Common traps to avoid**  
- *Over‑caching* dynamic content → stale pages.  
- *Under‑hashing* assets → manual purge headaches.  
- Ignoring **regional pricing tiers** → blow up budget in low‑traffic regions.  
- Failing to handle **SSL/TLS termination** at the edge → performance hit.

**5️⃣ Sanity‑check & verbalize**  
Run a mental “user journey” from request to delivery, verifying each step: DNS lookup → CDN edge selection → cache hit/miss logic → origin fetch if needed.  
Explain it aloud as: *“When a user requests `index.html`, the DNS points to the nearest CDN node; that node checks its local cache; if present, serves instantly; otherwise pulls from the origin, caches it with proper headers, and returns.”*  

This structured approach lets you internalize the reasoning pattern for any similar system‑design interview question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
