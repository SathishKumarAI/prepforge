---
qid: ing_406f3c893f__aws__local
question: 'Explain: API Request Structure — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 473
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:38-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to expose a large‑scale inference engine for LLMs to external partners via a RESTful API. The requirement: *“Design an API request structure that lets users invoke different ‘computer use agents’ (e.g., browsing, file manipulation) while keeping latency <200 ms and cost <\$0.05 per 100 requests.”*  

**Action – Design & AWS Services**  
I applied **Customer Obsession** by first interviewing partners to surface pain points: they needed fine‑grained control over agent selection and real‑time status feedback. I drafted a *single‑endpoint* JSON schema:

```json
{
  "request_id": "<uuid>",
  "agents": [
    {"name":"browser","params":{"url":"https://…"}},
    {"name":"file_reader","params":{"path":"/data/report.csv"}}
  ],
  "timeout_ms":200,
  "priority":"high"
}
```

* **API Gateway** (REST API) – throttles 5 k rps, auto‑scales.  
* **Lambda@Edge** – validates JSON, routes to a *step‑functions state machine* that orchestrates agents.  
* **SQS FIFO** – queues tasks; dead‑letter queue for failures.  
* **DynamoDB** (Provisioned mode) stores per‑request metadata and audit logs.  

I added **WebSocket** support for streaming status updates, satisfying *Bias for Action* by letting partners see progress instantly.

**Result**  
After a 3‑month rollout:  
* Latency dropped from 350 ms to 165 ms (30% improvement).  
* Cost per 100 requests fell to \$0.036 (35% savings).  
* Partner satisfaction score rose from 4.1/5 to 4.8/5.  

**Reflection**  
The biggest learning was that a *single, extensible request format* reduced client friction and allowed us to add new agents without breaking existing consumers—exactly the ownership mindset we champion at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
