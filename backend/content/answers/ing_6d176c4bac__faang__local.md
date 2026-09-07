---
qid: ing_6d176c4bac__faang__local
question: 'Explain: Non-Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 578
total_tokens: 816
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:17-05:00'
sources: []
---

**Clarify**  
The question asks for the non‑functional requirements (NFRs) of a URL‑shortening service like TinyURL—i.e., quality attributes that are not about “what” it does but how well it performs. I’ll assume we’re targeting millions of requests per day, global availability, and minimal downtime.

**Approach**  
1. List core NFR categories (performance, reliability, scalability, security, maintainability).  
2. For each category, give concrete metrics/criteria relevant to a URL shortener.  
3. Highlight trade‑offs where appropriate (e.g., caching vs. consistency).

**Depth**  

| Category | Metric / Requirement | Why it matters |
|----------|---------------------|----------------|
| **Performance** | <1 ms average lookup latency; 99.9% of requests under 5 ms | Users expect instant redirects; high concurrency. |
| **Scalability** | Horizontal scaling to >10⁶ RPS; auto‑scale in <30 s | Growth and traffic spikes (e.g., viral links). |
| **Reliability / Availability** | 99.999% uptime (five nines); graceful degradation to read‑only on failure | Business continuity; users must always reach destination. |
| **Durability** | Persist mapping with 3× replication across regions; data loss < 1 bit per year | Long‑term link validity, compliance. |
| **Security** | HTTPS enforcement, rate limiting (≤10⁴ req/min per IP), input sanitization, audit logs | Prevent abuse, DDoS, phishing. |
| **Maintainability** | API versioning, CI/CD pipeline, observability dashboards | Easier updates, bug fixes without downtime. |
| **Compliance / Privacy** | GDPR‑ready deletion on request; minimal data retention | Legal obligations and user trust. |

**Edge Cases**  
- Sudden traffic surges (e.g., viral content) → test auto‑scale limits.  
- Distributed denial‑of‑service attack → evaluate rate limiter thresholds.  
- Data center outage → verify failover to secondary region.  
- Malformed URLs → ensure graceful error handling without leaking info.

**Optimize & Communicate**  
I’d present these NFRs in a concise slide deck, using visual dashboards for latency/uptime. I would explain trade‑offs—caching boosts performance but can introduce staleness, so we use write‑through caches with TTLs. Finally, I’d emphasize that meeting these metrics requires a microservice architecture with stateless request handlers, a distributed key‑value store (e.g., DynamoDB), and global CDN for edge caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
