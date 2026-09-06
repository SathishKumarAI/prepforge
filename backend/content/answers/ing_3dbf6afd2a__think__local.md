---
qid: ing_3dbf6afd2a__think__local
question: A customer insists on fine-tuning an open model on their support tickets
  because "we want our own model." You think RAG over their knowledge base solves
  it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 216
output_tokens: 525
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:00:25-05:00'
sources: []
---

**1. Clarify the goal & constraints**  
   - *What is the customer really after?* Do they want full control of the model weights or just better performance on their domain?  
   - *Assumptions*: They have enough tickets for fine‑tuning, privacy rules allow training on them, and they can maintain a custom model.  

**2. Pick a decision framework**  
   - Use a **cost–benefit matrix**: evaluate accuracy gain vs. effort, maintenance, data privacy, regulatory risk, and scalability.  
   - Overlay the *“AI‑ops readiness”* dimension (model versioning, monitoring, retraining) to see which approach fits their ops maturity.

**3. Walk through the reasoning**  
   1. **Fine‑tuning** gives a single model that “knows” the tickets but requires: GPU resources, continuous retraining, drift detection, and strict data handling.  
   2. **RAG** keeps the LLM generic but augments it with a searchable knowledge base (the tickets). It needs indexing, query‑time retrieval, and a pipeline to keep the index fresh.  
   3. Compare:  
      - *Accuracy*: Fine‑tuning may edge out in very niche language; RAG can match it if the retriever is good.  
      - *Maintenance*: RAG’s index updates are lighter than full model retraining.  
      - *Privacy*: RAG keeps raw tickets in a controlled store; fine‑tuned weights might leak info unless carefully sanitized.  
      - *Regulatory*: Some jurisdictions restrict training on personal data; RAG often satisfies “on‑prem” or “edge” policies better.

**4. Avoid common traps**  
   - Don’t assume the customer’s “own model” means a better one; it may be about compliance.  
   - Ignore that fine‑tuning can still expose sensitive patterns if not audited.  
   - Overlook that RAG is not a silver bullet—retrieval quality matters.

**5. Communicate the plan**  
   - Present the matrix visually, highlight trade‑offs, and suggest a **hybrid pilot**: start with RAG, measure performance, then decide whether incremental fine‑tuning adds value.  
   - Offer a clear roadmap for scaling, monitoring, and governance regardless of choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
