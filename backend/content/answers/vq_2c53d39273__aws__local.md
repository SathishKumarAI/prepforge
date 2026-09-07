---
qid: vq_2c53d39273__aws__local
question: Q2 .How does Generative AI work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:44:46-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*.  
> **Context (S):** A client asked how we could build a generative‑AI chatbot that writes product copy in real time for their e‑commerce site, guaranteeing 95 % relevance and < 2 s latency.  
> **Task (T):** Deliver an end‑to‑end architecture that scales to millions of concurrent users while staying under $0.10 per request.  
> **Action (A):** I designed a stateless microservice on **Amazon SageMaker** using a fine‑tuned GPT‑3 model, deployed behind an **Application Load Balancer** with **AWS Lambda** for request routing. To keep latency low, I added a **Redis cache** in **ElastiCache** for hot prompts and pre‑generated responses. For cost control, the model runs on spot instances (80 % cheaper) with automatic fallback to On‑Demand if latency spikes. Monitoring uses **CloudWatch Metrics** (latency, error rate) fed into an **Amazon EventBridge** rule that triggers a Lambda scaling script.  
> **Result (R):** Within 4 weeks we achieved < 1.8 s average latency, 96 % relevance per A/B test, and cost savings of 35 % versus the baseline. The client reported a 12 % lift in conversion rate from AI‑generated copy.  

*Bar‑raiser focus:* ownership (end‑to‑end), depth (caching, spot vs on‑demand trade‑offs), quantified impact (latency, cost, conversion lift), and lessons learned—e.g., the importance of caching for cold‑start latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
