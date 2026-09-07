---
qid: ing_9fd77e8fe3__aws__local
question: 'Explain: Motivation — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 541
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:06-05:00'
sources: []
---

**Motivation – “GitHub – donnemartin/system-design-primer”**

*Leadership Principles:* **Customer Obsession** & **Ownership**  
*Behavioral (STAR):*  
> **S**: While building a new ML‑powered recommendation engine, I realized our data ingestion pipeline was the single bottleneck.  
> **T**: Reduce end‑to‑end latency from 12 s to <2 s so users see real‑time suggestions.  
> **A**: I re‑architected the pipeline using **AWS Kinesis Data Streams** for ingestion, **Lambda** for stateless transformation, and **DynamoDB** with TTL for near‑real‑time caching. I also added a **SageMaker endpoint** with auto‑scaling to serve predictions.  
> **R**: Latency dropped 83 % (12 s → 2.1 s). Throughput increased from 500 req/s to 5,000 req/s, and cost per request fell by 40 %.  

*Technical/System:*  
- **Requirements:** Low‑latency predictions for millions of users, fault tolerance, and minimal operational overhead.  
- **Design Choices:**  
  - *Kinesis* → high‑throughput, distributed ingestion; *Lambda* → event‑driven processing without server management.  
  - *DynamoDB* with on‑demand capacity ensures 99.9 % availability and auto‑scales with traffic spikes.  
  - *SageMaker Endpoint* with **Multi‑Model Serving** reduces deployment costs by sharing infrastructure across models.  
- **Scalability:** Each component scales independently; Kinesis shards grow with data volume, Lambda concurrency scales automatically, DynamoDB partitions distribute load.  
- **Availability & Cost Trade‑offs:** Choosing on‑demand over provisioned capacity trades a slight price premium for zero provisioning risk and instant scaling—critical for unpredictable ML workloads.  

*Bar‑raiser Lens:*  
- Demonstrated **ownership** by taking end‑to‑end responsibility from ingestion to inference.  
- Showed **deep dive** through measurable latency reductions and cost savings.  
- Quantified impact with clear metrics (83 % latency drop, 40 % cost reduction).  
- Learned from initial failure of a monolithic batch system; pivoted to micro‑services for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
