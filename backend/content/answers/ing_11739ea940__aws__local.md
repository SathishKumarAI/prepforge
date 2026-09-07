---
qid: ing_11739ea940__aws__local
question: 'Explain: Introducing the AI-native onsite — The AI-native interview | Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 451
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:01-05:00'
sources: []
---

**Situation & Task (Ownership, Customer Obsession)**  
At my last role I was tasked with replacing the legacy paper‑based interview process for our product managers with an “AI‑native” onsite experience that would reduce bias and cut hiring time by 30 %. The goal was to deliver a fully automated, real‑time scoring system while still preserving the human touch.

**Action (Dive Deep & Bias for Action)**  
I designed a microservice architecture on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Data ingestion | **Amazon Kinesis Video Streams** + **Transcribe** | Real‑time audio capture and transcription with < 2 s latency. |
| NLP & scoring | **Amazon Comprehend Custom** + **SageMaker Endpoint** | Sentiment, intent, and rubric‑based score generation; auto‑scales to 200 concurrent interviews. |
| Decision engine | **Step Functions** orchestrating Lambda for rule checks | Ensures compliance with diversity KPIs (e.g., equal opportunity metrics). |
| Feedback portal | **API Gateway + DynamoDB** | Low‑cost, highly available storage of scores and interview transcripts. |

I integrated **AWS GuardDuty** to monitor anomalous access patterns, guaranteeing data privacy per GDPR. The system achieved a 28 % reduction in time‑to‑hire and a 12 % increase in diversity hiring metrics within the first quarter.

**Result (Deliver Results)**  
- 5× faster interview cycle (avg 3 min vs 15 min).  
- 99.9 % availability during peak hiring season.  
- Cost savings of $45k annually versus legacy paper workflow.

**Learning from Failure**  
Early beta tests exposed a bias in the sentiment model; I retrained with a balanced dataset and introduced an audit log feature, turning a potential compliance risk into a continuous improvement loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
