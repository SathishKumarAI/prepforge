---
qid: ing_bcd7788d48__aws__local
question: 'Explain: Single-Sign On (SSO) — Generative AI for Clinical Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 461
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:30:30-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team at MedAI Inc. to build an SSO‑enabled generative‑AI chat that could pull patient histories from EMR systems while preserving HIPAA compliance.

**Action – Technical Design**  
*Requirements:*  
- **Security:** single‑click login via Okta + MFA, end‑to‑end encryption.  
- **Scalability:** 50k concurrent users in a hospital network.  
- **Latency:** <300 ms for each AI turn.  

*Architecture:*  
1. **Amazon Cognito** (SSO provider) federated with Okta → user pool + custom auth triggers.  
2. **API Gateway** + **Lambda@Edge** to proxy requests, enforce rate limits.  
3. **Amazon Bedrock** (Claude 2) for the generative model; wrapped in a stateless Lambda layer that streams responses via WebSocket.  
4. **DynamoDB** stores session metadata; **S3** holds encrypted conversation logs.  
5. **AWS Key Management Service (KMS)** keys rotated monthly, with audit via CloudTrail.  

*Trade‑offs:* Chose Bedrock for lower latency vs. cost of a private GPU fleet; mitigated cost by limiting concurrent sessions per patient record.

**Result – Impact & Metrics**  
- Reduced average onboarding time from 12 min to **30 sec** (90% reduction).  
- Achieved **99.97% availability** over 6 months, with auto‑scaling handling a 4× traffic spike during a public health alert.  
- Saved $120k annually versus on‑prem GPU infrastructure.

**Learning & Ownership**  
I owned the end‑to‑end compliance audit and iterated the IAM policy after a near‑miss review. The bar‑raiser noted my deep dive into KMS key policies, quantified risk reduction, and clear post‑mortem documentation—demonstrating ownership, bias for action, and customer obsession.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
