---
qid: ing_9d8be15917__think__local
question: An enterprise customer on Azure wants the model to "know our business."
  Prompting, RAG, or fine-tuning - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 405
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:31:06-05:00'
sources: []
---

**1. Clarify the goal & constraints**  
   * Ask: What does “know our business” mean? Facts, processes, policy compliance, or decision‑support?  
   * Note constraints: data sensitivity, regulatory rules (GDPR, HIPAA), model size limits, latency, cost, and Azure tooling (OpenAI, Cognitive Search).

**2. Map to a mental framework**  
   * **Prompting** – lightweight, no data upload, best for generic guidance.  
   * **RAG (Retrieval‑Augmented Generation)** – dynamic document lookup; good when knowledge is voluminous but not constantly changing.  
   * **Fine‑tuning** – deep integration of domain language; ideal for highly specialized terminology or compliance.

**3. Reason step by step**  
   1. Estimate data volume & update frequency.  
   2. Evaluate sensitivity: fine‑tuning exposes training data to the model owner; RAG keeps raw data in a secure store (Azure Cognitive Search).  
   3. Consider performance needs: prompt + fine‑tune → faster inference but higher compute cost; RAG adds retrieval latency.  
   4. Check Azure capabilities: OpenAI fine‑tuning limits, managed RAG services, or custom pipelines.

**4. Avoid common traps**  
   * Don’t assume “more data = better model.”  
   * Beware of over‑fitting in fine‑tune if the corpus is small.  
   * Remember that prompts alone can’t handle large knowledge bases.  

**5. Sanity‑check & communicate**  
   * Summarize trade‑offs: prompt (quick, generic), RAG (secure, up‑to‑date, slight latency), fine‑tune (deep domain, higher cost).  
   * Present a decision matrix to stakeholders and iterate based on feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
