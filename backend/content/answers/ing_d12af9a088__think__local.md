---
qid: ing_d12af9a088__think__local
question: 'Explain: Request Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 475
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:46:28-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What does “Request Parts” mean?* Assume it refers to the typical components a client sends when making an HTTP request (URL, method, headers, body).  
   - *Assume the audience knows basic web concepts but not deep ML‑system design.*  
   - *Goal:* Show how these parts map onto building a machine‑learning API.

**2️⃣ Adopt a mental model**  
   Use the classic **client–server request/response cycle**:  
   1. Client → Server (request)  
   2. Server processes → Client (response).  
   Overlay this on an ML service: *input data* ↔ *prediction*.

**3️⃣ Step‑by‑step reasoning**  
   a. **Endpoint URL & HTTP method** – choose RESTful verbs (`POST /predict`, `GET /status`).  
   b. **Headers** – content type (`application/json`), authentication (API key, JWT).  
   c. **Body** – payload format: raw features, serialized tensors, or multipart for files.  
   d. **Query parameters** – optional flags (e.g., `confidence=true`).  
   e. **Server side** – parse request → validate → run model inference → serialize output.  
   f. **Response structure** – status code, headers, JSON body with predictions and metadata.

**4️⃣ Common traps to avoid**  
   - Mixing up *request* vs *response* fields (e.g., putting prediction in the request).  
   - Using `GET` for data‑heavy payloads; prefer `POST`.  
   - Neglecting authentication → open API.  
   - Returning raw model weights instead of a sanitized result.

**5️⃣ Sanity‑check & communicate**  
   • Verify that every part of the request is necessary and secure.  
   • Explain each field’s purpose in plain language: “The body carries the input features; the header tells the server how to interpret them.”  
   • End with an example curl command to illustrate a complete request.

This structured approach lets you reason through any ML API design question, ensuring clarity, security, and usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
