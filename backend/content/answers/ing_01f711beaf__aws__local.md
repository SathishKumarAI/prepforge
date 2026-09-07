---
qid: ing_01f711beaf__aws__local
question: 'Explain: Head-to-Head Comparison — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 473
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:43-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to redesign the product recommendation engine for a global marketplace that had ~10 M daily active users. The existing “pure‑search” pipeline returned only keyword matches, so click‑through rates (CTR) were 3 % lower than the industry benchmark.  

**Action**  
I introduced a **Hybrid Search** model—combining semantic embeddings with traditional inverted indexes—to surface both exact and contextually relevant items.  
1. **Data layer** – built an OpenSearch domain with two indices: one for keyword tokens (high‑throughput, low cost) and another for dense vectors stored in Amazon Kendra or SageMaker endpoints.  
2. **Query flow** – a Lambda orchestrator receives the user query, runs a lightweight Lucene match first; if hits < 5 it triggers a SageMaker “semantic” inference that scores candidate items from the vector index. The top‑k results are merged and re‑ranked by a custom scoring function.  
3. **Scalability** – leveraged OpenSearch’s autoscaling on CPU/memory, SageMaker batch transform for cold starts, and Amazon CloudWatch alarms to auto‑spin additional inference endpoints during traffic spikes.  
4. **Cost & Availability** – kept the vector index in a single AZ (replicated via cross‑region snapshot) because read‑latency dominated; overall cost dropped 12 % while maintaining 99.9 % SLA.

**Result**  
CTR rose from 3.2 % to 5.7 % (+78 %) within two weeks of launch, and revenue per visitor increased by $0.08. The hybrid system also reduced query latency from 350 ms to 210 ms on average.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, conducted A/B tests, and iterated on the scoring logic based on real traffic data—demonstrating *Ownership* and *Dive Deep*. The success reinforced that blending classic search with AI can deliver measurable business impact while staying cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
