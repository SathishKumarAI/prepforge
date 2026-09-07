---
qid: ing_4ebc78e1a6__aws__local
question: Can I apply for financial aid? — Deep Learning | Coursera
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:20-05:00'
sources: []
---

**Situation – Task**  
I was the lead of a regional Coursera partnership program that offered “Deep Learning” courses to underserved students. The enrollment goal was 5 000 participants per quarter, but only 1 200 signed up because many couldn’t afford tuition.

**Action – Design & Execution**  
*Customer Obsession*: I mapped student pain points through surveys and identified the cost barrier as top priority.  
*Dive Deep*: Using AWS Step Functions + Lambda, I built an automated financial‑aid workflow that pulls applicant data from a DynamoDB table, validates eligibility against institutional criteria (income, enrollment status), and triggers a Cognito‑based approval notification.  
*Bias for Action*: Within 2 weeks we launched the pilot; the system handled 3 000 applications per day with <1 % error rate.  
*Invent & Simplify*: Replaced manual spreadsheets with an AWS AppSync GraphQL API, cutting review time from 5 days to 12 hours.  

**Result – Impact**  
- Enrolled 2 500 additional students in the first quarter (≈200 % lift).  
- Reduced processing cost by $18k annually (Lambda vs. on‑prem servers).  
- Received a “Best Practice” award from Coursera’s global education board.

**Bar‑raiser cues I’d listen for**  
- Demonstrated ownership of end‑to‑end solution.  
- Quantified impact (enrollment lift, cost savings).  
- Deep technical reasoning and trade‑offs (serverless vs. EC2, data privacy).  
- Learning: after the first batch we added a machine‑learning fraud detector in SageMaker to reduce false positives by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
