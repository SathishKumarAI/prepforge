---
qid: ing_21e9f54d92__aws__local
question: 'Explain: Methods and Status Codes — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 527
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:43:41-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our public‑API gateway for a recommendation engine that served 12 M daily requests. The API had to expose ML inference while keeping latency <200 ms and handling 10× traffic spikes.

**Action – Technical Design**  
I chose **RESTful design with HTTP/HTTPS** because it is stateless, cacheable, and widely supported by clients.  
* **Methods:**  
  * `POST /predict` – idempotent inference (no side‑effects).  
  * `GET /status` – health check, returns `200 OK` when the model is warm.  
  * `DELETE /model/{id}` – only for internal dev ops to trigger retraining.  

* **Status Codes & Error Handling**  
  * `200 OK` – successful inference (JSON payload).  
  * `400 Bad Request` – malformed input; we log schema violations.  
  * `429 Too Many Requests` – throttling via API Gateway rate limits.  
  * `503 Service Unavailable` – model not loaded or infra failure, with a retry‑after header.

* **AWS Services**  
  * **Amazon API Gateway** – HTTPS termination, WAF protection, and built‑in throttling.  
  * **Lambda@Edge / ECS Fargate** – stateless inference containers for autoscaling.  
  * **SageMaker Endpoint** – underlying model; we use versioned endpoints to roll out A/B tests without downtime.  

* **Scalability & Cost** – Auto‑scaling pools of 4 vCPU instances keep costs at ~$0.12/hr while guaranteeing sub‑200 ms latency even under a 20× traffic surge.

**Result**  
Post‑launch, we saw **95 % reduction in error rates** and **latency dropped from 350 ms to 180 ms**, driving a 4 % lift in conversion on the recommendation page.  

**Reflection (Bar‑raiser notes)**  
I owned every layer: from API spec to model deployment. I *dive deep* into logs to correlate spikes with request patterns, then iterated quickly—bias for action. The measurable impact and lessons learned (e.g., moving heavy validation out of Lambda) demonstrate ownership and a data‑driven mindset, key Amazon traits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
