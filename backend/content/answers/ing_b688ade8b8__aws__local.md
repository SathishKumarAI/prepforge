---
qid: ing_b688ade8b8__aws__local
question: 'Explain: Local Video Summarization Pipeline: Processing Frames with SmolVLM2-2.2B'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 456
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:31-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that had to build an on‑device video summarization feature for a consumer app. The goal was a 30 % reduction in upload bandwidth while keeping user engagement ≥ 95 %.  

**Action**  
* **Ownership & Bias for Action:** I scoped the pipeline, wrote the spec, and split it into two stages: (1) frame extraction at 2 fps; (2) semantic summarization with SmolVLM‑2.2B.  
* **Dive Deep / Technical Design:**  
  * Used **AWS MediaConvert** to batch‑decode H.264 videos → raw frames stored in an S3 bucket (`video-frames/`).  
  * Launched a **Lambda@Edge** function (Python 3.10) that triggers on each frame upload, pulls the frame from S3, runs it through SmolVLM‑2.2B via **AWS SageMaker Edge Optimized Model** (quantized to 4‑bit).  
  * The Lambda writes a JSON summary (key objects, actions) back to another S3 bucket (`summaries/`).  
* **Scalability & Cost:** With Lambda concurrency capped at 500 and using the “on‑demand” model, we processed 1 M frames/day for <$5k/month.  
* **Availability & Reliability:** Configured S3 event notifications with retry logic; used CloudWatch alarms to auto‑scale Lambda if invocation errors > 2 %.  

**Result**  
Within three months:  
* Upload size dropped from 15 MB → 10 MB per minute of video (≈ 33 % bandwidth savings).  
* User retention on the new feature was **97 %**, surpassing the target.  
* The pipeline processed 1.2 M frames/day with < 0.5 % failure rate, proving robustness at scale.  

**Reflection** – Learned that early integration of SageMaker Edge models keeps latency low; future iterations will explore **AWS Inferentia** for further cost reduction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
