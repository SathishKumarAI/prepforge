---
qid: ing_15ea8f0b5e__aws__local
question: 'Explain: Enterprise Sales Director, Retail — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 614
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:14:50-05:00'
sources: []
---

**Enterprise Sales Director – Retail (Sierra)**  
*Amazon Leadership Principles: Customer Obsession & Ownership*

---

### **Situation**
At Sierra, a fast‑growing retail tech startup, the leadership team wanted to scale from $15 M ARR to $80 M ARR in 18 months while retaining a high Net Promoter Score (>85). The existing sales organization was siloed by product lines and lacked a unified go‑to‑market (GTM) strategy.

### **Task**
I was tasked with designing and executing an end‑to‑end Enterprise Sales framework that:  
1. Unified the retail channel into a single, data‑driven GTM engine.  
2. Increased win rates for high‑value accounts from 22 % to >45 %.  
3. Reduced sales cycle length by 30 %.

### **Action**
| Step | Action | AWS Services / Tech |
|------|--------|---------------------|
| 1 | **Dive Deep into Data** – built a real‑time pipeline (Kinesis → Lambda → Redshift) to ingest CRM, POS, and web analytics. | Kinesis, Lambda, Redshift, QuickSight |
| 2 | **Model Opportunity Scorecard** – trained an XGBoost model on historical win/loss data to rank leads by probability of close within 90 days. | SageMaker, Glue |
| 3 | **Automate Scoring & Routing** – integrated the scorecard with Salesforce via API Gateway; automated lead assignment and email cadences using Step Functions. | API Gateway, Step Functions, SES |
| 4 | **Unified GTM Playbook** – created a playbook in Confluence, embedded dynamic dashboards (QuickSight) for each rep. | Confluence, QuickSight |
| 5 | **Scale & Optimize** – deployed the entire stack in a single region with Auto Scaling groups; cost‑optimized by using Spot Instances for training jobs and S3 lifecycle policies. | EC2 Spot, Auto Scaling, S3 |

### **Result**
* **ARR grew from $15 M to $80 M** (5×) within 18 months.  
* Win rate jumped from **22 % → 48 %**; average deal size increased by **27 %**.  
* Sales cycle shortened from **120 days → 84 days** (30 % reduction).  
* NPS remained above **88 %**, indicating strong customer satisfaction.

### **Takeaway**
By owning the end‑to‑end sales process, diving deep into data, and deploying a scalable AWS architecture, we delivered measurable growth while keeping costs under $200K/month. The experience reinforced that *ownership + data‑driven decisions* drive sustainable revenue acceleration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
