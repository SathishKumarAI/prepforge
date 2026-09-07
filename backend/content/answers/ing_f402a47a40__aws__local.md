---
qid: ing_f402a47a40__aws__local
question: 'Explain: Data Pipeline — How Google/Apple Maps Blur License Plates and
  Faces'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 440
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:54-05:00'
sources: []
---

**Situation / Task**  
At a mapping startup I was tasked with building an end‑to‑end pipeline that automatically blurs license plates and faces in millions of user‑generated street‑view images—similar to what Google/Apple Maps do—to protect privacy while keeping map detail intact.

**Action**  
I owned the solution from data ingestion to post‑processing, choosing a serverless stack for scalability and cost control.  
1. **Ingest** – S3 bucket receives raw JPEGs; EventBridge triggers an AWS Lambda that validates size/format.  
2. **Detection & Masking** – A SageMaker endpoint runs a YOLOv5 model (trained on 500k annotated images) to locate plates and faces, returning bounding boxes. Lambda stitches the masks into a new image using OpenCV in a Docker‑based Lambda layer.  
3. **Storage & Delivery** – Processed images are written back to an S3 “blurred” bucket; CloudFront serves them with edge caching.  
4. **Monitoring** – CloudWatch metrics (inference latency, success rate) feed into an SNS alert for any drop below 99% accuracy.

**Result**  
The pipeline processed 2 M images/day at <$0.10/image, achieving 98.7 % detection precision and 97.9 % recall—meeting our privacy SLA while keeping storage costs 40 % lower than a dedicated EC2 cluster.  

**Learnings & Bar‑raiser cues**  
- **Ownership**: I drove the entire stack, from model training to cost analysis.  
- **Dive Deep**: I benchmarked Lambda vs. Fargate and chose the cheaper, more scalable option after profiling memory usage.  
- **Quantified Impact**: Reported daily throughput, cost per image, and accuracy metrics.  
- **Learning from Failure**: After a false‑negative spike in early tests, I added a fallback inference step on SageMaker Batch Transform, reducing misses by 3 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
