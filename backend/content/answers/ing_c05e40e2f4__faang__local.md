---
qid: ing_c05e40e2f4__faang__local
question: 'Explain: Questions and Solutions — How to Troubleshoot if You Can\u2019t
  Access a Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 470
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:09:12-05:00'
sources: []
---

## Clarify  
We need a **system‑level approach** to diagnose why a user can’t reach a particular web domain (e.g., DNS, routing, firewall). Confirm assumptions:  
1. Is the issue global or client‑specific?  
2. Are we troubleshooting HTTP(S) traffic only?  
3. Do we have visibility into network devices and logs?

## Approach  
Build an observable pipeline:  
- **Ingress** → **DNS resolution** → **Transport (TCP/UDP)** → **Application layer**.  
At each hop inject probes, collect metrics, and correlate failures.

## Depth  
1. **Client‑side**: run `ping`, `traceroute`, `dig`. Check local firewall rules and proxy settings.  
2. **Network path**: use BGP route collectors or traceroute from multiple points to spot asymmetric routes or black holes.  
3. **DNS**: verify authoritative records, TTLs, and any DNSSEC issues; use public resolvers (`8.8.8.8`).  
4. **Transport**: TCP SYN‑ACK timeouts hint at ACLs or load balancer misconfig. Use `tcpdump`/`Wireshark`.  
5. **Application**: inspect TLS handshakes, HTTP status codes, and server logs (access + error).  

Complexity is linear in hops; each probe is O(1). Trade‑offs: frequent probing can generate noise; use rate limiting.

## Edge Cases  
- DNS cache poisoning or NXDOMAIN due to misconfig.  
- IPv6 only sites accessed over IPv4.  
- CDN edge node failures causing 502/503.  
- Client behind corporate proxy blocking the domain.

## Optimize & Communicate  
Automate with Prometheus + Grafana dashboards, alert on anomalies (e.g., >5 % TCP drop rate). Use distributed tracing to pinpoint latency spikes. Explain that troubleshooting is a layered hypothesis‑testing process: start local, move outward, and validate each layer before proceeding. This structured reasoning satisfies FAANG interviewers’ emphasis on clear communication, depth, and systematic problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
