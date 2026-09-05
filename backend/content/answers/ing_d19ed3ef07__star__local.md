---
qid: ing_d19ed3ef07__star__local
question: 'Explain: Request Body — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 352
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:28:48-05:00'
sources: []
---

**Situation** – At my last startup we built a recommendation engine that served personalized content to thousands of mobile apps via webhooks. The client dashboards required real‑time updates on model performance and inference latency, so the webhook payload had to be both lightweight and rich enough for downstream analytics.

**Task** – Design the request body schema so it could carry event metadata (user ID, timestamp), model identifiers, feature vectors, and prediction scores while staying under 1 KB to avoid network throttling. It also needed to support versioning and future extensions without breaking existing consumers.

**Action** – I drafted a JSON structure with a fixed header (`event_type`, `client_id`, `timestamp`) and an opaque `payload` field that stored a base64‑encoded protobuf message. The protobuf defined fields for `model_version`, `prediction_confidence`, `feature_hashes`, and optional debug info guarded by a feature flag. I added HMAC authentication and a `content-length` header to enforce size limits, then used a Go microservice to serialize/deserialize the payload on both ends. I ran load tests with 50 k concurrent webhooks, confirming average latency of 12 ms and payload sizes averaging 680 bytes.

**Result** – The new design cut webhook failures by 35% during peak traffic, reduced bandwidth costs by ~20%, and gave us a clean upgrade path for future model releases. I learned that balancing schema flexibility with strict size constraints often requires an opaque binary format wrapped in JSON for easy integration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
