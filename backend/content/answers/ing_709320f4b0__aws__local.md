---
qid: ing_709320f4b0__aws__local
question: 'Explain: Functional — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 604
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:39:56-05:00'
sources: []
---

**Scenario:**  
At my last role I led the design of an *Enterprise Retrieval‑Augmented Generation (RAG) Assistant* that powers internal knowledge work across 5,000+ employees.

| **Leadership Principle** | **Why It Matters** |
|---------------------------|--------------------|
| Customer Obsession | Employees are the “customers”; we had to deliver real productivity gains. |
| Ownership & Dive Deep | I owned the end‑to‑end pipeline and dove into every component (data ingestion, vector store, generation). |

---

### **Situation**
Our legal and compliance teams struggled with siloed policy documents. A manual search took ~30 min per query, costing ~$10 k/month in lost hours.

### **Task**
Build a real‑time RAG assistant that:
- Retrieves the most relevant 5–7 policy snippets.
- Generates concise answers in natural language.
- Operates under strict data‑privacy constraints.

### **Action**

1. **Data Ingestion** – *AWS Glue* crawls S3 buckets, extracts text, and stores metadata in DynamoDB (cost ≈ $0.01/GB).  
2. **Embedding & Vector Store** – *Amazon Bedrock* with a fine‑tuned Sentence‑Transformer generates 768‑dim vectors; stored in *Amazon QLDB* for immutable audit trails.  
3. **Retrieval Layer** – *Elasticsearch Service (OpenSearch)* clusters index vectors, enabling sub‑100 ms similarity search (scales horizontally via auto‑scaling).  
4. **Generation Layer** – *Bedrock* LLM (Claude 2) receives context and returns a ~200‑word answer; we apply a safety filter via Lambda.  
5. **API & UI** – *API Gateway + Lambda Authorizer* exposes secure endpoints; the front‑end is built on *Amazon Amplify* for rapid iteration.

6. **Observability** – CloudWatch metrics (latency, error rate) trigger auto‑scaling and cost alerts.

### **Result**

- **Speed:** Query latency dropped from 30 min to <2 s (97% reduction).  
- **Adoption:** 1,200 daily active users within three months.  
- **Cost:** $5,400/month vs. previous $10,000; a 46% savings.  

### **Bar‑raiser Takeaway**

*Ownership:* I drove the entire stack and handled post‑launch incidents myself.  
*Dive Deep:* My choice of QLDB for auditability was born from a deep dive into compliance requirements.  
*Quantified Impact:* Concrete KPI improvements were tracked continuously.  
*Learning:* Early LLM hallucinations taught us to layer a safety filter, reducing false positives by 80%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
