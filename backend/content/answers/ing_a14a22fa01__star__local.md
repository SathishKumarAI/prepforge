---
qid: ing_a14a22fa01__star__local
question: 'Explain: API key generation — ''A cheat sheet for API designs'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 340
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:20-05:00'
sources: []
---

**Situation:**  
At a fintech startup I was leading the rollout of a new payment‑processing microservice that would be exposed to external partners via an HTTPS REST API. Our compliance audit had flagged that we were still using static shared secrets stored in code, which risked credential leakage and made revocation impossible.

**Task:**  
Design and implement a secure, scalable API key generation and lifecycle system that supports per‑partner scopes, automatic rotation, and immediate revocation while keeping latency under 20 ms for production traffic.

**Action:**  
I chose AWS KMS to encrypt the secret material and used HMAC‑SHA256 to sign each key pair. Keys were stored in DynamoDB with a TTL attribute for auto‑expiry and a Lambda function that triggered on write to rotate keys every 90 days. I exposed an endpoint `/auth/key` protected by mutual TLS; partners could POST their client ID, receive a signed JWT containing scopes, and then use the JWT as an Authorization header for subsequent calls. The service validates the signature against the public key stored in SSM Parameter Store, ensuring zero‑trust verification.

**Result:**  
Within two weeks we had 100% of partner integrations using dynamic keys, eliminating the static secret risk. Key rotation ran automatically without downtime, and our API latency remained at 18 ms on average. The audit passed with a clean compliance report, and I documented the workflow in a cheat‑sheet that reduced onboarding time for new partners by 30%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
