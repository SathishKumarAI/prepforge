---
qid: ing_70b340e08c__aws__local
question: 'Explain: LLM-Specific Concerns — Access Control'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 487
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:27-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an internal LLM‑powered recommendation engine for our e‑commerce catalog. The system had to enforce fine‑grained access control: only approved data scientists could query the model, and sensitive customer attributes were masked for all other users.

**Action**  
1. **Architecture** – I designed a serverless stack on AWS: API Gateway → Lambda (Python) → SageMaker endpoint.  
2. **Access Control** –  
   * IAM roles with least‑privilege policies tied to Cognito user groups (`DataScientist`, `Analyst`).  
   * KMS‑encrypted model weights and secrets stored in Secrets Manager; only the `DataScientist` role could decrypt them.  
   * Lambda performed a runtime check against an ACL table (DynamoDB) that mapped user IDs to allowed feature sets, enforcing masking logic before forwarding requests to SageMaker.  
3. **Observability** – CloudWatch metrics captured request latency and denied‑access counts; alerts triggered when denied accesses exceeded 5% of total.

**Result**  
- Reduced unauthorized query attempts by **92 %** (from 1,200/day to 84/day).  
- Latency stayed under **120 ms** for 99.9 % of requests, meeting SLA while keeping monthly cost <$3k vs the $12k baseline with a monolithic access layer.  

**Leadership Principles Reflected**  
*Customer Obsession* – protecting user data drove our design.  
*Ownership & Dive Deep* – I led the end‑to‑end solution and performed deep performance tuning.

**Bar‑raiser Takeaways**  
- Clear ownership of security posture.  
- Quantified impact (92 % reduction).  
- Trade‑off discussion: serverless vs. dedicated auth service, cost/latency balance.  
- Learned from an earlier pilot where shared IAM roles caused accidental data leaks; pivoted to role separation and dynamic ACLs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
