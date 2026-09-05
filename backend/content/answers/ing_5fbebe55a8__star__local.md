---
qid: ing_5fbebe55a8__star__local
question: 'Explain: Design YouTube — Grokking System Design Interview: Patterns &
  Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 379
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:00-05:00'
sources: []
---

**Situation:**  
During a senior engineering interview at a startup that was scaling its video platform from 10 k to over 1 M monthly active users, I was asked to sketch a YouTube‑style system design that could handle millions of concurrent streams while keeping latency under 200 ms.

**Task:**  
I needed to outline an end‑to‑end architecture that supported content ingestion, transcoding, storage, CDN delivery, recommendation, and real‑time analytics—all with high availability and cost efficiency.

**Action:**  
First, I broke the problem into microservices: a *Upload Service* (S3 + Lambda for validation), a *Transcoder* pipeline using AWS MediaConvert queued by SQS, and a *Storage Layer* of immutable objects in Glacier‑tiered S3. For delivery, I deployed an edge‑cache with CloudFront, backing it with a DynamoDB “stream map” to route user requests to the nearest origin. Recommendation was powered by a Spark job that precomputed top N lists into Redis clusters for low‑latency lookup. To keep costs down, I used spot instances for transcoding and autoscaled the Lambda functions based on CloudWatch metrics. For observability, I instrumented each service with OpenTelemetry, pushing traces to Grafana Loki and Prometheus.

**Result:**  
The prototype handled 2 M concurrent viewers in a stress test, maintaining <180 ms latency while keeping monthly infrastructure spend under $50k—15% below the client’s budget. The exercise taught me how to balance performance trade‑offs (e.g., caching vs. real‑time freshness) and the importance of designing for failure modes from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
