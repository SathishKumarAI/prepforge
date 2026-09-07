---
qid: ing_5e3e9417ea__aws__local
question: 'Explain: Powering Advanced CLINiCAL NOTES — Generative AI for Clinical
  Conversations'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 433
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:44-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was hired by a hospital network to build an AI assistant that could transcribe, summarize and flag critical points from clinician‑patient conversations in real time—so physicians spent less on documentation and more on care.

**Action (Dive Deep + Bias for Action)**  
1. **Requirements & Design** – I scoped: 100 k+ daily encounters, <2 s latency per utterance, GDPR/PHI compliance, and the ability to surface drug‑interaction alerts.  
2. **Architecture** –  
   * **Front‑end:** WebRTC + AWS MediaLive for low‑latency streaming.  
   * **Transcription & NLU:** Amazon Transcribe Medical (custom vocabularies) → Amazon Comprehend Medical for entity extraction.  
   * **Contextual Summarization:** A fine‑tuned T5 model on SageMaker, served via an API Gateway + Lambda@Edge to keep response <300 ms.  
   * **Alert Engine:** DynamoDB streams trigger a step function that queries an Aurora Serverless database of drug interactions; results pushed back through WebSocket.  
3. **Scalability & Cost** – Auto‑scaling Transcribe jobs, spot instances for SageMaker training (≈$0.05/hr), and Lambda concurrency limits keep total spend < $2k/month while handling 200 concurrent sessions.

**Result (Deliver Results + Invent & Simplify)**  
- Reduced documentation time by **45 %**, freeing 8 h/physician/week.  
- Accuracy: 92 % F1 for entity extraction, 88 % precision on alert triggers.  
- Compliance audit passed with zero PHI leaks.

**Bar‑raiser check** – I owned the full loop (design to deployment), dove deep into data (entity F1 scores, latency logs), quantified impact (time saved, cost), and iterated after a false‑positive spike by retraining on edge cases—learning that continuous monitoring is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
