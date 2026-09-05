---
qid: ing_b7339363b4__star__local
question: 'Explain: ​ Offline evaluations — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 321
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:32-05:00'
sources: []
---

**Situation:**  
At my last role, we were building a conversational AI that pulled information from multiple APIs. The product manager set a target of reducing user query latency by 30% while keeping response quality high. We needed a way to test changes before deploying them to production.

**Task:**  
Create an offline evaluation pipeline to measure both latency and answer accuracy for new model versions, so we could iterate quickly without affecting live traffic.

**Action:**  
I set up a mock environment that replayed real user logs stored in S3. Using LangChain’s `OfflineEvaluator`, I defined two metrics: (1) `latency_ms` by timing each chain call and (2) `factual_accuracy` via a custom scorer that compared the generated text against ground‑truth answers. I wrapped our retrieval chain with a caching layer to simulate production latency, then ran 10,000 queries in parallel using Ray for speed. Results were logged to Grafana dashboards, and I added an alert if accuracy dropped below 92%.

**Result:**  
The new version cut average latency from 650 ms to 440 ms (a 32% improvement) while maintaining a 94% factual accuracy rate. The offline evaluation loop reduced release cycle time by two days and gave the team confidence that changes wouldn’t regress quality. I learned how crucial it is to balance speed, realism, and metric selection when testing AI systems before live rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
