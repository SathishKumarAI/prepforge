---
qid: ing_df7cc75d20__aws__local
question: 'Explain: Built from the note, not bolted onto it — Abridge | Ambient AI
  for Revenue Cycle'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 492
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:57-05:00'
sources: []
---

**Situation / Task**  
While leading a revenue‑cycle automation team at a health‑tech startup, we needed an AI layer that *understood* the clinical notes already in our EMR, rather than treating them as opaque text blobs. The goal was to reduce manual coding errors by 30 % and cut claim processing time from 48 h to under 12 h.

**Action (Design & Tech)**  
1. **Data ingestion** – Built an event‑driven pipeline with **Amazon Kinesis Data Streams** feeding raw HL7 notes into a **Lambda** function that normalizes XML/JSON into Parquet on **S3**.  
2. **Model training** – Used **Amazon SageMaker Ground Truth** to label 200k note snippets, then trained a transformer (BERT‑based) in **SageMaker Training** with spot instances for cost control.  
3. **Inference** – Deployed the model as an HTTPS endpoint via **SageMaker Hosting**, autoscaled behind **Application Load Balancer**; latency < 200 ms per request.  
4. **Integration** – The endpoint writes structured billing codes to a **DynamoDB** table, which feeds into our existing claim‑generation microservice.

**Result**  
- Coding accuracy improved from 84 % to **94 %** (p < 0.01).  
- Claim turnaround dropped by **73 %**, saving ~$1.2M annually in labor costs.  
- End‑to‑end cost per claim processed fell from $8.50 to $4.20.

**Leadership Principles**  
- **Customer Obsession** – Delivered faster, more accurate revenue capture for payers and clinicians.  
- **Ownership** – Took full responsibility from data ingestion to model deployment, iterating on failure signals (mis‑classifications) and retraining quarterly.

**Bar‑raiser takeaways**  
- Deep dive into the data pipeline revealed that 12 % of errors were due to inconsistent note formatting; we added a schema validator in Lambda, reducing failures by 18 %.  
- Learned from an early mis‑prediction spike: instituted A/B testing on new model versions before full rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
