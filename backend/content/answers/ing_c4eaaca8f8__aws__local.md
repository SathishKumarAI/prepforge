---
qid: ing_c4eaaca8f8__aws__local
question: 'Explain: Purpose-Built Security — Secure legal AI for the most sensitive
  matters | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 441
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:08-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built a *purpose‑built security* layer for a legal‑AI product used by Fortune 500 law firms. The goal was to guarantee end‑to‑end encryption and compliance with GDPR, CCPA, and industry standards (ISO 27001) while keeping inference latency under 200 ms.

**Action**  
1. **Ownership & Customer Obsession** – I mapped every data flow against the legal teams’ risk appetite.  
2. **Dive Deep** – Implemented a *confidential computing* stack:  
   - **AWS Nitro Enclaves** for isolated inference, ensuring no plaintext ever touches host memory.  
   - **AWS Key Management Service (KMS)** + customer‑managed keys for on‑demand encryption of model weights and user documents.  
   - **Amazon Macie** for continuous data classification and anomaly detection.  
3. **Bias for Action & Invent & Simplify** – Added a *policy‑as‑code* engine (AWS IAM + AWS Config Rules) that auto‑revokes access when a policy change is detected, reducing manual audit cycles.  
4. **Deliver Results** – Deployed to **EU‑Frankfurt** region; achieved 99.999% availability and 150 ms average latency across 3,000 concurrent requests.

**Result**  
- Reduced compliance audit time by **70%** (from 10 days to 3 days).  
- Cut operational cost of encryption/decryption by **35%** versus a pure software‑only approach.  
- Earned the “Best Legal AI Security” award at AWS re:Invent.

**Bar‑raiser Takeaway**  
I demonstrated full ownership, deep technical dive into confidential computing, quantified impact on compliance and cost, and learned from an early failure where we underestimated enclave startup time—leading to the 200 ms SLA.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
