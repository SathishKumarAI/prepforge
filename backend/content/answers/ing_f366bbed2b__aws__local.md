---
qid: ing_f366bbed2b__aws__local
question: 'Explain: Speech synthesis — Conversational AI latency: What is it and why
  it matters?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:42-05:00'
sources: []
---

**Answer (Amazon Way)**  

*Leadership Principles:* **Customer Obsession** & **Dive Deep**

> *Situation*: I led a team building an on‑device chatbot for a smart speaker that needed to respond in < 200 ms to keep users engaged.  
> *Task*: Reduce the end‑to‑end latency of speech synthesis (text‑to‑speech) while maintaining audio quality.  
> *Action*:  
> 1. **Profile**: Measured every stage—NLP, TTS engine, network, and speaker output. Found a 120 ms bottleneck in the neural vocoder.  
> 2. **Optimize**: Switched from a large WaveNet to a lightweight HiFi-GAN model; added a small caching layer for frequently used phrases.  
> 3. **AWS Services**: Deployed models on **Lambda@Edge** and **ECS Fargate**, using **S3** for low‑latency storage of cached audio, and **CloudWatch** for real‑time metrics.  
> 4. **Test & Iterate**: Ran A/B tests; latency dropped from 350 ms to 190 ms, improving user satisfaction scores by **15%** (measured via in‑app NPS).  

> *Result*: The system achieved a **95th percentile latency of 180 ms**, meeting the 200 ms target and boosting overall engagement by 12% month‑over‑month.  
> *Reflection*: I learned that focusing on micro‑optimizations (e.g., model size) can have outsized impact, but only when coupled with rigorous monitoring—an essential bar‑raiser quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
