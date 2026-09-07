---
qid: ing_c6dfa1c894__aws__local
question: 'Explain: 25 Must-Do System Design Problems for Tech Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:52:24-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation & Task** – While preparing for a senior ML role at AWS, I needed a systematic way to gauge interview readiness. The goal: create a *25‑problem playbook* that covers core ML system design concepts and maps them to real‑world AWS services.  
>   
> **Action** – I first identified the top Leadership Principles: **Customer Obsession** (ensure solutions meet user needs) and **Dive Deep** (understand every layer). Then, for each problem I drafted a concise spec, outlined data pipelines, model training loops, inference latency targets, and fault‑tolerance strategies.  
>   
> 1. *Real‑time recommendation engine* – S3 + Glue → SageMaker training → Lambda edge inference.  
> 2. *Fraud detection at scale* – Kinesis Data Streams → DynamoDB TTL for stateful rules, Batch for periodic re‑training.  
> 3. *Auto‑ML platform* – Step Functions orchestrate hyper‑parameter search on Spot instances; results in S3 + Athena dashboards.  
>   
> For every case I added: **metrics** (e.g., 99th‑percentile latency < 50 ms, cost per inference <$0.0001), **scalability** (horizontal autoscaling via ECS/EKS), and **cost trade‑offs** (Spot vs On‑Demand).  
>   
> **Result** – The playbook reduced my interview prep time by 60 % and helped me land a role at AWS; I later authored an internal blog that was read by 4,200 engineers.  
>   
> **Bar‑raiser notes** – They look for clear ownership (I built the entire framework), depth (dive deep into each service’s pros/cons), quantified impact (time saved, cost metrics), and a lesson learned: always start with customer pain points before picking a technical stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
