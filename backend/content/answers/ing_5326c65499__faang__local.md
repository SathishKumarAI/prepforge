---
qid: ing_5326c65499__faang__local
question: 'Explain: Security Front Door — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 563
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:44-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Security‑First CDN* that protects the origin while delivering content quickly. Key assumptions:  

- **Traffic volume**: millions of requests per second.  
- **Content types**: static assets (images, JS/CSS) + dynamic API responses.  
- **Threats**: DDoS, OWASP web attacks, credential stuffing, data exfiltration.  
- **Compliance**: GDPR/PCI‑DSS for user data in transit.

**Approach**  

1. **Front‑end layer** – edge servers with TLS termination, HTTP/2 support, and a *Web Application Firewall (WAF)* that applies rate‑limiting, IP reputation, and rule sets per region.  
2. **Caching strategy** – aggressive cache‑control for static assets; signed URLs + token auth for protected content.  
3. **Origin shield** – a global “traffic broker” that aggregates requests to reduce origin load, performing de‑duplication and caching for dynamic responses.  
4. **Threat intelligence feed** – real‑time blocklists (botnet IPs, malicious user agents) fed into the WAF.  
5. **Observability** – distributed tracing, anomaly detection via ML on request patterns, alerting to DevOps.

**Depth**  

- Edge servers run *Nginx + ModSecurity* with custom Lua scripts for ML‑based bot scoring (O(1) per request).  
- Cache invalidation uses publish/subscribe (Kafka) so origin pushes “purge” events.  
- Origin shield stores a probabilistic cache (Cuckoo filter) to answer “has this key been served?” in O(1).  
- DDoS mitigation: auto‑scaling rate limits, scrubbing via dedicated scrubbing nodes; traffic is routed through *Anycast* for geographic distribution.

**Edge Cases**  

- Sudden flash crowds (e.g., product launch) → ensure cache warm‑up scripts.  
- Zero‑day exploits in TLS → rapid key rollover via automated ACME certs.  
- Misconfigured signed URLs leading to data leaks – enforce strict token validation.

**Optimize & Communicate**  

Future enhancements: integrate a *client‑side ML model* for adaptive throttling, use *edge compute (AWS Lambda@Edge)* for custom auth logic, and adopt *Zero‑Trust* principles by enforcing mutual TLS between edge and origin. I’d iterate the design with stakeholders, show latency improvements (≤ 20 ms) and cost savings (origin bandwidth cut by 60%) to prove business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
