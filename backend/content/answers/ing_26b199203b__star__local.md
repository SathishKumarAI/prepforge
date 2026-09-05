---
qid: ing_26b199203b__star__local
question: 'Explain: The interview loop — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 387
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:57-05:00'
sources: []
---

**Situation:**  
When I joined the product team at a mid‑size SaaS company, our search engine was only returning ~60 % relevant results for internal documentation. The engineering manager asked me to investigate why the AI‑powered relevance model was underperforming.

**Task:**  
I needed to redesign the end‑to‑end interview loop—data ingestion → training → evaluation → deployment—to improve precision by at least 15 % within three sprints, while keeping latency below 200 ms per query.

**Action:**  
1. **Data Pipeline Revamp:** I introduced a Kafka topic that streamed user click logs in real time, then used Apache Flink to enrich each event with contextual metadata (user role, document age).  
2. **Model Training Loop:** Leveraged PyTorch Lightning to train a transformer on this enriched corpus, adding a custom loss term that penalized over‑fitting to frequent queries.  
3. **Evaluation Stage:** Built an automated A/B testing harness in Go that routed 5 % of traffic to the new model and logged relevance scores via Prometheus.  
4. **Deployment & Rollback:** Deployed the model through a canary release on Kubernetes, using Istio’s traffic mirroring to monitor latency and success rates before full cut‑over.

**Result:**  
The precision jumped from 60 % to 78 %, exceeding our target by 3 %. Latency stayed under 180 ms. The interview loop now runs every 48 hours, catching drifts early. I learned that tightly coupling data ingestion with real‑time evaluation dramatically accelerates AI model maturity and reduces the “black box” risk for end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
