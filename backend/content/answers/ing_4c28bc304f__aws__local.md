---
qid: ing_4c28bc304f__aws__local
question: 'Explain: Printable score sheet — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 575
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:17:22-05:00'
sources: []
---

**Printable Score Sheet – Mock Interview Kit**

| **Section** | **What to Capture** | **Why It Matters (LPs)** |
|-------------|---------------------|--------------------------|
| *Candidate Name / Role* | Identifies the interviewee | Ownership – clear accountability |
| *Date & Interviewer* | Tracks timeline | Bias for Action – quick feedback loops |
| *Behavioral Rating* (1–5) | Customer Obsession, Invent & Simplify, Deliver Results | Depth – dive deep into examples |
| *Technical Assessment* (1–5) | Design clarity, scalability, cost | Ownership + Dive Deep |
| *Key Metrics* | e.g., “Reduced latency 3×” or “Cost saved $12k/month” | Quantified Impact |
| *Learning & Next Steps* | Actionable feedback | Continuous improvement |

### How to Use It (AWS‑centric)

1. **Generate PDF via AWS Lambda** triggered by an API Gateway endpoint.  
2. Store the final sheet in **S3** with a lifecycle policy to purge after 30 days.  
3. Send it to the candidate’s email using **SES**; optionally push a Slack notification for the hiring manager.

### Why It Works (STAR)

- **Situation:** Interview panels struggled to give consistent, data‑driven feedback.  
- **Task:** Build an automated, repeatable score sheet.  
- **Action:** Designed a Lambda‑S3‑SES stack, added JSON schema validation and role‑based access via IAM.  
- **Result:** Reduced interview turnaround time by **30 %**, increased rating consistency (inter‑rater reliability ↑0.85), and cut manual effort from 2 hrs to 15 min per candidate—saving ~**$1.8k/month** in recruiter hours.

### Bar‑Raiser Checklist

| Criterion | What the bar‑raiser looks for |
|-----------|------------------------------|
| **Ownership** | Candidate owns data integrity, error handling, and cost controls. |
| **Dive Deep** | Clear explanation of Lambda cold starts, S3 request pricing, and SES send limits. |
| **Quantified Impact** | Metrics on time saved, reliability score, and cost reduction. |
| **Learning from Failure** | Discuss fallback if Lambda fails (e.g., retry logic, dead‑letter queue). |

> *“I own the entire pipeline, I can explain why each AWS service is chosen, and I’ve quantified how this changes our hiring metrics.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
