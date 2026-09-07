---
qid: ing_ebe8cf23d7__aws__local
question: 'Explain: The composition of domain objects: — Key Terms in Domain-Driven
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 480
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:11:58-05:00'
sources: []
---

**Answer – Domain‑Driven Design (DDD) & AI Context**

**S – Situation:**  
At my last role I led a team that built an AI‑powered recommendation engine for a large e‑commerce platform. The product required tight coupling between business concepts and ML pipelines, so we adopted DDD to keep the domain model clean.

**T – Task:**  
Define the key DDD terms (Aggregate, Entity, Value Object, Repository, Domain Service) and map them to AI components while ensuring scalability on AWS.

**A – Action:**  
1. **Aggregates** became *Model Artifacts*—each ML model plus its metadata was an aggregate root.  
2. **Entities** were *Feature Stores* (unique IDs per feature set).  
3. **Value Objects** represented immutable *Inference Requests* (user context + model ID).  
4. **Repositories** wrapped Amazon SageMaker’s `CreateModel`/`InvokeEndpoint`, abstracting persistence in DynamoDB for metadata and S3 for artifacts.  
5. **Domain Services** handled orchestration: feature extraction, model selection, and result enrichment via AWS Step Functions.

We used the **Customer Obsession** principle to prioritize low‑latency inference (<50 ms) and **Ownership** by building a single responsibility pipeline that could be versioned independently. The design ran on SageMaker endpoints behind an Application Load Balancer with Auto Scaling, yielding 99.9% availability and cost savings of ~30% versus a monolithic Lambda approach.

**R – Result:**  
- Inference latency dropped from 120 ms to 45 ms (a 62% improvement).  
- Model iteration time shortened by 4× due to isolated aggregates.  
- Cost per inference fell from $0.08 to $0.05, saving ~$200k annually.

**Bar‑raiser notes:**  
The interviewer will look for **ownership** in defining the domain boundaries, a **deep dive** into mapping DDD concepts to AWS services, quantified impact (latency & cost), and evidence of learning—e.g., shifting from monolith to micro‑aggregates after initial failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
