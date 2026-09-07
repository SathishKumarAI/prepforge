---
qid: ing_56b4e645fe__faang__local
question: 'Explain: Agents — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 468
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:46-05:00'
sources: []
---

**Clarify**

We’re asked to explain *Harvey*—an AI‑powered agent that assists lawyers and other professionals.  
Assumptions:  
1. It operates in the legal domain (contracts, discovery, research).  
2. It’s a conversational/interactive system embedded in existing tools.  
3. The goal is to reduce routine cognitive load while ensuring compliance.

**Approach**

1. **Describe the core agent** – what it does and how it fits into workflows.  
2. **Explain underlying tech** – LLMs, retrieval‑augmented generation, knowledge graphs.  
3. **Highlight key benefits & safeguards** (accuracy, auditability).  

**Depth**

Harvey is a *retrieval‑augmented conversational agent* built on top of a fine‑tuned transformer (e.g., GPT‑4 or a domain‑specific LLM). It ingests a firm’s document corpus, case law, and internal policies into a vector store. When a user asks a question (“What are the key risks in this contract?”), Harvey retrieves relevant snippets, passes them to the LLM along with the prompt, and returns a concise, citation‑rich answer.  

The system includes:  
* **Legal reasoning layer** – rule‑based post‑processing that flags potential conflicts or missing clauses.  
* **Explainability UI** – shows retrieved passages and confidence scores so attorneys can audit the output.  
* **Compliance controls** – data masking, versioning, and audit logs to satisfy regulatory requirements.

**Edge Cases**

* Out‑of‑scope queries (e.g., jurisdictional disputes) → falls back to human review.  
* Ambiguous language → asks clarifying follow‑up questions instead of guessing.  
* Model hallucinations → flagged by the reasoning layer and routed to a “red‑flag” queue.

**Optimize & Communicate**

Future improvements: incremental learning from user edits, active‑learning loops, and integration with e‑discovery pipelines. In interviews I’d emphasize how Harvey reduces billable hours by 30–40 % while maintaining auditability—exactly the balance FAANG teams value between speed and safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
