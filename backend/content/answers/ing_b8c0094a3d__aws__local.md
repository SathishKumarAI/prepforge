---
qid: ing_b8c0094a3d__aws__local
question: 'Explain: AI system design, built for engineers. — AI Daddy \u00b7 Learn
  AI System Design and Pass the AI Interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 411
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:44-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an internal “AI Daddy” recommendation engine for our engineering platform. The goal was to surface the most relevant code snippets and documentation in real time while keeping latency < 50 ms for 95% of requests.

**Action**  
*Customer Obsession & Ownership*: I mapped user pain points through A/B tests, captured 12 k query logs per day, and defined a success metric (Mean Reciprocal Rank > 0.72).  
*Dive Deep & Bias for Action*: I chose an **SageMaker Endpoint** behind an **API Gateway + Lambda** to autoscale based on request volume. The model was a distilled transformer (≈ 12M params) trained on our internal repo corpus; inference cost ≈ $0.0004 per request.  
*Invent & Simplify*: Instead of a monolithic service, I decomposed it into:  
1. **Data Lake** in S3 + Glue for nightly ingestion.  
2. **Feature Store** (SageMaker Feature Store) to cache TF-IDF vectors.  
3. **Real‑time inference layer** with Lambda@Edge for 5 ms cold start via Lambda Layers.  

I implemented a CI/CD pipeline on CodePipeline that triggers retraining every week, reducing drift by 30%. The system achieved **99% uptime** (SLA) and cut average query latency from 180 ms to 42 ms, boosting engineer productivity by 15% (measured via time‑to‑solve tickets).  

**Result**  
The project received the “Innovation in Engineering” award. Lessons learned: early load testing uncovered Lambda timeout limits; we mitigated it by moving heavy pre‑processing to Step Functions. I documented these trade‑offs for future teams, ensuring repeatable success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
