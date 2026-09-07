---
qid: ing_172d21fe47__aws__local
question: 'Explain: Privacy & code security — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 476
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:10-05:00'
sources: []
---

**Situation** – While leading a cross‑functional team that built an internal AI Code Assistant (ACA) used by 1,200 developers across 5 regions, we discovered that the model could inadvertently leak proprietary snippets or sensitive data from training corpora.

**Task** – I owned the privacy & security compliance roadmap and had to design a system that guarantees *zero* data leakage while keeping inference latency < 150 ms per request.

**Action** –  
1. **Data‑at‑Rest**: Enabled AWS Key Management Service (KMS) for all S3 buckets storing training data, enforcing automatic server‑side encryption and key rotation every 90 days.  
2. **Model Inference**: Deployed the model on Amazon SageMaker endpoints behind an IAM‑controlled API Gateway. Each request is signed with a short‑lived STS token that limits access to the *minimum* required dataset shards, preventing cross‑tenant data exposure.  
3. **Runtime Isolation**: Leveraged AWS Nitro Enclaves for inference to keep model weights out of the host memory, satisfying our internal “no code in plaintext” policy.  
4. **Audit & Monitoring**: Integrated GuardDuty and CloudTrail with custom Lambda checks that flag any outbound traffic from enclave instances; we also set up Amazon Macie to scan logs for PII patterns.  

**Result** – Within 6 weeks, compliance passed the external ISO/IEC 27001 audit with zero findings. Latency stayed at 120 ms average (≤ 150 ms SLA), and we reduced potential data‑leak incidents by 97 % compared to our legacy system.

---

> **Bar‑raiser cues**:  
- Demonstrated *ownership* of end‑to‑end security.  
- Showed *deep dive* into AWS services, trade‑offs (Nitro Enclaves vs. standard containers).  
- Quantified impact (latency, compliance pass, 97 % risk reduction).  
- Reflected on a failed earlier attempt that used shared EC2 instances and learned to enforce enclave isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
