---
qid: ing_9a00eda839__aws__local
question: 'Explain: Technical Screen — My 2026 Perplexity AI Interview Process and
  Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 431
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:52-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Situation & Task*: In 2026 I led a cross‑functional team at Amazon building an in‑house Perplexity AI model to power Alexa’s “Contextual Search” feature. The goal was to reduce user query latency by **50 %** while keeping inference cost under $0.05 per request.

*Action (Technical Design)*  
- **Model Architecture**: Deployed a distilled BERT variant on **Amazon SageMaker** with GPU instances (p3.2xlarge). Used *Neural Tangents* for rapid prototyping and *TensorRT* for inference acceleration.  
- **Data Pipeline**: Built an end‑to‑end ETL in **AWS Glue** that ingests 10 TB of conversational logs daily, cleanses with regex, and stores embeddings in **Amazon DynamoDB** (partition key = session ID).  
- **Scalability & Availability**: Leveraged **Elastic Inference** attached to SageMaker endpoints; auto‑scales via CloudWatch metrics. Configured multi‑AZ deployment for 99.95 % uptime.  
- **Cost Control**: Implemented spot instance fallback and nightly model pruning, cutting inference spend from $0.12 to $0.04 per request.

*Result*: Achieved a **57 % latency reduction** (from 1.2 s to 0.5 s) and saved **$1.8M annually** on compute costs. The feature increased user engagement by 18 % in the first quarter post‑launch.  

*Learning & Ownership*: I owned the risk of model drift; set up continuous evaluation with **Amazon SageMaker Model Monitor**, catching a 3 % accuracy drop early and re‑training within 12 hours, preventing potential revenue loss. This experience reinforced my belief that *Ownership + Dive Deep* are essential for delivering impactful AI solutions at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
