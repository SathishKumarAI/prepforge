---
qid: ing_6fbc0388a3__star__local
question: The pilot RAG system is giving wrong answers on the customer's contracts.
  You're on-site tomorrow. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 404
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:18-05:00'
sources: []
---

**Situation**  
I arrived at the client site for a mid‑morning briefing after they flagged that the Retrieval Augmented Generation (RAG) prototype was pulling out irrelevant clauses from their contracts. The team had built a vector store on Pinecone, indexed PDFs with LangChain, and our LLM was GPT‑4o.  

**Task**  
My goal was to identify why the RAG pipeline returned incorrect passages within 48 hours so we could ship a production‑ready version for the upcoming contract audit.

**Action**  
1. **Log & trace** – I hooked into the FastAPI middleware to capture request/response pairs, noting query embeddings and retrieved chunk IDs.  
2. **Vector sanity check** – Ran an exhaustive cosine‑similarity test on a sample of 200 contracts; found that many legal‑specific terms were under‑represented in the embedding model (OpenAI‑text‑embedding-3). I switched to a domain‑tuned Sentence‑Transformers model and re‑indexed.  
3. **Chunking tweak** – Reduced chunk size from 512 tokens to 256 and added overlap, which cut up‑boundary artefacts.  
4. **Post‑retrieval filtering** – Implemented a lightweight TF‑IDF filter over the retrieved chunks to surface only those containing key clause markers (“confidentiality”, “termination”).  
5. **End‑to‑end test** – Ran 50 real client queries; accuracy jumped from 58 % to 92 %.  

**Result**  
The revised RAG pipeline delivered contract excerpts with 90 % precision, cutting the client's review time by 35 %. I documented the new workflow in a JIRA ticket and presented a live demo, earning approval for full deployment. This experience reinforced that debugging RAG is as much about data quality and chunk strategy as it is about model choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
