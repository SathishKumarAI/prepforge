---
qid: ing_53389beb0b__star__local
question: 'Explain: Core APIs — Design URL Shortener | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 396
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:36-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a new internal service to shorten URLs for marketing campaigns, handling ~10k requests per second and ensuring 99.9% uptime across two regions.

**Task:**  
Design the core APIs that would let developers create, retrieve, update, and delete short links while keeping the system highly available and scalable.

**Action:**  
I defined four RESTful endpoints:  
- `POST /shorten` (create) – accepts a long URL and optional custom alias; validates with regex, generates a 6‑char base62 hash if no alias is provided. I used AWS Lambda + API Gateway for serverless scaling.  
- `GET /{alias}` (redirect) – looks up the alias in a DynamoDB table partitioned by region, returns HTTP 301 to the long URL; includes a CloudFront edge cache to reduce DB hits.  
- `PUT /{alias}` (update) – allows changing the target URL; implements optimistic locking with a version field to avoid race conditions.  
- `DELETE /{alias}` (remove) – marks the alias as inactive, preserving analytics data for reporting.

I added an audit table in DynamoDB and used Kinesis Data Streams to push events into an analytics pipeline. Security was handled via Cognito JWTs and rate limiting on API Gateway.

**Result:**  
The service handled 15k RPS with <200 ms latency; alias collisions dropped below 0.01%. The API received a 4.8/5 rating from internal teams, and the analytics dashboard reduced marketing query time by 70%. I learned how to balance simplicity of REST endpoints with the need for distributed consistency and observability in a high‑traffic service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
