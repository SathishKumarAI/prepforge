---
qid: ing_8f7255b6b0__fp__local
question: 'Explain: CNAME (Canonical Name) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 367
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:10:10-05:00'
sources: []
---

**CNAME (Canonical Name)**  
A CNAME is the DNS mechanism that *aliases* one hostname to another. Think of it as a pointer: when a resolver asks for `www.example.com`, the zone can return a CNAME pointing to `example.com`. The resolver then repeats the lookup on the canonical name, retrieving its A/AAAA records.

Why this design?  
1. **Separation of identity and location** – The *canonical* host (`example.com`) holds the true IP address; the alias (`www.example.com`) can be moved without touching all downstream records.  
2. **Single source of truth** – All services point to one A record, reducing drift and easing certificate management (e.g., Let’s Encrypt).  
3. **Cache‑friendly resolution** – The resolver learns both names in one round trip; subsequent queries for the alias hit cache immediately.

A subtle rule: a CNAME can’t coexist with any other data at the same name; otherwise, the zone would be ambiguous. Thus you cannot attach TXT or MX records to an alias—use a separate A record if you need those services.

**Non‑obvious insight:**  
Because CNAMEs force the resolver to perform *additional* lookups, they introduce a deterministic latency “chain.” In large, highly available systems, chaining too many CNAMEs can push resolution past the 100 ms SLA of modern cloud providers. The fix is often to flatten the chain—directly use A/AAAA records for high‑traffic endpoints—while keeping the CNAME only where aliasing truly adds value (e.g., load balancers or CDN frontends).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
