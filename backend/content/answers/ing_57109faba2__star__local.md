---
qid: ing_57109faba2__star__local
question: 'Explain: Script based sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 385
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:22:04-05:00'
sources: []
---

**Situation** – At my previous company we launched a product search feature for an e‑commerce platform that served over 5 million users daily. The ranking algorithm was based on relevance scores from Elasticsearch, but our analytics showed that the top 10 results were frequently irrelevant for “smartphone” queries, causing a 12% drop in click‑through rates.

**Task** – I needed to re‑rank search hits so that items with higher stock levels and recent reviews surfaced earlier, without sacrificing query latency or increasing cluster load.

**Action** – I introduced script‑based sorting using Elasticsearch’s Painless language. In the search request I added a `sort` clause:

```json
"sort": [
  {
    "_script": {
      "type": "number",
      "script": {
        "lang": "painless",
        "source": "doc['stock'].value * 0.6 + doc['review_score'].value * 0.4"
      },
      "order": "desc"
    }
  }
]
```

I tuned the weight coefficients (0.6/0.4) after A/B testing, added a `max_execution_time` to guard against slow scripts, and leveraged fielddata caching for numeric fields. I also monitored CPU usage with Kibana dashboards to ensure no spike occurred.

**Result** – The click‑through rate on the top 10 results rose from 8.5% to 12.3%, a 44% relative increase, while average query latency stayed under 120 ms. I learned that lightweight, domain‑specific scripts can dramatically improve relevance without compromising performance when carefully managed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
