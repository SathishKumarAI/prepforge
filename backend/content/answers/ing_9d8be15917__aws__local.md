---
qid: ing_9d8be15917__aws__local
question: An enterprise customer on Azure wants the model to "know our business."
  Prompting, RAG, or fine-tuning - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 475
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:11-05:00'
sources: []
---

**Situation & Task**  
A Fortune‑500 retailer on Azure asked how to make an LLM “know” their domain data—whether to prompt, use Retrieval Augmented Generation (RAG), or fine‑tune. I owned the solution and had to deliver a cost‑effective, scalable architecture that met compliance and latency SLAs.

**Approach & Design**  
1. **Data Profiling** – Scan 5 TB of product catalogs, SOPs, and support tickets; identify 120K high‑value entities.  
2. **Decision Matrix (AWS)**  
   * **Prompting**: Fast dev, low cost, but risk of hallucination → only for generic FAQs.  
   * **Fine‑tuning** (SageMaker Training): 24 h GPU time, $4k per epoch; high accuracy but model weight grows to 1.2 GB and requires continuous retraining as data evolves.  
   * **RAG** (Bedrock + DynamoDB + Kendra): Real‑time index of 5 TB, 10 ms retrieval latency, no model drift.  

3. **Chosen Path – RAG**:  
   * Build a Kendra index; store metadata in DynamoDB.  
   * Lambda orchestrates Bedrock request with retrieved snippets.  
   * Cost ≈ $0.30/1k requests vs $5/1k for fine‑tuned endpoint.

**Result**  
Reduced hallucination rate from 18 % (prompting) to <2 %. End‑user satisfaction rose by 32 % in the first quarter, and operational cost dropped 40 % compared with a fine‑tuned model. Learned that “ownership + dive deep” → build a lightweight, continuously updated retrieval layer rather than locking into a monolithic model.

**Leadership Principles Highlighted**  
* **Customer Obsession** – tailored solution to their data size & compliance needs.  
* **Ownership / Dive Deep** – performed granular data audit and cost‑benefit analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
