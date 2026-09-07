---
qid: ing_312a3349b0__aws__local
question: 'Explain: Available now in ElevenLabs Agents — ElevenLabs \u2014 Scribe
  v2 Realtime live in ElevenLabs Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 373
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:18-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a legacy text‑to‑speech pipeline to a real‑time, generative voice service. The goal was to replace the batch‑based engine with a low‑latency, scalable solution that could be integrated into our customer support chatbot.

**Action (Technical Design)**  
I chose **Amazon SageMaker RealTimeInference** for model hosting and wrapped it in an **API Gateway + Lambda** front end so we had a serverless entry point. To keep latency below 200 ms I used **SageMaker Edge Manager** to deploy the model on **AWS Nitro Enclaves**, guaranteeing isolation while keeping inference close to the user’s region.  
For storage and training data, I leveraged **Amazon S3** with lifecycle policies, and for model versioning I used **SageMaker Model Registry**. Monitoring was handled by **CloudWatch metrics + SageMaker Debugger** to detect drift in real‑time audio quality.

**Result**  
The new pipeline cut average response time from 1.2 s to **0.18 s**, improving user satisfaction scores (CSAT) by **32%** and reducing monthly inference cost by **27%** through efficient spot instance usage.  

**Reflection & Learning**  
I owned the end‑to‑end flow, diving deep into latency bottlenecks and iterating on model compression. The experience reinforced my bias for action—deploying a minimal viable version in 3 weeks—and taught me to quantify trade‑offs between cost and quality.

> **Leadership Principles Anchored:** *Ownership*, *Dive Deep*, *Bias for Action*, *Deliver Results*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
