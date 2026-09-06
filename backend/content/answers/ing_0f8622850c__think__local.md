---
qid: ing_0f8622850c__think__local
question: 'Explain: What a CDN Does — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 435
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:44:26-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - *What is being asked?*  The user wants an explanation of “what a CDN does” in the context of system design, not just a definition.  
   - *Assume* the audience has basic networking knowledge but may be new to CDNs; keep jargon minimal and focus on functional benefits.

**2. Choose a mental model**  
   - Think of a CDN as a distributed caching layer that sits between origin servers and end users.  
   - Use the “client → edge node → origin” flow diagram to structure the answer, highlighting latency, bandwidth, and fault‑tolerance.

**3. Step‑by‑step reasoning**  
   1. *Identify core problems*: long round‑trip times, uneven traffic load, single points of failure.  
   2. *Show how a CDN addresses each*: caching static assets at edge nodes (reduces latency), load balancing across many nodes (spreads traffic), and replication for high availability.  
   3. *Explain key mechanisms*: geographic routing (closest node), cache invalidation, content versioning, SSL offloading, compression.  
   4. *Mention real‑world benefits*: faster page loads, reduced origin bandwidth costs, improved SEO, better user experience.

**4. Common traps to avoid**  
   - Don’t conflate CDN with a simple reverse proxy; emphasize distribution and caching.  
   - Avoid overloading the answer with protocol details (e.g., HTTP/2) unless asked.  
   - Don’t assume all CDNs use the same cache‑invalidation strategy; note that it varies.

**5. Sanity‑check & communicate clearly**  
   - Re‑read to ensure each bullet directly answers “what a CDN does.”  
   - Use short sentences, avoid jargon, and finish with a concise summary: *“A CDN is a globally distributed caching layer that brings content closer to users, reduces latency, balances load, and improves reliability.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
