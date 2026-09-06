---
qid: ing_095e9dc042__think__local
question: How does the load balancer choose the backend server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 433
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:20:22-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - Is the question about a generic L4/L7 load balancer or a specific product (NGINX, HAProxy, AWS ELB)?  
   - Assume stateless, round‑robin or health‑check‑enabled backend pool for illustration.

**2. Mental model: request → entry point → selection algorithm → forwarding**  
   - Map the flow: client → LB IP/port → LB processes header/metadata → selects a target → forwards packet.

**3. Step‑by‑step reasoning**  
   1. **Receive request** – LB receives TCP/UDP or HTTP(S) request.  
   2. **Health status lookup** – Query internal health‑check table; exclude unhealthy nodes.  
   3. **Apply selection logic** – e.g., round‑robin, least‑connections, IP hash, weighted round‑robin.  
   4. **Choose backend** – Resolve to an IP/port from the pool.  
   5. **Establish/forward connection** – Open or reuse a TCP connection; send response back through same path.

**4. Common pitfalls to avoid**  
   - Forgetting that health checks are asynchronous: a node may appear healthy but actually be down.  
   - Assuming “random” selection means true uniformity; many LB’s use deterministic algorithms (e.g., round‑robin).  
   - Overlooking session persistence (“sticky sessions”) which overrides pure load logic.

**5. Sanity‑check & verbalize**  
   - Verify that the chosen algorithm matches the observed traffic pattern (e.g., equal distribution → round‑robin).  
   - Explain the process as if teaching: “When a client hits the LB, it first discards any unhealthy servers, then runs its configured algorithm—say round‑robin—to pick the next server, and finally forwards the request.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
