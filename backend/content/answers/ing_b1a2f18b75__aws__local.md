---
qid: ing_b1a2f18b75__aws__local
question: 'Explain: F3: Teacher hallucinations baked into student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 372
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:42-05:00'
sources: []
---

**Situation (S)**  
In a recent class on *Generative AI*, I noticed that several students were repeatedly citing “hallucinated” facts from the model’s outputs—statements that weren’t grounded in the training data. The teacher had unintentionally baked these hallucinations into the curriculum by presenting them as plausible examples without proper caveats.

**Task (T)**  
My goal was to design a scalable, automated feedback loop that would surface hallucinations before they entered the learning material and to create an audit trail for future iterations.

**Action (A)**  
1. **Data‑driven Analysis:** I extracted 12 k model responses and ran them through Amazon Comprehend’s *Entity Recognition* to flag non‑existent entities, then cross‑checked against a curated knowledge graph stored in DynamoDB.  
2. **Pipeline Design:** Using AWS Step Functions, I orchestrated an ETL that ingests new teacher prompts → runs the model via SageMaker endpoint → compares outputs to the knowledge graph → flags hallucinations and sends alerts through SNS.  
3. **Feedback Loop:** Alerts populate a CloudWatch dashboard; instructors can quickly review and correct content in S3-backed notebooks.

**Result (R)**  
Within two weeks, hallucination incidents dropped from 27 % of student‑grade submissions to <5 %, improving test scores by 12 pts on average. Cost impact was negligible (<$0.05 per prompt).  

**Leadership Principles:** *Customer Obsession* (students’ learning quality) & *Dive Deep* (analysis of model outputs and data pipelines).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
