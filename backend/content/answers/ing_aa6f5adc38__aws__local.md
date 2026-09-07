---
qid: ing_aa6f5adc38__aws__local
question: 'Explain: Native graph store — Recommendation engine & system use cases
  with graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 540
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:36-05:00'
sources: []
---

**Scenario (S):**  
When launching a new e‑commerce platform, I was tasked with building a real‑time recommendation engine that could surface up to 10 k personalized items per user while keeping latency < 200 ms.

**Task (T):**  
Choose an underlying data store that can model complex relationships (customers → purchases → categories) and support fast graph traversal for “people who bought X also bought Y”.

**Action (A – Technical Design):**  
I selected **Amazon Neptune** as the native graph store.  

| Requirement | Why Neptune |
|-------------|--------------|
| **Relationship depth** | Supports property graphs with up to 10 k hops, ideal for multi‑step recommendations |
| **Latency** | Gremlin/ SPARQL queries execute <200 ms at scale |
| **Scalability** | Read replicas (up to 15) + automatic sharding; can grow from 1 TB to 50 TB with minimal downtime |
| **Cost** | Spot‑based instances reduce compute cost by ~30% |
| **Integration** | Seamless with AWS Lambda, SageMaker for model scoring, and CloudWatch for monitoring |

I built a **Lambda‑driven ETL** that ingests purchase logs from Kinesis into Neptune via the Gremlin API. A scheduled **SageMaker endpoint** runs a Graph Neural Network (GNN) every 12 h, updating edge weights; Lambda triggers the update to Neptune. The recommendation API uses a cached Gremlin query per user session.

**Result (R):**  
- Click‑through rate increased from 2.3% to **4.1%** (+78%) within 3 months.  
- Latency stayed <180 ms for 99th percentile requests.  
- Operational cost fell by **27%** compared to a relational fallback.

---

### Leadership Principles Anchored

* **Customer Obsession:** Delivered recommendations that doubled engagement, directly improving customer experience.  
* **Ownership & Dive Deep:** Took full responsibility for the data pipeline, debugging Neptune query performance down to index tuning.  

Bar‑raisers listen for: ownership of end‑to‑end flow, depth in troubleshooting (e.g., diagnosing why Gremlin queries were slow), measurable impact (CTR lift), and reflection on what was learned when initial Lambda batch failed due to memory limits, leading to the adoption of spot instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
