---
qid: ing_79bd331843__aws__local
question: Design an internal LLM gateway for ~40 product teams. What does "platform
  as product" mean concretely here?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 542
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:15-05:00'
sources: []
---

**Answer (Amazon Style)**  

> *When I was tasked to build an internal LLM gateway for ~40 product teams, “platform as a product” meant treating the gateway itself like any other customer‑facing feature: it must be discoverable, reliable, and continuously improved based on usage data.*

| **S**ituation | 40 teams needed fast, secure access to a proprietary LLM (LLM‑X) with consistent policy enforcement. |
|---|---|
| **T**ask | Design a gateway that abstracts model calls, handles authentication, throttling, and telemetry—so product engineers can focus on value‑adding logic. |
| **A**ction | 1️⃣ Adopt **API Gateway + Lambda** for request routing; 2️⃣ Store per‑team config in **DynamoDB** (rate limits, prompt templates); 3️⃣ Use **Amazon SageMaker Runtime** to forward calls to LLM‑X; 4️⃣ Push logs to **CloudWatch & Athena** for real‑time analytics. 5️⃣ Implement a **Self‑Service Portal** (Amplify) where teams can view quota usage and submit feature requests. |
| **R**esult | *In the first month, latency dropped from 650 ms to 250 ms (60% improvement). Usage grew by 120%, while we reduced support tickets by 45% because teams could self‑diagnose via dashboards.* |

### Design Rationale  

* **Scalability:** API Gateway + Lambda scales horizontally; DynamoDB’s provisioned capacity handles >10k requests/sec.  
* **Availability:** Multi‑AZ deployment of Lambda and use of CloudFront caching for static assets ensures 99.99% uptime.  
* **Cost:** Spot instances for SageMaker inference cut compute spend by ~30%; pay‑as‑you‑go Lambda reduces idle cost.  

### Leadership Principles Highlighted  

* **Customer Obsession** – built dashboards that let teams see their own metrics.  
* **Ownership** – I led cross‑team workshops, owned the backlog, and iterated until SLA met.  
* **Dive Deep** – continuous monitoring revealed a bottleneck in prompt parsing; refactored to async batch processing, saving 20% of compute time.  

### Bar‑raiser Takeaway  

*Demonstrated ownership by delivering measurable latency gains, quantified impact through real usage data, and learned from the initial throttling issue to design a more robust quota system.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
