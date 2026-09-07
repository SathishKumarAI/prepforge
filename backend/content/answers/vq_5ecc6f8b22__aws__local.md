---
qid: vq_5ecc6f8b22__aws__local
question: Have you ever taken an art class or workshop?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 407
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:34-05:00'
sources: []
---

**Situation (S)**  
During my senior year at university I volunteered to lead a campus “Digital Art for Social Impact” workshop. The goal was to teach 30 students how to create compelling data visualizations that could be used by local NGOs to advocate for climate‑action policies.

**Task (T)**  
I had to design the curriculum, secure resources, and deliver measurable learning outcomes while staying within a $2,000 budget.

**Action (A)**  
- **Customer Obsession & Ownership:** I interviewed five NGOs to understand their data needs, then mapped those requirements onto the workshop content.  
- **Dive Deep & Bias for Action:** Leveraged AWS services—Amazon S3 for raw datasets, Amazon QuickSight for interactive dashboards, and AWS Lambda to automate report generation. I built a reusable Jupyter‑Notebook template that students could run locally or on an EC2 Spot instance (cost <$0.02/hr).  
- **Invent & Simplify:** Created a “One‑Click Deploy” CloudFormation stack so participants could spin up their own QuickSight dashboards in minutes, eliminating manual setup delays.  
- **Deliver Results:** After the workshop, 28/30 students completed a capstone project; 22 projects were adopted by NGOs and led to a $150k grant proposal for community clean‑up initiatives.

**Result (R)**  
The initiative reduced students’ learning curve from an average of 12 hours of self‑study to just 6 hours, cut workshop cost per student by 60%, and directly supported external stakeholders—demonstrating measurable impact.  

*Bar‑raiser takeaway:* I showed end‑to‑end ownership, deep technical integration with AWS, quantified ROI for both students and NGOs, and reflected on a failure (initially mis‑estimated QuickSight licensing costs) that led to tighter budgeting in future events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
