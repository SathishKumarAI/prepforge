---
qid: ing_d69d59bbb6__aws__local
question: 'Explain: Tech Stack — Sendsmsmessageapitwillo'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 401
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:37-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of a real‑time notification system that had to push millions of transactional SMS messages during peak shopping events (Black Friday). The goal was to reduce latency to < 200 ms per message and keep cost below $0.02 per 1,000 texts while guaranteeing > 99.9% delivery.

**Action – Tech Stack & Design**  
- **API Layer:** Amazon API Gateway + Lambda (Python) for a serverless endpoint that validates payloads and authorises via Cognito.  
- **Orchestration:** Step Functions to split the batch into shards, invoke parallel Lambdas, and aggregate results.  
- **SMS Service:** AWS Pinpoint (SMS channel) with dedicated short code; fallback to Twilio via an integration Lambda for carrier outages.  
- **Monitoring & Scaling:** CloudWatch Alarms on Lambda error rates + DynamoDB Streams to trigger auto‑scaling of the Step Functions concurrency.  
- **Cost Controls:** Reserved capacity in API Gateway, use of `Provisioned Concurrency` for critical paths, and daily budget alerts.

**Result**  
During Black Friday we sent 12 M messages with an average latency of 180 ms (10% faster than target) while keeping spend at $1.6k ($0.013 per 1,000). Delivery success was 99.95%. The system now serves 3× the traffic without code changes.

**Reflection**  
I owned every layer, dived deep into Lambda cold‑start metrics, and learned that a hybrid SMS provider strategy balances cost and reliability. This aligns with **Customer Obsession** (fast, reliable alerts) and **Ownership** (end‑to‑end delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
