---
qid: ing_21031b778f__aws__local
question: 'Explain: Logistics — Stanford CS 224N | Natural Language Processing with
  Deep Learning'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 415
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:00-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional team to build an NLP pipeline for the new “Logistics – Stanford CS 224N” course, which required ingesting 2 TB of lecture transcripts and generating searchable topic embeddings in real time. The goal was to reduce students’ search time by 70% while keeping costs under $5k/month.

**Action**  
*Ownership & Dive Deep*: I scoped the data flow (S3 ingestion → Glue ETL → SageMaker inference) and built a modular architecture.  
- **Data Ingestion**: S3 + Lambda triggers; ensured idempotent writes with DynamoDB checkpoints.  
- **Pre‑processing**: AWS Glue jobs tokenized text, removed stop words, and stored 512‑dim vectors in Amazon Neptune (graph) for semantic queries.  
- **Inference**: Trained a BERT‑based model on SageMaker, deployed as an endpoint behind API Gateway with autoscaling policies tuned to 99th‑percentile latency <200 ms.  
- **Cost Control**: Spot instances + reserved capacity; leveraged S3 Intelligent Tiering for infrequent access.  

**Result**  
Search latency dropped from 1.8 s to 0.18 s (90% reduction). Student satisfaction rose from 78% to 93%. Monthly spend was $4,200—$800 below target. I documented the architecture in Confluence and presented a “lessons learned” deck that highlighted trade‑offs between Neptune vs DynamoDB for graph queries.

**Bar‑raiser cues**  
- Demonstrated *ownership* by driving end‑to‑end delivery.  
- Showed *dive deep* through specific service choices, cost models, and performance metrics.  
- Quantified impact (latency & satisfaction).  
- Learned from a failed initial attempt that used plain RDS for embeddings—identified scalability bottleneck and pivoted to Neptune.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
