---
qid: ing_cd1fa1f068__aws__local
question: 'Explain: What They''re Actually Evaluating — Perplexity AI Interview Prep
  2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 372
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:34-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** In 2025 I led a cross‑functional team to build an internal “Perplexity” scoring engine that ranks candidate responses for the next‑gen AI interview platform.  
> **Task:** Deliver a production‑ready metric that predicts interview success with >90 % precision while keeping inference latency <30 ms per question.  
> **Action (Technical):**  
> • Adopted a lightweight transformer (DistilBERT) fine‑tuned on 1.2M labeled Q&A pairs.  
> • Deployed via AWS SageMaker endpoints behind an Application Load Balancer, auto‑scaling from 4 to 32 GPU instances based on 5‑minute rolling average latency.  
> • Implemented A/B testing with Amazon CloudWatch dashboards; used Kinesis for real‑time telemetry and DynamoDB TTL for cache invalidation.  
> • Cost tuned by switching to spot instances (40 % cheaper) after validating 99.7 % uptime over a month.  
> **Result:** The new perplexity score increased hiring efficiency by 28 % (average interview cycle time dropped from 12 days to 8 days) and reduced cost per interview by $18.  
> **Reflection (Bar‑raiser focus):** I owned the full stack, dove deep into model calibration, quantified impact with clear KPIs, and learned that early spot‑instance testing prevented a costly production outage.  

*Leadership Principles:* **Ownership** – drove end‑to‑end delivery; **Dive Deep** – rigorously validated model and infrastructure performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
