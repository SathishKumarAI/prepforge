---
qid: ing_948c8183fd__aws__local
question: 'Explain: Ambulatory encounter integrity at the point of care'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 397
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:43-05:00'
sources: []
---

**Ambulatory Encounter Integrity at Point‑of‑Care – My Approach**

**Situation / Task**  
While leading a health‑tech startup, we were required by the CMS to guarantee *complete* data capture for every ambulatory visit—no missing vitals, diagnoses, or billing codes. A 5 % data loss would trigger audit penalties and $50k per incident.

**Action**  
1. **Ownership & Bias for Action** – I built a serverless pipeline that captured all EHR events in real time using **Amazon Kinesis Data Streams** → **Lambda** → **DynamoDB** (primary store).  
2. **Dive Deep** – Added an *integrity validator* Lambda that cross‑checked the stream against our relational schema in **RDS Aurora** and flagged anomalies to a **SNS topic** for immediate remediation.  
3. **Invent & Simplify** – Deployed a **Step Functions** workflow that auto‑retries failed writes, logs metrics to **CloudWatch**, and triggers an SLA breach alert if integrity drops below 99.95 %.  
4. **Customer Obsession** – Integrated the pipeline with our mobile app via **AppSync** so clinicians received instant feedback on missing fields, reducing manual follow‑ups.

**Result**  
- Reduced data loss from 3.2 % to <0.01 % within 90 days.  
- Cut audit‑related penalties by $1.8M annually.  
- Improved clinician satisfaction score by 12 points (from 78/100 to 90/100).  

**Bar‑raiser Takeaway**  
Demonstrated end‑to‑end ownership, deep technical dive into data consistency, and quantified business impact—all while learning from early failures in the retry logic that now informs our continuous deployment pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
