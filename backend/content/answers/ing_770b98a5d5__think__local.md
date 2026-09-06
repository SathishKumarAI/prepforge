---
qid: ing_770b98a5d5__think__local
question: 'Explain: HTTP API Codes — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 499
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:52:47-05:00'
sources: []
---

### 1️⃣ Clarify the Scope & Assumptions  
- **Audience**: ML practitioners, not backend devs – focus on *why* HTTP codes matter for model‑serving APIs.  
- **Assumption**: The API is a RESTful service exposing inference endpoints (e.g., `/predict`).  

### 2️⃣ Adopt the “REST + HTTP Status” Framework  
1. **Resource & Verb** – identify the operation (GET, POST).  
2. **Success vs Failure** – map outcome to status class (2xx success, 4xx client error, 5xx server error).  
3. **Granularity** – choose specific codes that convey actionable info to ML ops (e.g., 422 for invalid payload).  

### 3️⃣ Step‑by‑Step Reasoning  
- **POST /predict** →  
  - `200 OK` + JSON prediction → normal success.  
  - `400 Bad Request` if JSON malformed → client fix.  
  - `422 Unprocessable Entity` when schema valid but feature values out of range → data issue.  
  - `429 Too Many Requests` to signal rate‑limit → scaling consideration.  
  - `500 Internal Server Error` for model crash → alert ops.  

- **GET /health** →  
  - `200 OK` with simple JSON `{status:"healthy"}` → uptime monitoring.  

### 4️⃣ Common Pitfalls to Avoid  
- Overloading `200` for everything; lose error semantics.  
- Using `404` for model‑not‑found when the endpoint exists – better `422`.  
- Mixing `400` and `422`; keep them distinct: syntax vs semantic validation.  
- Ignoring rate‑limit codes (`429`) → can mislead developers into thinking it’s a bug.  

### 5️⃣ Sanity Check & Communicate Clearly  
1. **List the status codes** in a table next to each endpoint.  
2. **Explain the rationale** for each choice (e.g., why `422` over `400`).  
3. **Provide examples** of request/response payloads with corresponding status.  

This structured, assumption‑aware approach ensures ML engineers grasp not just *what* codes are returned, but *why* they’re chosen in a RESTful inference service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
