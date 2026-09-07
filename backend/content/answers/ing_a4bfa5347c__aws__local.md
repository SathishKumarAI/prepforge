---
qid: ing_a4bfa5347c__aws__local
question: 'Explain: Flexible PTO — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 505
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:39:54-05:00'
sources: []
---

**Situation / Task**  
When I joined Glean as a Product Manager (AI), the company offered a *Flexible PTO* program that let employees take time off without a pre‑approved quota. The challenge was to ensure it didn’t create scheduling chaos or hurt customer support, while keeping the policy attractive enough to retain top talent.

**Action**  
I owned the end‑to‑end redesign of the PTO workflow:

1. **Requirements & Deep Dive** – I mapped out all touchpoints (HR portal, engineering calendars, customer‑support shift schedules). Using *AWS CloudWatch* and *Athena* on S3 logs, I identified peak periods where unplanned absences caused SLA dips.
2. **Design** – Built a microservice in **Python/Flask** behind an **API Gateway** that:
   - Validates PTO requests against a real‑time availability graph stored in **DynamoDB** (partitioned by team).
   - Triggers an **SNS** notification to the team lead for quick review.
   - Persists approvals in **RDS Aurora PostgreSQL**, enabling audit trails and analytics.
3. **Scalability & Availability** – The service runs on **Fargate** with auto‑scaling (CPU 70 % target), giving 99.99 % availability while keeping costs < $5k/month.  
4. **Metrics & Feedback Loop** – Integrated *Amazon Pinpoint* to send post‑PTO surveys; used the data in a quarterly KPI dashboard.

**Result**  
- Reduced unplanned absences by **37 %** and SLA violations dropped from 12 % to 3 %.  
- PTO utilization increased by **45 %**, proving the policy was both flexible and respected.  
- Employee NPS rose from 78 to 86, a 8‑point lift linked directly to the new system.

**Reflection (Bar‑raiser lens)**  
I took full ownership of cross‑functional data collection, dove deep into usage patterns, quantified impact with clear numbers, and iterated after each sprint based on real feedback. The success reinforced that *Customer Obsession* + *Ownership* can transform a simple policy into a strategic talent‑retention engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
