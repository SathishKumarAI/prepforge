---
qid: ing_10465f9394__aws__local
question: 'Explain: HMACs and Digital Signatures — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 500
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:02:04-05:00'
sources: []
---

**Situation (S)**  
While building a real‑time recommendation pipeline at my last company, we had to guarantee that model artefacts and inference payloads were not tampered with during transit between SageMaker endpoints and downstream microservices. A simple checksum was no longer enough—any one could forge a valid CRC or MD5.

**Task (T)**  
Implement a lightweight yet cryptographically sound integrity layer that would allow us to detect malicious changes, audit provenance, and comply with GDPR data‑handling policies—all while keeping latency < 10 ms per inference request.

**Action (A)**  
I chose **HMAC‑SHA256** for payload authentication because it is fast, deterministic, and works well with symmetric keys we already rotate in Secrets Manager. For signing model binaries before deployment, I used **RSA‑PSS** digital signatures stored in AWS KMS; the public key was embedded in the SageMaker inference image, enabling stateless verification on every request.

The design leveraged:
- **Amazon KMS** for key rotation and audit logging (X‑ray traces show 0.2 ms per HMAC generation).
- **AWS Lambda@Edge** to offload checksum calculation from the endpoint.
- **Amazon CloudWatch Metrics** to trigger alerts if signature verification failed >5% in a rolling window.

I also added a **checksum fallback** (SHA‑1) for legacy components, but flagged it as deprecated in our CI pipeline.

**Result (R)**  
After deployment:
- *Integrity incidents dropped from 3 per month to zero* within the first quarter.
- Latency impact was < 0.5 % of overall inference time.
- Audit logs showed a 100 % compliance rate with internal data‑protection policy.

---

### Amazon Leadership Principles Highlighted  
1. **Ownership** – I drove the end‑to‑end solution, from design to monitoring.  
2. **Dive Deep** – Chose cryptographic primitives based on threat model and measured performance trade‑offs.  

Bar‑raisers listen for clear ownership, quantitative impact (0% incidents, 0.5 % latency), deep technical justification, and evidence of learning (deprecating weak checksums).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
