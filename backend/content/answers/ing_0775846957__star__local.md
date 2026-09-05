---
qid: ing_0775846957__star__local
question: 'Explain: Lat lon as array — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 363
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:43:48-05:00'
sources: []
---

**Situation** – In a travel‑booking app, we had a product catalogue of 350k accommodation listings stored in an ES cluster. The front‑end required that users see the nearest places first when they type a city name, but our initial index stored each property’s coordinates as a simple array `[lat, lon]` inside a `location` field, so distance sorting was slow and inaccurate.

**Task** – I needed to redesign the mapping so that queries could sort by proximity in under 200 ms while still supporting faceted searches on other attributes (price range, star rating).

**Action** – I re‑indexed the data using ES’s `geo_point` type:  
```json
"location": { "type": "geo_point" }
```
I converted each `[lat, lon]` array to a string `"lat,lon"` during bulk import. Then I created a custom query template that used `sort: [{ "_geo_distance": { "location": [userLat, userLon], order: "asc", unit: "km" } }]`. To keep memory usage low, I enabled the `index.mapping.total_fields.limit` adjustment and added a lightweight cache layer for repeated distance queries.

**Result** – Search latency dropped from 1.3 s to 0.18 s on average, and the top‑10 results were now always within 5 km of the user’s location. This also reduced CPU load by ~30%. I learned that choosing the right field type in ES is critical for performance, and that even a small mapping tweak can yield huge gains in a production system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
