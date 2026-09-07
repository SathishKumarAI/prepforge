---
qid: ing_2dd92a3d59__aws__local
question: 'Explain: Over here I''ve got this text file — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:58-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to build a recommendation engine that classifies the “Python Full Course for Beginners” text file into topics and suggests related courses. The goal was to increase user engagement by 20 % on our e‑learning platform.

**Action (A)**  
1. **Data ingestion & preprocessing** – I used **Amazon S3** to store raw transcripts, then an **AWS Glue** crawler to catalog the files in a data lake.  
2. **Feature extraction** – A **Lambda** function ran *spaCy* to generate TF‑IDF vectors; results were written back to S3 and indexed in **Elasticsearch Service (OpenSearch)** for fast similarity search.  
3. **Model training** – I spun up an **Amazon SageMaker Processing job** on a GPU instance, training a lightweight BERT fine‑tuned model with the Hugging Face library. The model was evaluated against a held‑out 10 % split; we achieved 87 % F1 for topic classification.  
4. **Deployment** – The trained model was deployed to a **SageMaker Endpoint** behind an **Application Load Balancer**. API calls are routed through **API Gateway**, and usage is throttled with **WAF** to protect against abuse.

**Result (R)**  
- Latency < 200 ms per request, meeting SLA.  
- Cost‑per‑month $1.2k vs the previous $3.5k manual pipeline.  
- After launch, click‑through on recommended courses rose by **23 %**, exceeding the target.

**Leadership Principles Highlighted**  
- *Ownership*: I led the end‑to‑end pipeline and handled production incidents.  
- *Dive Deep*: I profiled GPU utilization to optimize training time from 12h to 4h.  

*Bar‑raiser cues:* Demonstrated measurable impact, depth in design choices (SageMaker vs EC2), and lessons learned—iteratively reduced inference cost by moving to **TensorRT** after initial rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
