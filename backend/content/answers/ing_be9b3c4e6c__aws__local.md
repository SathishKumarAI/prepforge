---
qid: ing_be9b3c4e6c__aws__local
question: 'Explain: Array (10 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 465
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:22-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* In my last role I built an internal “Array Problem Library” to help junior data‑science engineers master the *Blind 75* set before tackling production ML pipelines.

*Task:* Deliver a reusable, scalable API that auto‑generates problem statements, hints, and automated test harnesses for each of the 10 core array questions (e.g., Two Sum, Longest Subarray with Sum K, etc.).

*Action:*  
1. **Requirements & Design** – I scoped a microservice in Python using FastAPI, backed by DynamoDB for metadata and S3 for code snippets. Each problem record stores: title, difficulty, tags, expected runtime complexity, and reference solutions.  
2. **Scalability / Availability** – Deployed to AWS Lambda (cold‑start mitigated with provisioned concurrency) behind an Application Load Balancer; autoscaling on request count guarantees < 200 ms latency for 99.9% of traffic.  
3. **Cost & Trade‑offs** – Lambda + DynamoDB keeps spend <$0.02 per thousand requests, far cheaper than a dedicated EC2 instance while offering built‑in resilience.  
4. **Bias for Action / Invent & Simplify** – Implemented an AI‑driven hint generator (OpenAI GPT‑3 fine‑tuned on solutions) that produces concise hints in < 100 ms, eliminating manual hint authoring.

*Result:* The library served > 8,000 engineers across the org within 2 weeks of launch, cutting onboarding time for array‑based feature engineering from 5 days to 1 day. Usage metrics: 75% of problems solved without external help; average completion time dropped by **42%**.  

**Bar‑raiser notes:** I demonstrated ownership (full stack design), deep dive into AWS services and cost trade‑offs, quantified impact (metrics on adoption & speedup), and learned from early failures when latency spiked—promptly shifting to provisioned concurrency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
