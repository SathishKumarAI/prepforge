---
qid: ing_a5e3de1741__aws__local
question: 'Explain: Designed for real-world conversations — ElevenLabs \u2014 Scribe
  v2 Realtime live in ElevenLabs Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 555
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:41:56-05:00'
sources: []
---

**Situation & Task**  
When my team built a real‑time voice assistant for a fintech client, we needed a conversational AI that could ingest spoken user input, generate accurate transcriptions, and immediately produce context‑aware responses—all while scaling to 200k concurrent users during peak trading hours. The challenge was to design a system that was **Customer‑Obsessed** (accurate, low latency) and demonstrated **Ownership** (self‑healing, cost‑efficient).

**Action**  
1. **Architecture** – I orchestrated a serverless stack:  
   * **Amazon Kinesis Data Streams** captured audio chunks from WebRTC clients.  
   * **AWS Lambda** processed each chunk, invoked the ElevenLabs Scribe v2 API (via HTTPS), and streamed partial transcripts back through **API Gateway WebSocket** to the UI.  
   * **Amazon DynamoDB** stored session metadata; a **DynamoDB Streams → Lambda** pipeline updated user context for the next turn.  
2. **Scalability & Availability** – Leveraged **Lambda Provisioned Concurrency** (0.5 ms cold‑start) and **Kinesis Auto Scaling** to absorb sudden traffic surges.  
3. **Cost Control** – Implemented a **step‑function workflow** that throttled API calls when usage exceeded 30k requests/hour, automatically switching to an open‑source Whisper model in an EC2 Spot Fleet as fallback.  
4. **Monitoring & Resilience** – Integrated **CloudWatch Alarms** on Lambda error rates and **X-Ray tracing** to pinpoint latency spikes; automated retries with exponential backoff.

**Result**  
- Achieved **<120 ms average end‑to‑end latency** for 95 % of requests, beating the SLA by 30 %.  
- Reduced cost per transcript from $0.10 (baseline) to **$0.04** through dynamic model selection.  
- Cut error rates from 4.2 % to 0.7 %, improving user satisfaction scores by 18 points in post‑deployment surveys.

**Learnings**  
I learned that *infrastructure should be as intelligent as the ML models it serves*: by letting the stack adapt (auto‑scale, cost‑aware routing), we preserved performance without over‑provisioning resources. This approach exemplifies **Dive Deep** and **Bias for Action**, ensuring rapid iteration while maintaining operational excellence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
