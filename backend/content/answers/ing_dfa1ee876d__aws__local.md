---
qid: ing_dfa1ee876d__aws__local
question: 'Explain: Non-functional — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 451
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:45:24-05:00'
sources: []
---

**Situation / Task**  
At a large financial services firm I led the design of an *Enterprise RAG (Retrieve‑Augment‑Generate) Assistant* that could power compliance, risk, and legal teams with instant, accurate answers from a 5 TB corpus of internal documents. The system had to meet strict latency (<300 ms), high availability (>99.95%), and regulatory auditability.

**Action**  
1. **Ownership & Dive Deep** – I scoped the problem into three layers: (a) vector search, (b) context‑aware generation, (c) audit trail.  
2. **AWS Architecture**  
   * **Amazon Kendra** for semantic search on S3‑stored PDFs and SharePoint docs; fine‑tuned with a domain‑specific index.  
   * **Amazon Bedrock** (Claude 3) as the LLM endpoint, invoked via **API Gateway** + **Lambda Authorizer** to enforce role‑based access.  
   * **DynamoDB Streams** capture every request/response pair; an **AWS Glue** job writes them to **Redshift** for audit and analytics.  
3. **Scalability & Cost** – Leveraged Kendra’s auto‑scaling, Bedrock’s on‑demand pricing, and Spot Instances for nightly batch re‑indexing. Estimated annual cost: $350 k vs legacy $1.2M.  
4. **Bias for Action** – Deployed a pilot in 2 business units; after 30 days I iterated the prompt template based on user feedback.

**Result**  
- Reduced average answer latency from 2.3 s to 0.28 s (≈88% improvement).  
- Achieved 99.98% uptime during peak trading hours.  
- Cut operational cost by 70 %.  
- Audit logs enabled a compliance review that passed without remediation.

**Bar‑raiser takeaways** – I owned the full lifecycle, dove deep into AWS services to justify trade‑offs, quantified performance gains, and learned from an early false‑positive incident by tightening prompt constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
