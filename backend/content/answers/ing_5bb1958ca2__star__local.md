---
qid: ing_5bb1958ca2__star__local
question: 'Explain: So you just kind of try to — Building Software Systems At Google
  and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 311
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:57-05:00'
sources: []
---

**Situation:**  
When I joined the AutoML team, we were tasked with launching a new recommendation engine for YouTube Shorts. The existing pipeline was batch‑oriented and couldn’t deliver real‑time personalization; user engagement had plateaued at 12% CTR.

**Task:**  
I needed to design an end‑to‑end system that could ingest streaming data, train models in near real time, and serve predictions with sub‑100 ms latency, all while keeping infrastructure costs under our $5M budget.

**Action:**  
First, I mapped the data flow from Pub/Sub → Dataflow → BigQuery for feature storage. I introduced TensorFlow Serving on GKE autoscalers to expose the model as a gRPC endpoint. To reduce training time, I switched from full‑batch training to incremental updates using a lightweight online learning algorithm (online logistic regression) and scheduled nightly retrains via Cloud Composer. For latency, I added a local caching layer with Redis and implemented an A/B test harness in Cloud Monitoring to compare the new model against the legacy one.

**Result:**  
The new system lowered prediction latency from 2 s to 70 ms, boosted CTR by 18% (from 12% to 14.3%), and cut training costs by 35%. I learned that marrying Google’s serverless tooling with thoughtful model engineering yields scalable, cost‑effective ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
