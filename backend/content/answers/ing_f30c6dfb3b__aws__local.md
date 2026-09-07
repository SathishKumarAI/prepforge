---
qid: ing_f30c6dfb3b__aws__local
question: 'Explain: Authentication Layer — How does SSH work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 342
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:11-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup, we had to secure our internal deployment pipeline that used SSH for server access. The legacy script allowed any developer with an SSH key to jump into production, raising compliance and audit risks.

**Action (Design)**  
I re‑architected the authentication layer by implementing **AWS Systems Manager Session Manager** + **IAM role chaining**.  
1. Each dev’s public key is stored in *AWS Key Management Service* (KMS) and mapped to an IAM policy that only grants `ssm:StartSession`.  
2. The session manager forwards traffic through the SSM Agent, eliminating the need for inbound SSH ports.  
3. I added a **Lambda audit function** that logs every session start/stop to CloudWatch Logs and triggers an SNS alert if an unauthorized key is used.

**Result (Data‑driven)**  
- Reduced accidental production access incidents from 12/month to **0** in three months.  
- Cut the average time to revoke a compromised key from *48 h* to **15 min**, improving compliance scores by **35 %**.  
- Saved ~\$2k/month on open‑source SSH tools and maintenance.

**Reflection (Bar‑raiser check)**  
I owned the problem end‑to‑end, dived deep into AWS IAM & SSM docs, quantified impact with concrete metrics, and learned that shifting traffic through managed services can drastically lower attack surface while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
