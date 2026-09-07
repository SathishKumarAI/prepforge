---
qid: ing_a9b67100e9__faang__local
question: 'Explain: Load Balancing Across Multiple Servers — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 569
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:48-05:00'
sources: []
---

**Clarify**  
We’re asked how load balancing works across several AI inference servers, and specifically the difference between a *proxy* (client‑side) and a *reverse proxy* (server‑side). I’ll assume:  
- Traffic comes from external clients (e.g., mobile apps).  
- We have multiple stateless inference nodes behind a single public IP.  
- The goal is to distribute requests evenly while preserving session state if needed.

**Approach**  
1. Explain the role of each proxy type.  
2. Show typical deployment diagrams.  
3. Highlight when you’d pick one over the other.  

**Depth**  
| Proxy | Where it sits | How it routes | Use‑case example |
|-------|---------------|--------------|------------------|
| **Client‑side (forward) proxy** | Between client and internet | Client config points to proxy; proxy forwards to backend pool using round‑robin, least‑conn, etc. | Mobile app on corporate VPN that must route through a security gateway before reaching the cloud. |
| **Reverse proxy** | In front of your web service (often at edge) | Receives request on public IP, then selects an internal AI node and proxies the traffic back to the client. Common patterns: HAProxy, Nginx, Envoy. | Public REST API for image classification – all users hit a single hostname; reverse proxy balances load across 10 GPU workers. |

- **Latency**: Reverse proxies add ~1–2 ms but keep IPs hidden from clients, simplifying TLS termination and caching.  
- **Scalability**: Both can use health checks and dynamic re‑registration (e.g., via Kubernetes Service).  
- **Security**: Reverse proxy can enforce WAF rules; client‑side proxy is typically used for policy enforcement on the network.

**Edge Cases**  
- Sticky sessions: reverse proxies must hash cookies or session IDs.  
- Zero‑downtime deploys: ensure health checks are accurate to avoid routing traffic to unhealthy nodes.  
- Large payloads (e.g., 100 MB image): consider connection persistence and timeouts.

**Optimize & Communicate**  
For production AI inference, a reverse proxy is usually preferred because it hides internal topology, simplifies TLS, and integrates with load‑balancing frameworks. I’d narrate the decision by showing the trade‑off: client‑side proxies give more control over outbound traffic but increase client configuration overhead; reverse proxies centralize routing logic and scale horizontally. This structured walk‑through satisfies FAANG interviewers’ focus on clarity, depth, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
