---
qid: ing_3e9419bd71__star__local
question: 'Explain: Learning & development — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 322
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:33:34-05:00'
sources: []
---

**Situation:**  
When I joined Glean’s AI team, our knowledge‑base search scores were dropping by 18% after a major product rollout. The engineering leads said we needed to redesign the learning pipeline for better relevance.

**Task:**  
I was tasked with building an end‑to‑end continuous‑learning system that could ingest new content, retrain embeddings on‑the‑fly, and deploy updated models without downtime—while ensuring compliance with data‑privacy regulations.

**Action:**  
I designed a micro‑service architecture using Docker and Kubernetes, orchestrated by Argo Workflows. For feature extraction I leveraged Sentence‑Transformers fine‑tuned on our internal corpus, then used Ray to parallelize inference across the cluster. The system stored embeddings in Pinecone for low‑latency retrieval, and I added an A/B test harness with Optuna to automatically pick the best hyperparameters each week. We logged every training cycle to Grafana dashboards so we could track drift metrics in real time.

**Result:**  
Within two months the search relevance score improved by 27%, and query latency dropped from 350 ms to 210 ms. The pipeline now processes 1,200 new documents per day with zero manual intervention. I learned that building a robust learning‑and‑development loop requires tight integration between ML ops tooling and business metrics—an insight I’m excited to bring to future AI roles at Glean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
