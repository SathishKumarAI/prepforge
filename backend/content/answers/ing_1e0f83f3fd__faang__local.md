---
qid: ing_1e0f83f3fd__faang__local
question: 'Explain: The Browser Cache — How DNS Actually Works - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 544
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:22-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how the *browser cache* interacts with DNS resolution in a web request, as described by Ashish Pratap Singh. I’ll assume the audience knows basic HTTP but not the intricacies of DNS caching, TTLs, and the browser’s own cache.

**Approach**  
1. Map out the request flow: URL → DNS lookup → TCP handshake → HTTPS → HTTP ↔ Cache.  
2. Highlight two independent caches: *DNS resolver cache* (OS/ISP) and *browser cache* (resource storage).  
3. Explain how each cache’s TTL influences subsequent requests.

**Depth**  

| Layer | What it stores | Key parameters |
|-------|----------------|----------------|
| **DNS Resolver Cache** | IP address mapping for a hostname | `TTL` from the authoritative zone, `max-age`, negative caching |
| **Browser Cache** | Resource bytes (HTML, CSS, JS, images) | `Cache‑Control: max‑age`, `ETag`, `Last‑Modified` |

*DNS Flow:*  
1. Browser asks OS for IP → OS queries local resolver.  
2. If resolver has a valid entry (`TTL > 0`), it returns the IP immediately; no network round‑trip.  
3. If not, the resolver performs recursive lookups to authoritative nameservers, caching the result with its TTL.

*Browser Cache Flow:*  
1. After TCP/TLS handshake, browser requests the resource.  
2. Browser checks its cache: if `max-age` still valid → serves from disk; otherwise sends conditional request (`If‑None‑Match/Modified`).  
3. Server replies 304 or 200 with fresh bytes.

**Edge Cases**  
- *Stale DNS*: TTL expired but resolver still returns old IP (cache miss).  
- *Cache poisoning*: malicious DNS entry bypasses cache.  
- *Negative caching*: NXDOMAIN responses cached for a short period.  
- *Mixed content*: HTTPS requests to HTTP resources break cache policies.

**Optimize & Communicate**  
To reduce latency, browsers pre‑resolve DNS during page parsing and use *DNS Prefetch* tags. For scalability, CDN edge servers serve cached resources while maintaining low TTLs on DNS records to allow quick failover. I’d illustrate this with a diagram in an interview or slide deck, emphasizing the decoupling of DNS and HTTP caching layers. This showcases clear reasoning, depth, and awareness of performance trade‑offs—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
