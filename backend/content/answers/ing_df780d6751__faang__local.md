---
qid: ing_df780d6751__faang__local
question: 'Explain: Server-side failure — How to Troubleshoot if You Can\u2019t Access
  a Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 703
total_tokens: 951
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:18:44-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *server‑side* troubleshooting system that tells us why we can’t reach a specific website (e.g., `example.com`). The goal is to diagnose the failure **without** direct access to the client’s machine or the target site.  
Key assumptions:  
- We own or control multiple monitoring nodes (edge probes).  
- We have network telemetry and basic DNS/HTTP instrumentation.  
- No intrusive changes on the target website; we rely on passive data.

---

**Approach**  

1. **Ingress‑level health checks** – ping / TCP connect to the target’s IPs from many geographic probes.  
2. **DNS resolution path** – record each resolver hop, TTL, and response codes.  
3. **Traceroute & BGP reachability** – gather AS paths and detect routing anomalies.  
4. **HTTP/HTTPS request simulation** – send GET/HEAD requests with varied user‑agents, TLS versions, and record status codes / SSL errors.  
5. **Correlation engine** – aggregate the above data, flag inconsistencies, and surface likely root causes (DNS failure, routing leak, firewall block, TLS mis‑config).  

---

**Depth**

| Layer | Instrumentation | Typical Output |
|-------|-----------------|---------------|
| DNS | Recursive queries + `dig` to authoritative servers | NXDOMAIN, SERVFAIL, delayed TTL |
| Network | ICMP / TCP SYN from 100+ probes | RTT, packet loss, path AS |
| Application | HTTPS GET with TLS‑ClientHello variations | 5xx/4xx codes, SSL alert types |
| BGP | `bgpstream` prefix reachability checks | Prefix withdrawn, AS-path changes |

*Complexity*:  
- **Probe traffic**: O(P) where P = number of probes (≈100).  
- **Latency**: ~1–2 s per probe if batched.  
- **Storage**: O(1) per probe per check; aggregate daily data ≈ few MB.

*Trade‑offs*:  
- More probes → better coverage but higher cost.  
- Passive DNS vs active queries: passive is cheaper but may miss TTL expirations.

---

**Edge Cases**

| Scenario | What breaks? | Test |
|----------|--------------|------|
| Target behind CDN with origin IP hidden | Direct connect fails | Use CDN’s known edge IPs |
| Firewall dropping traceroute packets | No path data | Try TCP/UDP probes |
| DNSSEC mis‑validation | SERVFAIL only on secure resolvers | Compare insecure vs secure queries |

---

**Optimize & Communicate**

- **Auto‑scale probes**: Spin up cloud VMs in new regions when a failure is detected.  
- **Alerting**: Push to PagerDuty with cause tags (DNS, Routing, TLS).  
- **Dashboard**: Real‑time heatmap of latency per region; historical trend graphs for recurring outages.  

Narration style: start by stating the goal (“We need to know why `example.com` is unreachable”), then walk through the data sources, explain how each layer isolates a failure type, and finish with how we surface actionable insights to ops teams. This structured flow demonstrates clear problem framing, thorough technical depth, and pragmatic optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
