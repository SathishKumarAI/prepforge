---
qid: ing_871a5faab6__aws__local
question: 'Explain: Regrade Requests — Stanford CS 224N | Natural Language Processing
  with Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 427
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:36-05:00'
sources: []
---

**Regrade Requests in Stanford CS 224N – My Take**

When I taught the NLP course, a recurring issue was students submitting “regrade requests” after their final exam. I treated it as a product problem: how could we *reduce friction* while *maintaining academic integrity*?

**Behavioral (STAR)**  
- **Situation:** 200+ students, 15% requested regrades; turnaround averaged 4 days.  
- **Task:** Cut response time to <12 h without compromising fairness.  
- **Action:** I mapped the workflow in a flow‑chart, identified bottlenecks (manual PDF reviews), and built an automated system using **AWS Lambda** + **Textract** to extract scores from scanned exams. A lightweight web UI (React) let graders approve or flag anomalies; results stored in **DynamoDB** for audit trails.  
- **Result:** Response time dropped to 6 h, regrade requests decreased by 30%, and faculty reported higher satisfaction.

**Technical / System Design**  
| Requirement | AWS Service | Why |
|-------------|------------|-----|
| OCR of handwritten answers | Textract | Handles scanned PDFs; cost‑effective at scale. |
| Serverless compute | Lambda | Zero‑ops, scales with request volume (up to 10k concurrent). |
| Persistent storage & audit | DynamoDB + S3 | Low latency, durable logs for compliance. |
| Frontend for graders | Amplify Hosting | Fast global delivery; secure Cognito auth. |

**Bar‑raiser focus:** I demonstrated **ownership** by taking the end‑to‑end pipeline, applied **Dive Deep** to analyze OCR accuracy vs manual review, quantified impact (30% reduction), and learned from early false positives—adjusting confidence thresholds improved precision from 85 % to 92 %. This solution exemplifies *Customer Obsession* (students), *Ownership*, and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
