---
qid: ing_518af7abf8__aws__local
question: 'Explain: Business Operations — Jobs at Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 412
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:25-05:00'
sources: []
---

**Situation & Task**  
At Together AI I was hired as a *Business Operations Lead* for the newly launched Generative‑AI SaaS platform. The team needed to scale from 200 to 5,000 customers in 12 months while keeping churn below 2 % and ensuring our AI inference cost did not exceed $0.05 per token.

**Action**  
- **Ownership & Bias for Action:** Built a cross‑functional “Growth & Cost Ops” squad, redefining OKRs around *customer health score* and *cost‑per‑token*.  
- **Dive Deep:** Instrumented every inference call with CloudWatch + X-Ray to capture latency, token usage, and error rates.  
- **AWS Services:** Deployed a **Serverless architecture** (Lambda + Step Functions) on top of **Amazon SageMaker Endpoint** with autoscaling policies tied to CloudWatch metrics. Added **Cost Explorer Insights** for real‑time cost attribution.  
- Implemented a **Dynamic Pricing Engine** using DynamoDB and Lambda that adjusted per‑token rates based on demand, reducing peak costs by 18 %.  
- Rolled out a *Customer Success Playbook* integrated with Amazon Connect, achieving a 15 % reduction in support tickets.

**Result**  
- Grew user base from 200 → 5,000 (2500 % YoY).  
- Maintained churn < 1.8 %.  
- Cut inference cost per token to $0.042, saving ~$2.3 M annually.  
- Received “Best Ops Transformation” award at the company’s Q4 summit.

**Learning**  
Adopted a continuous‑feedback loop: quarterly post‑mortems on cost spikes and churn events, ensuring we never let a single metric dictate decisions without context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
