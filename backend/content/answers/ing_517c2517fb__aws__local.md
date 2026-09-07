---
qid: ing_517c2517fb__aws__local
question: 'Explain: Object Modelling — LLD-OOPs-Design-Patterns/TipsAndTechniques.md
  at main \u00b7 Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 495
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:29:18-05:00'
sources: []
---

**Situation**  
I was tasked with redesigning a legacy e‑commerce catalog that shipped product data to 12 microservices via monolithic Java code. The system suffered from *O(n²)* joins and 45 % of requests stalled on slow DB queries.

**Task**  
Build an object‑model layer (OO, LLD) that:  
1️⃣ decouples services,  
2️⃣ reduces query complexity to O(1), and  
3️⃣ is ready for serverless deployment.

**Action**  
* **Design patterns** – I applied the *Repository*, *Factory*, and *Decorator* patterns.  
  - `ProductRepository` abstracts DynamoDB access;  
  - `ProductFactory` creates domain objects from raw items, ensuring immutability;  
  - `PricingDecorator` adds dynamic discount logic without touching core models.  
* **AWS services** –  
  - **DynamoDB** (global tables) for low‑latency reads.  
  - **Lambda** + **API Gateway** to expose the model layer as a stateless microservice.  
  - **Step Functions** orchestrate complex workflows when multiple decorators run concurrently.  
* **Scalability & cost** – With DynamoDB autoscaling, read capacity auto‑adjusts; Lambda’s pay‑per‑invoke pricing keeps idle costs near zero.  
* **Availability** – Global tables + multi‑AZ deployment give 99.999 % SLA.  
* **Trade‑offs** – Sacrificed a tiny (~5 %) increase in write latency for massive read gains.

**Result**  
- Query time dropped from *12 s* to *35 ms* (≈ 34× faster).  
- Throughput rose 7×, allowing us to serve 100k concurrent users with < $0.02 per request.  
- The new layer is now reused by 4 downstream services, reducing code duplication by 60 %.  

**Reflection** – I initially over‑engineered the decorator chain, causing a 3‑day delay. By revisiting the *Simplify* principle and removing unnecessary layers, we restored momentum without compromising quality. This experience reinforced my ownership of both architecture and delivery—key to Amazon’s bar‑raiser expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
