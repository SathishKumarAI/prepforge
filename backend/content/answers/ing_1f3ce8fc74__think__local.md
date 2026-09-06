---
qid: ing_1f3ce8fc74__think__local
question: 'Explain: Use a Dead Letter Queue — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 432
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:45:31-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is a Dead‑Letter Queue (DLQ)?* A secondary queue for messages that can’t be processed after retries.  
   - *Webhooks context:* Incoming HTTP callbacks from third‑party services.  
   - Assume: stateless microservice, idempotent processing, eventual consistency, and limited retry budget.

**2️⃣ Mental model / framework**  
   - **Message flow diagram:** Source → Queue (primary) → Worker → Success/Failure.  
   - **Error taxonomy:** transient vs permanent errors; network timeouts vs validation failures.  
   - DLQ sits as a *sink* for permanent or unprocessable messages.

**3️⃣ Step‑by‑step reasoning**  
   1. Accept webhook, enqueue in primary queue.  
   2. Worker pulls and processes; if processing fails after N retries → send to DLQ.  
   3. Store original payload + error metadata (timestamp, stack trace).  
   4. Trigger alerting / manual review pipeline.  
   5. Optionally, schedule a re‑process job that can attempt the message again with back‑off or enriched context.

**4️⃣ Common traps to avoid**  
   - **No idempotency:** Re‑processing DLQ messages may duplicate side effects.  
   - **Blind retry loop:** Treating all failures as transient leads to endless retries and queue bloat.  
   - **Missing observability:** Without metrics on DLQ size or age, issues go unnoticed.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “Does this handle both network glitches and data errors?”  
   - Verify that the DLQ path is *audit‑friendly* (payload + error logs).  
   - Communicate: “We route unprocessable webhooks to a DLQ so we can surface them for debugging without blocking normal traffic.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
