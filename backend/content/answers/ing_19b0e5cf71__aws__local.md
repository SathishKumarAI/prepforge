---
qid: ing_19b0e5cf71__aws__local
question: 'Explain: Requirements — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 431
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:29-05:00'
sources: []
---

**Situation / Task**  
While leading a new product line for a SaaS firm, I was asked to build an AI‑powered Meeting Assistant that auto‑summarizes video calls, extracts action items, and schedules follow‑ups—an initiative critical for our $120 M revenue stream.

**Action (Design & Tech)**  
*Requirements:* 1) real‑time transcription, 2) NLP summarization, 3) calendar integration, 4) secure data handling.  
*Architecture:*  
- **Amazon Transcribe** → real‑time ASR.  
- **AWS Lambda + Amazon Comprehend** for entity extraction & intent classification.  
- **Amazon DynamoDB** (partitioned by meeting ID) stores transcripts and summaries; provisioned with on-demand capacity to auto‑scale.  
- **Amazon EventBridge** triggers a follow‑up email via **SES** once action items are identified.  
- All data encrypted in transit (TLS) and at rest (KMS).  

*Scalability:* Serverless stack scales automatically; cost ≈ $0.0004 per minute of transcription, < $1/meeting for summarization.  
*Availability:* 99.95% SLA via multi‑AZ Lambda and DynamoDB global tables.

**Result**  
After launch, adoption rose to 3,200 users in Q2 (30% YoY). Average meeting time reduced by **18 min** per user, translating to ~$2.4 M annual savings. System latency stayed < 5 s for 90th percentile transcripts.  

**Learnings & Ownership**  
I owned the end‑to‑end delivery, iterating on feedback loops with product and security teams (Dive Deep). The bar‑raiser’s focus was my ability to quantify impact, demonstrate ownership, and turn a complex AI workflow into a low‑cost, highly available service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
