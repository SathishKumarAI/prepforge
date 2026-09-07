---
qid: ing_ca00116ebe__aws__local
question: 'Explain: Anchor to Rate limits Rate limits — GraphQL Admin API reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 401
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:03-05:00'
sources: []
---

**Situation** – While scaling the GraphQL Admin API for a global e‑commerce platform, we hit a sudden surge of 50 k requests/sec from partner integrations, causing a 12 % latency spike and 3 % error rate.

**Task** – Design a robust, cost‑efficient rate‑limiting strategy that protects downstream services (auth, catalog) while keeping SLA < 200 ms for 99.9 % of calls.

**Action**  
1. **Ownership + Dive Deep**: Instrumented request flow with CloudWatch metrics and traced the bottleneck to the “admin‑write” mutation tier.  
2. Implemented a *token bucket* algorithm per API key using **Amazon DynamoDB (TTL tables)** for state persistence, backed by **AWS Lambda@Edge** for edge‑first enforcement—ensuring sub‑10 ms decisions.  
3. Added **AWS WAF rate‑based rules** to block abusive IPs and integrated with **API Gateway caching** (cache TTL 30 s) to offload repeated read queries.  
4. Deployed a *dynamic throttling* layer: if downstream latency > 150 ms, automatically reduce burst capacity by 20 % for that key (feedback loop via CloudWatch alarms).  

**Result** – Post‑deployment, request latency dropped from 240 ms to 165 ms; error rate fell below 0.5 %; cost increased only 8 % due to Lambda invocations, while DynamoDB read/write capacity stayed within provisioned limits.

**Learnings** – Early visibility (metrics + tracing) and a feedback loop were key; future iterations will experiment with **AWS App Mesh** for finer‑grained traffic shaping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
