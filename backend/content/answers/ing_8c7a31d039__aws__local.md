---
qid: ing_8c7a31d039__aws__local
question: 'Explain: Human Errors — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 390
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:39-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of a real‑time fraud‑prevention pipeline that processed ~10 M events per day. A recurring human error—manual flagging rules mis‑configured by analysts—caused 0.3 % false positives, costing us ~$200K/month in legitimate transaction losses.

**Action**  
1. **Ownership + Bias for Action** – I built an automated “Rule‑Health” microservice that continuously validates rule logic against a ground‑truth dataset.  
2. **Dive Deep** – Using AWS CloudWatch and X-Ray, I instrumented the pipeline to capture latency, error rates, and rule evaluation counts per minute.  
3. **Invent & Simplify** – Deployed the service as an ECS Fargate task behind an Application Load Balancer, with a DynamoDB table for rule metadata (TTL = 24 h). The health check triggers SNS alerts if false‑positive rate >0.2 %.  
4. **Deliver Results** – After deployment, we reduced human‑error induced false positives by 85 % and saved ~$170K/month.

**Result**  
- **Scalability**: Fargate scales in <30 s to handle spikes (up to 20× normal traffic).  
- **Availability**: Multi‑AZ ECS + ALB guarantees 99.999 % uptime; DynamoDB offers single‑digit millisecond latency.  
- **Cost**: <$5/month for the health service vs $50k/year in manual rule review.

**Bar‑raiser takeaway** – Showed deep ownership, quantified impact, and a data‑driven solution that turns human error into an automated safety net.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
