---
qid: ing_eed8404e1a__aws__local
question: 'Explain: Setup — Basics tutorial | Go | gRPC'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 512
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:49-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup to build an internal recommendation engine that needed to expose its inference service to other teams via a lightweight API. The stack had to stay in Go for performance, and we chose gRPC for low‑latency inter‑service communication.

**Action**  
1. **Define the contract** – I drafted a `.proto` file (e.g., `recommendation.proto`) with clear request/response messages (`RecommendRequest`, `RecommendResponse`).  
2. **Generate Go stubs** – using `protoc --go_out=. --go-grpc_out=.` to keep code generation repeatable.  
3. **Implement the server** – a single `RecommendationService` that loads a pre‑trained TensorFlow model (via the Go TF binding) and runs inference in `<10 ms`. I wrapped this with OpenTelemetry for observability.  
4. **Deploy on AWS** – containerized with Docker, pushed to ECR, and run behind an Application Load Balancer (ALB) using ECS Fargate. I enabled *service auto‑scaling* based on CPU usage (`<70 %`).  
5. **Testing & CI/CD** – unit tests for the gRPC handler, integration tests against a mock model, and a GitHub Actions pipeline that builds, tests, and pushes to ECR.

**Result**  
- Latency dropped from 200 ms (REST) to 8 ms (gRPC).  
- Throughput increased by **3×** while cost per request fell by **22 %** due to Fargate’s pay‑per‑second model.  
- Onboarded 4 downstream services within two weeks, all reporting >99.9 % availability.

**Leadership Principles**  
- *Customer Obsession*: Delivered a low‑latency API that improved user experience for the product team.  
- *Ownership & Dive Deep*: Took end‑to‑end responsibility—from schema design to deployment—while digging into TensorFlow model performance and gRPC stream handling.  

**Bar‑raiser takeaway**  
I demonstrated ownership, quantified impact (latency, cost, throughput), and iterated quickly after a failed first deployment that lacked health checks, learning the importance of observability from day one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
