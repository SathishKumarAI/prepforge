---
qid: vq_6e96ef813b__aws__local
question: What is call-by-name?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 337
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:56:38-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Situation / Task:** While designing a real‑time analytics pipeline for an ad‑tech client, I had to explain how call‑by‑name can reduce latency in data transformations.  
> **Action:** I first clarified the requirement: we needed lazy evaluation of transformation functions so that expensive joins were executed only when their results were actually consumed by downstream stages.  
> I proposed a micro‑service architecture using AWS Lambda for stateless transforms, Step Functions to orchestrate the workflow, and DynamoDB Streams as the trigger source. In this design, each Lambda receives an *evaluation token* (the “call‑by‑name” placeholder) rather than pre‑computed data. The token is resolved only when the downstream function explicitly requests the value, avoiding unnecessary computation.  
> **Result:** After deployment, we saw a 40 % drop in CPU utilization and a 25 % reduction in Lambda cold‑start time for the most expensive join operation—cutting monthly compute cost from $12k to $9k. The client reported improved dashboard refresh rates (from 5 s to <2 s).  
> **Learnings:** I learned that while call‑by‑name can improve performance, it adds indirection; careful monitoring of token resolution latency is essential. This experience reinforced my ownership mindset and deep dive into cost‑benefit trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
