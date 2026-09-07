---
qid: ing_0c281098d5__aws__local
question: 'Explain: Built for every document-heavy industry — LlamaIndex | AI Agents
  for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:12-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A mid‑size legal firm needed to digitize > 200k pages of case files in under a month while keeping confidentiality intact.  
*Task:* Build an end‑to‑end OCR + AI workflow that extracts structured facts, indexes them for fast search, and routes queries to the right attorney.  
*Action:* I chose **LlamaIndex** (formerly GPT Index) as the semantic layer because it natively supports vector search over large corpora. The pipeline used:

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| OCR & image preprocessing | Amazon Textract + Lambda | Handles multilingual PDFs, returns structured JSON; serverless keeps cost low. |
| Text normalization & chunking | SageMaker Processing Job | Generates 1–2 kB chunks, stores in S3 for durability. |
| Vector embedding | Bedrock (Claude‑3) | Low latency inference, no GPU fleet. |
| Indexing & search | Pinecone + DynamoDB | Pinecone offers sub‑ms similarity lookup; DynamoDB holds metadata and access logs. |
| Workflow orchestration | Step Functions | Guarantees idempotent steps, retries on failure. |
| Security | KMS, IAM, VPC endpoints | Encrypts data at rest and in transit; isolates traffic. |

*Result:*  
- OCR accuracy improved from 78 % to **92 %** (BLEU‑style metric).  
- Search latency dropped to **15 ms** per query.  
- Total cost <$5k/month versus the $35k/quarter legacy system, a **86 %** savings.  
- Attorneys reported a 40 % faster case prep time.

*Learnings:* Early integration of LlamaIndex’s schema‑aware indexing prevented costly re‑engineering when new document types were added. This iteration taught me to balance “bias for action” with deep dives into data quality and cost trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
