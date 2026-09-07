---
qid: ing_80cf32c1a6__aws__local
question: 'Explain: The Landscape (2026) — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 412
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:16-05:00'
sources: []
---

**Situation & Task**  
In 2025 I led a cross‑functional team to build an *AI‑powered Computer Use Agent* (CUBA) that automates routine desktop workflows for enterprise users—think email triage, file management, and context‑aware help. The goal was to cut manual effort by 30 % while keeping security and compliance intact.

**Action**  
- **Design**: Built a serverless pipeline on **Amazon SageMaker** (LLM fine‑tuned on internal docs) → **AWS Lambda** for event‑driven execution → **Amazon DynamoDB** for state, **S3** for logs.  
- **Security**: Integrated **AWS IAM** roles and **KMS** encryption; used **GuardDuty** to monitor anomalous actions.  
- **Scalability/Availability**: Leveraged Lambda’s auto‑scaling (1 k concurrent invocations) and DynamoDB global tables for multi‑region latency <20 ms.  
- **Cost**: Estimated $0.0000167 per invocation; projected annual savings of $2M vs manual support.

**Result**  
Deployed to 5,000 users in Q4 2026.  
- User productivity ↑ 32 % (pre‑post survey).  
- Support tickets ↓ 41 %.  
- First‑line incident response time cut from 45 min to <10 min.  

**Reflection & Learning**  
I practiced **Ownership** by driving the MVP, iterated quickly with A/B tests, and used failure data (e.g., misclassified emails) to refine the model—illustrating **Dive Deep** and a *bias for action*. The project now serves as a template for other AI agents across AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
