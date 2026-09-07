---
qid: ing_87563131c6__aws__local
question: 'Explain: 5.5 Security — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 638
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:10-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led the redesign of a cross‑region notification platform that sent over **3 M messages/day** for a fintech app. The previous system leaked user data via misconfigured IAM roles and lacked end‑to‑end encryption, so we had to build a **secure, auditable service** without breaking SLA (99.9% latency < 200 ms).

**Action (A)**  
1. **Requirements & Threat Model** – I scoped *confidentiality* (PII), *integrity* (tamper‑proof payloads), and *availability*.  
2. **Design** –  
   - **Event ingestion**: API Gateway + Lambda (Python) → encrypted with KMS key per tenant.  
   - **Queueing**: SNS topics fan‑out to SQS queues; each queue is FIFO, deduped, and has a DLQ for failures.  
   - **Processing**: EC2 Auto Scaling group behind ALB, using *Application Load Balancer* with TLS termination (certs from ACM). Each instance pulls messages via `ReceiveMessage` in batches of 10, decrypts with KMS, verifies HMAC, and pushes to downstream channels (email/SMS/FCM).  
   - **Audit & Monitoring**: CloudTrail + GuardDuty logs every API call; Athena queries S3 logs for anomalies.  
   - **Access control**: IAM roles are least‑privilege; only Lambda can `kms:Decrypt`.  
3. **Scalability / Cost** – Leveraged *Lambda* for bursty traffic (up to 10 k concurrent invocations) and kept EC2 spot instances for cost‑saving during low load. Estimated $1.5K/month vs the old $4K.

**Result (R)**  
- Latency dropped from **350 ms** to **<180 ms** (95th percentile).  
- Successful message delivery rose from **92%** to **99.8%**.  
- No security incidents in 12 months; compliance audit score increased from 72/100 to 98/100.

---

### Leadership Principles Highlighted
| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility for the entire stack, from API design to monitoring. |
| **Dive Deep** | Conducted a threat model, quantified latency & cost trade‑offs, and iteratively refined IAM policies. |

### What a Bar‑Raiser Looks For
- **Quantified Impact**: Clear metrics (latency, success rate).  
- **Depth**: Threat modeling, IAM design, multi‑region failover.  
- **Learning from Failure**: Post‑mortem on past breaches; implemented guardrails to prevent recurrence.  

This blend of customer obsession, ownership, and deep technical rigor aligns with Amazon’s standards for high‑impact engineering solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
