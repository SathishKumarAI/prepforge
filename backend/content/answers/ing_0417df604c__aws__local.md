---
qid: ing_0417df604c__aws__local
question: 'Explain: BigLaw Bench – Retrieval — BigLaw Bench Deep Dive: Retrieval |
  Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 486
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:33:56-05:00'
sources: []
---

**Situation / Task**  
At my last firm we launched **BigLaw Bench**, a legal‑tech platform that lets attorneys search precedent and case law in minutes. My team was asked to build the **Retrieval Engine** for the “Deep Dive” feature – an AI‑powered assistant that pulls relevant documents, extracts key facts, and ranks them by relevance.

**Action**  
I first scoped the problem: 5 TB of PDFs + structured metadata, users expect < 2 s latency, and we must guarantee high availability (99.9 %) for daily traffic (~30k queries).  
1. **Data Ingestion** – used **AWS Glue** to crawl S3, run **Textract** for OCR, then store text in **Amazon OpenSearch Service** with custom analyzers for legal terminology.  
2. **Semantic Retrieval** – deployed a fine‑tuned **sentence‑transformer** on an **SageMaker endpoint**, converting queries into embeddings and performing approximate nearest neighbor search via OpenSearch’s kNN plugin.  
3. **Ranking & Feedback Loop** – built a lightweight Lambda that aggregates click‑through data, updates the embedding model every 24 h (continuous learning).  
4. **Cost/Scalability** – leveraged spot instances for training, reserved R5 instances for inference; overall cost dropped 35 % vs. on‑prem GPUs while keeping latency < 1.8 s.

**Result**  
After launch, user satisfaction rose from 78 % to 92 %, and case‑finding time decreased by **73 %** (average 12 s → 3 s). The system handled peak loads of 10k concurrent queries without degradation.

---

### Leadership Principles Highlighted
- **Customer Obsession** – built for attorneys’ real workflow, iterated with their feedback.  
- **Ownership & Dive Deep** – took end‑to‑end responsibility, dissected every bottleneck, and quantified impact.

*Bar‑raiser focus:* ownership of the full stack, depth in embedding/IR trade‑offs, measurable lift in user metrics, and lessons from early latency spikes that led to the kNN optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
