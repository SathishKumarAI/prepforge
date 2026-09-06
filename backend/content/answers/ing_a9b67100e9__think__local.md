---
qid: ing_a9b67100e9__think__local
question: 'Explain: Load Balancing Across Multiple Servers — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 465
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:14:46-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   * Identify that the reader wants a clear distinction between **proxy** and **reverse proxy** in the context of load‑balancing multiple servers.  
   * Assume basic networking knowledge (IP, ports) but no deep OSI‑layer expertise.

**2️⃣ Adopt a mental model**  
   * Think of traffic flow as a “pipeline”: client → entry point → backend pool → response back to client.  
   * Place the proxy or reverse proxy at that entry point and label its role: **intermediary vs. guardian**.

**3️⃣ Step‑by‑step reasoning**  
   1. Define a *proxy* (forward proxy) – sits between clients and any internet resource, hiding client IPs.  
   2. Define a *reverse proxy* – sits in front of one or more servers, presenting a single public address.  
   3. Show how load‑balancing fits: the reverse proxy distributes incoming requests to backend servers (round‑robin, least‑conn, health checks).  
   4. Provide concrete examples:  
      * **Proxy** – corporate VPN proxy caching web pages for employees.  
      * **Reverse Proxy** – Nginx/HAProxy fronting a cluster of Node.js app instances.  
   5. Mention typical protocols (HTTP, TCP) and tools (NGINX, HAProxy, Envoy).  

**4️⃣ Common traps to avoid**  
   * Mixing up “proxy” with “gateway”.  
   * Forgetting that a forward proxy can also load‑balance outbound traffic, but that’s not its primary role.  
   * Assuming all reverse proxies are HTTP‑only – many support TCP/UDP.

**5️⃣ Sanity‑check & communicate**  
   * Re‑state the core difference in one sentence: “A forward proxy hides clients; a reverse proxy hides servers.”  
   * Use a diagram or ASCII flow if possible.  
   * End with a quick quiz question (e.g., “Which would you use to distribute traffic across 5 web servers?”) to reinforce learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
