---
qid: ing_54db94a7c6__faang__local
question: 'Explain: Summary — How to Troubleshoot if You Can\u2019t Access a Particular
  Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 541
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:01:15-05:00'
sources: []
---

## 1️⃣ Clarify  
**Problem:** A user cannot reach *website X* (e.g., *example.com*) from their device/network.  
**Goal:** Build a system that diagnoses the failure and suggests corrective actions without manual log‑in or admin access to the web server.

Assumptions to confirm:  
- The client can run scripts/tools locally.  
- No privileged access to the website’s infrastructure (DNS, CDN, firewall).  
- The system must handle intermittent outages and provide actionable insights.

## 2️⃣ Approach  
1. **Layered probing** – sequentially test DNS → TCP port → HTTP(S) → TLS handshake.  
2. **Parallel diagnostics** – run traceroute, ping, and mtr to detect path anomalies.  
3. **Collect telemetry** – latency, packet loss, TTLs, error codes.  
4. **Correlation engine** – match symptoms with known failure patterns (e.g., DNSSEC failure, TLS cert expiry).  
5. **Feedback loop** – suggest remediation steps (clear cache, use alternative DNS, contact ISP).

## 3️⃣ Depth  
- **DNS Check:** `dig +trace example.com`. If NXDOMAIN → domain mis‑configured.  
- **TCP Probe:** `nc -vz host 443`. Timeout → firewall or routing issue.  
- **HTTP Probe:** `curl -I https://example.com`. Status codes >400 hint at server errors.  
- **TLS Handshake:** `openssl s_client -connect example.com:443`. Failure indicates cert problems.  
- **Traceroute / MTR**: identify hop where packets drop or latency spikes.  

Complexity is *O(n)* per probe (n = number of hops). Parallel execution keeps total time < 30 s.

## 4️⃣ Edge Cases  
- **CDN edge failures:** multiple IPs may resolve; test each.  
- **Local network filtering:** VPN or corporate proxy may block traffic—detect by comparing direct vs proxied routes.  
- **Rate‑limiting or DDoS protection:** repeated probes trigger blocks; implement exponential backoff.

## 5️⃣ Optimize & Communicate  
- Cache DNS results to reduce load.  
- Use asynchronous I/O for parallelism.  
- Provide a concise, human‑readable report: “DNS OK, but TCP port 443 unreachable from hop 12 → likely ISP firewall.”  

Narrate reasoning step‑by‑step so interviewers see structured problem solving and clear trade‑off discussion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
