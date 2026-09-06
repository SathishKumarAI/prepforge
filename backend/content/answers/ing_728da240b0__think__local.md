---
qid: ing_728da240b0__think__local
question: An agent task takes 2-10 minutes. How do you design the API for clients
  kicking off and tracking these jobs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 460
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:35:55-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**

* What is “kicking off” – does it return a job ID, or stream progress?
* Who are the clients (web, mobile, batch) and their latency tolerance?
* Is there any need for synchronous vs asynchronous responses?
* Assume jobs run in a worker pool; max duration 10 min.

**2️⃣ Adopt an “async request/response” framework**

Treat each task as a *long‑running operation*:
- **Create** → submit job, get `job_id` + initial status.
- **Get** → poll or long‑poll for current state (`queued`, `running`, `completed`, `failed`).
- **Cancel** (optional) → request termination.

This mirrors RESTful patterns for background work and keeps the API simple.

**3️⃣ Step‑by‑step reasoning**

1. **Endpoint `/jobs` (POST)**  
   *Input*: job payload.  
   *Output*: `{job_id, status:"queued", location: "/jobs/{id}"}`.  
2. **Endpoint `/jobs/{id}` (GET)**  
   Return `{status, progress, result_url?}`.  
3. **Optional `/jobs/{id}/cancel` (POST/DELETE)**  
   Signal worker to stop and return new status.
4. **Client flow**  
   *Submit → receive ID* → *poll every 2–5 s until status is terminal*.  
   Use exponential back‑off or websockets if real‑time updates are needed.

**4️⃣ Common traps**

- Returning the full result immediately (blocks client).  
- Using long‑running GET that blocks for 10 min – clients will time out.  
- Forgetting to expose a “location” header so clients can discover status URL.

**5️⃣ Sanity check & verbalize**

*“I’m giving the client an instant reply with a job ID and then letting them poll for progress, which fits the 2–10 min window without risking timeouts.”*  
If I hear “do we need real‑time push?”, consider adding a webhook or SSE channel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
