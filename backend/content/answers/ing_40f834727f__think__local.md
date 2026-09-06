---
qid: ing_40f834727f__think__local
question: When will a load balancer (LB) will stop sending requests to a server?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 419
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:02:47-05:00'
sources: []
---

**1️⃣ Clarify the scenario & assumptions**  
   * Identify what “load balancer” type we’re talking about (hardware vs software, round‑robin, least‑connections, health‑check based).  
   * Assume the LB is configured with a standard health‑check interval and threshold.  
   * Note that “stop sending requests” means the LB will no longer route traffic to that particular backend.

**2️⃣ Mental model: Health‑check lifecycle**  
   * A healthy server → continuously receives traffic.  
   * An unhealthy or failed server → removed from the active pool after a configurable number of consecutive failures.  
   * Once removed, it can be re‑added only after passing health checks again (or by manual intervention).

**3️⃣ Step‑by‑step reasoning**  
   1. The LB pings the server at its check interval (e.g., every 10 s).  
   2. If the ping/HTTP probe fails, a counter increments.  
   3. Once that counter reaches the “failure threshold” (often 3–5 consecutive failures), the LB marks the node as *unhealthy*.  
   4. The server is then excluded from routing until it passes the next successful check.

**4️⃣ Common pitfalls to avoid**  
   * Assuming a single failure stops traffic—most LBs wait for multiple failures.  
   * Ignoring that some LBs keep a “drain” period where in‑flight requests finish before stopping new ones.  
   * Forgetting about manual overrides or sticky sessions that might still hit the server.

**5️⃣ Sanity‑check & verbalize**  
   * Verify LB documentation: confirm check interval, failure threshold, and drain timeout.  
   * Explain to a colleague: “The LB stops routing when a backend fails its health‑check N times in a row; after that it’s marked unhealthy until it passes again.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
