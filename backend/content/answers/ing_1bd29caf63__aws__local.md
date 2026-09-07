---
qid: ing_1bd29caf63__aws__local
question: 'Q: What is wrong with using MMLU to compare models for your use case?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 373
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:01-05:00'
sources: []
---

**Answer (Amazon Way)**  

> **Situation & Task** – I was leading a product team that needed to benchmark language models for an internal chatbot. We initially relied on MMLU (Massive Multitask Language Understanding) because it promised a “one‑size‑fits‑all” score.  
>   
> **Action** – First, I *dove deep* into the dataset: 57 tasks ranging from SAT to medical licensing exams. I discovered that our domain (legal contract drafting) never appears in MMLU, and many tasks are heavily weighted toward trivia rather than reasoning over structured documents. Using AWS SageMaker Experiments, I built a custom evaluation suite with 3 k real‑world contract clauses, scored by human reviewers, and compared the same models on that data.  
>   
> **Result** – The MMLU‑ranked model performed **12% worse** on our legal task than the model ranked lower overall. Deploying the new benchmark led to a 25 % reduction in post‑deployment support tickets (cost $70k/quarter). I documented this failure and shared it at our quarterly “Post‑mortem” session, reinforcing *Customer Obsession* and *Ownership*.  
>   
> **Technical note** – The evaluation pipeline runs on an EC2 spot fleet with SageMaker endpoints, costing <$0.10/hr per inference, and scales horizontally by adding workers via Auto Scaling Group.  

> **Bar‑raiser cue:** I showed ownership of the problem, deep analysis of data mismatch, quantified impact (ticket reduction), and a learning loop that corrected our benchmark strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
