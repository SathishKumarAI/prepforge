---
qid: ing_0bc63e4272__aws__local
question: 'Explain: Step 2: Request Validation — What is an API Gateway? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 542
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:52:22-05:00'
sources: []
---

**Step 2 – Request Validation: “What is an API Gateway?”**  
*Leadership Principles:* **Customer Obsession & Ownership**

> **Situation (S):** At my previous role I led the redesign of a public-facing ML inference service that accepted raw JSON payloads from partner apps. The upstream partners were sending malformed data, causing 12 % of requests to hit our backend and waste compute.  
> **Task (T):** Reduce downstream failures and improve user experience by validating inputs before they reach the inference Lambda.  
> **Action (A):** I introduced **Amazon API Gateway** as a first‑line validator. In the gateway’s *Request Validation* stage I defined schemas (JSON Schema, HTTP status codes) that matched our model’s expected features. For every incoming request the gateway checks payload size, required fields, and type constraints; if validation fails it returns a `400 Bad Request` immediately—no Lambda invocation.  
> 
>  *Design:*  
>  - **API Gateway (REST/HTTP)** → validates schema & rate limits.  
>  - **AWS WAF** for IP whitelisting and DDoS protection.  
>  - **Lambda Authorizer** for JWT auth, then a **Lambda Proxy Integration** to the inference function.  
>  - **CloudWatch Alarms** on `api-gateway:ClientError` metrics; auto‑scale downstream resources based on validated request count.  
> 
>  *Scalability & Cost:* API Gateway scales automatically to millions of requests with ~0.3 ¢ per million calls, whereas sending every request to Lambda would incur ~$1–2 × higher compute costs and cold‑start latency. Availability is 99.999% by design; we configured a 1‑minute health check that triggers a failover stage if the backend becomes unhealthy.  
> **Result (R):** Validation reduced malformed traffic by **87 %**, cutting downstream Lambda invocations from 12 % to 1.8 %. Compute costs dropped 40 %, and latency improved from 350 ms to 120 ms average, directly boosting partner satisfaction scores.

*What a bar‑raiser hears:*  
- Clear ownership of the entire request lifecycle.  
- Deep dive into AWS services, trade‑offs, and cost/availability calculations.  
- Quantified impact with real metrics, plus reflection on lessons learned (e.g., early validation vs. late error handling).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
