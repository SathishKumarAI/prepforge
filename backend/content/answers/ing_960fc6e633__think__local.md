---
qid: ing_960fc6e633__think__local
question: What is a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md at master
  \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 435
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:02:22-05:00'
sources: []
---

**Thinking Process for Explaining “What is a CDN?”**

1. **Clarify the Scope & Assumptions**  
   - Assume the audience knows basic web concepts (HTTP, servers).  
   - Define “CDN” as *Content Delivery Network* and focus on its purpose: delivering static assets quickly.

2. **Choose a Mental Model / Framework**  
   - Use the **“client–edge–origin” triangle**: client → edge node → origin server.  
   - Emphasize three core functions: *caching*, *geographic distribution*, and *load balancing*.

3. **Step‑by‑step Reasoning**  
   1. Explain that a CDN is a globally distributed pool of servers (edge nodes).  
   2. When a client requests content, the request hits the nearest edge node.  
   3. If the edge has cached the asset, it serves it instantly; otherwise it fetches from the origin and caches for future requests.  
   4. Highlight benefits: lower latency, reduced bandwidth costs, improved reliability.

4. **Common Traps to Avoid**  
   - Don’t conflate CDN with a simple caching proxy.  
   - Avoid saying “CDN always copies everything”; clarify that it only caches what is requested or pre‑populated (purge/invalidations).  
   - Don’t ignore the role of DNS in routing clients to the closest edge.

5. **Sanity‑Check & Communicate Clearly**  
   - Verify that the explanation covers *why* CDNs exist, *how* they work at a high level, and *what problems* they solve.  
   - Use an analogy (e.g., “like a chain of local libraries serving books instead of all patrons going to a central library”).  
   - End with a concise definition: “A CDN is a globally distributed network of edge servers that cache and deliver content close to users, reducing latency and load on the origin.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
