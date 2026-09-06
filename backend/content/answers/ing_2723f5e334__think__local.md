---
qid: ing_2723f5e334__think__local
question: What should you log for every LLM call in production, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 455
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:16:15-05:00'
sources: []
---

**1️⃣ Clarify scope & assumptions**  
   * Define “LLM call” (API request, prompt + context).  
   * Assume you control the client code but not the LLM provider’s internals.  
   * Aim for observability: latency, success/failure, cost, and safety signals.

**2️⃣ Adopt a logging framework**  
   * Use structured JSON logs so they’re queryable (e.g., Loki, CloudWatch).  
   * Tag each entry with a unique request ID to stitch multi‑step calls.  
   * Treat logs as immutable audit records—no post‑processing edits.

**3️⃣ Step‑by‑step reasoning**  

| Item | Why it matters | Typical field |
|------|----------------|---------------|
| Prompt text (or hash) | Detect regressions, trace failures | `prompt_hash` |
| Full request payload | Reproduce the call in dev | `request_body` |
| Timestamp & latency | SLA monitoring, capacity planning | `start_ts`, `duration_ms` |
| Response metadata | Cost, token count, provider status | `token_count`, `response_cost` |
| Success flag + error code | Alerting on failures | `status`, `error_code` |
| Safety / moderation flags | Compliance audit trail | `moderation_passed` |

**4️⃣ Pitfalls to avoid**  
   * **Over‑logging secrets** – redact or hash PII.  
   * **Large payloads in production logs** – stream or store separately (S3, DB).  
   * **Missing correlation IDs** – leads to orphaned logs and hard debugging.  
   * **Assuming provider guarantees safety** – always log moderation outcomes.

**5️⃣ Sanity‑check & communicate**  
   * Verify that every log line contains the request ID and timestamp.  
   * Run a quick query: “count by status” → should show 0% failures in healthy runs.  
   * Explain to ops: “These logs give us latency, cost, and safety visibility; we keep them immutable for audit.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
