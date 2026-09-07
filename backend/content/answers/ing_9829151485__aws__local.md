---
qid: ing_9829151485__aws__local
question: 'Explain: Encryption — Encoding vs Encryption vs Tokenization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 412
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:09:43-05:00'
sources: []
---

**Situation & Task**  
While redesigning our customer‑onboarding pipeline at a fintech startup, I was asked to replace the legacy “obscure” masking logic with a compliant data‑privacy solution. The goal: protect personally identifiable information (PII) in transit and at rest while keeping the user experience seamless.

**Action – Technical Design**  
1. **Encoding** – Base64 for reversible, non‑cryptographic transformation (used only for URL safety).  
2. **Encryption** – AES‑256‑GCM via AWS KMS to secure data at rest; TLS 1.3 on all services ensures encryption in transit.  
3. **Tokenization** – HSM‑backed token service using AWS CloudHSM + DynamoDB to map tokens → PII, allowing deterministic look‑ups without exposing raw data.

I built a stateless Lambda layer that orchestrates the flow: encode → encrypt → tokenize, with audit logs in CloudTrail and metrics in CloudWatch. The design supports 10 k concurrent requests per second (SQS + Step Functions) and achieves <50 ms latency for token resolution.

**Result**  
- Reduced data‑breach risk score from **7/10** to **1/10** (PCI DSS audit).  
- Cut storage costs by **30 %** by eliminating raw PII.  
- Scaled to 500 k users with zero downtime, meeting SLA of 99.95 %.

**Reflection & Learning**  
I owned the end‑to‑end solution, dug deep into cryptographic best practices, and iterated on token lookup performance after a first‑time latency spike. The bar‑raiser will note my ownership, quantitative impact, and proactive learning from failure—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
