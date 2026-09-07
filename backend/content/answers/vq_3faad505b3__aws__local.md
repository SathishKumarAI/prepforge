---
qid: vq_3faad505b3__aws__local
question: How does the weather affect your mood?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 405
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:48:01-05:00'
sources: []
---

**Situation & Task**  
During my senior thesis I noticed a strong anecdotal link between local weather patterns and student productivity on campus. My goal was to validate this hypothesis, quantify the impact, and build a lightweight dashboard that could help campus planners schedule events for optimal attendance.

**Action**  
I owned the project end‑to‑end:  
* Collected 6 months of data—real‑time METAR weather feeds (via **AWS IoT Core**) and daily mood surveys from 1,200 students.  
* Built an ETL pipeline on **AWS Glue** to cleanse and join the datasets in a Redshift cluster.  
* Developed a predictive model in SageMaker that achieved an R² of 0.68 for mood vs. temperature/precipitation.  
* Deployed the solution with **Lambda** + **API Gateway** for low‑latency queries, and visualized results on a React app hosted in S3+CloudFront (99.9 % availability).  

**Result**  
The dashboard was adopted by the student union; event attendance rose 27 % during “high‑mood” windows, and campus coffee sales increased 15 %. The model’s precision also helped reduce unscheduled study‑room closures by 18 %.

**Reflection & Learning**  
I learned that *Customer Obsession* means listening to the end user—in this case, students—while *Dive Deep* required me to build a scalable data pipeline from scratch. I’ll apply these lessons to any AWS service I design: start with clear metrics, iterate fast, and always measure impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
