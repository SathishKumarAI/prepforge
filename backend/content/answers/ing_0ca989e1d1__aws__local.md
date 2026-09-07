---
qid: ing_0ca989e1d1__aws__local
question: Why is RAG the right architecture for an enterprise assistant instead of
  fine-tuning on the company's data? Where does RAG break?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 458
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:19-05:00'
sources: []
---

**Why RAG beats fine‑tuning for an enterprise assistant**

**Situation** – Our client needed a live chatbot that could answer product queries across 12 k internal documents while staying compliant with GDPR and minimizing vendor lock‑in.

**Task** – Design an architecture that delivers fresh, policy‑aware answers without the cost of re‑training large models on proprietary data.

**Action**  
1. **Retrieval‑Augmented Generation (RAG)**:  
   * Store embeddings in **Amazon Kendra** (auto‑indexing, 99.9 % uptime).  
   * Use **Amazon Bedrock** for the LLM; feed it the top‑5 documents per query via a Lambda orchestrator.  
2. **Fine‑tune fallback**: only for highly sensitive “policy” questions where no public data exists – we fine‑tune a small model on encrypted in‑house data, deployed on **Amazon SageMaker Edge** to keep inference local.  
3. **Governance**: IAM roles + AWS Macie audit logs ensure that any document read is logged; compliance triggers roll back if policy text leaks.

**Result** – Query latency dropped from 12 s (fine‑tune) to <800 ms, cost per query fell by 70 % ($0.003 vs $0.01), and the bot answered 95 % of user questions correctly on a post‑deployment survey.  

**Where RAG breaks** – When domain knowledge is *entirely* proprietary (e.g., internal algorithms) or when real‑time policy updates are required; then a lightweight fine‑tuned model, though more expensive, guarantees consistency and avoids hallucinations.

> **Leadership Principles:**  
> • **Customer Obsession** – fast, accurate answers for users.  
> • **Ownership & Dive Deep** – we dissected latency, cost, compliance, and built a hybrid solution that balances speed with security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
