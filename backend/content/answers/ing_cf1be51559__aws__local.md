---
qid: ing_cf1be51559__aws__local
question: 'Explain: The Gap Problem — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 444
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:15-05:00'
sources: []
---

**Situation & Task**  
While redesigning our product‑search for a global e‑commerce marketplace, I discovered the *Gap Problem*: user queries that mix structured attributes (price, brand) and unstructured intent (“cheap eco‑friendly running shoes”) caused 35 % of clicks to return no results. My goal was to close this gap without compromising latency or cost.

**Action**  
I proposed a **Hybrid Search Architecture**:

| Layer | AWS Service | Role |
|-------|-------------|------|
| Ingestion | Lambda + Kinesis Firehose | Stream product metadata and user click logs |
| Indexing | OpenSearch (with custom ingest pipelines) | Store full‑text fields; use *nested* attributes for structured data |
| Retrieval | OpenSearch query planner + SageMaker inference | First filter by structured facets, then rank with a lightweight BERT model hosted on SageMaker EdgeContainer for real‑time intent scoring |
| Caching | ElastiCache Redis | Cache top 10 k queries to keep <30 ms latency |

I introduced *Feature Store* in SageMaker to train the ranking model on click‑through data, achieving a 12 % lift in CTR and a 7 % drop in bounce rate.

**Result**  
After A/B testing over two weeks:

- **CTR +12 %**, **bounce rate –7 %**
- Search latency remained <45 ms (95th percentile)
- Cost increased by only 4 % due to efficient caching and on‑demand SageMaker endpoints

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into query logs to uncover user intent patterns, and iterated quickly with a bias for action. The bar‑raiser will note my quantitative impact, architectural depth, and learning loop—tuning the ranking model when new product categories were added. This solution exemplifies **Customer Obsession** (better search experience) and **Ownership** (full lifecycle delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
