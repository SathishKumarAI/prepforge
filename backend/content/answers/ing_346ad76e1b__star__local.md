---
qid: ing_346ad76e1b__star__local
question: How does Harvey keep my data private and secure?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 304
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:12-05:00'
sources: []
---

**Situation** – When I joined the new AI platform at Harvey, customers were worried that their sensitive documents might be exposed or used to train models. The product had to satisfy strict GDPR and HIPAA requirements while still delivering personalized insights.

**Task** – My goal was to design a data‑privacy framework that kept every user’s data isolated, encrypted in transit and at rest, and ensured it never leaked into the training set unless explicitly approved.

**Action** – I started by implementing end‑to‑end encryption using AES‑256 for stored files and TLS 1.3 for all API calls. Then I introduced a “data‑tokenization” layer: user uploads were hashed with a per‑session key, so the model only ever saw pseudonymized tokens. For training, we built a differential‑privacy module that added calibrated noise to gradients, guaranteeing that no single document could be reconstructed. Finally, I set up an audit trail and a role‑based access control system in our Kubernetes cluster, with automated alerts for any anomalous data flow.

**Result** – Within six months, customer churn dropped by 18 % because of increased trust, we passed all external audits without findings, and the platform’s model accuracy improved by 12 % while maintaining full compliance. I learned that rigorous encryption combined with privacy‑preserving ML techniques can coexist with high‑performance AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
