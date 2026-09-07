---
qid: ing_782b327d3f__faang__local
question: 'Explain: Um it''s not necessarily the best tool — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 412
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:32-05:00'
sources: []
---

**Clarify**  
You’re asking why ML isn’t always the “best” choice for building large‑scale software systems, specifically in a Google context. I’ll assume we’re comparing ML against traditional engineering (design patterns, stateless services, CI/CD) and that “best” means *reliable, maintainable, scalable*.

**Approach**  
1. List typical ML pitfalls in production.  
2. Contrast with non‑ML pipelines at Google.  
3. Highlight concrete lessons from real projects.  

**Depth**  
- **Data dependency:** ML models require labeled data that can drift; a bug in labeling propagates silently, whereas rule‑based code fails fast.  
- **Explainability & debugging:** A 90 % accurate model may still produce edge‑case errors hard to trace—Google’s “Canary” tests and feature flags mitigate this for non‑ML services.  
- **Latency & consistency:** Models add inference latency and sometimes probabilistic outputs; Google’s large‑scale systems (e.g., Search ranking) rely on deterministic pipelines for SLA guarantees.  
- **Maintenance overhead:** Updating a model involves retraining, redeploying, monitoring metrics—Google’s “Model Registry” adds complexity that many teams avoid by using stateless services instead.  

**Edge Cases**  
- When data is abundant and the problem is inherently statistical (e.g., recommendation engines), ML shines.  
- For safety‑critical systems (self‑driving cars) or regulated domains, non‑ML guarantees are mandatory.  

**Optimize & Communicate**  
Explain that at Google we treat ML as a *tool*—use it when uncertainty and variance justify the added operational cost. For most core services, deterministic code, rigorous testing, and observable metrics provide a more reliable foundation. This balanced view aligns with Google’s “Engineering Culture” of choosing the simplest, most maintainable solution first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
