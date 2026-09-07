---
qid: ing_23133a3484__aws__local
question: 'Explain: Generation & citations — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 502
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:46:00-05:00'
sources: []
---

**Situation:**  
At my previous firm I led the launch of an *Enterprise Retrieval‑Augmented Generation (RAG) Assistant* for legal compliance. The goal was to generate policy drafts on demand while automatically citing internal documents so auditors could trace every claim.

**Task:**  
Design a system that balances **Customer Obsession** (accurate, trustworthy outputs) and **Ownership** (end‑to‑end reliability).

**Action:**  

1. **Data Layer – Amazon QLDB + DynamoDB**  
   • Store immutable policy drafts in QLDB for audit trails; index keywords in DynamoDB for fast retrieval.  
2. **Retrieval Engine – SageMaker Endpoint + ElasticSearch**  
   • Fine‑tune a dense retriever on legal corpora; serve queries via SageMaker real‑time inference (0.5 s latency).  
3. **Generation & Citation Pipeline – Amazon Bedrock (Claude) + Lambda**  
   • Pass top‑k docs to Bedrock; prompt includes “cite source ID X: paragraph Y”.  
   • Lambda parses the model’s output, extracts citations, and writes a JSON blob back to S3 for downstream review.  
4. **Governance – AWS Config & Step Functions**  
   • Enforce that every generation triggers a compliance check step before publication.

5. **Scalability/Cost:**  
   • Autoscaling SageMaker and Lambda; spot instances cut compute cost 30 %.  
   • Serverless architecture removes ops overhead, enabling 10× faster iteration.

**Result:**  
Within 4 months the assistant handled 12k policy requests per day with a 99.8 % citation accuracy (verified by audit team), reducing manual review time from 3 h to 30 min—an **85 % productivity lift** and $1.2M annual cost savings.

---

*Bar‑raiser notes:*  
- Clear ownership of end‑to‑end flow.  
- Deep dive into each AWS service choice, trade‑offs (latency vs. cost).  
- Quantified impact (time saved, accuracy).  
- Learned: early integration of audit logging avoided later compliance bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
