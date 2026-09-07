---
qid: ing_fd6a006ffd__faang__local
question: 'Explain: Evaluation plan — Enterprise Rag Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 466
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:15-05:00'
sources: []
---

**Clarify**  
We’re asked to design an *evaluation plan* for an **Enterprise Retrieval‑Augmented Generation (RAG) assistant** that powers internal knowledge queries.  
Key assumptions:  
1. The system combines a document store (e.g., Confluence, SharePoint) with a generative model (LLM).  
2. Success is measured by relevance, correctness, latency, and user satisfaction.  
3. Data privacy & compliance are mandatory.

**Approach**  
1. Define *metrics* (retrieval recall@k, answer precision, response time, error rate, NPS).  
2. Build a **test harness**: curated query set from real support tickets + synthetic edge cases.  
3. Run *offline* evaluation of retrieval module (BM25 vs dense vectors) and *online A/B tests* for LLM prompts.  
4. Incorporate *human‑in‑the‑loop*: expert reviewers score answers; sentiment analysis on chat logs.

**Depth**  
- **Recall@k**: proportion of relevant documents retrieved in top‑k.  
- **Precision‑by‑confidence**: only answers above a confidence threshold are shown.  
- **Latency budget**: 500 ms average, 90th percentile < 800 ms.  
- **Compliance checks**: automatic redaction scoring (false positives/negatives).  
Complexity: Retrieval O(log N) with inverted index; LLM inference O(L·d). Trade‑offs between vector size and latency.

**Edge Cases**  
- Ambiguous queries → disambiguation prompts.  
- Out‑of‑scope content → fallback to “I don’t know” response.  
- Data drift → periodic re‑indexing tests.  
Test with zero‑shot, few‑shot, and chain‑of‑thought prompts.

**Optimize & Communicate**  
Iteratively prune retrieval candidates (beam search) to hit latency targets while monitoring recall loss. Present findings in a dashboard: metric trends, anomaly alerts, and recommendation heatmaps. Emphasize that continuous evaluation aligns with SLAs and user trust—key for enterprise adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
