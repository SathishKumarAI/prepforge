---
qid: ing_e1a658c98e__aws__local
question: 'Explain: Microservices Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 514
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:49:44-05:00'
sources: []
---

**Micro‑service patterns that drive customer value**

| Pattern | Why it matters | Key AWS services |
|---------|----------------|------------------|
| **API Gateway + Service Mesh** | Exposes a single, secure entry point while keeping services loosely coupled. | Amazon API Gateway, AWS AppMesh |
| **Saga / Event‑Sourcing** | Keeps data consistent across services without tight locks; improves fault tolerance. | Amazon DynamoDB Streams, Amazon SQS/SNS |
| **CQRS (Command/Query Responsibility Segregation)** | Separates write and read workloads to scale each independently. | Amazon Aurora Serverless for writes, Amazon ElastiCache for reads |
| **Domain‑Driven Design (Bounded Contexts)** | Aligns services with business domains; reduces inter‑service chatter. | AWS Lambda + Step Functions |
| **Serverless Micro‑services** | Eliminates server management overhead; scales automatically to zero. | AWS Lambda, API Gateway, DynamoDB |
| **Observability & Chaos Engineering** | Detects issues early and builds resilience into the stack. | Amazon CloudWatch, X-Ray, Fault Injection Simulator |

### STAR Example (Amazon Leadership Principles)

- **Situation:** Our catalog service hit 200% traffic during a flash sale; latency spiked to 1 s, hurting conversion.
- **Task:** Re‑architect for elasticity and fault tolerance while keeping cost < 10 % of current spend.
- **Action:** Decomposed the monolith into *Search*, *Recommendation*, and *Pricing* services (DDD). Implemented API Gateway + AppMesh for secure routing. Adopted Saga pattern with DynamoDB Streams to maintain inventory consistency. Migrated stateless workers to Lambda, using Aurora Serverless for writes and ElastiCache for reads.
- **Result:** Latency dropped from 1 s to < 200 ms (30× faster), handled 3× traffic without a single outage, and reduced infra cost by 12 %. Post‑mortem showed that the Saga pattern eliminated race conditions that previously caused “out‑of‑stock” false positives.

**Bar‑raiser focus:** ownership of the end‑to‑end solution, deep dive into each pattern’s trade‑offs (latency vs. consistency), quantified impact on customer experience, and lessons learned from the initial monolith failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
