---
qid: ing_728da240b0__faang__local
question: An agent task takes 2-10 minutes. How do you design the API for clients
  kicking off and tracking these jobs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 523
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:10:04-05:00'
sources: []
---

**Clarify**  
The client submits a “task” that takes **2–10 min** to run.  
We need an API for:  

1. **Kick‑off** – start the job and return an identifier.  
2. **Tracking** – poll or get callbacks about status, result or failure.  

Assumptions: stateless HTTP clients, eventual consistency is acceptable, no real‑time streaming required, and we can use cloud services (e.g., Lambda + SQS).  

---

### Approach  
1. **Endpoint `/jobs` (POST)** – client sends payload → returns `jobId`.  
2. **Background worker** pulls job from a queue, processes it, writes result to a durable store (S3/DB) and updates status in a key‑value table.  
3. **Status endpoint `/jobs/{id}` (GET)** – returns `{status: [queued|running|completed|failed], progress: %, error?}`.  
4. Optional webhook support: client can register an `callbackUrl` in POST; worker sends HTTP POST on completion/failure.  

Use idempotent `PUT /jobs/{id}/cancel` to stop long jobs.  

---

### Depth  
- **Queue**: Amazon SQS (FIFO if ordering matters).  
- **Processing**: AWS Lambda or ECS task, auto‑scales with queue depth.  
- **State store**: DynamoDB for status + S3 for payload/result; TTL on status rows to clean up after 24 h.  
- **Complexity**: O(1) per request; worker cost proportional to job runtime (≤10 min).  

---

### Edge Cases  
- Duplicate POST → generate same `jobId`? Use client‑supplied idempotency key.  
- Job hangs > timeout → worker times out, marks `failed`.  
- Network glitch on callback → retry with exponential backoff.  

---

### Optimize & Communicate  
- **Batch status** (`/jobs?ids=…`) for clients polling many jobs.  
- Expose metrics (latency, queue depth) via CloudWatch; use them to auto‑scale workers.  
- Document idempotency, webhook schema, and error codes in Swagger/OpenAPI.  

This design gives a clean RESTful interface, decouples execution from API latency, and scales horizontally while keeping client code simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
