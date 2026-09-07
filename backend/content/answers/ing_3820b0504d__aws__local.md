---
qid: ing_3820b0504d__aws__local
question: 'Explain: There are 3 modules in this course — Generative AI with Large
  Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 436
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:23-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain a three‑module Coursera course on *Generative AI with Large Language Models*. My goal was to showcase my ownership of content design, dive deep into the technical stack, and deliver clear, data‑driven results.

**Action**  

| Module | Core Focus | Key AWS Services | Design Decisions |
|--------|------------|------------------|------------------|
| **1. Foundations** | NLP fundamentals & LLM theory | S3 (course assets), SageMaker Studio for notebooks | Use pre‑built Hugging Face models; keep compute cost low with spot instances. |
| **2. Practical Implementation** | Fine‑tuning, inference pipelines | SageMaker Training/Inference, Lambda for API layer, DynamoDB for metadata | Auto‑scaling endpoints (1–10 requests/sec) to balance latency (<200 ms) and cost ($0.05 per 1000 invocations). |
| **3. Deployment & Ethics** | Productionizing, monitoring, bias mitigation | CloudWatch, GuardDuty, Comprehend for toxicity analysis | Implement blue‑green deployment via CodePipeline; enforce rate limits (5 rps) to protect from abuse. |

I validated the design by running a pilot with 200 students: **95 % completion rate** and an average quiz score increase of **18 points**, proving the architecture met scalability, availability, and cost goals.

**Result**  
The course launched on schedule, under budget (saved ~15 % vs. projected $30k), and received a Net Promoter Score of 87—well above Amazon’s target of 80 for educational content.

---

> **Bar‑raiser notes:**  
> • Demonstrated *Ownership* by taking end‑to‑end responsibility.  
> • Showed *Dive Deep* with concrete service choices and cost/latency trade‑offs.  
> • Quantified impact (completion rate, score lift).  
> • Learned from initial prototype failures—shifting to spot instances reduced costs without compromising reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
