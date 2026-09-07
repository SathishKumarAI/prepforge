---
qid: ing_992e1e530c__aws__local
question: 'Explain: Serverless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 411
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:11:58-05:00'
sources: []
---

**Situation & Task**  
In 2023 I led a cross‑functional team that had to launch an on‑demand recommendation engine for a retail client within 90 days while keeping infrastructure costs below $20K/month.

**Action (Design)**  
I proposed a **serverless architecture** using AWS Lambda, Amazon API Gateway, and SageMaker Endpoint.  
* **Lambda** runs inference code in response to HTTP requests, scaling automatically from zero to thousands of invocations per second without provisioning servers.  
* **API Gateway** exposes the endpoint with throttling, caching (30‑second TTL), and OAuth2 authentication via Cognito.  
* The model lives on a SageMaker endpoint that auto‑scales based on CPU utilization; we deployed a 3‑node cluster for peak traffic, shutting it down during low usage windows to save ~35% of compute cost.  

I added **CloudWatch Alarms** and an EventBridge rule to trigger a Lambda “self‑healer” that restarts the SageMaker endpoint if latency exceeds 200 ms, ensuring 99.9% availability.

**Result**  
Launch was two weeks ahead of schedule; monthly spend dropped from $35K (EC2 + ELB) to $18K with identical latency (<120 ms). The solution processed 1M requests/day and delivered a 12% lift in conversion rate for the client’s personalized offers.  

**Learning & Leadership**  
I owned the end‑to‑end delivery, *dive deep* into cost metrics, and applied a **Bias for Action** mindset by automating recovery. The bar‑raiser will note my quantifiable impact, rapid iteration, and willingness to learn from the first failure when the SageMaker endpoint initially throttled under sudden load—prompting me to enable burst mode and adjust scaling policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
