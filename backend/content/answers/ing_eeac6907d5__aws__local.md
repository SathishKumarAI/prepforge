---
qid: ing_eeac6907d5__aws__local
question: 'Explain: Tier 2: ML Classification — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 544
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:26-05:00'
sources: []
---

**Situation (S)**  
I led a cross‑functional team to launch an in‑house content‑moderation pipeline for a video‑streaming platform that served > 5 M daily active users. The goal was to reduce the time from upload to safe‑to‑display from 48 h (manual review) to < 30 min while keeping false‑positive rates below 2 %.  

**Task (T)**  
Design and ship a Tier‑2 ML classifier that sits behind an initial rule‑based filter, catching subtle hate‑speech or graphic content that the first tier missed. The system had to scale to ~10 k uploads per minute, be highly available, and cost‑effective for our AWS budget.

**Action (A)**  
1. **Requirements & Architecture** – Chose a *serverless* microservice pattern:  
   * **API Gateway + Lambda** for ingestion;  
   * **S3** to store raw videos;  
   * **Amazon Rekognition Video** for key‑frame extraction;  
   * **Custom SageMaker endpoint** (GPU p2.xlarge) hosting a fine‑tuned BERT model (≈ 200M params).  
2. **Model & Training** – Trained on 3 M labeled clips from our moderation logs, using *smaller* token windows to keep inference < 200 ms per clip. Added an *active‑learning loop* where flagged content is re‑labelled by humans and fed back nightly.  
3. **Scalability & Availability** – Deployed the endpoint in a *Multi‑AZ* SageMaker hosting plan with auto‑scaling; used *SQS* to buffer spikes, guaranteeing 99.9 % uptime.  
4. **Cost Control** – Spot instances for training (× 3 savings), reserved GPU usage for inference (≈ $0.10/GB processed).  

**Result (R)**  
- Reduced moderation latency from 48 h → 20 min (avg);  
- False‑positive rate dropped to 1.6 %;  
- Saved ~$2.4 M annually in manual review costs;  
- Received a “Customer Obsession” bonus for keeping user experience smooth.  

**Bar‑raiser focus** – I demonstrated *ownership* by driving the full cycle, *dive deep* into model performance trade‑offs, quantified impact with real metrics, and iterated after an initial false‑positive spike by adding contextual embeddings—learning that context matters more than raw text alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
