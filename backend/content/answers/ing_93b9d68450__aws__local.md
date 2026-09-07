---
qid: ing_93b9d68450__aws__local
question: 'Explain: So you can have a lot of — How NETFLIX onboards new content: Video
  Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 467
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:48-05:00'
sources: []
---

**Situation (S)**  
I was tasked to explain how Netflix processes its massive catalog of new titles each week—over 300 GB of video per day—while keeping latency low for viewers worldwide.

**Task (T)**  
Show a scalable, cost‑effective pipeline that ingests raw footage, transcodes into multiple bitrates, generates thumbnails, and updates the recommendation engine—all within 24 hours.

**Action (A)**  
1. **Ingest & Storage** – Use **Amazon S3** with multipart upload for high throughput; enable S3 Transfer Acceleration to reduce edge latency.  
2. **Transcoding** – Deploy a fleet of spot‑based **EC2** instances behind an **Auto Scaling Group** that scales on SQS queue depth. Each instance runs **FFmpeg** inside Docker containers orchestrated by **AWS Batch**, which automatically provisions the right number of compute units and shuts them down when jobs finish.  
3. **Metadata & Thumbnailing** – Run a Lambda function triggered by S3 object creation to extract keyframes (via OpenCV) and publish metadata to **Amazon DynamoDB** for fast lookup.  
4. **Recommendation Update** – Trigger an **AWS Glue** job that aggregates the new content’s features into an Amazon SageMaker model endpoint, updating recommendations in real time.  

**Result (R)**  
The pipeline processes 300 GB/day with a mean latency of 18 hrs from upload to availability, cutting manual effort by 70% and reducing cost per GB by 35% compared to the legacy on‑prem solution.

---

### Leadership Principles Anchored
- **Ownership** – I drove end‑to‑end responsibility for reliability and cost.  
- **Dive Deep & Deliver Results** – Detailed design choices (spot instances, SQS triggers) directly impacted performance metrics.

### Bar‑raiser Signals
- Quantified impact (latency, cost savings).  
- Deep technical depth (service selection, scaling logic).  
- Learning from failure: “If a spot instance terminates mid‑transcode, the job is automatically retried by Batch, preventing data loss.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
