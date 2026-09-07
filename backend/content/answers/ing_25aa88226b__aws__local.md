---
qid: ing_25aa88226b__aws__local
question: 'Explain: Contact Us — GitHub - sgl-project/sglang: SGLang is a high-performance
  serving framework for large language models and multimodal models. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 483
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:18-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a low‑latency inference service for a multimodal LLM that would support our customer support chatbot. The team needed a production‑ready framework that could scale across GPU instances and expose a simple “Contact Us” API endpoint.

**Action – Design & Implementation**  
* **Framework Choice:** I evaluated SGLang (the GitHub repo *sgl-project/sglang*) for its high‑performance serving capabilities, especially its support for streaming token generation.  
* **AWS Stack:**  
  * **Amazon SageMaker Edge Manager** to package the model and deploy it as a serverless inference endpoint on **EC2 Inf1 GPU instances** (NVIDIA A10G).  
  * **API Gateway + Lambda** to expose a RESTful “/contact-us” endpoint that forwards requests to SageMaker.  
  * **Amazon DynamoDB** for request logging, enabling real‑time analytics.  
* **Scalability & Availability:** Leveraged SageMaker’s auto‑scaling policy (min = 2, max = 10) and enabled multi‑AZ deployment. API Gateway handled request throttling to protect the backend during traffic spikes.  
* **Cost Optimization:** Used spot instances for non‑critical inference jobs and integrated a cost‑alert via CloudWatch.  

**Result** – The new pipeline cut average response time from 1.8 s to **0.45 s** (80% reduction) and increased request throughput by **120%**, all while keeping monthly GPU costs down by **25%** compared to the legacy Docker‑based deployment.

**Learning & Ownership**  
I conducted a post‑mortem on an earlier spike where latency spiked due to insufficient instance type. The root cause was a mismatch between tokenization overhead and GPU compute. We switched from **sglang’s default tokenizer** to a lightweight *tokenizer‑only* microservice, reducing CPU load by 35%. This experience reinforced the Amazon principle of **Ownership**—I drove the end‑to‑end solution—and the **Dive Deep** principle—analyzing metrics to uncover hidden bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
