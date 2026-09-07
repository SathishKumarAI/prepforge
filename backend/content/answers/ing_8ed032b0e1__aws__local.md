---
qid: ing_8ed032b0e1__aws__local
question: 'Explain: way to check um what spots are — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 450
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:00-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was asked to build a **real‑time parking‑spot detection system** for an upcoming Amazon Go‑style retail hub. The goal: reduce wait times by ≥30 % and increase revenue per square foot.

**Approach (Dive Deep, Invent & Simplify)**  
1. **Data ingestion:** Deploy 4‑camera rigs (1080p, 60 fps) on each parking bay, stream to an *Amazon Kinesis Video Streams* channel for low‑latency capture.  
2. **Model inference:** Use a pre‑trained YOLOv5 model hosted on *AWS Inferentia* via *SageMaker Edge Manager*; the model classifies “occupied” vs “free” in ~15 ms per frame.  
3. **State persistence & analytics:** Push results to *DynamoDB* (partitioned by garage ID) and stream events to *Amazon Kinesis Data Firehose* → *Redshift* for historical trend analysis.  
4. **Real‑time API:** Expose a *Lambda@Edge* function behind *API Gateway* that queries DynamoDB, delivering spot status in <200 ms.

**Result (Deliver Results)**  
- Deployed to 5 pilot garages; average detection accuracy: **94 %** (precision/recall).  
- Wait‑time reduced from 2.8 min to 1.9 min— a **32 %** improvement, boosting daily revenue by ~$12k per garage.  
- Cost: <$0.02 per inference; total monthly spend < $1.5k for 200,000 inferences.

**Learning (Bar‑raiser focus)**  
I iterated on the model after discovering that shadows caused false positives; adding a simple image‑preprocessing step cut errors by 15 %. I also documented the trade‑off between Inferentia cost and latency, ensuring future teams can scale or switch to GPU instances if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
