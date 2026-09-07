---
qid: ing_bdf40dc632__aws__local
question: 'Explain: Latency Budget — Voice Ai Healthcare'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 461
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:32:51-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built a real‑time voice‑AI triage system for a telehealth platform used by 200k patients daily. The business required the entire “ask‑symptom → AI response” cycle to finish in < 1 s, or we risked losing patient trust and violating HIPAA latency SLAs.

**Action – Design & AWS Services**  
* **Latency Budget**: I broke the 1 s window into measurable slices—10 ms for STT (Amazon Transcribe), 200 ms for intent inference (AWS Lambda + SageMaker endpoint), 300 ms for policy lookup (DynamoDB, PartiQL), 150 ms for response synthesis (Polly), and 340 ms buffer.  
* **Scalable Architecture**:  
  * *Edge‑to‑cloud*: AWS IoT Greengrass on patient devices pre‑filters audio to reduce bandwidth.  
  * *Lambda@Edge* + API Gateway for low‑latency routing.  
  * *SageMaker RealTimeInference* with multi‑AZ deployment and provisioned concurrency.  
  * *DynamoDB Global Tables* for instant policy access worldwide.  
* **Cost & Availability**: Auto‑scaling Lambda + SageMaker reduced peak costs by 35 % while maintaining 99.999 % availability through cross‑region failover.

**Result**  
We achieved an end‑to‑end latency of 0.87 s (average) with a 99th percentile < 1.2 s, cutting patient drop‑off from 12 % to 3 %. The system processed 4× more concurrent sessions during peak hours without additional infra spend.

**Learning & Ownership**  
I instituted a “Latency Review” sprint that surfaced hidden bottlenecks; after the first iteration we reduced the STT cost by 22 % by switching to Whisper‑based inference. This showcases ownership, deep dive into metrics, and bias for action—core Amazon principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
