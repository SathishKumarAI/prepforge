---
qid: ing_0614ea3a01__aws__local
question: What query understanding techniques would you apply before retrieval, and
  when is each worth it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 544
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:31-05:00'
sources: []
---

**Situation / Task**  
While launching a global e‑commerce search for the **Amazon Marketplace**, I was tasked with reducing cart abandonment caused by poor query matching. The goal: improve click‑through from 12 % to >20 % while keeping latency <200 ms.

**Action**  

| Technique | When it pays off | AWS services & trade‑offs |
|-----------|------------------|--------------------------|
| **Intent + Entity extraction** (Comprehend, Lex) | High query volume (>10k QPS), diverse product catalog. Improves routing to correct category and filters. | Adds ~15 ms per request; cost $0.0003/Q. |
| **Typo correction & phonetic matching** (ElasticSearch/Opensearch with `phonetics` plugin) | 30 % of queries contain typos (verified by CloudWatch logs). Cuts “no‑results” errors by 18 %. | Extra index size, but negligible cost vs benefit. |
| **Synonym & semantic expansion** (Comprehend Custom Classification + SageMaker embeddings) | Low‑frequency niche categories where users use varied vocabularies. Raises recall from 55 % to 78 %. | Requires model retraining quarterly; increases inference time by ~10 ms. |
| **Contextual slot filling** (Lambda + DynamoDB for session context) | Multi‑step searches (e.g., “red running shoes size 9”). Boosts conversion by 12 %. | Adds ~20 ms per request, but no extra cost beyond Lambda invocations. |

I staged the stack: first a lightweight typo filter, then intent/entity routing, and finally optional semantic enrichment for high‑value queries.

**Result**  
Within three months, click‑through rose to **22 %**, cart abandonment fell 15 %, and overall search latency stayed under 180 ms. Cost increased by only 8 %.  

**Reflection**  
Ownership drove me to iterate on the trade‑off between accuracy and speed; deep dive into CloudWatch metrics revealed that beyond 10k QPS, typo correction was most ROI‑heavy. I learned that incremental deployment of richer NLP features keeps cost in check while delivering measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
