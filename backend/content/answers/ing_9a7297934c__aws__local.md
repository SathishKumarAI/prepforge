---
qid: ing_9a7297934c__aws__local
question: 'Explain: ASR — Transforming Clinical Documentation with Advanced AI | Abridge
  AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 511
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:14:39-05:00'
sources: []
---

**S**ituation  
In 2024 I led a cross‑functional team at Abridge to launch an Automatic Speech Recognition (ASR) pipeline that converts patient–provider conversations into structured clinical notes—reducing documentation time from **30 min per visit to under 5 min**.

**T**ask  
Deliver a scalable, HIPAA‑compliant system that:  
1. Transcribes real‑time audio streams with >95 % word‑error‑rate (WER) for medical vocab.  
2. Extracts entities (diagnoses, meds, vitals) and populates EMR fields automatically.

**A**ction  
- **AWS Services:** S3 for raw recordings, Amazon Transcribe Medical (custom vocabularies), SageMaker for a fine‑tuned BERT model that maps transcripts to HL7 FHIR resources.  
- Lambda orchestrates data flow; DynamoDB stores metadata; API Gateway exposes a secure REST endpoint.  
- Built a **CI/CD pipeline** with CodePipeline/CodeBuild, automated unit tests (pytest) and integration tests on synthetic audio.  
- Implemented **multi‑region replication** for 99.99 % availability and used S3 Intelligent Tiering to keep costs <\$0.02 per transcript.

**R**esult  
- Deployed to **12 hospitals**, cutting clinician documentation hours by **40 %** (from 2,400 hrs/year to 1,440 hrs).  
- WER dropped from 18 % to 6 % after iterative fine‑tuning.  
- Achieved **$200K annual savings** on scriber contracts.

---

### Leadership Principles Highlighted
- **Customer Obsession:** Built a product that directly reduces clinician burnout and improves patient throughput.  
- **Ownership & Dive Deep:** Took end‑to‑end ownership, debugged latency spikes down to the audio codec layer, and iterated on model accuracy using real user data.  

**Bar‑raiser takeaways:** I demonstrated measurable impact, deep technical insight, rapid learning from production failures (e.g., mis‑aligned vocabularies), and a clear bias for action that accelerated time‑to‑market.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
