---
qid: ing_b7b8027f79__aws__local
question: 'Explain: id as usual and then uh yeah — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 547
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:32-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was hired by a city council to build a digital platform that lets drivers reserve and pay for parking in real‑time across a multi‑level garage. The goal: reduce congestion by 30 % and increase revenue by 15 % within six months.

**Action (Dive Deep + Ownership)**  
1. **Requirements & Constraints**  
   * 5,000 spots, 10 levels, peak traffic 8 k vehicles/day.  
   * Real‑time availability, dynamic pricing, mobile & kiosk interfaces.  

2. **Design**  
   * **Front‑end:** React Native + AWS Amplify (Auth, GraphQL).  
   * **API Gateway + Lambda**: Stateless request handling; autoscaling to 200 req/s per lambda.  
   * **Database**: DynamoDB with partition key `spotId#level`, global secondary index on `status`. Provides <10 ms read latency and seamless scaling for 5k items.  
   * **Caching**: ElastiCache‑Redis (2× write throughput) to keep spot status fresh; TTL of 1 s guarantees consistency during peak bursts.  
   * **Analytics & ML**: S3 + Athena for usage logs → SageMaker model predicts hourly demand and auto‑adjusts pricing.  
   * **Payments**: Amazon Pay integration, PCI‑compliant.  

3. **Scalability / Availability**  
   * Multi‑AZ deployment; Lambda concurrency limits set to 5000 to handle flash traffic.  
   * Circuit breaker on external services (payment, GPS).  
   * Cost estimate: $0.02 / month for DynamoDB + $0.01 / month per Lambda invocations ≈ $30/month.

**Result (Deliver Results)**  
Within 4 months, the system handled >10 k concurrent reservations with <5 ms latency. Congestion dropped 32 %, revenue rose 18 %. Post‑deployment A/B testing showed a 12 % increase in mobile bookings.  

**Learning & Bar‑Raiser Insight**  
I iterated on cache eviction policies after an initial spike caused stale data; that “failure” led to the 1 s TTL design, which is now standard for all real‑time garage projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
