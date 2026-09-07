---
qid: ing_bd554e02a9__aws__local
question: 'Our audio is a clinic room: two or three speakers, background noise, accents,
  and a vocabulary full of drug names. How would you build and improve the ASR for
  that?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 532
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:31-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In a clinical trial hub we needed real‑time transcription of multi‑speaker consults with heavy background noise and a specialized drug vocabulary. The goal was to deliver ≥ 95 % word‑error‑rate (WER) while keeping latency < 2 s for live dashboards.

**Action (Dive Deep & Ownership)**  
1. **Data pipeline** – recorded 200 h of anonymized sessions → stored in S3, auto‑tagged with speaker IDs via Amazon Transcribe’s speaker diarization.  
2. **Noise suppression** – applied AWS Elemental MediaConvert + custom Whisper‑based denoiser (Inference on SageMaker endpoints).  
3. **Accent & domain tuning** – fine‑tuned a Whisper base model on 50 h of accented audio, added a 5k‑term drug dictionary to the language model via Amazon Transcribe Medical’s custom vocab feature.  
4. **Real‑time inference** – deployed the tuned model as a Lambda‑fargate microservice behind an API Gateway; used CloudWatch metrics for latency and error rates.  
5. **Continuous learning loop** – every 24 h, mis‑recognized drug terms are auto‑flagged, added to the vocab, and retrained the model on SageMaker with incremental updates (≈ 2 h compute).  

**Result (Deliver Results)**  
- WER dropped from 18 % → **12 %** within two weeks.  
- Latency stabilized at **1.8 s** per transcript chunk.  
- Cost saved 30 % vs. on‑prem GPU inference by leveraging spot Fargate and S3 lifecycle policies.  

**Bar‑raiser takeaways**  
*Ownership*: I owned the full data‑to‑delivery loop, from ingestion to model retraining.  
*Dive Deep*: I quantified noise levels, accent frequency, and vocabulary impact; iterated until WER met SLA.  
*Learned from failure*: Initial models over‑fit on non‑clinical accents—adding diverse samples and a custom vocab fixed the drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
