---
qid: ing_54f48ea12a__aws__local
question: 'Explain: Using Graphiti with OpenAI-compatible providers and local LLMs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 591
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:23-05:00'
sources: []
---

**Situation & Task**  
While leading the NLP squad for a SaaS product that needed rapid prototyping of multimodal AI, I was asked to build an on‑prem inference pipeline that could switch between OpenAI‑compatible cloud APIs and local LLMs without code changes.

**Action**  
I architected a **Graphiti‑based orchestration layer** that abstracts the provider. Each node represents an LLM endpoint; edges encode fallback logic (e.g., if the OpenAI proxy times out, route to a locally hosted *Llama‑2* container).  

Key AWS services:  
- **ECS Fargate + ECS Anywhere** for hosting local models in Docker containers, giving us elastic compute and zero‑management.  
- **API Gateway & Lambda@Edge** as the Graphiti entry point, ensuring low latency (< 50 ms) globally.  
- **S3 + CloudFront** to cache large model checkpoints (≈ 10 GB each) for quick cold starts.  
- **CloudWatch Metrics + XRay** for end‑to‑end tracing and automated fallback triggers.

I added a **policy engine** that evaluates cost vs. latency in real time: if the OpenAI proxy’s cost per token exceeds $0.0004 or latency > 200 ms, Graphiti automatically routes to the local container. This dynamic routing reduced overall spend by **28 %** while keeping SLA < 95 % at 99.9 % availability.

**Result**  
Within two sprints we achieved:  

| Metric | Before | After |
|--------|--------|-------|
| Avg inference cost per request | $0.0006 | $0.0004 |
| Latency (p90) | 250 ms | 140 ms |
| System uptime | 97 % | 99.9 % |

The team adopted Graphiti as the standard for all downstream AI services, slashing onboarding time by **40 %**.

---

### Leadership Principles

- **Customer Obsession** – Built a system that guarantees low cost and high availability for our end‑users.  
- **Ownership & Dive Deep** – Took full ownership of the architecture, dug into cost models, latency graphs, and trade‑offs between cloud vs. on‑prem resources.

---

### Bar‑raiser signals

- Demonstrated *ownership* by turning a vague requirement into a production‑ready design.  
- Showed *depth* with concrete AWS service choices, cost calculations, and fallback logic.  
- Quantified impact (cost savings, latency reduction) and shared learnings: early use of ECS Anywhere reduced cold‑start times versus EC2, but required tighter IAM policies to avoid data exfiltration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
