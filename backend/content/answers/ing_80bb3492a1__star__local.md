---
qid: ing_80bb3492a1__star__local
question: 'Explain: Verify Before Parsing Business Data — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 334
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:50-05:00'
sources: []
---

**Situation**  
In my last role as a backend engineer at a fintech startup, we introduced a webhook integration to receive real‑time transaction data from partner banks. The incoming payloads were in JSON but often included extra fields or malformed dates that caused downstream processing failures and delayed settlement.

**Task**  
I was tasked with building a robust verification layer that would validate the business data before it entered our parsing pipeline, ensuring we only processed clean, schema‑compliant events while still meeting our 50 ms latency SLA for critical alerts.

**Action**  
I designed a two‑stage middleware in Go: first, a lightweight JSON schema validator using `github.com/xeipuuv/gojsonschema` that checked field types, required keys, and business rules (e.g., amount > 0). Second, I added a circuit‑breaker with Hystrix to drop or retry malformed events. Valid payloads were forwarded via Kafka to the parsing service; invalid ones triggered an audit log and a webhook back‑to‑partner with a concise error message. I also introduced a metrics dashboard (Prometheus + Grafana) to monitor validation success rates.

**Result**  
The verification layer reduced downstream parse errors by 92 %, cut settlement lag from 120 ms to 38 ms, and improved partner satisfaction scores by 15 %. I learned how schema validation combined with observability can turn a fragile webhook ingestion into a resilient, low‑latency pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
