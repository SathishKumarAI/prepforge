---
qid: ing_107d63f516__faang__local
question: 'Explain: Create an index Generally available — Create an index | Elasticsearch
  API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 458
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:40-05:00'
sources: []
---

**Clarify**  
We’re asked how to create a *generally available* index in Elasticsearch using its REST API. Assume the cluster is healthy, we have admin privileges, and the desired mapping/schema is known or will be inferred automatically.

**Approach**  
1. Pick an HTTP method (`PUT` or `POST`) and target `/index_name`.  
2. Include optional body: settings (shards, replicas), mappings, aliases.  
3. Send request via curl, Kibana Dev Tools, or any HTTP client.  
4. Verify with `_cat/indices`.

**Depth**  
```bash
curl -XPUT "http://localhost:9200/my_index" \
     -H 'Content-Type: application/json' \
     -d'
{
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2
  },
  "mappings": {
    "_doc": { 
      "properties": {
        "title":   { "type": "text" },
        "price":   { "type": "float" },
        "created": { "type": "date" }
      }
    }
  }
}'
```
*PUT* creates the index if absent; *POST* (`/_index`) also works but is less common.  
Response: `{"acknowledged":true,"shards_acknowledged":true,"index":"my_index"}`.  

**Edge Cases**  
- Index already exists → 400 error unless you set `?op_type=create`.  
- Invalid JSON → 400 with details.  
- Insufficient cluster health (yellow/ red) may delay creation.

**Optimize & Communicate**  
For production, use dynamic templates to avoid manual property definitions, and keep shards/replicas tuned per workload. Explain trade‑offs: more shards give parallelism but increase overhead; replicas improve fault tolerance at cost of storage. End by showing a quick health check: `GET /_cluster/health?level=indices`. This concise yet complete answer demonstrates structured thinking, depth, and practical API usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
