---
qid: ing_4e8aef8d93__faang__local
question: What is Sensitive Data? — How do we manage sensitive data in a system?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 494
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:47:16-05:00'
sources: []
---

**1️⃣ Clarify**  
*What does “sensitive data” mean here?*  
I’ll assume it refers to any personal or proprietary information that, if exposed, could harm individuals (PII), breach privacy laws, or compromise business value. Confirm: regulatory scope (GDPR, CCPA, HIPAA), data lifecycle stages, and the system’s threat model.

**2️⃣ Approach**  
1. Classify data by sensitivity.  
2. Apply a layered protection strategy—*identify → protect → monitor → audit*.  
3. Embed controls in ingestion, storage, processing, and egress points.  

**3️⃣ Depth**  
| Layer | Controls | Tech & Complexity |
|-------|----------|-------------------|
| **Ingestion** | Schema‑level validation, encryption at rest (AES‑256), TLS for transport | O(1) overhead, negligible latency |
| **Storage** | Tokenization / deterministic hashing for PII; field‑level encryption for highly sensitive columns; key rotation via KMS | O(log n) read/write with transparent decryption |
| **Processing** | Differential privacy noise addition; secure enclaves (Intel SGX) for ML training | Adds ~10–20% compute cost, but protects model leakage |
| **Access** | Role‑based access control + least privilege; audit logs; MFA | O(log n) permission checks |
| **Monitoring** | Real‑time anomaly detection on data flows; SIEM integration | Continuous cost but reduces breach window |

Trade‑offs: stronger encryption → higher latency and key management complexity; tokenization preserves queryability but limits analytics.

**4️⃣ Edge Cases**  
- *Data residency*: ensure keys stay within jurisdiction.  
- *Legacy systems*: incremental masking vs. full rewrite.  
- *Zero‑trust network*: enforce network segmentation and least privilege APIs.  

Test with synthetic breaches, key compromise drills, and privacy‑budget compliance checks.

**5️⃣ Optimize & Communicate**  
Start with high‑risk data (PII) and iterate outward; document all policies in a Data Governance Registry. Use clear metrics: *Time to Detect* + *Cost per Breach*. Convey the layered defense narrative—each layer reduces attack surface, making the system resilient while keeping ML performance acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
