---
qid: ing_402c651875__aws__local
question: 'Explain: Interview Follow-Up Questions — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 377
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:48-05:00'
sources: []
---

**Compliance Automation – Interview Follow‑up**

**Situation:** At my previous company we had a quarterly audit that required manual review of 12 M lines of configuration data across 3,000 servers. The process took ~4 weeks and cost $180K in labor.

**Task:** Build an automated compliance engine to reduce time, costs, and human error while meeting SOC‑2 & PCI‑DSS requirements.

**Action:**
- **Ownership + Bias for Action:** I scoped the solution with the audit team, defined a “compliance scorecard,” and took full ownership of delivery.
- **Dive Deep:** Analyzed data flows; identified that 95 % of violations were due to missing IAM policies or outdated SSL certs.  
- Designed an event‑driven pipeline using **AWS EventBridge** → **Lambda** (Python) for rule evaluation, storing results in **DynamoDB** (low latency, cost‑effective).  
- Used **AWS Config Rules** and **GuardDuty** to automatically flag infractions; notifications sent via **SNS** to DevOps.  
- Implemented **step functions** for retry logic and audit logging.

**Result:**  
- Cut audit turnaround from 4 weeks to 2 days (99 % reduction).  
- Reduced labor cost by $170K annually (~95 %).  
- Compliance score rose from 82 % to 99.5 %.  

**Bar‑raiser notes I hear:** ownership of end‑to‑end impact, depth in data & architecture choices, clear quantification of ROI, and lessons learned (e.g., added a rollback plan after an early false positive).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
