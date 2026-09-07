---
qid: ing_8f7255b6b0__faang__local
question: 'Explain: CNAME (Canonical Name) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 469
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:57-05:00'
sources: []
---

**Clarify**  
You’re asking about the **CNAME (Canonical Name)** DNS record type—how it works, why we use it, and what pitfalls exist. I’ll assume you want a concise technical overview suitable for an interview, not a full RFC deep‑dive.

**Approach**  
1. Define the record in plain terms.  
2. Explain its purpose and typical use cases (aliasing).  
3. Highlight constraints (no other records at that name, TTL propagation).  
4. Discuss common pitfalls and best practices.  

**Depth**  
A CNAME maps one DNS name to another *canonical* name. When a resolver queries `foo.example.com`, the authoritative server returns a CNAME pointing to `bar.realdomain.com`. The resolver then performs a fresh lookup for `bar.realdomain.com` and merges the results, preserving TTLs from the original record.

- **Use cases:**  
  - Aliasing subdomains (`www`) to root domains.  
  - Pointing multiple services (e.g., `api`, `cdn`) to the same infrastructure without duplicating A/AAAA records.  
  - Enabling domain‑agnostic services (S3 buckets, CloudFront distributions).

- **Constraints:**  
  - No other record types can coexist at the alias name (except NS and SOA).  
  - The target must be a fully qualified domain name; it cannot resolve to an IP directly.  
  - TTLs are inherited: the CNAME’s TTL applies until the target resolves, then its own TTL is used.

**Edge Cases**  
- Circular references cause infinite loops—DNS clients detect and error out.  
- When using CDN or load balancers that change IPs frequently, a CNAME keeps your DNS static but still requires the target to update A/AAAA records.

**Optimize & Communicate**  
For production systems, prefer **A/AAAA** records for performance-critical endpoints; use CNAMEs sparingly where aliasing simplifies management. In interviews, emphasize understanding of TTL propagation and the “no‑other‑records” rule—these are common interview traps that reveal depth of DNS knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
