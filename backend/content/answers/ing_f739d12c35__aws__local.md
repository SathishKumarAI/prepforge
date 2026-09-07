---
qid: ing_f739d12c35__aws__local
question: 'When Should You Use REST APIs? — gRPC vs. REST: Key Similarities and Differences'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 444
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:46-05:00'
sources: []
---

**When should I choose a REST API over gRPC?**

*Situation*: At my last role I led the migration of our recommendation engine from an internal monolith to a server‑less microservice architecture on AWS. The team needed a public endpoint for mobile clients and an efficient inter‑service channel for downstream services.

*Task*: Decide between exposing a RESTful HTTP/JSON API for external consumers and using gRPC for internal communication, while keeping cost, latency, and developer experience in check.

*Action*:  
1. **Customer Obsession & Ownership** – I mapped user journeys: mobile apps hit the public endpoint once per session (≈ 5 k calls/day).  
2. **Dive Deep** – Benchmarked JSON payloads (~ 12 KB) vs. Protobuf (~ 3 KB), noting gRPC’s binary framing gives ~ 30 % lower serialization cost and 10 ms latency advantage in VPC‑only traffic.  
3. **Design** –  
   * REST (API Gateway + Lambda): Simple, cacheable via CloudFront, supports OAuth2/OIDC, and guarantees 99.99 % availability with minimal ops.  
   * gRPC (App Mesh + ECS/EKS): Uses HTTP/2 multiplexing, keeps‑alive pings for health checks, ideal for high‑throughput internal calls.  

*Result*: We deployed REST for mobile clients and gRPC internally, reducing the overall API response time by **18 %** and cutting data transfer costs by **22 %** in the first quarter. The split also lowered our serverless cold‑start incidents from 12 % to 4 %.  

**Takeaway**: Use REST when you need broad compatibility, caching, or public facing endpoints; use gRPC for low‑latency, high‑volume internal services that can benefit from binary serialization and HTTP/2 features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
