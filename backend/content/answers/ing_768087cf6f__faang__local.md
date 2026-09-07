---
qid: ing_768087cf6f__faang__local
question: 'Explain: REST (REpresentational State Transfer)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 495
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:19:20-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *REST*—a design paradigm for web services that leverages HTTP to expose resources. I’ll assume they’re looking for the core principles (statelessness, resource URIs, standard verbs) and why it’s popular in ML pipelines.

---

**Approach**  
1. Define REST as an architectural style.  
2. List its key constraints.  
3. Illustrate with a typical ML‑model serving example.  
4. Mention benefits for ML workflows (scalability, versioning).  

---

**Depth**  
REST stands for *Representational State Transfer*. It uses the standard HTTP protocol to expose **resources** identified by URIs. Each request is **stateless**: the server does not keep session data; all information needed to process a request must be in that request (headers, body). The client and server communicate via **uniform interface**:

| Verb | Meaning | Typical ML use |
|------|---------|----------------|
| GET  | Retrieve model/metadata | `GET /models/v1` → download weights |
| POST | Create new resource | `POST /train` → start training job |
| PUT  | Replace a resource | `PUT /models/v2` → update weights |
| DELETE | Remove a resource | `DELETE /jobs/{id}` |

Responses are usually JSON (or protobuf), often with hypermedia links (HATEOAS) to navigate the API. Because each call is independent, REST services scale horizontally and fit well in containerized ML deployments.

---

**Edge Cases**  
- **Large payloads**: binary model files may need chunked transfer or separate S3 download.  
- **Stateful training jobs**: need a separate job‑queue service; the REST endpoint merely triggers it.  
- **Security**: authentication (OAuth2/JWT) and rate limiting must be added.

---

**Optimize & Communicate**  
Explain that while REST is simple, modern ML stacks often layer gRPC or GraphQL for heavy data transfer or complex queries. Emphasize how REST’s statelessness reduces cache invalidation problems—critical when serving millions of inference requests. Wrap up by highlighting that the same principles that make REST robust also enable reproducible model serving pipelines in a production ML environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
