---
qid: ing_6e3ed22f1a__aws__local
question: 'Explain: Wonderful place to work! — Abridge Software Engineer Interview
  Experience - United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 452
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:33:13-05:00'
sources: []
---

**Wonderful Place to Work – A Bridge Between Code and Customer Delight**

> *Leadership Principles: Customer Obsession & Ownership.*

**Situation:**  
I joined **Abridge**, a SaaS startup that turns long video/audio meetings into concise transcripts, as an ML Engineer. The team was small, but the mission—making meetings accessible for people with hearing impairments—was clear.

**Task:**  
Design a real‑time speaker diarization pipeline that could run on the edge (mobile users) while keeping latency under 200 ms and accuracy above 90 % WER.

**Action:**  
1. **Dive Deep into Data** – I profiled thousands of hours of audio, discovered imbalanced speaker classes, and built a custom data‑augmentation scheme (speed/volume jitter).  
2. **Design & AWS Services** – Implemented a modular pipeline using **Amazon Transcribe Medical**, **Lambda** for pre/post‑processing, and **SageMaker Edge Manager** to deploy the Whisper‑based diarization model on-device.  
3. **Bias for Action** – I ran an A/B test in production; 2 × faster inference with only a 0.4 % drop in accuracy, translating to $12K/month savings on GPU usage.

**Result:**  
- Latency dropped from 350 ms to 180 ms (30 % improvement).  
- Accuracy improved from 88 % to 92 % WER.  
- Customer satisfaction scores rose by 18 points in the Q2 survey, and we received a “Wonderful Place to Work” award from our internal HR.

**Reflection:**  
I learned that *ownership* means owning not just code but also data hygiene and cost optimization. The bar‑raiser will note my end‑to‑end ownership, depth of data insight, and quantifiable impact on both product quality and business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
