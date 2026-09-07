---
qid: ing_2723f5e334__faang__local
question: What should you log for every LLM call in production, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 659
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:34-05:00'
sources: []
---

**Clarify**  
We’re asked: *“What should you log for every large‑language‑model (LLM) request in production, and what pitfalls can arise?”*  
Assumptions:  
- The system is a stateless microservice exposing an LLM endpoint.  
- Latency, cost, correctness, and compliance are all mission‑critical.  
- Logs will feed monitoring dashboards, A/B tests, and audit trails.

**Approach**  
1. Identify the *minimum observable set* (request id, timestamps, user & session IDs).  
2. Add *contextual metadata* (model name/variant, prompt hash, token counts).  
3. Capture *outputs that matter* (response text or embedding vector, confidence scores).  
4. Log *resource usage* (GPU hours, memory, cost per call).  
5. Record *error & exception data* with stack traces.  
6. Respect privacy by redacting PII and rotating keys.

**Depth**  

| Item | Why it matters | Typical format |
|------|-----------------|---------------|
| `request_id` | Correlates logs across services | UUID |
| `timestamp_start / timestamp_end` | Latency, SLA monitoring | ISO‑8601 |
| `user_id / session_id` (if applicable) | Auditing & personalization | Anonymized hash |
| `model_name`, `variant`, `token_limit` | Enables model‑level metrics | String/Int |
| `prompt_hash` | Detect duplicate or malicious prompts | SHA256 |
| `input_token_count`, `output_token_count` | Cost and throttling | Int |
| `response_text` (or embedding ID) | Quality checks, feature flag tests | Truncated string / vector id |
| `confidence_score / temperature` | Calibration monitoring | Float |
| `gpu_utilization`, `memory_used` | Infrastructure billing | Int/Float |
| `error_code / exception_message` | Failure analysis | String |

**Edge cases**  
- **Large prompts/responses**: log only a hash or truncated preview to avoid log bloat.  
- **Sensitive data**: enforce automatic redaction; fail‑safe if PII slips through.  
- **High volume**: ensure logs are asynchronous and batched to avoid I/O contention.  
- **Model drift**: compare prompt hashes over time; flag unexpected distribution shifts.

**Optimize & communicate**  
- Use a structured log format (JSON) so downstream tools can query by field.  
- Index only the most frequent fields (`request_id`, `model_name`) in your log store to keep query latency low.  
- Automate anomaly detection on token counts and latency; surface alerts when thresholds are breached.  
- When explaining to stakeholders, emphasize that these logs give end‑to‑end observability: from user intent → model inference → billing → compliance.  

By logging the **right** set of fields—identifiers, context, metrics, outputs, and errors—we enable proactive monitoring, cost control, and audit readiness while avoiding pitfalls like log bloat, privacy leaks, and performance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
