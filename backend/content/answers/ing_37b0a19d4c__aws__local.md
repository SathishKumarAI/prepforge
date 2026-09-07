---
qid: ing_37b0a19d4c__aws__local
question: 'Explain: Types of Client-Server Architectures — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:27-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to design a real‑time recommendation engine for an e‑commerce platform that needed to serve millions of users while keeping latency below 50 ms.

**Action**  
I mapped out three client‑server patterns—*Thin Client*, *Fat Client*, and *Hybrid (Server‑Side Rendering + API)*—and evaluated them against our constraints.  
1. **Thin Client**: Offloads all logic to the browser, reducing server load but increasing bandwidth.  
2. **Fat Client**: Uses a monolithic backend; simpler but hard to scale.  
3. **Hybrid**: Combines a stateless API (AWS Lambda + Amazon API Gateway) with edge‑cached content (Amazon CloudFront) and a lightweight client SDK.

I chose the hybrid model, deploying:
- **Lambda functions** for inference (scaling to thousands of invocations per second).  
- **DynamoDB** as a low‑latency feature store.  
- **SageMaker Endpoint** behind API Gateway for model predictions.  
- **CloudWatch + X-Ray** for observability.

This architecture delivered **≤30 ms latency** and reduced infrastructure cost by 35% versus the monolithic approach, while keeping 99.9% availability through multi‑AZ deployment.

**Result**  
Post‑launch traffic grew 120%, churn fell 22%, and we hit a $4M revenue increase in Q3—an impact that exceeded our quarterly target by 1.8×.

> **Leadership Principles**: *Customer Obsession* (design for low latency), *Ownership* (owning end‑to‑end performance), *Dive Deep* (profiling Lambda cold starts), and *Bias for Action* (rapidly prototyping the hybrid pattern).  
> 
> **Bar‑raiser check** – I quantified impact, demonstrated depth by tuning Lambda memory/timeout, learned from a failed monolithic prototype that highlighted cost‑scaling pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
