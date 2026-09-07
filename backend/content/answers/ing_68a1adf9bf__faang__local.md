---
qid: ing_68a1adf9bf__faang__local
question: 'Explain: Terminology — How to Troubleshoot if You Can\u2019t Access a Particular
  Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 494
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:58-05:00'
sources: []
---

**Clarify**

You’re asked to design a system that helps users diagnose why they can’t reach a specific website (e.g., “example.com”).  
Assumptions:  
* Users have a browser or CLI tool; we can collect client‑side logs.  
* The service should run on the user’s machine or a thin client, not require admin rights.  
* We need to handle DNS, routing, firewall, and content‑filtering issues.

**Approach**

1. **Collect diagnostics** – Gather IPs (DNS resolution), traceroute hops, TLS handshake results, HTTP status, and local firewall rules.  
2. **Analyze patterns** – Use a rule engine that maps symptoms (e.g., DNS fails vs. TCP SYN timeout) to likely causes.  
3. **Suggest fixes** – Provide actionable steps: flush DNS, change DNS server, check proxy settings, open ports, or contact ISP.  
4. **Feedback loop** – Allow the user to test after each fix and update the diagnosis.

**Depth**

*Client‑side agent (Python/Go) runs a lightweight daemon.*  
- `dns_resolve(host)` → `A`/`AAAA` records.  
- `traceroute(host, max_hops=30)` → hop latency & TTLs.  
- `tcp_connect(host, port)` → handshake success/failure.  
- `tls_handshake(host, port)` → certificate chain validity.  
The rule engine (JSON‑based) runs in O(n) over the collected events. Complexity is negligible; memory < 10 MB.

**Edge Cases**

* IPv6 vs. IPv4 resolution differences.  
* Firewalls blocking outbound ICMP (traceroute).  
* CDN edge caches causing inconsistent IPs.  
* Users behind corporate proxies that rewrite URLs.

**Optimize & Communicate**

- Cache DNS results to reduce repeated lookups.  
- Parallelize traceroute and TCP probes for speed.  
- Offer a “one‑click” remediation button in the UI.  
Explain reasoning step‑by‑step: “We first rule out DNS; if that passes, we suspect routing or firewall; each symptom narrows the search space.” This shows structured thinking, clear communication, and depth—all key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
