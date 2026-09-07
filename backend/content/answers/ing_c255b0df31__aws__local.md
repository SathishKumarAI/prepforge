---
qid: ing_c255b0df31__aws__local
question: 'Explain: Where it runs . Who controls it. What certifies it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 422
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:42:27-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional AI team at Amazon Retail, I was asked by the Finance board: *“Where does our recommendation engine run? Who controls it and how do we certify its safety?”* The answer had to satisfy compliance, cost, and latency requirements.

**Action**  
I designed an **end‑to‑end pipeline** that runs in **AWS SageMaker** on a fleet of GPU‑enabled **EC2 g4dn.xlarge** instances (auto‑scaling between 8–64 nodes). Control is achieved through **IAM roles + AWS Step Functions**: each job is launched by the data‑engineering Lambda, which checks a versioned **Model Registry** in SageMaker. For certification I integrated **Amazon SageMaker Model Monitor** and **AWS Config** to log every inference request; these logs are streamed to an **EventBridge rule** that triggers a **Lambda audit** against our internal *Safety* policy (bias metrics <2 % per segment). The audit results feed into an **Athena‑powered dashboard** (≈$0.30/mo) used by the Data Governance team.

**Result**  
The deployment reduced inference latency from 1.8 s to 0.6 s (a 66 % improvement), cut monthly compute spend by 28 %, and achieved a **model drift detection rate of 99.7 %** with zero false positives in the first six months.  

---

### Leadership Principles  
- **Customer Obsession** – ensuring fast, trustworthy recommendations for shoppers.  
- **Ownership** – end‑to‑end responsibility from data ingestion to audit.  

**Bar‑raiser cues**: depth of AWS service choices, quantified latency and cost savings, clear ownership chain, and the learning loop (audit logs feeding back into model retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
