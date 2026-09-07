---
qid: ing_ce07c79c0a__faang__local
question: How to Troubleshoot if You Can’t Access a Particular Website?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 491
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:41-05:00'
sources: []
---

**Clarify**  
You’re asked to diagnose why a user cannot reach *example.com*. Confirm whether the issue is local (client‑side) or global (server‑side), whether it’s intermittent or constant, and what tools/permissions you have (DNS access, network logs, server console).  

**Approach**  
1. **Check connectivity** – ping, traceroute, `nslookup`.  
2. **Validate DNS resolution** – ensure the domain resolves to the expected IP(s).  
3. **Inspect firewall & routing** – verify no ACLs or security groups block traffic on ports 80/443.  
4. **Review server health** – web‑server logs (access, error), process status, CPU/memory usage.  
5. **Look for CDN or load balancer misconfig** – stale cache, incorrect origin IPs.  
6. **Confirm SSL/TLS** – expired cert, mismatched hostname, handshake failures (`openssl s_client`).  

**Depth**  
- *Ping/Traceroute* shows reachability and path hops; a failure at hop n indicates routing or ACL issues.  
- `nslookup` reveals authoritative name servers; if the IP changes, check DNS propagation or TTL.  
- Firewall logs (iptables, AWS Security Groups) can expose dropped packets.  
- Web‑server logs (`/var/log/nginx/error.log`) often contain 502/504 errors pointing to upstream health.  
- `openssl s_client -connect example.com:443` will surface TLS handshake problems (e.g., missing intermediate cert).  

**Edge Cases**  
- DNS cache poisoning or local resolver corruption → flush DNS.  
- CDN edge node failure → test from multiple geographic locations.  
- Rate‑limiting or DDoS protection kicking in → check WAF logs.  

**Optimize & Communicate**  
Start with the quickest checks (ping, nslookup) to rule out obvious client issues, then progressively move deeper (firewall, server health). Document each step and its outcome; if you discover a mis‑configured load balancer, propose an automated health‑check script and alerting rule. Conclude by summarizing root cause and remediation plan, ensuring the stakeholder understands both the technical fix and any preventive controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
