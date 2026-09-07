---
qid: vq_257f40c8e1__aws__local
question: What’s your favorite memory related to sports?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 385
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:43:22-05:00'
sources: []
---

**S – Situation:**  
During my senior year at university I was the captain of the varsity soccer team, which had been in last place for three seasons. Our coach asked me to design a pre‑match analytics system that would help us target our weaknesses.

**T – Task:**  
I needed to create a lightweight data pipeline that could ingest match footage, extract player heat maps and ball‑tracking statistics, then present actionable insights to the coaching staff—all within 48 hours before each game.

**A – Action:**  
- **Ownership & Bias for Action:** I took full ownership of the project, sketched an end‑to‑end architecture on paper (S3 + Lambda → SageMaker inference → DynamoDB → QuickSight dashboards).  
- **Dive Deep & Invent & Simplify:** Using AWS Rekognition and a custom YOLOv5 model, I built a Lambda function that processed 4K video in under 2 minutes. The pipeline cost <$0.02 per frame and ran on an EC2 spot fleet for scalability.  
- **Deliver Results:** By the next match we had heat‑map visualizations that highlighted our defensive gaps. We adjusted our formation accordingly, and the team won 3 of the next 5 games—up from a 20 % win rate.

**R – Result:**  
The initiative improved our season record from 1–9 to 4–6, a 200 % increase in wins. The system was later adopted by the university’s coaching staff for all sports teams, saving them $15K annually on manual analysis.  

*Key Amazon Leadership Principles:* **Ownership**, **Dive Deep**, **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
