---
qid: ing_053b54e57a__aws__local
question: 'Explain: Clarifying questions & assumptions — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 472
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:44-05:00'
sources: []
---

**Clarifying Questions & Assumptions – Content Moderation Pipeline**

*Customer Obsession + Dive Deep*

**Situation**  
When I joined the AI‑ops team at a video‑sharing startup, we needed to scale the content moderation pipeline from 10k videos/day to 1M+ while keeping false‑positive rates below 2%.  

**Task**  
First, I clarified scope: *What content types?* (video, audio, text captions) – I learned we had three tiers: user‑uploaded, community‑generated, and partner‑sourced. *What compliance windows?* – we needed a 30‑second SLA for “safe” videos, 5 min for flagged ones.

**Action**  
I designed an event‑driven microservice stack on AWS:
- **S3 + EventBridge** trigger ingestion.  
- **Lambda** (Python) to launch **Amazon Rekognition Video** and **Transcribe** jobs.  
- Results sent to **Step Functions** orchestrating a custom **OpenAI GPT‑4 fine‑tuned** model for context‑aware flagging.  
- Flagged items queued in **SQS**, processed by **ECS Fargate** workers that push decisions into **DynamoDB** and send alerts via **SNS**.

I added **CloudWatch metrics** (latency, error rate) and **X-Ray tracing** for deep diagnostics. To keep costs under $0.50/video, I batch Rekognition calls and leveraged spot instances for inference tasks.

**Result**  
We hit a 99.3% accuracy with <1.8% false positives, reduced SLA to 15 seconds on average, and cut moderation cost by 35% YoY.  

*Bar‑raiser focus:* ownership of end‑to‑end latency, depth in AWS service trade‑offs, quantified impact, and post‑mortem learning from a prior 30‑second outage that highlighted the need for fallback queues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
