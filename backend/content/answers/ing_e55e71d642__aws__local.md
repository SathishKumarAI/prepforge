---
qid: ing_e55e71d642__aws__local
question: 'Explain: DAC (Discretionary Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 406
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:38-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that had to replace an insecure, hard‑coded ACL in our SaaS platform. The goal was to build a DAC‑based permission system that could scale to 5 M users and support fine‑grained object‑level access while keeping latency <30 ms.

**Action**  
I architected a microservice using **Amazon Cognito** for identity, **AWS IAM** policies for role mapping, and a **DynamoDB** table (partition key = `userId`, sort key = `resourceArn`) to store explicit allow/deny entries. A Lambda authorizer (Python 3.11) queried DynamoDB + Cognito groups on every request, merged results with pre‑cached policy documents in **ElastiCache‑Redis**, and returned a signed JWT containing the effective permissions. I introduced an audit stream via **DynamoDB Streams** → **Amazon Kinesis Data Firehose** → **S3** for compliance.

**Result**  
The new system cut unauthorized access incidents by 92 % (from 4 / month to 0), reduced API latency from 120 ms to 22 ms, and lowered operational cost by 18 % through serverless compute. I documented the design in a run‑book that earned a 5‑star peer review.

**Leadership Principles**  
- **Customer Obsession**: Eliminated security gaps that could compromise user data.  
- **Ownership** & **Dive Deep**: Took full responsibility for architecture, performance tuning, and continuous monitoring.

I learned that early integration of audit logs prevents costly post‑incident investigations, a lesson I’ll bring to future AWS‑based permission challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
