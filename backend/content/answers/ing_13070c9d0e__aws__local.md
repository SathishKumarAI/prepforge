---
qid: ing_13070c9d0e__aws__local
question: 'Explain: New Threat Categories — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 418
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:08:43-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI Security team at Amazon, we discovered that large‑language models (LLMs) were vulnerable to a new class of attacks—*prompt injection*, *model inversion*, and *data poisoning*. Our goal was to define these threat categories, build detection pipelines, and harden our production LLMs with minimal latency impact.

**Action**  
1. **Dive Deep & Ownership** – I led a cross‑functional squad (ML Ops, IAM, Security) to map each attack vector against the model lifecycle.  
2. **Design** – Built an event‑driven detection service using Amazon SageMaker Endpoint + Lambda, Kinesis Data Streams for real‑time prompt telemetry, and GuardDuty for anomaly scoring.  
3. **Bias for Action & Invent & Simplify** – Implemented a lightweight “prompt sanitizer” that rewrites high‑risk prompts before they hit the model, reducing injection success by 92% (from 12% to 0.8%) with <5 ms overhead.  
4. **Deliver Results** – Deployed to 80% of our production workloads; incidents dropped from 15/day to 1/day within two weeks.

**Result**  
- **Quantified Impact:** Cut LLM‑related security incidents by 93%, saving an estimated $2.5M in potential breach costs annually.  
- **Bar‑raiser cues:** Demonstrated deep technical ownership, clear data‑driven metrics, and iterative learning (we refined the sanitizer after a false‑positive spike).  

**Leadership Principles Highlighted**  
- *Customer Obsession* – Protecting user data integrity.  
- *Ownership & Dive Deep* – Own end‑to‑end threat detection pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
