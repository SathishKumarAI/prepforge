---
qid: ing_d314b72248__aws__local
question: 'Explain: Case Study 08 - AI Meeting Assistant (Transcription, Notes, Action
  Items)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:59-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build an *AI Meeting Assistant* that transcribed audio, auto‑generated meeting notes, and surfaced action items for a SaaS client whose sales teams ran > 2000 calls/month.

**Action**  
1. **Architecture** – S3 bucket receives raw audio → **AWS Transcribe** (on‑demand) → Lambda parses transcript and stores it in DynamoDB.  
2. **NLP Layer** – A SageMaker endpoint fine‑tuned on meeting logs extracts *action items* and sentiment, feeding results back to a Step Functions orchestrator that writes a concise note to an S3 “notes” bucket and publishes a Slack webhook via SNS.  
3. **Scalability/Availability** – Transcribe is region‑level; Lambda auto‑scales with concurrency limits; Step Functions retries on failure. All services are in an isolated VPC for security.  
4. **Cost Control** – We batch 15 min chunks, reducing Transcribe usage by 35 %. SageMaker endpoint runs only during active calls, yielding $0.12/hr vs a reserved instance at $1.00/hr.

**Result**  
- Accuracy: 92 % correct action‑item extraction (vs 60 % manual).  
- Adoption: 85 % of sales reps used the assistant in month 2; meeting minutes reduced by 45 min per call.  
- ROI: $120k annual savings from time‑savings alone.

**Leadership Principles**  
*Customer Obsession*: built a tool that cut rep downtime and increased win rates.  
*Ownership & Dive Deep*: I drove the full stack, iterated on model accuracy, and quantified every improvement.  

**Bar‑raiser takeaway** – I showed measurable ownership (metrics), deep technical depth (service choices, trade‑offs), and continuous learning from pilot failures (model drift mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
