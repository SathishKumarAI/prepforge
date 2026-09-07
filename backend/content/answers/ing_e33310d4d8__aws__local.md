---
qid: ing_e33310d4d8__aws__local
question: 'Explain: Your assistant''s answer quality regressed and nobody noticed
  for three weeks. You''re writing the postmortem. Walk me through the document.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 498
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:03-05:00'
sources: []
---

**Post‑Mortem: Assistant Answer Quality Regression (3‑Week Blind Spot)**  

*Leadership Principles:* **Ownership**, **Dive Deep**  
---

### Situation  
For 21 days the assistant’s answer quality dropped by ~30 % (F1‑score 0.72 → 0.50). No alert triggered because the monitoring dashboard only tracked overall accuracy, not per‑question‑type.

### Task  
Deliver a concise post‑mortem that explains root cause, impact, and corrective actions while reinforcing our culture of accountability.

### Actions  

| Step | What I did | AWS Services Used |
|------|------------|-------------------|
| **1. Gather data** | Export logs from CloudWatch & DynamoDB (question IDs, timestamps, scores). | CloudWatch, DynamoDB |
| **2. Drill down** | Ran Athena queries on S3‑archived logs to isolate the 30 % drop in “Complex‑Concept” tags. | Athena, S3 |
| **3. Root‑cause analysis** | Identified a recent model retrain that over‑fit to short‑answer data; loss function drifted. | SageMaker, CloudWatch Metrics |
| **4. Impact quantification** | 30 % drop → ~12 k user queries per day × 0.3 = 3.6 k lower‑quality responses; projected revenue impact $18K/month (based on $5/user). | QuickSight |
| **5. Fix & monitor** | Re‑trained with balanced loss, added per‑tag accuracy alerts in CloudWatch Alarms. | SageMaker, CloudWatch |
| **6. Prevention** | Implemented “Model Drift” dashboard; scheduled quarterly drift reviews. | CloudWatch, Step Functions |

### Result  
- Immediate rollback restored 95 % of quality within 2 hours.  
- New monitoring prevented further regressions (0 incidents in 30 days).  
- Cost impact avoided: $18K/month saved.

---

**Bar‑raiser notes:** I took full ownership, dug deep into the data to quantify impact, and turned a blind spot into a proactive monitoring system—exactly what Amazon expects from leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
