---
qid: ing_f484f0bf5a__aws__local
question: 'Explain: Build a multilingual voice assistant — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 485
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:51-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at my previous company, we were asked to launch a **multilingual voice assistant** that could understand and respond in 12 languages for our global customer base. The goal was to reduce support tickets by 30 % and increase user engagement (time‑on‑app) by 20 %.

**Action**  
1. **Ownership & Customer Obsession:** I assembled a squad of data scientists, devops, and UX designers and defined the success metrics in the product backlog.  
2. **Dive Deep – Model Selection:** We chose multilingual transformers (mBERT + Whisper for speech‑to‑text) fine‑tuned on domain‑specific corpora.  
3. **Architecture:**  
   * **AWS Lambda** for stateless inference micro‑services, triggered by **API Gateway** REST endpoints.  
   * **Amazon S3** to store audio uploads and model checkpoints.  
   * **Amazon SageMaker Endpoint** hosts the fine‑tuned models with autoscaling policies (minimum 2 instances, max 10).  
   * **AWS Step Functions** orchestrate multi‑step processing: transcription → intent detection → response generation.  
4. **Scalability & Cost:** Using Lambda + Step Functions gives us pay‑per‑invocation pricing and automatic scaling; SageMaker’s on‑demand endpoints keep latency <200 ms for 95 % of requests while staying under $0.30 per inference.  
5. **Bias for Action & Deliver Results:** We rolled out a beta in Q2, monitored metrics via CloudWatch dashboards, and iterated on model thresholds within 48 h.

**Result**  
- Reduced support tickets by **32 %** (exceeding the target).  
- Increased average session time by **22 %**.  
- Achieved <200 ms latency for 95 % of utterances while keeping monthly spend <$15k.  

*Bar‑raiser notes:* I demonstrated full ownership, deep technical dive into model choice and AWS services, quantified impact, and a rapid learning loop that turned feedback into immediate improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
