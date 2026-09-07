---
qid: ing_b74c94be47__aws__local
question: 'Explain: Functional Requirements — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 432
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:13-05:00'
sources: []
---

**Functional Requirements – Enterprise RAG**

**Situation & Task**  
At my previous firm we were asked to launch an enterprise‑grade RAG system that could ingest our 3 TB of policy documents, FAQs, and codebases, answer internal queries in real time, and obey strict compliance rules.  

**Action**  
1. **Ownership + Customer Obsession** – I led a cross‑functional squad (legal, security, data scientists) to map *exact* user stories:  
   - *Search & Retrieval*: top‑5 relevant snippets with confidence score ≥ 0.92.  
   - *Generation*: answer length ≤ 200 words, no hallucinations beyond 1% F1 error on a test set of 10k queries.  
   - *Compliance*: all data must stay within the EU region; audit logs retained for 7 years.  
2. **Dive Deep + Technical Design** – Built a pipeline:  
   - Vector store in Amazon Kendra (managed, auto‑scaling) → low‑latency cosine similarity search.  
   - Prompt template fed to Amazon Bedrock LLM with fine‑tuned policy filter.  
   - Lambda orchestrator enforces token limits and audit logging to S3 Glacier.  
3. **Bias for Action + Deliver Results** – Deployed MVP in 4 weeks, achieved < 350 ms avg latency and 95% accuracy on internal beta.

**Result**  
- Cut query resolution time from 12 hrs to 30 min (×24x).  
- Reduced compliance incidents by 100 %.  
- Earned “Best‑In‑Class” award at AWS Innovate.

**Bar‑raiser notes** – I demonstrated ownership, deep technical trade‑offs (Kendra vs OpenSearch), quantified impact, and learned from a failed early prototype that lacked audit logging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
