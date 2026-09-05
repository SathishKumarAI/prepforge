---
qid: ing_ac132ba23a__star__local
question: 'Explain: Required authorization — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 348
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:46-05:00'
sources: []
---

**Situation:**  
At my previous startup we were migrating our log‑aggregation pipeline from a legacy system to Elastic Stack. The new cluster was on AWS OpenSearch, and the data engineers had just set up the master node with a restrictive IAM role that allowed only read operations.

**Task:**  
I needed to create a new index template for application logs that enforced a strict schema and added daily retention settings, but I couldn’t do it because the current user lacked the `manage_index_templates` privilege. The deadline was the end of the sprint, so we had to get the index in place before the nightly ingestion jobs started.

**Action:**  
I first inspected the cluster’s security configuration via the `_security/api_key` endpoint and confirmed that the role was missing the `indices:admin/template/*` permission. I then created a temporary API key with the exact privileges required (`manage_index_templates`, `create`, and `write`). Using this key, I called the `PUT /_template/app-logs-template` endpoint to define mappings (keyword for `app_id`, date for `@timestamp`) and set lifecycle policies. After verifying the index was created and data flowed correctly, I revoked the temporary API key and updated the role policy to include the necessary template permission permanently.

**Result:**  
The new index was online 30 minutes before our nightly job ran, preventing a potential backlog of over 1 M log events. The update also reduced ingestion latency by 12% in subsequent tests, and I documented the minimal privilege pattern for future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
