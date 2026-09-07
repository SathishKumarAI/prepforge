---
qid: ing_f402a47a40__faang__local
question: 'Explain: Data Pipeline — How Google/Apple Maps Blur License Plates and
  Faces'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 552
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:06:35-05:00'
sources: []
---

**Clarify**  
We’re asked how a large mapping service (Google/Apple) removes personally identifiable information—license plates and faces—from street‑view imagery before public release.  
Key assumptions: *Real‑time processing*, *high accuracy*, *low latency*, *scalable to billions of images*, and *compliance with privacy laws*.

**Approach**  
1. **Ingestion & Pre‑processing** – raw video frames captured by vehicles are streamed to a distributed storage layer (e.g., GCS/MinIO).  
2. **Object Detection** – run a CNN (YOLOv5/Detectron) on each frame to locate plates and faces, yielding bounding boxes and confidence scores.  
3. **Verification & Tracking** – use Kalman filters or optical flow to track objects across consecutive frames; this reduces false positives and ensures consistent blurring.  
4. **Blurring / Masking** – apply a Gaussian blur or pixel‑shuffling inside the bounding box, optionally using adaptive intensity based on confidence.  
5. **Quality Assurance & Auditing** – random sampling for manual review; logs of every processed frame are stored in a metadata catalog (BigQuery).  
6. **Delivery** – write back to public storage with versioning and access controls.

**Depth**  
- *Model*: 50‑layer ResNet backbone + FPN, fine‑tuned on millions of annotated plates/faces; inference latency ≈ 10 ms/frame on TPU v4.  
- *Tracking*: Multi‑object tracking (SORT) maintains identity across frames, allowing us to blur the same plate consistently even if it moves partially out of view.  
- *Security*: All processing occurs in a VPC with egress restrictions; no raw images leave the secure cluster.

**Edge Cases**  
- Low‑light or occluded plates → fallback to heavier detection (e.g., Mask R‑CNN).  
- Partial blurs from motion blur can leak information – addressed by re‑detecting after smoothing.  
- New plate formats or face disguises require periodic model retraining.

**Optimize & Communicate**  
We could replace the per‑frame detector with a lightweight, edge‑device version to reduce backhaul traffic, trading off some recall for speed. To explain this to stakeholders, I’d present a diagram of the pipeline, highlight latency budgets, and show audit logs demonstrating compliance. This structured narrative satisfies FAANG’s signal interviewers: clear problem framing, logical solution steps, technical depth, edge‑case awareness, and forward‑thinking optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
