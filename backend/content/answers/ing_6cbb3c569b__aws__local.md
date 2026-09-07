---
qid: ing_6cbb3c569b__aws__local
question: 'Explain: AWS AppSync — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 465
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:39-05:00'
sources: []
---

**AWS AppSync – a server‑less GraphQL service that lets you build real‑time, data‑rich applications without managing servers.**

---

### Technical & System Design

| Requirement | Design |
|-------------|--------|
| **Real‑time sync** | Subscriptions via WebSocket (Amazon API Gateway) → AppSync automatically pushes updates to connected clients. |
| **Scalable data sources** | Connect DynamoDB, Aurora Serverless, Lambda, or HTTP APIs; each scales independently. |
| **Low latency** | Edge caching with CloudFront + TTLs on resolvers; fine‑tuned DataLoader patterns reduce round trips. |
| **Cost control** | Pay per query (≈ $4.00/10 M queries); use *DataSource* type “None” for static data to avoid unnecessary charges. |

#### Trade‑offs
- **Pros:** Zero server ops, built‑in auth (Cognito/JWT), fine‑grained resolvers.  
- **Cons:** Vendor lock‑in; complex resolver logic can become hard to debug.

---

### Behavioral (STAR)

**Situation:** Our mobile app had > 50 k concurrent users, but data sync lagged during peak hours.  
**Task:** Reduce latency and cost while preserving real‑time updates.  
**Action:** Migrated from REST + WebSocket to **AppSync**; added DynamoDB Streams for change data capture, implemented DataLoader aggregation, and enabled CloudFront edge caching.  
**Result:** Latency dropped from 1.8 s to < 200 ms (90% improvement); query cost fell by 45 %, saving $12k/month.  

---

### Leadership Principles

- **Customer Obsession:** Delivered instant feedback for users, directly improving engagement.  
- **Ownership & Dive Deep:** Took full responsibility for end‑to‑end performance; dissected each resolver and data source to pinpoint bottlenecks.  

**Bar‑raiser takeaway:** Demonstrated ownership by owning the entire stack, dove deep into metrics, quantified impact, and iterated rapidly after initial failures (e.g., mis‑configured TTLs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
