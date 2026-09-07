---
qid: ing_431123142b__faang__local
question: 'Explain: Privacy, consent, retention — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 417
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:05-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking how a *meeting‑assistant* (e.g., transcript/summary bot) handles **privacy**, **consent**, and **data retention**.  
Assumptions:  
- All participants are in the same jurisdiction (GDPR/CCPA).  
- The assistant records audio/video, transcribes, stores data temporarily, then deletes or anonymizes it.  

**2️⃣ Approach**  
1. *Consent collection* → explicit opt‑in before recording.  
2. *Privacy protection* → on‑device encryption, minimal data exposure to cloud.  
3. *Retention policy* → automatic purge after a configurable window (e.g., 30 days).  

**3️⃣ Depth**  
- **Consent**: Show UI prompt with clear “Record & Transcribe” checkbox; store signed consent in metadata.  
- **Privacy**: Encrypt payloads at rest and in transit (AES‑256, TLS 1.3). Use differential privacy during model training if logs are used for improvement.  
- **Retention**: Implement a TTL on storage buckets; use immutable logs only for audit trails. After TTL, trigger secure wipe (overwrite + delete).  

**4️⃣ Edge Cases**  
- Participants forget to opt‑in → abort recording.  
- Legal subpoenas → keep immutable audit trail separate from user data.  
- GDPR “right to be forgotten” → provide API to purge all traces of a participant’s data.  

**5️⃣ Optimize & Communicate**  
Explain trade‑offs: on‑device processing reduces latency but limits model size; cloud gives richer models but requires robust encryption. Emphasize that the design meets compliance, respects user autonomy, and scales by using serverless storage with automatic purge hooks.  

> *“By combining explicit opt‑in, end‑to‑end encryption, and a clear TTL policy, we safeguard privacy while delivering real‑time meeting insights.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
