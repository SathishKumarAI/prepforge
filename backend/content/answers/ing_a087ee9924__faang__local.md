---
qid: ing_a087ee9924__faang__local
question: 'Explain: Thousands of courses authored by our network of industry experts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:39-05:00'
sources: []
---

**Clarify**  
You’re asking how we manage *thousands* of courses created by a network of industry experts—specifically: (1) how the content is stored and discovered, (2) how we keep it up‑to‑date, and (3) how we scale to thousands without degrading quality. I’ll assume the courses are video+metadata hosted on cloud storage, with an internal catalog service.

**Approach**  
1. **Catalog & Metadata Service** – a microservice exposing CRUD + search APIs.  
2. **Content Storage** – CDN‑backed object store (S3/CloudFront).  
3. **Versioning & CI/CD** – automated pipelines for publishing new versions.  
4. **Recommendation Engine** – to surface relevant courses.  
5. **Governance** – review workflow and quality gates.

**Depth**  
- *Catalog*: PostgreSQL + ElasticSearch cluster; schema stores title, tags, author, last‑updated, license. Query latency < 50 ms via ES index shards.  
- *Storage*: Each video chunk in S3 with lifecycle rules (archive to Glacier after 90 days).  
- *Publishing*: Git‑based repo per course; CI runs unit tests on metadata, generates thumbnails, uploads to CDN.  
- *Scaling*: Horizontal autoscaling of catalog service; sharding by author region. Consistent hashing keeps read load balanced.  
- *Recommendation*: Spark job nightly trains a matrix‑factorization model (implicit feedback). Real‑time inference via TensorFlow Serving.

**Edge Cases**  
- Duplicate titles → enforce unique slug.  
- Broken video URLs → health‑check worker that flags and auto‑retries uploads.  
- Outdated metadata → periodic audit job comparing last‑modified timestamps to publishing dates.

**Optimize & Communicate**  
We can reduce storage costs by delta‑encoding subtitles and using adaptive bitrate streaming. For latency, cache popular courses in Redis. I’d present this architecture diagram, highlight the 99th‑percentile SLA (≤120 ms), and explain how each component meets that target while remaining cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
