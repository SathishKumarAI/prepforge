---
qid: ing_2673a531af__faang__local
question: 'Explain: Use IP Allow Lists Carefully — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 481
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:13:13-05:00'
sources: []
---

**Clarify**  
We’re designing a webhook‑delivery system that must only accept calls from trusted partners. The requirement is “use IP allow lists carefully” – i.e., decide how to validate the caller’s IP, what to do on mismatch, and how to keep the list up‑to‑date without breaking service.  
Assumptions: partners expose a stable public IP (or CIDR), we have a central config store, latency < 200 ms, and zero downtime during rollouts.

**Approach**  
1. Store each partner’s allowed CIDR ranges in a fast key/value cache (Redis or in‑memory).  
2. On receipt of a webhook, parse the `X-Forwarded-For` header (or socket IP if behind Nginx) and run an O(1) CIDR lookup against the cached set.  
3. If matched → process; else → log & return 403.  
4. Periodically refresh the cache from a secure config service (e.g., AWS Parameter Store) via signed webhook, and use a graceful “stale‑while‑revalidate” strategy to avoid outages.

**Depth**  
- CIDR lookup uses a radix tree or Bloom filter for sub‑microsecond checks.  
- Complexity: O(1) average per request; memory ≈ #CIDRs × size_of_entry (~10 KB).  
- Security: enforce TLS termination, signed config payloads, and audit logs of denied attempts.

**Edge Cases**  
- Partners with dynamic IPs → fallback to mutual‑TLS or OAuth.  
- Proxy chains that spoof `X-Forwarded-For` → trust only headers set by our reverse proxy.  
- Misconfigured CIDR causing accidental lockout → use a “watchdog” that alerts if no requests for N days.

**Optimize & Communicate**  
We can further reduce latency by colocating the cache with the application tier and using CDN edge logic to pre‑filter IPs. In production, I’d present this flow diagramically, highlight trade‑offs (memory vs speed), and show how we log and monitor failures—exactly what a FAANG interviewer expects: clear structure, solid implementation details, and awareness of pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
