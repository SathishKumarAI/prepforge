---
qid: ing_6798fc87aa__aws__local
question: 'Explain: Scenario 3: Design a RAG system for enterprise search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 531
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:19:20-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked to build a Retrieval‑Augmented Generation (RAG) system for an enterprise that had 4 TB of unstructured documents and needed instant, context‑aware answers across all departments.

**Action (A)**  
1. **Storage & Indexing** – Ingested PDFs into S3, extracted text with Textract, and stored vectors in OpenSearch (using the “vector search” plugin).  
2. **Retrieval Layer** – A Lambda authorizer + Step Functions orchestrated a two‑step query: (a) semantic similarity via OpenSearch’s k‑NN, (b) fallback keyword search for edge cases.  
3. **Generation Layer** – Leveraged Bedrock with a fine‑tuned Llama 2 model; the prompt was templated to include top‑5 retrieved passages.  
4. **Security & Governance** – IAM policies + KMS ensured data at rest encryption; OpenSearch’s fine‑grained access control kept each department isolated.  
5. **Observability** – CloudWatch metrics (latency, token usage) fed into a Grafana dashboard; Lambda cold starts were mitigated by keeping 200 warm instances.

**Result (R)**  
- Achieved < 400 ms average response time for 95 % of queries and reduced manual search effort by **73 %**.  
- Cost per query dropped from $0.12 to $0.04, saving ~$250k annually.  
- User satisfaction score rose from 4.1/5 to 4.8/5 within three months.

**Leadership Principles Anchored**  
- **Customer Obsession** – Delivered instant answers that cut manual work dramatically.  
- **Ownership & Dive Deep** – Took full responsibility for data pipeline, security, and performance tuning; debugged latency spikes by inspecting OpenSearch shard health.  

**Bar‑raiser cues**  
- Demonstrated ownership through end‑to‑end design and post‑launch monitoring.  
- Showed depth by explaining vector index scaling (sharding) and trade‑offs between cost vs. latency.  
- Quantified impact with clear metrics, and reflected on a failed early prototype that over‑queried Bedrock, learning to batch retrieval to save costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
