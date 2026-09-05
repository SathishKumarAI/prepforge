---
qid: ing_c4eaaca8f8__star__local
question: 'Explain: Purpose-Built Security — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:03:42-05:00'
sources: []
---

**Situation** – While leading a fintech client’s compliance team, we were tasked with launching an AI‑driven contract review platform that handled class‑action settlement agreements—highly sensitive documents containing personal data and litigation strategy. The regulatory environment demanded zero tolerance for data leaks or model bias.

**Task** – Build a purpose‑built security architecture that guarantees confidentiality, integrity, and auditability of every inference while maintaining sub‑second response times for legal counsel.

**Action** – I orchestrated a layered approach: first, we containerized the model with Docker and isolated it in an OCI‑compatible runtime (Kubernetes) behind a dedicated VPC; second, we encrypted all data at rest using AWS KMS keys tied to strict IAM policies; third, every input was passed through a homomorphic encryption wrapper so the neural net never saw raw text; fourth, we implemented a model‑weight versioning system in DVC and logged each inference with a tamper‑evident Merkle tree stored on Hyperledger Fabric. Finally, I set up continuous penetration testing via OWASP ZAP and automated drift detection using Sentinel.

**Result** – The platform launched three weeks ahead of schedule, processing 1,200 contracts per day with <50 ms latency. Zero security incidents were reported over the first six months, and we received ISO 27001 certification early. I learned that combining cryptographic primitives with immutable audit trails can make AI as secure as traditional legal processes—essential for trust in sensitive matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
