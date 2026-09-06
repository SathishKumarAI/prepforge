---
qid: ing_ca15657fa6__fp__local
question: 'Explain: Estimate the cost and turnaround of running your diligence workflow
  over a 5,000-document data room, and tell me which lever you would pull first.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 396
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:10:18-05:00'
sources: []
---

**First‑principles estimate**

1. **Workload decomposition**  
   * Document ingestion (OCR + indexing): 0.5 s per page → 2 h for 10 k pages.  
   * Entity extraction (names, dates, clauses): 0.3 s/page → 1.5 h.  
   * Similarity & clustering: 0.05 s/page → 0.25 h.  
   * Human review of flagged items: 30 min per 200 docs → 2.5 h.  

   Total compute ≈ 6 h × 8 core‑hour cost $0.50/core‑hr = **$3**.  
   Human time ≈ 5 h × $60/hr = **$300**.  
   Storage/transfer negligible (<$10).  

2. **Turnaround**  
   *Pipeline latency*: 1 day for ingestion + 0.5 day for processing.  
   *Human review* can run in parallel; 5 h ≈ 0.6 days.  
   **Total: ~2 days** (assuming a single team and no queue).

3. **Primary lever**  
   The bottleneck is human review. Automating the *entity‑extraction confidence threshold*—raising it from 90 % to 95 % with minimal loss in recall—cuts review time by ≈ 40 %. This lever improves throughput without extra compute, leveraging the same model weights while tightening precision.

**Takeaway:** Expect ~\$300 cost and a 2‑day window; first action: raise extraction confidence threshold to shave human hours.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
