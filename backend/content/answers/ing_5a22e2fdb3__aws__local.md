---
qid: ing_5a22e2fdb3__aws__local
question: 'Explain: Q4: Explain chunking strategies and when to use each'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 582
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:31-05:00'
sources: []
---

**Chunking Strategy – How I’d Explain It in an Amazon Interview**

**Situation (S)**  
While leading a cross‑functional AI team at a fintech startup, we needed to run NLP on 2 TB of unstructured loan documents. The models we used were limited to ~4 K tokens per inference call.

**Task (T)**  
Design a chunking pipeline that maximizes throughput while preserving context for downstream sentiment and entity extraction.

**Action (A)**  

1. **Fixed‑size sliding windows** – 2 K tokens with 50 % overlap.  
   *Use when* the model is sensitive to boundary effects (e.g., BERT) and you need high recall.  
2. **Semantic segmentation** – split on paragraph or section headers using AWS Comprehend’s `detectKeyPhrases`.  
   *Use when* logical units are meaningful for business rules (e.g., “Repayment Terms”).  
3. **Hierarchical chunking** – first coarse 8 K token chunks, then sub‑chunks of 2 K.  
   *Use when* you must keep long‑range dependencies (useful in summarization).

Implementation: Lambda orchestrated the split; S3 stored raw and chunked files; SageMaker hosted the inference endpoint. We added a DynamoDB table to track chunk provenance for auditability.

**Result (R)**  
- Reduced total inference time from **8 h → 1.2 h** (≈ 84% faster).  
- Maintained F1‑score of 0.92 on entity extraction vs. 0.88 baseline.  
- Cost dropped by **$3,200/month** thanks to fewer endpoint invocations.

---

### Leadership Principles Highlighted

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took end‑to‑end responsibility for data pipeline and cost optimization. |
| **Dive Deep** | Analyzed token limits, model sensitivity, and business context to choose the right chunking method. |
| **Bias for Action** | Deployed a Lambda‑based solution within 3 weeks instead of waiting for vendor updates. |
| **Deliver Results** | Achieved measurable speed, accuracy, and cost gains that directly impacted revenue from loan processing. |

> **Bar‑raiser cue:** I’ll look for evidence that you own the problem, dissect it deeply, quantify impact, and iterate on failure (e.g., why sliding windows initially missed cross‑paragraph entities).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
