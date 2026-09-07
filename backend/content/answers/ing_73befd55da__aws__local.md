---
qid: ing_73befd55da__aws__local
question: 'Explain: Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 627
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:47:33-05:00'
sources: []
---

**Scenario (STAR)**  
*Situation*: I was tasked with building a URL‑shortening service similar to TinyURL for an internal product that expected 10 M clicks/day.  
*Task*: Design the functional requirements while ensuring high availability and low cost.  
*Action*:  
1. **Customer Obsession / Ownership** – I interviewed end‑users (marketing, support) to capture pain points: instant link creation, custom aliases, click analytics, and abuse prevention.  
2. **Dive Deep / Deliver Results** – I defined core features:  
   - *CreateShortUrl* (POST `/shorten`) → validates domain, generates a 6‑char key via SHA‑256 + base62, stores mapping in DynamoDB with TTL.  
   - *Redirect* (GET `/{key}`) → reads from DynamoDB, logs click in Kinesis Firehose to Redshift for analytics.  
   - *CustomAlias* – checked uniqueness via conditional write; if collision, return 409.  
   - *Rate‑limit / Abuse* – API Gateway + Lambda authorizer throttles 5 req/s per IP, CloudWatch alarms trigger auto‑scale.  
3. **Bias for Action** – I prototyped in 4 days using SAM and deployed to a single AZ; after load‑test (200 k req/s), latency < 120 ms, error rate <0.01%.  
*Result*: The service handled 12 M hits/day with 99.999% availability, cost <$300/month on AWS, and reduced support tickets by 45 % due to automated analytics.

**Technical Design Highlights**  
- **AWS Services**: API Gateway (REST + throttling), Lambda (stateless logic), DynamoDB (key‑value store, conditional writes), Kinesis Firehose → Redshift (analytics), CloudWatch/Alarms.  
- **Scalability**: Serverless architecture auto‑scales; DynamoDB’s provisioned capacity with on‑demand fallback.  
- **Availability**: Multi‑AZ deployment of API Gateway & Lambda ensures 99.99% uptime; DynamoDB replicates across AZs.  
- **Cost Trade‑offs**: Using on‑demand Lambdas keeps idle cost low; switching to provisioned concurrency for predictable traffic cuts latency at ~$0.000025 per invocation.  

**Bar‑raiser Focus**  
- Ownership: End‑to‑end responsibility from requirement gathering to monitoring.  
- Depth: Detailed DynamoDB conditional logic and rate‑limiting strategy.  
- Quantified Impact: 12 M hits/day, <120 ms latency, <$300/month.  
- Learning: Early failure of single‑AZ deployment led to multi‑AZ rollout, improving resilience without significant cost increase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
