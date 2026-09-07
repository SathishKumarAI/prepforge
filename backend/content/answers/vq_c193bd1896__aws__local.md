---
qid: vq_c193bd1896__aws__local
question: Can an Alert message be changed at runtime ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 369
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:12:30-05:00'
sources: []
---

**Situation & Task**  
In a global SaaS platform we had a “critical‑incident” alert that was hard‑coded in the notification service. When an outage hit, ops had to manually edit the message file and redeploy—causing 4 hrs of downtime for the same issue.

**Action (Design)**  
I introduced *runtime‑editable alerts* using **Amazon SNS + Parameter Store**:  
1. Store the alert template in SSM Parameter Store (JSON).  
2. Lambda pulls the latest template on each event, substitutes variables (`${INSTANCE_ID}`, `${ERROR_CODE}`), and publishes to SNS.  
3. Ops can update the parameter via CLI or console; changes propagate instantly—no redeploy.

**Result**  
- **Response time** dropped from 4 hrs to <10 min (90% faster).  
- Reduced ops effort by **30 hours/month** of manual edits.  
- Cost impact negligible (<$5/month) while improving reliability.

**Leadership Principles**  
*Customer Obsession*: Faster, accurate alerts mean happier customers.  
*Ownership & Dive Deep*: I identified the hidden bottleneck, architected a solution that eliminated it, and validated with metrics.

**Bar‑raiser takeaways**  
- Ownership: drove change end‑to‑end.  
- Depth: dissected deployment pipeline to find latency source.  
- Quantified impact: clear KPI improvements.  
- Learning: after rollout, we added automated rollback on parameter validation failure—turning a single failure point into a self‑healing process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
