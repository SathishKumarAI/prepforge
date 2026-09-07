---
qid: ing_a40ae7ecbf__faang__local
question: 'Explain: Body — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 444
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:45-05:00'
sources: []
---

**Clarify**  
You’re asked how to *create an index* in Elasticsearch using its RESTful API. I’ll assume we want a fresh index, possibly with mappings and settings, and that the user has cluster access and sufficient privileges.

**Approach**  
1. Decide on the HTTP method (`PUT`).  
2. Build the URL: `http://<host>:9200/<index_name>`.  
3. Prepare an optional JSON body with *settings* (e.g., shards, replicas) and *mappings* (field types).  
4. Send the request; interpret the response (acknowledged + index name).

**Depth**  
```bash
curl -X PUT "localhost:9200/my_index" \
     -H 'Content-Type: application/json' \
     -d'
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2
  },
  "mappings": {
    "properties": {
      "title":   { "type": "text" },
      "price":   { "type": "float" },
      "created": { "type": "date" }
    }
  }
}'
```
The response will be:

```json
{
  "acknowledged": true,
  "shards_acknowledged": true,
  "index": "my_index"
}
```

**Edge Cases**  
- Index already exists → `400 Bad Request` unless you use `PUT ...?op_type=create`.  
- Invalid JSON or missing fields → detailed error message.  
- Permissions denied → 403 Forbidden.

**Optimize & Communicate**  
For production, generate settings/mappings from a template or IaC tool (Terraform). Use the `_cat/indices` API to verify creation quickly. Explain that `PUT` is idempotent: re‑running it with the same body won’t alter an existing index unless you use `op_type=create`. This keeps the answer concise yet complete for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
