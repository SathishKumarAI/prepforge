---
qid: ing_b694a08750__faang__local
question: 'Explain: Make Processing Safe to Repeat — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 525
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:39-05:00'
sources: []
---

**Clarify**  
We’re asked how to design a system that processes webhooks safely so the same event can be retried without double‑counting or corrupting state.  
Assumptions I’d confirm:  
- The source (e.g., Stripe, GitHub) may send duplicates or out‑of‑order messages.  
- Each webhook has a unique identifier and a payload that may change over time.  
- The consumer must idempotently apply the event to downstream services.

**Approach**  
1. **Idempotency key extraction** – pull the webhook’s `id` (or a hash of its content).  
2. **Persistence layer** – store each key in a write‑once table (`processed_webhooks`).  
3. **Atomic check‑and‑insert** – on receipt, atomically test if the key exists; if not, insert and proceed; otherwise discard.  
4. **Processing pipeline** – once accepted, route to worker queue (e.g., Kafka) that performs the business logic.  
5. **State consistency** – use transactional writes or compensating actions so downstream updates are also idempotent.

**Depth**  
- Use a strongly‑consistent database (PostgreSQL with `INSERT … ON CONFLICT DO NOTHING`) for the key table; this guarantees single acceptance even under race conditions.  
- The worker consumes events from Kafka, which preserves order per partition but allows parallelism.  
- Business logic must be idempotent: e.g., “charge $10” should check if the charge record already exists before creating a new one.  
- Complexity: O(1) for key lookup/insert; overall system latency is dominated by DB write + worker processing.

**Edge Cases**  
- **Clock skew / out‑of‑order**: rely on webhook IDs, not timestamps.  
- **Large payloads**: store only the ID in the idempotency table to keep it small.  
- **Deletion of processed records**: implement TTL or archiving to prevent unbounded growth.

**Optimize & Communicate**  
- Cache recently seen keys in Redis for ultra‑fast duplicate detection, falling back to DB on miss.  
- Expose a “webhook status” API so clients can query processing outcome.  
- Document the idempotency contract clearly to external partners.  

This design ensures that retries are safe, duplicates are ignored, and state remains consistent—exactly what FAANG interviewers expect for robust webhook handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
