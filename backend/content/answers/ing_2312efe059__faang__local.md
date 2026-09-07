---
qid: ing_2312efe059__faang__local
question: 'Explain: Path parameters — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 488
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:52-05:00'
sources: []
---

**Clarify**  
The interview asks how to *create an index* in Elasticsearch using the **Path Parameters** style of the REST API. I’ll assume: (1) we’re working with Elasticsearch ≥7.x, (2) the cluster is reachable at `http://localhost:9200`, and (3) we want a simple JSON body for settings/mappings.

**Approach**  
1. Form the HTTP request line using path parameters (`/{index}`).  
2. Decide on method – `PUT` creates or updates an index.  
3. Include optional query string flags (e.g., `?pretty=true`).  
4. Craft a minimal JSON body with `settings` and `mappings`.  
5. Send the request via curl/HTTP client and interpret the response.

**Depth**  
```http
PUT /my‑blog-posts?pretty=true
{
  "settings": {
    "number_of_shards": 3,
    "analysis": { ... }
  },
  "mappings": {
    "properties": {
      "title":   { "type": "text" },
      "author":  { "type": "keyword" },
      "content": { "type": "text" }
    }
  }
}
```
*Response:* `{"acknowledged":true,"shards_acknowledged":true,"index":"my‑blog-posts"}`.  
Complexity: O(1) network round‑trip; indexing cost depends on shards and settings.

**Edge Cases**  
- Index already exists → 400 with `"resource_already_exists_exception"`.  
- Invalid JSON or missing fields → 400/500 errors.  
- Cluster unavailable → connection timeout.  
Testing: try creating, re‑creating, sending bad payloads, and hitting a down node.

**Optimize & Communicate**  
For production, use `PUT /{index}` with *bulk* settings/mappings in one request to reduce round trips. Enable `?wait_for_active_shards=1` if you need immediate consistency. I’d explain that path parameters make URLs intuitive (`/my-index`) while query strings keep the body clean. This demonstrates clear API design and error‑handling awareness—key traits FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
