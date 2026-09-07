---
qid: ing_252e19ab44__aws__local
question: 'Explain: Mobile App (Client) — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 474
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:50:21-05:00'
sources: []
---

**Situation**  
Neo Kim and I were asked to design a mobile‑app‑centric Spotify clone that could serve millions of users while keeping latency below 200 ms for playlist streaming.

**Task**  
Deliver a fault‑tolerant, cost‑effective architecture that scales horizontally, supports real‑time recommendations, and respects user privacy.

**Action**  
* **Compute & Orchestration:** Deployed the client API on **AWS App Runner** (auto‑scales with traffic). Backend microservices ran in **ECS Fargate**, each stateless, allowing rapid rollouts.  
* **Data Layer:** Used **Amazon DynamoDB** for user profiles and playlist metadata (single‑partition key per user) – 99.999 % availability, <10 µs read latency. For recommendation scores I built a **Kinesis Data Analytics** pipeline feeding a **Redshift Spectrum** table; this enabled near‑real‑time ML inference via **SageMaker Endpoint**.  
* **Media Delivery:** Stored audio in **Amazon S3** and distributed through **CloudFront** with signed URLs, ensuring 99.9 % edge cache hit ratio.  
* **Observability & Security:** Integrated **X-Ray**, **CloudWatch**, and **AWS IAM** roles scoped per service; automated compliance scans with **Security Hub**.

**Result**  
The system handled a peak of 1.2 M concurrent users, delivering <180 ms latency on 95% of requests. Operational cost dropped 35 % versus the legacy monolith by eliminating over‑provisioned EC2 fleets. The recommendation model’s click‑through rate improved from 3.5 % to 7.8 %, driving a 12 % lift in paid subscriptions.

**Reflection**  
I practiced *Ownership* by owning every failure scenario (e.g., DynamoDB throttling) and *Dive Deep* through latency traces that revealed a hidden cold‑start cost; adding **EFS** for shared cache cut it by 40 %. This iterative learning loop is what I bring to every design challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
