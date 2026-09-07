---
qid: ing_037ef3abcc__aws__local
question: 'Explain: You have an embedding model and a reranker. Why sell both? Design
  the two-stage retrieval pipeline and tell me when the reranker earns its latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 450
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:18-05:00'
sources: []
---

**Situation / Task**  
At my last role I was asked to launch a recommendation engine that could surface the top‑10 items for millions of users in real time. The challenge: an embedding model gives a broad candidate set quickly, but we needed higher precision without hurting latency.

**Action**  
I built a **two‑stage retrieval pipeline**:

1. **Stage 1 – Embedding Retrieval** (S3 + DynamoDB + Lambda):  
   *Pre‑compute* item vectors in S3; store user vectors in DynamoDB. A single Lambda, triggered by API Gateway, fetches the nearest 200 candidates via cosine similarity using an approximate k‑NN library (FAISS) on a GPU‑enabled EC2 spot fleet. This completes in ~50 ms.

2. **Stage 2 – Reranker** (Amazon SageMaker Endpoint + Step Functions):  
   A lightweight BERT‑based reranker, hosted as a real‑time endpoint with autoscaling. It receives the 200 candidates, scores them with contextual features, and returns the top‑10. The step function waits until the reranker finishes; if it exceeds **120 ms**, we fall back to Stage 1’s list.

**Result**  
- Latency: overall 110 ms (≤ 150 ms SLA).  
- Precision@10 improved from 0.62 to 0.78 (+26 %).  
- Cost per request dropped 18 % by using spot instances for Stage 1 and batching in Stage 2.

**Leadership Principles**  
*Customer Obsession*: we delivered faster, more accurate recommendations.  
*Ownership & Dive Deep*: I engineered the entire end‑to‑end flow, tuned thresholds, and monitored failure modes.

**Bar‑raiser cues** – ownership of all components, deep understanding of trade‑offs (GPU cost vs latency), quantified impact, and iteration after a 5 % drop in reranker accuracy during A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
