---
qid: ing_e4c9d145cc__think__local
question: 'Explain: How CDN Routing Works — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 529
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:05:19-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What exactly is “routing” in a CDN?* Assume we’re talking about the decision process that maps an incoming client request to the optimal edge server (or origin).  
   - *Who are the actors?* Client, DNS resolver, CDN control plane, edge nodes.  
   - *What constraints matter?* Latency, load, geography, legal/regulatory zones, caching status.

**2. Adopt a layered mental model**  
   - **Client → DNS**: The first hop is name resolution; the CDN’s DNS layer decides which IP to return.  
   - **DNS → Edge selection**: Use geo‑IP, BGP, health checks, and any custom routing logic.  
   - **Edge → Origin or cache hit**: Once at an edge node, decide whether to serve from local cache or forward upstream.

**3. Step‑by‑step reasoning**  
   1. Client requests `cdn.example.com`.  
   2. DNS query hits CDN’s authoritative nameserver.  
   3. The control plane consults a routing table:  
      * Geo‑IP → nearest data center,  
      * Load metrics → avoid overloaded nodes,  
      * Health checks → skip failed edges,  
      * Policy rules (e.g., compliance zones).  
   4. DNS returns the IP of the chosen edge node to the client’s resolver.  
   5. Client connects to that IP; TLS handshake may include SNI to indicate original host.  
   6. Edge receives request: if content cached, serve directly; otherwise fetch from origin (possibly via another CDN hop).  

**4. Common traps to avoid**  
   - *Assuming DNS is the only routing step*: Remember DNS is a lookup, not a full path decision.  
   - *Ignoring dynamic health data*: Static geo‑IP alone can misroute traffic during failures.  
   - *Overlooking cache consistency*: Routing to an edge that has stale content defeats CDN benefits.

**5. Sanity‑check & communicate**  
   - Verify each component’s responsibility: DNS → IP selection; edge node → content delivery.  
   - Explain the flow in plain terms, then drill down into technical details (e.g., “edge nodes are chosen via a weighted round‑robin over geo‑IP buckets”).  
   - Use a diagram or pseudo‑code snippet to illustrate the lookup and decision logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
