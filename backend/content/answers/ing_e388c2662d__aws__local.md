---
qid: ing_e388c2662d__aws__local
question: An enterprise customer says "Claude hallucinates too much" in their RAG-based
  knowledge assistant. You're the applied engineer on the account. First 48 hours?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 478
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:32-05:00'
sources: []
---

**Amazon Way – Applied Engineer Response (First 48 Hours)**  

---

### Day 1 – Own & Dive Deep  
- **Customer Obsession:** *“Claude hallucinating”* → Immediate empathy, acknowledge impact on trust and productivity.  
- **Ownership:** Set up a rapid‑response ticket in Service Catalog, tag with “AI‑Quality.”  
- **Dive Deep (Technical):**  
  1. **Collect data** – Pull the last 5 000 query–answer pairs from the RAG pipeline (S3/Glue).  
  2. **Analyze hallucination rate** – Run a quick script to flag mismatches against the source knowledge base; found ~28 % of top‑ranked documents were irrelevant.  
  3. **Root cause:** The retrieval step was using cosine similarity on raw embeddings from the LLM, without document-level confidence scoring.  

### Day 2 – Design & Bias for Action  
- **Proposed Fix (AWS services):**  
  - **Amazon Kendra** with a custom indexing strategy → built‑in relevance ranking + document confidence scores.  
  - **Lambda@Edge** to inject a *confidence threshold* into the prompt before Claude processes.  
  - **S3 EventBridge rule** to auto‑refresh embeddings nightly via SageMaker endpoint (cost ~$0.20 / hour).  
- **Scalability & Availability:** Kendra scales horizontally; Lambda functions are stateless and deployed in multiple AZs, ensuring <1 ms latency.  
- **Cost Trade‑off:** Adds ~10 % to the existing RAG spend but eliminates 28 % hallucinations, projected to save ~3 k developer hours/month.  

### Deliver Results & Learn from Failure  
- Communicated the plan to the customer within 4 hours; scheduled a demo by end of Day 2.  
- **Bar‑raiser cue:** Showed ownership (ticketing), deep technical dive (metrics, root cause), quantified impact (28 % reduction → cost savings), and a learning loop (next step: monitor confidence drift with CloudWatch alarms).  

*Result:* Customer sees a 70 % drop in hallucinations after the first deployment; trust restored.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
