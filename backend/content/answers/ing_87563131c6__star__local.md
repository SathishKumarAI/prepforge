---
qid: ing_87563131c6__star__local
question: 'Explain: 5.5 Security — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 321
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:11-05:00'
sources: []
---

**Situation** – While leading the backend team for a fintech app, we discovered that our push‑notification microservice was leaking user data in its logs and had no fine‑grained access control, exposing sensitive transaction alerts to unauthorized roles.

**Task** – I needed to redesign the notification service’s security layer: enforce end‑to‑end encryption, implement role‑based message filtering, and ensure auditability without hurting latency (<200 ms per push).

**Action** – First, I introduced a token‑based authentication scheme using OAuth2 with short‑lived JWTs scoped to “notify:user_id”. Next, I added an attribute‑based access control (ABAC) engine that checks user roles against the notification payload before dispatch. For encryption, I switched from plain JSON over HTTPS to signed and encrypted protobuf messages using AWS KMS for key rotation. Finally, I set up a dedicated audit logger that writes immutable entries to CloudTrail, tagging each event with correlation IDs and hash digests of the original message.

**Result** – The revamped service passed a penetration test with zero critical findings, reduced log data exposure by 97 %, and maintained an average delivery time of 180 ms. I also documented best‑practice guidelines that cut onboarding time for new developers by 40 %. This experience taught me how to weave security into high‑performance distributed systems without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
