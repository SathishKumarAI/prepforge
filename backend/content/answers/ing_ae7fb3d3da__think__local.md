---
qid: ing_ae7fb3d3da__think__local
question: 'Explain: Geo distance sorting — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 520
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:29:30-05:00'
sources: []
---

**1️⃣ Clarify the goal & context**  
- Confirm that “geo‑distance sorting” means ordering documents by their physical proximity to a point (e.g., user location).  
- Note whether it’s part of a full search query or a separate request, and which Elasticsearch version is used.

**2️⃣ Mental model: distance as a score modifier**  
- Think of the geo field as a vector on the earth’s surface.  
- Distance calculation uses a spherical (or flat) approximation; ES offers `geo_distance` function in sort section.  
- The sorted order is essentially the list of documents sorted by the numeric value returned by that distance function.

**3️⃣ Step‑by‑step reasoning**  
1. Ensure the field is mapped as `geo_point`.  
2. Build a query (match, bool, etc.) and add a `sort` clause:  
   ```json
   "sort": [
     {
       "_geo_distance": {
         "location": { "lat": 40.12, "lon": -71.34 },
         "order": "asc",
         "unit": "km",
         "distance_type": "arc"    // or "plane"
       }
     }
   ]
   ```  
3. Understand that `distance_type` affects performance vs accuracy: `arc` (spherical) is accurate but slower; `plane` is faster but less precise for large distances.  
4. Optionally combine with a `geo_bounding_box` or `geo_shape` filter to reduce the candidate set before sorting.

**4️⃣ Common pitfalls to avoid**  
- Forgetting to map the field as `geo_point`.  
- Using `unit: "m"` but expecting kilometers; unit must match your data scale.  
- Mixing up `order: "asc"` (closest first) vs `"desc"`.  
- Ignoring that sorting on distance forces a full scan of the filtered set—can be expensive for large indexes.

**5️⃣ Sanity‑check & communicate**  
- Run a small test query locally to confirm the distances returned match expected values.  
- Explain clearly: “We sort by the computed distance from the supplied point, using either spherical or planar geometry; this turns the numeric distance into an ordering criterion.”  
- Highlight performance implications and recommend indexing strategies (e.g., pre‑filtering) if needed.

By following these steps you can confidently explain how Elasticsearch performs geo‑distance sorting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
