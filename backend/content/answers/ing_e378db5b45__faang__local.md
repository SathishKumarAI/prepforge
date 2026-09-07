---
qid: ing_e378db5b45__faang__local
question: 'Explain: Back to the Browser — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 486
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:59-05:00'
sources: []
---

**Clarify**

The article explains how a web browser resolves a domain name to an IP address using DNS.  
Assumptions: the user has a default DNS resolver (ISP or public), the domain is properly registered, and no advanced features like DNSSEC are highlighted.

---

**Approach**

1. **Restate the flow** – Browser → Resolver → Recursive lookup through root ➜ TLD ➜ authoritative server.  
2. **Highlight key concepts** – caching, recursion vs iteration, TTL, and response types (A/AAAA).  
3. **Tie to performance** – why caching matters, how query latency is reduced.

---

**Depth**

- The browser first checks its own cache; if miss → send a UDP query to the configured resolver.  
- The resolver performs *recursive* resolution: it contacts root servers for NS records of the TLD, then TLD servers for the domain’s authoritative NS, finally querying those for an A/AAAA record.  
- Each response carries TTL; resolvers cache responses until expiry.  
- DNSSEC adds signatures; clients verify to guard against spoofing.  
- Complexity: each recursive lookup is O(log N) in terms of hops (root→TLD→authoritative), but practically constant (~3–4 queries).  
- UDP avoids TCP overhead, but if a response >512B or truncated → fallback to TCP.

---

**Edge Cases**

- **Cache poisoning** – mitigated by DNSSEC.  
- **Non‑existent domain** – NXDOMAIN returned after final authoritative query.  
- **Load balancing via CNAME/ALIAS** – introduces extra hops.  
- **Recursive resolver failure** – client falls back to alternate resolvers.

---

**Optimize & Communicate**

Explain that caching reduces round‑trips, and that modern browsers also keep a local cache of recent DNS responses. Emphasize the trade‑off between TTL length (staleness vs query overhead). Conclude by linking this flow to real‑world latency: a 1–2 ms UDP hop per server is negligible compared to TCP/TLS handshakes, but still critical for mobile/edge scenarios. This structured walkthrough demonstrates clear reasoning and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
