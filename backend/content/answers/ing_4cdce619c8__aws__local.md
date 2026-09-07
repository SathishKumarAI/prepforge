---
qid: ing_4cdce619c8__aws__local
question: 'Explain: Endpoint: POST /shorten — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 571
total_tokens: 812
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:01-05:00'
sources: []
---

**S – Situation:**  
In my last role I led a feature rollout that required a URL‑shortening service for an internal analytics platform used by over **250k active users** per month. The goal was to reduce link length while guaranteeing 99.999% uptime and sub‑200 ms latency.

**T – Task:**  
Design a highly available, cost‑efficient endpoint `POST /shorten` that maps any incoming URL to a unique short code, stores it, and returns the shortened URL.

**A – Action & Architecture:**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **API Gateway** | REST API with Lambda integration | Handles throttling, request validation, and auto‑scales. |
| **Lambda (Python)** | Stateless mapping logic | Low cold‑start cost, easy CI/CD. |
| **DynamoDB** | PK: short_code, SK: original_url + TTL | 10 GB/month, single‑write latency <5 ms; automatic scaling. |
| **S3 + CloudFront** | Static landing page for redirects (optional) | Global edge caching, zero compute cost. |
| **SNS / EventBridge** | For monitoring & alerting | Real‑time metrics on failures or throttles. |

*Key design choices:*  
- **Hash + collision handling:** Use a 6‑char base62 hash of the URL; if collision occurs, append random suffix until unique (probability <10⁻¹²).  
- **Idempotency:** Store `original_url → short_code` mapping to avoid duplicates.  
- **Security:** API keys & IAM policies limit write access.  

**R – Result:**  
After launch, we saw a **35% reduction in link traffic cost** (S3 transfer savings) and maintained **99.997% availability** over 6 months. Latency averaged **150 ms** under peak load of 5k requests/sec. The system also supported a 10× traffic spike during a product launch without any manual intervention.

---

### What the bar‑raiser hears

- **Ownership:** I drove the end‑to‑end solution, from requirement gathering to monitoring.  
- **Dive Deep:** I quantified collision probability, TTL settings, and cold‑start impact.  
- **Quantified Impact:** Cost savings, latency numbers, availability SLA.  
- **Learning from Failure:** We ran chaos tests; when Lambda throttled, API Gateway automatically retried with exponential backoff—this exposed the need for a retry policy in our code, which we added post‑incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
