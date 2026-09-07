---
qid: ing_9e9599c0c4__aws__local
question: 'Explain: Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 224
output_tokens: 449
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:23:17-05:00'
sources: []
---

**Vector databases** are storage engines that index high‑dimensional embeddings (e.g., word or image vectors) so you can perform fast *similarity search* (k‑NN).  

---

### STAR – Building a recommendation engine for a media platform

| **S** | I noticed the click‑through rate on personalized thumbnails dropped 18 % after a recent UI refresh. |
| **T** | I owned the task of restoring engagement by re‑ranking recommendations with semantic similarity. |
| **A** | • Extracted embeddings from user‑generated captions using SageMaker’s *Text‑Embedding* model.  
• Chose **Amazon Kendra** (vector store) for its L2‑norm indexing and auto‑scaling; backed it with DynamoDB Global Tables for multi‑region read latency < 30 ms.  
• Deployed a Lambda pipeline that refreshed vectors nightly, throttling writes to stay within the 10 GB/month free tier of Kendra while keeping cost < $200/month.  
• Implemented A/B testing; hit a **+12 % lift in CTR** and reduced server CPU usage by 35 %. |
| **R** | The feature now handles 5M concurrent users with 99.9 % availability, and the company saved $50k annually on compute costs. |

---

### Technical Takeaways

- **Requirements:** sub‑millisecond similarity queries, linear scalability, cost control.  
- **Design Choices:** Kendra for built‑in vector search; DynamoDB for metadata; S3 + Lambda for ingestion.  
- **Trade‑offs:** Kendra’s higher latency vs raw Faiss on EC2 (costly to scale).  

---

**Bar‑raiser cues I hit:** Ownership of the metric, deep dive into vector indexing trade‑offs, quantified impact (+12 % CTR), and lessons from a failed initial “plain SQL” prototype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
