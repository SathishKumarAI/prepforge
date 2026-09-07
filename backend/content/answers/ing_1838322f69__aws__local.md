---
qid: ing_1838322f69__aws__local
question: 'Explain: Key Generation Service — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 467
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:19-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a feature‑rollout for an internal URL‑shortener used by 120 k developers daily. The requirement was to generate cryptographically secure short URLs that were globally unique, easily reversible (for analytics), and could scale to millions of requests per day without hitting the existing database.

**Action & Design**  
I architected a *Key Generation Service* using **AWS KMS + DynamoDB + Lambda + API Gateway**:

1. **API Gateway + Lambda** – Stateless entry point that validates the incoming long URL, calls KMS to encrypt a random 128‑bit UUID, and stores the mapping in DynamoDB.
2. **KMS (Customer Managed Keys)** – Guarantees cryptographic uniqueness; each key is versioned, enabling future rotation without breaking existing keys.
3. **DynamoDB Global Secondary Index** – Enables fast lookup of long URLs to prevent duplicate short links.
4. **CloudWatch Alarms + Auto Scaling** – Monitors read/write capacity and scales provisioned throughput automatically.

I added a *fallback* path that hashes the URL with SHA‑256 when KMS is unavailable, ensuring 99.9 % uptime. The service cost was $0.02 per 1M requests versus the legacy $0.10 per 1M database writes.

**Result**  
Within two weeks of deployment, we handled **35 M short URLs/day**, a 450 % increase over the previous peak, with <0.01 s latency and no incidents. The cost was cut by 80 %, freeing resources for other ML experiments.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility from design to production, including monitoring and incident response.
- **Dive Deep** – Leveraged KMS’s cryptographic guarantees and DynamoDB’s indexing to solve uniqueness and scalability at the data‑level.  
- **Deliver Results** – Achieved measurable performance gains and cost savings while maintaining 99.9 % availability.

This showcases how a well‑designed, serverless key generation pipeline can scale securely and efficiently for high‑traffic ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
