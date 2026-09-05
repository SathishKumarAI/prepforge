---
qid: ing_20549df711__star__local
question: 'Explain: Verify Signatures — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:01-05:00'
sources: []
---

**Situation**  
While leading the integration of a payment gateway into our e‑commerce platform, we noticed that some fraud attempts were bypassing our internal validation because malicious actors could spoof webhook payloads from the gateway.

**Task**  
Design a robust, low‑latency mechanism to verify every incoming webhook signature so that only authentic notifications trigger order updates or refunds.

**Action**  
I introduced an HMAC‑SHA256 scheme using a shared secret stored in AWS Secrets Manager. Each webhook includes a `X-Webhook-Timestamp` header and the payload’s raw body is hashed together with the timestamp; the resulting digest is compared to the `X-Signature` header in constant time. To thwart replay attacks, I added a 5‑minute sliding window and maintained a Redis cache of processed timestamps per event ID. The verification logic runs as an AWS Lambda behind API Gateway, ensuring zero server overhead and automatic scaling. We also implemented CloudWatch alerts for failed verifications exceeding 3% of total traffic.

**Result**  
Within two weeks, webhook authenticity was guaranteed with <0.1 ms latency added to the existing 200 ms average response time. Fraud attempts dropped from 12% to 0%, and our compliance audit passed without any additional manual checks. I learned that coupling cryptographic validation with rate‑limiting and real‑time monitoring turns a theoretical security requirement into an operationally efficient feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
