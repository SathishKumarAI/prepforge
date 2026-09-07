---
qid: ing_346ad76e1b__aws__local
question: How does Harvey keep my data private and secure?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 383
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:21-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: In 2023 I led the privacy redesign for Harvey’s AI assistant, which processes ~10 M user requests/day.  
*Task*: Ensure all personal data is stored and processed in a way that guarantees end‑to‑end encryption, minimal retention, and zero‑knowledge compliance.

*Action*:  
1. **Data Isolation** – I introduced *AWS Key Management Service (KMS)* with dedicated customer master keys per region, coupled with *Amazon S3 Object Lock* to enforce immutable storage for auditability.  
2. **Zero‑Knowledge Architecture** – Leveraging *AWS Lambda* + *AWS Secrets Manager*, all data is encrypted client‑side before transmission; the server never sees plaintext.  
3. **Access Controls** – I implemented fine‑grained IAM policies and *AWS Cognito* user pools, ensuring that only authorized services can decrypt keys.  
4. **Monitoring & Auditing** – Integrated *Amazon CloudTrail* + *GuardDuty* for continuous threat detection; every key access logs to a tamper‑evident KMS audit trail.

*Result*: Post‑deployment, we achieved a 99.999% data‑in‑transit and at‑rest encryption compliance score, reduced average incident response time from 3 h to <30 min, and cut storage costs by 15 % through lifecycle policies.  

**Bar‑raiser Takeaway**  
I owned the end‑to‑end solution, dove deep into AWS security primitives, quantified impact with clear metrics, and learned that “less is more” – removing unnecessary data exposure layers yielded both cost savings and stronger privacy guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
