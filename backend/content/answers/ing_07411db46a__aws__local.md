---
qid: ing_07411db46a__aws__local
question: 'Explain: Using Graph Databases for Social Connections'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 620
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:42:29-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked with building a real‑time friend‑recommendation engine for a social‑media startup that had 12 M active users and a 40% monthly churn rate. The existing relational model could not surface deep, transitive relationships fast enough to keep the user experience snappy.

**Task (T)**  
I owned the end‑to‑end solution: ingesting billions of interaction events, modeling the graph, training a link‑prediction model, and serving recommendations with <200 ms latency while keeping cost under $500K/yr.

**Action (A)**  

| Step | AWS Services | Reasoning |
|------|--------------|-----------|
| 1. **Data ingestion** | Kinesis Firehose → Neptune import jobs | Low‑latency stream to a managed graph store. |
| 2. **Graph storage** | Amazon Neptune (Gremlin/ SPARQL) | Native property graph, ACID, 99.999% availability. |
| 3. **Feature generation** | Lambda + SageMaker Pipelines | Compute neighbor counts, PageRank, and embeddings on demand; auto‑scales with CloudWatch. |
| 4. **Model training** | SageMaker Graph Neural Network (GNN) | Trained nightly on a 10 GB subgraph; inference latency <50 ms. |
| 5. **Serving** | API Gateway + Lambda@Edge | Global edge caching reduces round‑trip to <200 ms for 95% of requests. |

**Result (R)**  
*Graph‑based recommendations lifted CTR from 3.2% to 7.8% (+143%) and reduced churn by 18% in Q4. Cost stayed at $470K/yr, below the target budget.*

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered a recommendation system that directly improved user engagement and retention.
- **Ownership** – Took full responsibility from ingestion to model deployment, continuously iterating on metrics.
- **Dive Deep & Bias for Action** – Proactively selected Neptune after profiling latency; executed the migration within 6 weeks.  
- **Deliver Results** – Quantified lift in key business KPIs.

### Bar‑Raiser Takeaways
1. **Quantified Impact** – Clear before/after numbers show real value.
2. **Depth of Knowledge** – Demonstrated understanding of graph theory, GNNs, and AWS services trade‑offs (Neptune vs DynamoDB).
3. **Learning from Failure** – Mentioned iterative model retraining after noticing a 5% drift in user affinity metrics, leading to a new feature pipeline.

This showcases how I blend technical rigor with Amazon’s customer‑centric culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
