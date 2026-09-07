---
qid: ing_d1f11e6a26__aws__local
question: 'Explain: Split — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 431
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:36-05:00'
sources: []
---

**Situation / Task**  
I led a project to replace our legacy document‑processing pipeline for the legal department. The goal was to OCR thousands of PDFs, index them with LlamaIndex, and expose an AI agent that could answer case‑specific queries in < 3 s.

**Action**  
1. **OCR & Storage** – Used Amazon Textract on S3 uploads; results streamed into DynamoDB for fast metadata lookup.  
2. **Embedding & Indexing** – Trained a fine‑tuned SentenceTransformer on SageMaker, stored vectors in an OpenSearch domain (LlamaIndex integration).  
3. **AI Agent** – Built a Step Functions workflow that invoked a Lambda “retrieval” step (query OpenSearch), then a second Lambda calling the Anthropic Claude model via Bedrock for final answer generation.  
4. **Scalability & Cost** – Leveraged on‑demand Lambda, autoscaled OpenSearch with warm‑cluster tuning, and reserved 1 yr instance capacity → 25 % cost saving vs. pay‑as‑you‑go.  

**Result**  
- Reduced average query latency from 12 s to **2.8 s** (90 % improvement).  
- OCR accuracy improved by **+15 % F1** over the previous Tesseract setup.  
- Legal staff reported a 40 % reduction in manual lookup time, enabling earlier case filings.

**Reflection**  
I owned the end‑to‑end stack and dove deep into each service’s limits (e.g., Textract concurrency throttling). I iterated on vector dimensionality to balance recall vs. cost. The biggest learning: pre‑warm OpenSearch nodes; otherwise cold starts killed SLA compliance. This experience sharpened my bias for action, ownership, and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
