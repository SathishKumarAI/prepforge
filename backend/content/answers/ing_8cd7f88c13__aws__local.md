---
qid: ing_8cd7f88c13__aws__local
question: 'Explain: Speech and Audio — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 432
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:28-05:00'
sources: []
---

**Speech & Audio – LLM Papers Cheatsheet**

*Leadership Principles:* **Customer Obsession** + **Dive Deep**  
*Behavioral (STAR):*  
- **Situation:** Our speech‑to‑text service was lagging 3× behind competitors, hurting customer retention by 12%.  
- **Task:** Reduce inference latency to <200 ms while maintaining >99.5% accuracy on noisy inputs.  
- **Action:** Built a distributed pipeline in AWS:  
  - *Transcribe* → **Amazon Transcribe Medical** (custom vocab) for pre‑processing, then  
  - *Feature extraction* via **AWS Lambda** + **ECS Fargate** containers running Whisper‑XL;  
  - *Inference* on **SageMaker Neo** models compiled to run on **Graviton3** instances for cost‑effective CPU inference.  
  - Employed **Amazon Kinesis Data Streams** for real‑time audio ingestion and **DynamoDB** for low‑latency state tracking.  
- **Result:** Latency dropped to 140 ms (−53%), accuracy improved by 2%, and operational cost fell 27% YoY, boosting churn rate from 12% to <5%.

*Technical Insight:*  
- *Scalability*: Auto‑scaling Fargate tasks + Kinesis shards scale with traffic spikes.  
- *Availability*: Multi‑AZ deployment, active‑passive failover for Transcribe endpoints.  
- *Cost*: Leveraged Spot instances and SageMaker Neo to keep inference under $0.02 per request.  

*Bar‑raiser notes:* Demonstrated ownership (owning the full pipeline), deep dive into model optimization, quantified impact, and a clear lesson: early profiling prevented costly over‑provisioning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
