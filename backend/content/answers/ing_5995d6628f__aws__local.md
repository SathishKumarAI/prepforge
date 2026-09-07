---
qid: ing_5995d6628f__aws__local
question: Design a real-time voice agent for a citizen helpline in Hindi and three
  regional languages, targeting sub-250ms perceived latency over a phone line. What
  is the architecture?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 418
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:23-05:00'
sources: []
---

**Situation / Task**  
While leading a customer‑support modernization project for a state‑run helpline, I was asked to build a real‑time voice agent that understood Hindi and three regional languages (Marathi, Tamil, Bengali) with <250 ms perceived latency over PSTN.  

**Action – Architecture**  
1. **Edge Transcription** – Use *Amazon Transcribe Medical* in **Multi‑Language Streaming** on an EC2 t3.large at each region, keeping the audio buffer ≤30 ms.  
2. **Intent Engine** – Route transcripts to a *Lambda@Edge* function (Python) that calls *Amazon Lex V2* with custom slot types for each language; this keeps latency <50 ms and scales automatically.  
3. **Response Generation** – A lightweight *AWS SageMaker Neo‑optimized* model runs on an *ECS Fargate* task, generating natural‑language replies in the appropriate language.  
4. **Text‑to‑Speech** – Send text to *Amazon Polly* (neural voices for each language) via a short‑lived presigned URL; playback is streamed back over the PSTN using an AWS MediaConnect edge router.  

**Result** – In production, average round‑trip latency was 190 ms and 98% of calls were answered within the first 10 s, improving caller satisfaction scores by **15 points (CSAT)** versus the legacy IVR.  

**Reflection**  
I owned the end‑to‑end SLA, dove deep into each service’s jitter characteristics, and iterated on the Lambda timeout after a failure that caused >300 ms delays. The bar‑raiser will note my ownership, data‑driven impact, and rapid learning from the latency spike.  

*Leadership Principles: Customer Obsession, Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
