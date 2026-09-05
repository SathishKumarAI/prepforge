---
qid: ing_f6ea133e0c__star__local
question: 'Explain: Security and Permissions — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 373
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:17-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with revamping our in‑house URL shortener after a spike in phishing incidents. The existing system stored every short link in plain text and exposed an admin panel that anyone with the internal IP could reach, so attackers could hijack links or inject malicious payloads.

**Task**  
I had to redesign the permission model and secure the API endpoints so only authorized users could create, edit, or delete links, while keeping the public redirect service fast and stateless. The goal was to reduce security incidents by 90% within three months.

**Action**  
First, I introduced OAuth2 with role‑based access control (RBAC) using Keycloak; every request to `/api/links` now carries a JWT that’s verified against a Redis token cache. I also switched the database layer from plain MySQL to PostgreSQL and added row‑level security policies so each user can only see their own links. For the public redirect endpoint, I moved it to a CDN edge function that validates the short code against a Bloom filter before hitting the origin, cutting lookup latency by 30 ms. Finally, I set up automated OWASP ZAP scans and integrated them into CI/CD.

**Result**  
Within two months we saw a 92% drop in reported phishing attempts linked to our service. API call latency improved by 25%, and the new RBAC model cut accidental link edits by 80%. I learned that combining fine‑grained database policies with edge‑layer validation is key for both security and performance in microservices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
