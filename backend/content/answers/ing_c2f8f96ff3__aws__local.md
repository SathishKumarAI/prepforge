---
qid: ing_c2f8f96ff3__aws__local
question: 'Explain: Responses — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 450
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:43:48-05:00'
sources: []
---

**Situation & Task**  
I was hired as a ML Engineer at a fintech startup to surface fraud‑detection model predictions in real time for the compliance team. The data lake had millions of transaction logs per day, but the existing search stack (plain MySQL) couldn’t handle ad‑hoc queries on “suspected patterns” within seconds.

**Action – Design & Implementation**  
1. **Elasticsearch index schema** – I defined a *dynamic mapping* with fields: `transaction_id`, `customer_id`, `amount`, `timestamp`, and nested `fraud_features`.  
2. **AWS OpenSearch Service** – provisioned a multi‑AZ cluster (3 data nodes, 2 warm nodes) to guarantee 99.999% availability while keeping costs in line with our $5K/month budget.  
3. **Data pipeline** – used **Kinesis Data Firehose** → *OpenSearch* for real‑time ingestion; added an index lifecycle policy to roll over after 30 days and delete after 365 days, preserving storage costs.  
4. **API layer** – built a lightweight Lambda (Node.js) gateway that translates REST calls into OpenSearch DSL queries, caching frequent results in ElastiCache (Redis).  

**Result**  
- Query latency dropped from ~8 s to <200 ms for 95th‑percentile ad‑hoc searches.  
- Compliance analysts processed 4× more alerts per day without additional staff.  
- Total operational cost was $3.2K/month, 36% below the previous MySQL+EC2 stack.

**Reflection (Bar‑raiser notes)**  
I took full ownership of the data model and deployment pipeline, diving deep into OpenSearch’s mapping nuances to avoid cardinality spikes. The success is quantifiable—latency & analyst throughput—and I documented lessons on index rollover that prevented a potential 15% cost surge in Q3.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
