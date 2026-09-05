---
qid: ing_aaae2811f8__star__local
question: 'Explain: different ways one was rest base Json — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 352
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:17-05:00'
sources: []
---

**Situation:**  
At a streaming startup, the recommendation engine was pulling user data from a legacy monolith that returned deeply nested JSON payloads. The latency spike hit our 300 ms SLA and churned users during peak hours.

**Task:**  
I needed to flatten those JSON structures into a clean schema for the new microservice while preserving all feature vectors used by the ML model, and do it fast enough to keep the pipeline running in real time.

**Action:**  
1. Built a lightweight Python ETL using `pydantic` models to validate incoming payloads.  
2. Leveraged `jsonpath-ng` to extract only the fields relevant to the model (user demographics, watch history, device type).  
3. Employed `marshmallow` to serialize these into a compact dictionary, dropping nulls and normalizing date formats.  
4. Introduced caching with Redis for repeated user lookups, reducing database hits by 40 %.  
5. Deployed the microservice behind an async FastAPI endpoint; used `uvicorn` workers tuned to the CPU profile.

**Result:**  
The flattened JSON reduced payload size from ~2.3 MB to ~0.8 MB per request, cutting end‑to‑end latency by 70 % (from 450 ms to 135 ms). The recommendation accuracy stayed unchanged, and we saw a 12 % drop in user churn during the next quarter. I learned that thoughtful schema design coupled with async processing can turn a chaotic monolith into a lean, ML‑ready microservice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
