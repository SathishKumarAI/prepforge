---
qid: ing_fe1b18f532__aws__local
question: 'Explain: Context engine (repo awareness) — Ai Code Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 434
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:35-05:00'
sources: []
---

**Context Engine (Repo‑Awareness) – AI Code Assistant**

**Situation:**  
I led a sprint to build an internal “AI Code Assistant” that could suggest refactors and auto‑complete code while developers were working in AWS CodeCommit repositories. The goal was to cut review time by 30 % without compromising security.

**Task:**  
Design a lightweight context engine that ingests repository state, understands file hierarchies, and feeds relevant snippets into the LLM model, all within our CI pipeline constraints.

**Action:**  
1. **Data Pipeline:** Triggered an AWS Lambda on `codecommit:ReferenceCreated` events → pulls the latest commit via CodeCommit API, stores a JSON diff in S3 (object‑level granularity).  
2. **Context Store:** A DynamoDB table indexed by repo‑id & file path holds “hot” code blocks; TTL keeps it fresh.  
3. **Inference Layer:** SageMaker Endpoint runs the LLM; Lambda builds a prompt that pulls up to 5 relevant files from DynamoDB, ensuring <200 ms latency.  
4. **Security:** IAM roles enforce least‑privilege; encryption at rest (KMS) protects stored snippets.

**Result:**  
- Review cycle time dropped from 2.1 h to 1.5 h (29 % reduction).  
- Developers reported a 4.7/5 satisfaction score on context relevance.  
- Cost per inference stayed under $0.02, with DynamoDB throttles never hit.

**Reflection:**  
I owned the end‑to‑end flow, dived deep into Lambda cold‑start mitigation, and iterated on prompt tuning after a failed first sprint (latency >400 ms). This aligns with **Customer Obsession** (developer experience) and **Ownership** (full responsibility for performance & cost).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
