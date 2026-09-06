---
qid: ing_8b3105764c__think__local
question: 'Explain: Load Balancing — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 465
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:15:46-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Identify what “load balancing” means in this context (e.g., distributing client requests across servers).  
- Decide whether we’re focusing on application‑layer load balancers or network‑layer ones.  
- Assume typical stateless HTTP traffic for TCP, but note that UDP is often used for real‑time services where state is minimal.

**2️⃣ Adopt a comparison framework**  
- Use *transport characteristics* (connection‑oriented vs connectionless).  
- Map each to *load balancer responsibilities*: session persistence, packet ordering, and failure detection.  
- Consider common algorithms (round‑robin, least‑conn, hash) and how they interact with each protocol.

**3️⃣ Step‑by‑step reasoning**  
1. **TCP**: Requires ACKs → the LB can track connection state; enables sticky sessions and health checks via established connections.  
2. **UDP**: No handshake → LB must be stateless or use pseudo‑state (e.g., hash of src/dst).  
3. Evaluate performance: UDP allows lower latency but risks packet loss, so LBs may need to re‑route lost packets or use application‑level recovery.  
4. Discuss how health checks differ: TCP uses port scans; UDP often relies on custom probes or heartbeat messages.

**4️⃣ Common traps to avoid**  
- Assuming UDP traffic can’t be load balanced at all—many DNS and VoIP LBs handle it fine with hashing.  
- Overlooking that TCP’s connection tracking increases memory overhead for the LB.  
- Forgetting that some UDP services (e.g., gaming) require consistent routing per session, so simple round‑robin may break state.

**5️⃣ Sanity‑check & verbalize**  
- Run through a concrete example: HTTP over TCP → sticky session vs DNS over UDP → hash‑based routing.  
- Check if the explanation covers both protocol traits and LB mechanisms.  
- Summarize by highlighting key trade‑offs: *statefulness & reliability vs low latency & simplicity*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
