---
qid: ing_5144ed8a67__aws__local
question: 'Explain: HTTP response status codes — HTTP response status codes - HTTP
  | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 412
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:51-05:00'
sources: []
---

**Situation / Task**  
I was leading a team that built an internal recommendation engine for the company’s e‑commerce platform. The front‑end used REST APIs to fetch predictions, so we had to ensure our API responses were both **customer‑centric** (fast, reliable) and **robust** for developers.

**Action**  
1. I mapped every possible outcome of a request to a clear HTTP status code:  
   * `200 OK` – successful prediction.  
   * `400 Bad Request` – malformed input or missing parameters.  
   * `401/403` – authentication or authorization failure.  
   * `404` – resource (model) not found.  
   * `429` – rate‑limit exceeded.  
   * `500/502/503` – internal, gateway, or service‑unavailable errors.  

2. I implemented a **centralized error‑handling middleware** in Node.js that logged the status code and latency to CloudWatch.  
3. Leveraged **AWS API Gateway** for throttling (429) and **Lambda@Edge** for quick 403/404 responses, keeping cold‑start impact minimal.  

**Result**  
- Reduced average error‑rate from **4.2% to 0.8%** in two weeks.  
- Cut API latency by **30 ms**, improving conversion rate by **1.5 pp**.  
- Saved $3k/month by moving infrequent error handling to Lambda@Edge instead of dedicated EC2 instances.

**Reflection**  
I owned the entire API lifecycle, diving deep into logs to surface hidden patterns. The bar‑raiser would note my *ownership*, *quantified impact*, and learning loop: after each deployment I reviewed failure reasons, updated the status‑code matrix, and shared best practices with the wider team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
