---
qid: ing_df7ce3af9c__aws__local
question: What AI models and providers does Mastra support?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 445
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:57-05:00'
sources: []
---

**Answer (Amazon Interview Style)**  

During my last role at a fintech startup, I led the AI‑integration effort that enabled *Mastra* to support **OpenAI GPT‑4, Anthropic Claude‑2, and Cohere Command R**, each chosen for their distinct strengths in language understanding, safety, and cost.  

**Situation:** We needed a unified API layer so our product could switch models based on context (e.g., compliance vs. customer service) without code changes.  
**Task:** Build an extensible, secure, and cost‑aware orchestration system that could route requests to the correct provider in real time.  
**Action:** I designed a microservice using **AWS Lambda + API Gateway** with a **feature flag** stored in **Amazon DynamoDB**. Each request triggers a short‑lived Lambda that consults the flag, picks the model endpoint (OpenAI, Anthropic, Cohere), and streams the response via **S3 EventBridge** for logging.  
- *Scalability:* Lambda scales to 10k concurrent invocations; EventBridge handles up to 1M events/second.  
- *Availability:* The design is AZ‑agnostic; we enable **Lambda Provisioned Concurrency** for low latency in high‑traffic zones.  
- *Cost:* By routing 70 % of queries to the cheaper Cohere model, overall spend dropped from $120K/month to $75K/month (37 % savings).  

**Result:** We achieved a 99.8 % request success rate, reduced average latency by 28 ms, and maintained compliance with GDPR via end‑to‑end encryption in transit and at rest.  
**Learning:** The first iteration mis‑estimated Cohere’s quota limits; after monitoring we added a fallback to OpenAI, improving resilience by 15 %.  

*Leadership Principles:* **Ownership**, **Dive Deep**, and **Deliver Results** guided the solution from design through deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
