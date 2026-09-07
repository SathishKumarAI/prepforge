---
qid: ing_91983954dd__aws__local
question: 'Explain: LLM-based evals (slower, but handles nuance)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 384
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:00-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the rollout of a compliance‑audit engine that had to score natural‑language policy documents for regulatory risk. The existing rule‑based system was fast but missed nuanced phrasing; our clients demanded 95 % semantic accuracy or nothing.

**Action**  
I scoped an LLM‑powered evaluation pipeline, choosing **Amazon SageMaker Endpoint** with a fine‑tuned *Jurassic‑2* model (≈12B parameters). To keep latency acceptable, I wrapped the endpoint in **AWS Lambda@Edge** for edge inference and used **Amazon CloudFront** caching to serve pre‑computed scores for common queries.  
I also built an incremental training loop on **S3 EventBridge** that queued new documents into a **Step Functions** state machine; each step ran data validation, feature extraction, and the LLM inference. The system logged every request in **Amazon CloudWatch Logs**, enabling us to track throughput (≈2 k requests/second) and latency (average 1.8 s per document).  

**Result**  
After deployment, semantic accuracy jumped from 78 % to **94 %** on a blind test set—meeting the client SLA—and the overall audit turnaround time fell by **30 %** because the LLM could flag high‑risk sections in a single pass. Cost was controlled at ~US$0.12 per inference, within budget.  

**Reflection**  
I took full ownership of trade‑offs: slower inference for higher accuracy, leveraged edge caching to balance latency and cost, and instituted continuous learning from failed predictions—showing *Ownership*, *Dive Deep*, and *Deliver Results* in true Amazon fashion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
