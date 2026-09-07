---
qid: ing_d44674891d__aws__local
question: 'Explain: The Five Laws of Authorization — The five laws of cloud-native
  authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 374
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:20:22-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the redesign of our SaaS platform’s access control after a spike in unauthorized data exposure incidents. The goal was to shift from monolithic ACLs to a cloud‑native, policy‑driven model that scales with microservices.

**Action (Design)**  
I introduced **the Five Laws of Authorization**—(1) *Least Privilege*, (2) *Separation of Duties*, (3) *Immutable Policies*, (4) *Audit‑First*, and (5) *Dynamic Context*.  
- **Policy Store:** Amazon DynamoDB with TTL for immutability.  
- **Evaluation Engine:** AWS Lambda + Amazon API Gateway, invoking IAM Roles per request.  
- **Context Service:** AWS AppConfig feeds runtime attributes (geo, device).  
- **Audit Trail:** CloudTrail + Kinesis Firehose → S3 and Athena for query‑based compliance.

**Result**  
*Customer Obsession* & *Ownership*: Reduced data breach risk by 92 % in six months. *Dive Deep*: Real‑time evaluation latency dropped from 350 ms to <30 ms, enabling seamless UX at 10× user growth. *Deliver Results*: Cost fell from $120k/month (legacy ACLs) to $48k/month due to serverless scaling.

**Bar‑Raiser Insight**  
They’d hear my ownership of the end‑to‑end pipeline, deep dive into DynamoDB read/write patterns, quantitative impact on breach probability, and lessons learned when a temporary policy mis‑config caused an outage—prompting automated rollback via CloudFormation stacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
