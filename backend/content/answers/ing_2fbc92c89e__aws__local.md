---
qid: ing_2fbc92c89e__aws__local
question: 'Explain: So for India you can keep separate — How NETFLIX onboards new
  content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 518
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:13:13-05:00'
sources: []
---

**S – Situation**  
When I joined the streaming platform team, we had to ingest 30 000 new titles a month from India, each with multiple resolutions and subtitles. The pipeline was hitting latency spikes and cost overruns (≈$200k/month) because of ad‑hoc transcoding jobs.

**T – Task**  
Design an automated, scalable ingestion system that reduces processing time by 70 % and cuts costs by 40 %, while ensuring 99.9 % availability for the downstream recommendation engine.

**A – Action**  
1. **Decoupled architecture:**  
   * S3 “Upload” bucket → EventBridge → Step Functions → Lambda orchestrator.  
   * Each media file triggers a SageMaker inference job that extracts metadata (duration, codec) and decides on transcode presets.  
2. **Transcoding layer:** MediaConvert jobs spun up in parallel per resolution; containerized workers run on Fargate for burst capacity.  
3. **Storage & caching:** Transcoded assets go to S3 Glacier Deep Archive after 30 days, then to a low‑latency “Hot” tier.  
4. **Cost control:** Spot instances for SageMaker inference and Fargate bursts; IAM policies enforce least privilege.  
5. **Monitoring:** CloudWatch dashboards + automated scaling rules based on queue depth.

**R – Result**  
*Processing time dropped from 12 hrs to 3 hrs (75 % reduction).*  
*Monthly cost fell from $200k to $120k (+40 % savings).*  
*Throughput grew to 45 000 titles/month without SLA violations.*  

**Leadership Principles Highlighted**  
- **Ownership:** Took full responsibility for the pipeline’s end‑to‑end performance.  
- **Dive Deep & Bias for Action:** Instrumented every step, identified bottlenecks, and iterated on AWS services until metrics met goals.  

**Bar‑raiser Insight** – Look for a candidate who not only automates but also quantifies impact, learns from failed batch runs (e.g., retry logic), and continuously refines the system for cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
