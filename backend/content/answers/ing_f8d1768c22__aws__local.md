---
qid: ing_f8d1768c22__aws__local
question: 'Explain: Step 5: Tradeoffs and Extensions — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 474
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:04-05:00'
sources: []
---

**Step 5: Trade‑offs & Extensions – How to Prep for the System Design Interview**

*Situation:* I was preparing a data‑pipeline interview for an ML platform role at Amazon.  
*Task:* Show that I could balance cost, latency, and accuracy while extending the design for future growth.  

*Action:*  
1. **Define clear trade‑offs** – I quantified each choice:  
   * • S3 vs. EFS (storage cost $0.023/GB‑month vs. higher throughput).  
   * • Batch inference on SageMaker vs. real‑time Lambda (latency 100 ms vs. 10 s, cost $0.20 per 1K requests).  
2. **Sketch extensions** – added a “model‑monitoring” microservice using CloudWatch + Athena to auto‑trigger retraining when drift >5%.  
3. **AWS stack & reasoning** –  
   * S3 for raw data (durability, low cost).  
   * Glue/EMR for ETL (scalable, pay‑per‑job).  
   * SageMaker Pipelines for CI/CD of models (auto‑rollback on failure).  
   * DynamoDB for feature store (high availability, 99.999 % SLA).  
4. **Scalability & cost** – calculated that the pipeline could process 10 M records/day with <15 % variance in spend, and a 50 % reduction in inference cost by batching predictions to 1K per job.

*Result:* The interview panel praised my *Ownership* (clear ownership of each component) and *Dive Deep* (exact numbers for trade‑offs). I landed the role, and within three months, the platform reduced inference spend by **32 %** while maintaining <10 ms latency for 95 % of requests.

> **Bar‑raiser cues:** depth of cost/latency analysis, concrete metrics, clear ownership, and a learning loop from past failures (e.g., previous project over‑provisioned GPU instances).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
