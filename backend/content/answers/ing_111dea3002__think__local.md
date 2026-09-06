---
qid: ing_111dea3002__think__local
question: 'Explain: Proxies and Headers — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 436
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:50:40-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify whether the interview expects a high‑level overview (what proxies/headers are) or deep dive into how they impact system design (e.g., caching, load balancing).  
   - Assume the candidate knows basic HTTP but may not be familiar with reverse proxies, API gateways, or TLS termination.  

**2. Adopt a layered mental model**  
   - *Transport layer*: TCP/UDP → SSL/TLS handshake.  
   - *Application layer*: HTTP request/response, headers, status codes.  
   - *Infrastructure layer*: Proxy types (forward, reverse, edge), load balancers, CDN nodes.  

**3. Step‑by‑step reasoning**  
   1. Start with the client → proxy → server flow, highlighting where headers are added or modified.  
   2. Explain common header fields (`Host`, `X-Forwarded-For`, `X-Real-IP`, `Authorization`, etc.) and why a proxy injects them.  
   3. Discuss TLS termination: proxy decrypts HTTPS, forwards plain HTTP internally, then re‑encrypts if needed.  
   4. Show how proxies enable caching, rate limiting, A/B testing, and security filtering.  

**4. Avoid common traps**  
   - Don’t conflate *proxy* with *load balancer* without noting their differences.  
   - Beware of assuming all headers are trustworthy; emphasize validation at the backend.  
   - Skip over the nuance that HTTPS headers are not visible to intermediate proxies unless TLS is terminated.

**5. Sanity‑check & verbalize**  
   - Ask yourself: “Does this explanation cover both HTTP and HTTPS flows?”  
   - Verify that you’ve mentioned header injection points, security implications, and typical use cases (e.g., API gateways).  
   - Keep the talk concise yet comprehensive; be ready to dive deeper into any sub‑topic if prompted.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
