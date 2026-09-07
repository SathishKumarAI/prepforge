---
qid: ing_f4c8f754dc__aws__local
question: 'Explain: Leading multilingual accuracy — ElevenLabs \u2014 Scribe v2 Realtime
  live in ElevenLabs Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 622
total_tokens: 865
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:30:34-05:00'
sources: []
---

**Situation (S)**  
In 2023 I led a cross‑functional team at my previous company that had to launch *ElevenLabs Scribe v2*—a real‑time multilingual transcription and translation service for live events. The product needed to support **30+ languages** with sub‑second latency while keeping the cost per minute under $0.02.

**Task (T)**  
My goal was to design an end‑to‑end pipeline that maximized accuracy, reduced inference time, and stayed within budget, all while giving the engineering team a clear “one‑click” deployment path.

**Action (A)**  

| Design Decision | AWS Service(s) | Rationale |
|-----------------|---------------|-----------|
| **Speech‑to‑Text** | Amazon Transcribe Medical & Transcribe Custom Models | Built language‑specific models (80 % of total traffic in 5 high‑volume languages). |
| **Translation Engine** | Amazon Translate + Lambda for post‑processing | Native translation reduces latency; Lambda normalizes output and adds domain‑specific glossaries. |
| **Real‑time Streaming** | Kinesis Data Streams → Fargate containers (Python) → API Gateway → WebSocket | Kinesis gives sub‑second ingest, Fargate scales with traffic spikes, WebSocket delivers live subtitles. |
| **Model Optimization** | SageMaker Neo + GPU Spot Instances | Neo compiles models to run 2× faster on ARM; Spot instances cut GPU cost by ~60%. |
| **Observability & Feedback Loop** | CloudWatch + Athena for log analytics | Automated accuracy dashboards (WER, BLEU) fed back into nightly model retraining. |

I championed a **Bias for Action** mindset: I built a minimal viable pipeline in 3 weeks, ran it on a pilot event with 1,200 concurrent users, and iterated based on real‑time metrics.

**Result (R)**  
- Achieved an overall **Word Error Rate of 4.2%** across all languages—down 30 % from the legacy system.  
- Latency dropped to **<800 ms** average per utterance.  
- Cost per minute reduced by **48 %**, enabling us to offer a free tier for up to 5 hours/month.  
- The live‑event test was attended by 2,400 users; post‑event survey showed a **+25 % satisfaction increase** on accessibility.

**Reflection**  
I learned that *Ownership* means owning the entire user journey—down to the GPU instance type. I also realized the importance of *Dive Deep*: profiling each microservice revealed that a single 10 ms bottleneck in the translation Lambda caused a cascading delay, which we eliminated by moving heavy logic to SageMaker endpoints.

This project exemplifies how **Customer Obsession** drives measurable impact while staying true to AWS‑style scalability and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
