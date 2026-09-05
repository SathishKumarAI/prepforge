---
qid: ing_0cc6363eac__star__local
question: Why does the AI team keep asking you for lineage, and what does lineage
  mean for RAG data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 305
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:06-05:00'
sources: []
---

**Situation**  
At my last company we built a RAG pipeline that pulled medical literature into our chatbot. A few weeks after launch, the compliance team flagged inconsistencies in the answer quality and demanded an audit trail.

**Task**  
I had to provide clear lineage for every piece of data that fed the model—showing from source article to pre‑processed embedding, to which version of the retrieval index was used, and how it impacted the final response.

**Action**  
First I instrumented our ETL with a metadata store (MLflow) so each ingestion step logged a UUID, timestamp, and checksum. For embeddings I added a hash of the document vector plus the model version. In the retrieval layer I tagged every returned snippet with its source ID and the exact query embedding used. Finally, I built a lightweight UI that let stakeholders trace from the chatbot’s answer back to the original PubMed entry and the exact vector slice.

**Result**  
The audit completed in two days, the compliance team approved the model, and we reduced post‑deployment drift by 45 % because every change was now tracked. I learned that lineage isn’t just a legal nicety—it’s a debugging tool that turns opaque RAG outputs into transparent, reproducible decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
