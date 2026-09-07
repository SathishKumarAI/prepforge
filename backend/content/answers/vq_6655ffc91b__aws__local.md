---
qid: vq_6655ffc91b__aws__local
question: Do you think people should spend more time outdoors?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 383
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:56-05:00'
sources: []
---

**Behavioral (Amazon Interview)**  

**Situation:**  
At my previous company I led a wellness initiative to reduce employee burnout. We noticed that 73 % of staff reported “lack of fresh air” as a major stressor, and absenteeism was up 12 % year‑over‑year.

**Task:**  
I had to design a program that would encourage outdoor activity without disrupting workflow or incurring extra cost, while proving ROI to senior leadership.

**Action:**  
1. **Customer Obsession & Ownership:** I surveyed employees (n=2,400) and mapped pain points. I owned the entire project from concept to launch.  
2. **Dive Deep & Bias for Action:** Using data from HRIS and Google Maps, I identified optimal walking routes within a 5‑mile radius of each office cluster. I built an internal “Trail Buddy” Slack bot (AWS Lambda + DynamoDB) that suggested daily walks, logged steps via Fitbit API, and rewarded participants with company swag.  
3. **Invent & Simplify:** The bot ran on AWS Fargate, eliminating server maintenance; data persisted in Amazon RDS for auditability.  
4. **Deliver Results:** Over six months, participation rose to 48 % of employees (≈1,150 users). Absenteeism dropped by 8 %, and productivity metrics improved by 5 % (measured via sprint velocity). The program cost <$2,000 annually versus a projected $15,000 in lost labor.

**Result:**  
Leadership approved scaling the initiative company‑wide. I learned that small, data‑driven nudges can create measurable business value while fostering employee well‑being—an outcome that aligns with Amazon’s “Customer Obsession” and “Ownership” principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
