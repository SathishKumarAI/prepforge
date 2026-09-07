---
qid: ing_50d650a993__aws__local
question: 'Explain: Roles & titles they hire — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 406
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:27:49-05:00'
sources: []
---

**Situation / Task**  
When Sarvam AI was scaling from a seed‑stage prototype to a production ML platform, I led the hiring strategy for the core data science and engineering team. The goal was to build a self‑service model serving pipeline that could handle 10 M inference requests/day with < 200 ms latency.

**Action**  
I anchored the process on **Ownership** and **Dive Deep**.  
1. *Role mapping*: Defined three key titles – Lead ML Engineer, Data Ops Specialist, and Production ML Scientist – each with clear ownership over data ingestion, model training, and deployment pipelines.  
2. *Technical depth*: Drafted a design that leveraged **Amazon SageMaker Pipelines**, **S3** for raw/feature stores, **Glue** for ETL, and **EKS** for inference serving. I benchmarked the latency‑cost trade‑off by running A/B tests on spot vs. on‑demand instances, reducing cost by 35% while keeping SLA < 200 ms.  
3. *Hiring criteria*: Created a rubric that scored candidates on: (a) real‑world model performance (> 95 F1 on production data), (b) architecture design under constraints, and (c) ability to iterate fast—measured by a 24‑hour prototype turnaround.

**Result**  
Within six months we onboarded 5 hires, cut inference cost from $0.15/request to $0.10/request, and achieved a 99.7 % uptime SLA. The team’s ownership culture led to a 40 % faster bug‑fix cycle.  

**Bar‑raiser takeaway** – I emphasized measurable impact, deep technical judgment, and an iterative learning loop, ensuring every new hire could immediately own a slice of the system and drive tangible results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
