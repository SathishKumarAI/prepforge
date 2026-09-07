---
qid: ing_d50f77934f__aws__local
question: 'Explain: Likely interviewer follow-ups — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 584
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:33-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“I’m going to walk you through a real project where I built a real‑time voice agent that handled 30k concurrent calls per day with < 200 ms latency.”*

---

### **Situation & Task**

At my last company, the support team was overwhelmed by inbound calls. We needed an automated voice assistant that could route, answer FAQs, and hand off to live agents only when necessary. The goal: reduce average handle time (AHT) by 40% while keeping cost < $0.05 per call.

### **Action**

| Step | Technical Design | AWS Services |
|------|------------------|--------------|
| 1️⃣ Voice ingestion | Amazon Connect + Amazon Lex for intent detection | Connect, Lex |
| 2️⃣ Real‑time audio processing | Lambda@Edge in front of S3 for on‑the‑fly transcription; use Amazon Transcribe Streaming | Lambda@Edge, Transcribe |
| 3️⃣ Context & state | DynamoDB Streams to maintain per‑session context (user ID, intent stack) | DynamoDB |
| 4️⃣ Decision engine | Step Functions orchestrate Lex → Lambda → Connect | Step Functions, SNS |
| 5️⃣ Scaling | Auto‑scaling on Lambda concurrency + Connect contact flow limits; use CDK for repeatable infra | CloudWatch, CDK |

**Dive deep:** I profiled each component with X-Ray, discovered that the Lex intent hit rate was only 72% due to background noise. I added a Noise Gate filter (WebRTC) and re‑trained the model on 20 k new utterances, boosting accuracy to 94%.

### **Result**

- AHT dropped from **7:30 min** to **4:10 min** (+43%).  
- Calls handled by the bot rose from 15% to **68%**, cutting live agent hours by **35,000 per month**.  
- Cost per call fell from **$0.12** to **$0.04** (≈ 66% savings).  

### **What a bar‑raiser would listen for**

- **Ownership:** I took full ownership of the voice pipeline, from design through A/B testing.  
- **Dive Deep:** Quantified the noise problem and fixed it with targeted model retraining.  
- **Quantified Impact:** Delivered clear, metric‑driven ROI (AHT, cost savings).  
- **Learning from Failure:** The initial low intent hit rate taught me to iterate quickly; I logged failures in CloudWatch and adjusted training data accordingly.

> *“This experience shows my Customer Obsession—making support faster for users—and Ownership—owning the entire end‑to‑end system.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
