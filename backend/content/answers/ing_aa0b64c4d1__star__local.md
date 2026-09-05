---
qid: ing_aa0b64c4d1__star__local
question: 'Explain: Next Steps — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 327
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:39-05:00'
sources: []
---

**Situation:**  
At my previous firm, the litigation team was preparing for a multi‑million dollar case against a major corporation. We had a massive knowledge base of precedent cases and internal memos stored in a proprietary document management system. Our senior counsel needed to find relevant precedents within 48 hours before the deposition.

**Task:**  
I was tasked with designing an AI‑driven retrieval pipeline that could surface the most pertinent documents from the legal corpus, ranked by relevance to the case’s key issues (e.g., breach of contract, punitive damages).

**Action:**  
First, I extracted text embeddings using OpenAI’s GPT‑4 embedding model and stored them in a Pinecone vector index. Then I built a retrieval interface that combined semantic similarity with keyword filters for jurisdiction and date range. To ensure legal accuracy, I added a fine‑tuned BERT layer trained on annotated case law to refine relevance scores. Finally, I deployed the pipeline on a secure Azure Kubernetes Service cluster, integrating it with our internal chat tool so counsel could query in plain English.

**Result:**  
The system cut retrieval time from 3 hours to under 30 minutes and increased the hit rate of relevant documents by 45 %. The case was won with a favorable settlement. I learned that blending vector search with domain‑specific fine‑tuning dramatically boosts precision, and that deploying on an isolated cloud environment preserves compliance while delivering speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
