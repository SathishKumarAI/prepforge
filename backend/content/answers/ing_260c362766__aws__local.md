---
qid: ing_260c362766__aws__local
question: 'Explain: Wellness Stipend — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 732
total_tokens: 961
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:52:19-05:00'
sources: []
---

**Situation (S)**  
When I joined a fast‑growing fintech in 2023, the leadership team realized that employee wellness was slipping—our internal survey showed only **58 %** satisfaction with work‑life balance, and churn among high performers rose to **12 %** quarterly. The company wanted an automated “Wellness Stipend” platform that would let employees claim a monthly stipend for health‑related expenses (gym, meditation apps, nutrition) while keeping the process compliant and cost‑controlled.

**Task (T)**  
Design a scalable, secure, and auditable system that:  
1. Allows employees to request and track stipend claims.  
2. Enforces limits per category and per employee.  
3. Integrates with payroll and expense reimbursement workflows.  
4. Generates real‑time dashboards for HR and finance.

**Action (A)**  
- **Architecture:** Serverless microservices on **AWS Lambda** + **API Gateway** (REST/GraphQL) to keep the platform cost‑effective at scale.  
- **Data Store:** **Amazon DynamoDB** (partitioned by employee ID, TTL for stale requests) ensures sub‑millisecond reads/writes and automatic scaling.  
- **Business Rules & Validation:** A Lambda authorizer checks role‑based access; another function enforces category limits using a **DynamoDB conditional write** to avoid race conditions.  
- **Payments Integration:** Trigger an **Amazon SNS** topic that invokes the payroll microservice (written in Go) which pushes data to **AWS Step Functions** orchestrating a **Stripe API** call for stipend disbursement.  
- **Observability & Compliance:** All events are logged to **CloudWatch Logs**, aggregated into **Amazon OpenSearch** for ad‑hoc queries, and audit trails stored immutably in **S3 Glacier** (GDPR/CCPA compliant).  
- **Analytics Dashboard:** **QuickSight** pulls from a materialized view in **Redshift Spectrum** (over S3) to provide real‑time metrics on stipend usage, category spend, and cost per employee.

**Result (R)**  
Within **six weeks**, we launched the MVP with 100 % of employees enrolled. Monthly stipend utilization rose from **0 %** to **73 %**, while churn dropped by **4 %** in Q3. Cost savings were realized because the system automatically capped claims at $200/month per employee, cutting unnecessary payouts by **$45K** annually. The platform also earned an internal “Innovation Award” for reducing payroll cycle time from 5 days to under 24 hours.

---

### Leadership Principles Highlighted  
- **Customer Obsession:** Built a user‑friendly experience that directly addressed employees’ wellness needs.  
- **Ownership & Dive Deep:** Took full responsibility from requirement gathering through post‑launch monitoring, and engineered deep data pipelines for compliance and analytics.  

**What the bar‑raiser looks for:**  
- Clear ownership of every component (Lambda, DynamoDB, Step Functions).  
- Demonstrated depth in AWS service selection and trade‑off analysis (cost vs. latency).  
- Quantified impact on employee satisfaction and company cost savings.  
- Reflection on a failed earlier attempt—initial monolithic design caused 30 % slower request times; pivoting to serverless solved it, showing learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
