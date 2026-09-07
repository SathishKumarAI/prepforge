---
qid: ing_0f39df715d__aws__local
question: 'Explain: AI features for web apps — Gemini Developer API | Gemma open models
  \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 449
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:59-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our internal web portal to a data‑driven product recommendation engine, we needed an AI layer that could scale globally while keeping latency < 200 ms for 90% of requests. The team had no in‑house ML expertise, so I scoped the solution around Google’s Gemini Developer API and Gemma open models.

**Action**  
1. **Requirements & Design** – Defined a stateless microservice architecture:  
   * **API Gateway + Lambda** to expose `/recommend` endpoints, ensuring 99.9% availability.  
   * **Gemini (Gemma)** as the inference engine; we used `gemma-7b-it` for cost‑efficiency and fine‑tuned it with a 10 k sample from our catalog.  
   * **S3 + DynamoDB** to store user profiles and feature vectors, enabling cold start avoidance.  
2. **AWS Integration** – Leveraged **EFS** for shared model storage across Lambda layers, reducing deployment time by 40%.  
3. **Scalability & Cost** – Implemented **Lambda provisioned concurrency** (200 cold starts/day) and used **Spot Instances** for batch re‑ranking jobs, cutting inference cost from $0.30/req to $0.12/req.

**Result**  
- **Performance:** 92% of responses < 150 ms; latency dropped by 35%.  
- **Business Impact:** Monthly revenue lift of 18 % attributed to personalized recommendations (verified via A/B testing).  
- **Cost Savings:** Reduced inference spend by $45k/year.  

**Reflection**  
I learned that “Ownership” means iterating on the end‑to‑end pipeline, not just plugging in a model. “Dive Deep” surfaced when debugging latency spikes; profiling Lambda cold starts revealed an S3 read bottleneck we fixed with EFS. This approach keeps us customer‑obsessed while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
