---
qid: ing_63f77c5d0b__star__local
question: 'Explain: DNS failure — How to Troubleshoot if You Can\u2019t Access a Particular
  Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 368
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:47:39-05:00'
sources: []
---

**Situation**  
In mid‑2024 I was leading the rollout of a new SaaS portal for a client in Europe. Two weeks after launch users reported that they could not reach the product’s login page from certain ISPs. The error log showed repeated DNS resolution failures while all other services worked fine.

**Task**  
I had to identify whether the problem lay with our internal DNS, the client’s ISP, or a global CDN misconfiguration, and restore access within 24 hours without disrupting legitimate traffic.

**Action**  
1. Ran `dig @8.8.8.8 example.com A` from multiple geolocated cloud VMs to confirm that authoritative records existed globally.  
2. Used `traceroute -n example.com` and `mtr` to map hop latency and pinpoint a specific ISP’s DNS resolver.  
3. Checked our internal BIND logs for NXDOMAIN or SERVFAIL entries; none appeared, so the issue was external.  
4. Contacted the CDN (Cloudflare) to verify zone propagation – the A record had just been updated, but the edge cache still held an old TTL of 86400 s.  
5. Issued a “purge all” through Cloudflare’s API and set a lower default TTL for future changes.

**Result**  
The login page was reachable from all locations within six hours. I reduced the CDN’s default TTL to 600 s, cutting future propagation delays by ~80%. The incident also led me to document a DNS health‑check script that alerts on anomalous NXDOMAIN rates before users notice it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
