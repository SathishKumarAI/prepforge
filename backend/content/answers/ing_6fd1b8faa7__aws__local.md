---
qid: ing_6fd1b8faa7__aws__local
question: I read this book. Do you have more? — The Hundred-Page Machine Learning
  Book by Andriy Burkov
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 585
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:46-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** A recruiter asked me if I’d read *The Hundred‑Page Machine Learning Book* and wanted more resources that would deepen my hands‑on skills for a data‑science role at AWS.  
> 
> **Task:** Deliver a concise, actionable reading list that aligns with Amazon’s *Customer Obsession* (help the customer quickly gain value) and *Ownership* (take initiative to build a personal knowledge pipeline).  
> 
> **Action:** I mapped each book to concrete use cases in AWS ML services and quantified the expected learning curve.  
> 
> | Book | Core Focus | AWS Service Link | Why It Adds Value | Time to Master |
> |------|------------|------------------|-------------------|----------------|
> | *Hands‑On Machine Learning with Scikit‑Learn, Keras & TensorFlow* (Aurélien Géron) | End‑to‑end pipelines, deep learning basics | `AWS SageMaker`, `ECR` | Builds the same code you’ll run on SageMaker; 1‑week sprint to replicate a notebook in a managed endpoint. | 5 days |
> | *Deep Learning with Python* (François Chollet) | CNNs, transfer learning | `SageMaker JumpStart`, `Elastic Inference` | Demonstrates model compression for cost‑efficient inference – directly applies to our “cost‑per‑inference” KPI. | 7 days |
> | *Feature Engineering for Machine Learning* (Alice Zheng) | Feature pipelines & data prep | `Glue`, `Athena` | Teaches how to automate ETL into a lakehouse, reducing data prep time by ~30 %. | 4 days |
> | *Designing Data-Intensive Applications* (Martin Kleppmann) | System‑level ML infra, streaming | `Kinesis`, `Kafka on MSK`, `Glue Streaming` | Provides architectural patterns for real‑time inference at scale; reduces latency from 200 ms to <30 ms in a pilot. | 6 days |
> 
> **Result:** Within two weeks I completed the curated list and built a prototype pipeline that ingested streaming logs, performed feature engineering on Glue, trained a model on SageMaker, and deployed it with Elastic Inference—cutting inference cost by 25 % while maintaining <30 ms latency.  
> 
> **Reflection (Bar‑raiser lens):** I took ownership of the end‑to‑end flow, dove deep into each service’s pricing model, quantified impact on cost/latency, and iterated after a failed first deployment that crashed due to insufficient batch size—learning that proper resource sizing is as critical as algorithm choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
