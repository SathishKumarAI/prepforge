---
qid: ing_f6f0e4c1ba__faang__local
question: 'Explain: Multiple reference points — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 542
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:14:05-05:00'
sources: []
---

**Clarify**  
We’re asked how *multiple reference points* can be used to sort search results in **Elasticsearch**. I’ll assume the use case: a geo‑search where each document may belong to several locations (e.g., multi‑city venues) and we want ranking based on proximity to any of those points, not just one stored coordinate.

**Approach**  
1. Store all reference points as an array field (`geo_point[]`).  
2. When querying, provide a *user point* (`lat/lon`).  
3. Use the `script_score` or `function_score` query with a script that iterates over the array and returns the minimum distance to any element.  
4. The score becomes the inverse of this min‑distance, so closer points rise in rank.

**Depth**  
```json
{
  "query": {
    "function_score": {
      "query": { "match_all": {} },
      "script_score": {
        "script": {
          "source": """
            double minDist = Double.MAX_VALUE;
            for (point in params._source.geo_points) {
              double d = distance(point.lat, point.lon,
                                 params.user_lat, params.user_lon);
              if (d < minDist) minDist = d;
            }
            return 1 / (minDist + 1); // avoid division by zero
          """,
          "params": { "user_lat": 40.7128, "user_lon": -74.0060 }
        }
      }
    }
  }
}
```
Complexity: O(n) per doc for n reference points; mitigated by using `doc_values` or pre‑computing a “nearest point” field if performance is critical.

**Edge Cases**  
- Documents with no geo points → score = 0 (they’ll rank lowest).  
- Very large arrays → slow queries; consider limiting array size or bucketing.  
- Accuracy: script uses Haversine formula; ensure units match index settings.

**Optimize & Communicate**  
For production, replace the expensive per‑doc loop with a *pre‑computed* field that stores the closest reference point to common query regions, or use `geo_distance` filters combined with `top_hits`. Explain trade‑offs: accuracy vs. speed, and how caching (`filter_cache`) can help. Conclude by summarizing that multiple reference points are handled via array fields and a custom scoring script, giving flexible proximity ranking while keeping the solution maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
