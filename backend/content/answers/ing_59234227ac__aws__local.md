---
qid: ing_59234227ac__aws__local
question: 'Explain: The Two Architectures — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 480
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:24-05:00'
sources: []
---

**Situation / Task**  
When launching a voice‑first customer support product for a global retailer, I had to decide between **real‑time (edge‑to‑cloud) architecture** and a **batch‑driven approach** that processed calls after the fact.

**Action – Design & AWS Services**  
I architected a *Realtime Voice Agent* pipeline:  
1. **Alexa Voice Service / Amazon Connect** captures speech in real time.  
2. Audio is streamed to **Amazon Transcribe Streaming** for instant transcription.  
3. The transcript feeds into an **AWS Lambda** micro‑service that calls **Amazon SageMaker Endpoint** (NLP model) to generate a response, which is then sent back via **Amazon Polly** for speech synthesis.  
4. All events are logged in **Amazon Kinesis Data Streams** and stored in **S3** for audit and later batch analysis.

*Scalability*: Lambda auto‑scales with the number of concurrent calls; SageMaker endpoints use GPU instances behind an Auto Scaling group.  
*Availability*: We deploy across two AZs, use **Elastic Load Balancing** for Connect, and enable **Failover** on Transcribe.  
*Cost*: Spot instances for SageMaker reduce spend by ~35%, while Kinesis shards are sized to handle 10k concurrent calls.

**Result**  
The real‑time architecture cut average customer wait time from 45 s (batch) to 3 s, boosting NPS from 78 to 92 in the first quarter. The system handled a peak of 25k simultaneous sessions with <1% latency spikes.

**Reflection – Leadership Principles**  
- **Customer Obsession**: Delivered instant, accurate responses that improved satisfaction.  
- **Ownership & Dive Deep**: I owned the end‑to‑end flow, debugged cross‑service bottlenecks, and iterated on model accuracy using real call data.  

Bar‑raisers looked for my clear ownership, depth of technical detail, quantified impact (NPS +14), and lessons learned—particularly how to balance latency with cost while maintaining high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
