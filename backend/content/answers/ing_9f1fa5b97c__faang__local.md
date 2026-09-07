---
qid: ing_9f1fa5b97c__faang__local
question: 'Explain: Local network failure — How to Troubleshoot if You Can\u2019t
  Access a Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 477
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:53:57-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that helps an engineer debug why a specific website is unreachable when the local network appears healthy (ping works, other sites load). I’d confirm: *Is it truly “local” failure?* Are we talking DNS, routing, firewall, or application‑layer issues? Do we have logs from routers, switches, and endpoint hosts?  

**Approach**  
1. **Collect telemetry** – capture packet traces (tcpdump), gather ARP/NDP tables, check DNS cache.  
2. **Layer‑wise diagnostics** –  
   * Layer 4: Verify TCP handshake with `telnet/ss -tn`.  
   * Layer 7: Use HTTP client tools (`curl`, `wget`) to see status codes or timeouts.  
3. **Fail‑over path** – route traffic through an alternate gateway or VPN and compare results.  
4. **Automated tool** – a lightweight agent that logs all above metrics and sends them to a central dashboard (Grafana/Prometheus).  

**Depth**  
- The agent runs on each endpoint, collects: `arp -a`, `ip route show`, `dig +trace <site>`, `tcpdump -c 10 host <site>`.  
- Data is pushed via secure MQTT or gRPC to a collector.  
- Collector aggregates per‑host and per‑segment metrics; queries are answered in sub‑second latency.  
- Complexity: O(1) per packet for parsing, overall storage linear in traffic volume.  

**Edge Cases**  
- CDN edge IPs change → need dynamic DNS resolution.  
- IPv6 only sites vs. IPv4 local routes.  
- Misconfigured firewall rules that drop SYN packets silently.  

**Optimize & Communicate**  
We could cache DNS results to avoid repeated lookups, use Bloom filters for rapid host lookup, and expose an API so other tools (e.g., incident‑response bots) can trigger the diagnostics automatically. In an interview I’d explain how each layer isolates a failure domain, why telemetry is central, and how this design scales from a single workstation to enterprise‑wide monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
