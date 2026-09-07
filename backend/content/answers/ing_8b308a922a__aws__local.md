---
qid: ing_8b308a922a__aws__local
question: 'Explain: Audio: ASR, TTS, voice agents — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 510
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:29-05:00'
sources: []
---

**Situation / Task**  
While leading the Voice & Speech team at my previous company, we were asked by product management to build a **multimodal AI assistant** that could understand spoken commands (ASR), generate natural responses (TTS), and react in real‑time across mobile and smart‑home devices. The goal was to reduce user onboarding time by 40 % and increase monthly active sessions from 1 M to 3 M.

**Action**  
*Customer Obsession & Ownership* – I drove a cross‑functional squad (ML, devops, UX) and owned the full pipeline:  
1. **ASR**: Fine‑tuned an AWS Whisper model on 200 k hours of domain data, deploying it in a Lambda@Edge layer for latency <120 ms.  
2. **TTS**: Built a neural TTS service using Amazon Polly with custom lexicons; added prosody control via a lightweight inference container on ECS Fargate.  
3. **Voice Agent Logic**: Implemented a state‑machine dialogue manager in AWS Step Functions, orchestrating Lambda calls and DynamoDB for context persistence.  
4. **Multimodal Fusion** – Integrated text input (Amazon Comprehend) and visual cues (Rekognition) to enrich intent detection.  

*Dive Deep & Bias for Action* – I added a monitoring stack (CloudWatch + X-Ray) that surfaced latency spikes; this led us to pre‑warm Lambda functions during peak hours, cutting 30 % of cold‑start costs.

**Result**  
- Achieved **90 % ASR accuracy** and **95 % TTS intelligibility** per user‑study.  
- Reduced onboarding time from 3 min to 45 s (a 85 % drop).  
- User engagement grew by **2.5×**, hitting the 3 M MAU target within 4 months.  
- Operational cost for the entire stack was $12k/month, a 25 % reduction versus our legacy on‑prem solution.

**Learning & Bar‑raiser cues**  
I documented failures (initial cold‑start spikes) and shared root‑cause analyses with the team, reinforcing a culture of continuous improvement. The result demonstrates ownership, deep technical trade‑offs, and measurable impact—key signals for a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
