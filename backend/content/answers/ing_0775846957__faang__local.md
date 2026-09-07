---
qid: ing_0775846957__faang__local
question: 'Explain: Lat lon as array — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 508
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:01:39-05:00'
sources: []
---

**Clarify**  
The problem asks how to store a point’s latitude/longitude in an array field and then sort or filter documents by that location in **Elasticsearch**.  
Assumptions:  
1. We’re using ES 7.x+ (no legacy geo points).  
2. The array contains exactly two numeric values `[lon, lat]`.  
3. We need to retrieve results ordered by distance from a query point.

**Approach**  
1. Map the field as `type: "geo_point"` with `format: "lat_lon"`.  
2. In the index payload, store the array directly; ES will parse it into an internal geo‑point structure.  
3. Use a **`sort`** clause (or a `function_score` query) that calculates distance to the target coordinates.

**Depth**  
```json
PUT /places
{
  "mappings": {
    "properties": {
      "loc": { "type": "geo_point", "format": "lat_lon" }
    }
  }
}
```
Query:
```json
GET /places/_search
{
  "query": { "match_all": {} },
  "sort": [
    {
      "_geo_distance": {
        "loc": [ -73.9857, 40.7484 ],   // lon, lat
        "order": "asc",
        "unit": "km",
        "mode": "min"
      }
    }
  ]
}
```
Elasticsearch converts the array to an internal point, computes distances lazily during sorting, and returns results in ascending distance order.

**Edge Cases**  
- Incorrect ordering (`[lat, lon]`) → ES mis‑interprets coordinates.  
- Empty or malformed arrays → indexing error.  
- Very large arrays (many points per doc) may degrade performance; consider multi‑point fields only if needed.

**Optimize & Communicate**  
*Optimization*: For high‑volume queries, pre‑index a separate `geo_shape` field and use the `indexed_shape` query to cache distances.  
*Communication*: Highlight that ES handles array parsing automatically, but developers must ensure correct `[lon, lat]` order and validate input data before indexing. This keeps sorting fast (O(n log n) on doc count) while leveraging ES’s native geo capabilities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
