---
qid: ing_4e8aef8d93__star__local
question: What is Sensitive Data? — How do we manage sensitive data in a system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:39-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were rolling out a new predictive credit‑risk model that ingested user transaction histories and personal identifiers. The compliance team flagged that any handling of SSNs, bank account numbers, or income details had to meet GDPR and PCI DSS standards.

**Task:**  
I was tasked with designing an end‑to‑end pipeline that would allow the ML model to learn from those features without exposing raw sensitive data, while keeping latency under 200 ms for real‑time scoring.

**Action:**  
First, I classified data into *public*, *sensitive*, and *critical* tiers. For sensitive fields I implemented tokenization using AWS KMS: tokens were stored in the feature store (Amazon DynamoDB) with a one‑to‑one mapping that could be revoked on demand. I added an audit log layer (AWS CloudTrail + Athena queries) to track any de‑tokenization requests, and used role‑based access control via IAM to restrict who could view or manage tokens. On the model side, I leveraged differential privacy in the training process—adding Gaussian noise calibrated to a target ε=1—to ensure that individual records couldn’t be reconstructed from model outputs. Finally, I wrapped the inference endpoint in an API Gateway with TLS termination and WAF rules to block injection attacks.

**Result:**  
The system achieved 98 % of the required prediction accuracy while keeping token‑lookup latency at 35 ms. Compliance audit passed with zero findings, and we reduced the potential data breach surface by 95 %. I learned that blending cryptographic safeguards with privacy‑preserving ML techniques can satisfy both regulatory mandates and performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
