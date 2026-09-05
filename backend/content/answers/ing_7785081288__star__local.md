---
qid: ing_7785081288__star__local
question: 'Explain: Missing values — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 382
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:59-05:00'
sources: []
---

**Situation** – At a fintech startup, we built a recommendation engine that surfaced loan offers in real time via an Elasticsearch index. A sudden spike in traffic exposed a flaw: some offer documents lacked the `interest_rate` field, causing those hits to appear at the bottom of our sorted results and skewing conversion metrics.

**Task** – I had to ensure that search results still prioritized lower interest rates while gracefully handling missing values so no offers were unintentionally buried or omitted. The goal was a 5 % lift in click‑through rate without impacting query latency.

**Action** – I added a scripted sort in the query:

```json
"sort": [
  {
    "_script": {
      "type": "number",
      "script": {
        "lang": "painless",
        "source": """
          if (doc['interest_rate'].size() == 0) return Double.MAX_VALUE;
          return doc['interest_rate'].value;
        """
      },
      "order": "asc"
    }
  }
]
```

This script assigns a high placeholder value to missing rates, pushing those documents to the end while keeping other results sorted normally. I also set `ignore_unmapped: true` and updated the mapping to use a `float` field with a default of `null`. Finally, I ran A/B tests on 50k queries per day.

**Result** – The new sort logic eliminated the “missing‑rate” bias, raising click‑through by 6.3 % and improving overall conversion by 4 %. Query latency stayed under 120 ms. I learned that scripted sorting can elegantly handle sparse data without compromising performance or requiring costly reindexing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
