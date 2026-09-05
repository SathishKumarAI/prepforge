---
qid: ing_0305d63182__star__local
question: 'Explain: Evaluation — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 389
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:14-05:00'
sources: []
---

**Situation:**  
At my previous firm, we launched a legal research platform called “BigLaw Bench” to streamline discovery for civil litigation teams. By the third quarter, our internal audit showed that document retrieval latency had risen from an average of 1.2 seconds to over 4 seconds during peak load, and user satisfaction scores dropped by 18%.

**Task:**  
I was tasked with diagnosing the bottleneck in the retrieval pipeline, redesigning it for scalability, and proving its effectiveness through rigorous evaluation before rolling it out to all practice groups.

**Action:**  
First, I instrumented the entire query stack using OpenTelemetry, capturing per‑service latency and error rates. With these metrics, I mapped a performance graph that revealed the search index service was saturated at 10 k QPS. I then refactored the index layer: switched from a monolithic ElasticSearch cluster to a sharded Solr architecture with a dedicated caching layer (Redis) for hot queries. To validate improvements, I built an A/B test harness that compared user query response times and recall rates against the legacy system. Using Python’s `pytest-benchmark` library, we collected 200k real‑world queries over two weeks.

**Result:**  
The new architecture reduced average retrieval latency to 0.8 seconds—a 70% improvement—and increased recall by 4 percentage points (from 92% to 96%). User satisfaction rose from 78% to 93%. I also documented a cost‑benefit analysis that projected $120k annual savings in infrastructure spend. This exercise taught me the importance of end‑to‑end observability and data‑driven validation when optimizing AI‑powered legal tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
