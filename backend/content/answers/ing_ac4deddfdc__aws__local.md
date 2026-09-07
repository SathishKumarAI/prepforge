---
qid: ing_ac4deddfdc__aws__local
question: 'Explain: Input Isolation (XML & Markers) — Prompt Injection Defense'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 377
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:41-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑prevention team at an e‑commerce platform, we observed attackers injecting malicious prompts into our NLP service that processed XML payloads. The goal was to stop *prompt injection* without breaking legitimate business flows.

**Action (Dive Deep + Ownership)**  
1. **Isolated Input Streams** – Parsed every incoming XML in a sandboxed Lambda function using *aws-lambda-runtime*.  
2. **Marker Injection** – Wrapped user text with unique, opaque markers (`<<USR>>…</USR>`) and validated that only our marker set appeared.  
3. **WAF & CSP Rules** – Deployed AWS WAF to block known injection patterns at the edge (rate‑limit 10 req/s per IP).  
4. **Automated Regression Tests** – Added continuous‑integration tests in CodeBuild that fuzzed XML with random prompts; any failure triggered an immediate rollback.

**Result (Deliver Results)**  
- Reduced prompt‑injection incidents by **>99.8%** within 3 weeks.  
- Latency increased <5 ms on average, keeping SLA at 95th percentile <200 ms.  
- Cost of added Lambda invocations was <$0.02/month due to bursty traffic pattern.

**Reflection (Bias for Action + Learn)**  
Initial patch relied solely on regex; we saw false negatives after a sophisticated attack. Adding marker validation and WAF gave us measurable, repeatable protection while keeping user experience intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
