---
qid: ing_11a653161a__aws__local
question: 'Explain: At the end of it, you will — How NETFLIX onboards new content:
  Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 632
total_tokens: 884
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:32-05:00'
sources: []
---

**Situation (S)**  
When I joined the Media Platform team at Amazon Video, our “on‑boarding” pipeline for new titles was a manual, on‑premise process that took 3–4 days per movie and consumed >$30K/month in compute resources.

**Task (T)**  
Own a fully automated, cloud‑native pipeline that ingests raw footage, transcodes it into multiple bitrates, generates thumbnails & metadata, and publishes to our CDN—all within 24 hours while keeping the monthly cost < $10K and ensuring 99.9% availability.

**Action (A)**  
1. **Design** – Adopt an event‑driven architecture:  
   * **S3 Event Notifications → Amazon Step Functions** orchestrate the workflow.  
   * **AWS Lambda** triggers a **MediaConvert** job for transcoding, leveraging its serverless pricing and auto‑scaling.  
   * Parallel **Amazon Rekognition** extracts tags & scene changes; results go to **DynamoDB** (low‑latency metadata store).  
   * **S3 Object Lock** guarantees immutable storage until the CDN cache refreshes via **CloudFront** invalidation.  
2. **Scalability / Availability** – Step Functions’ state machine retries on failure, automatically scaling Lambda and MediaConvert jobs across multiple AZs; S3’s built‑in durability ensures 99.999% data protection.  
3. **Cost & Trade‑offs** – By using serverless services (Lambda, MediaConvert) we pay only for execution time (~$0.005/hr per job). Replacing the on‑prem VM cluster cut compute costs from $30K to $10K/month (+67 % savings).  
4. **Monitoring / Feedback Loop** – CloudWatch metrics + SNS alerts feed into a nightly “health” dashboard; every month we review failed jobs, adjust Rekognition confidence thresholds, and iterate.

**Result (R)**  
* On‑boarding time dropped from 3–4 days to <24 hours (≥50 % reduction).  
* Monthly compute cost fell from $30K to $10K (≈$20K annual savings).  
* Zero SLA violations in the first six months; all titles were live on schedule.

**Learning & Bar‑raiser cues**  
I demonstrated **Ownership** by taking end‑to‑end responsibility, **Dive Deep** through detailed cost and latency analyses, and quantified impact with concrete metrics. The iterative feedback loop shows a bias for action and continuous improvement—qualities Amazon looks for in every bar‑raiser interviewee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
