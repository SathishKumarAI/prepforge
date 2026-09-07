---
qid: ing_5a35106abc__aws__local
question: 'Explain: Audio Files (The Big One) — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 471
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:49:39-05:00'
sources: []
---

**Situation & Task**  
At my last role I was asked to prototype a “Big One” audio‑file service for Spotify—handling 200 M users streaming 1 TB of music per day with < 100 ms latency. My goal: design an end‑to‑end system that scales, remains highly available, and costs <$5 M/yr.

**Action & Design**  
*Front‑end*: API Gateway → Lambda (Python) for request routing, throttling 10 k req/s per region.  
*Storage*: S3 (object store) + Glacier Deep Archive for rare tracks; lifecycle policy moves 30‑day-old assets to Glacier, saving ~40 % storage cost.  
*Processing*: Step Functions orchestrate transcoding via Elastic Transcoder → media conversion jobs, parallelized by DynamoDB Streams.  
*Serving*: CloudFront CDN caches popular shards (90 % cache hit), edge locations reduce latency to < 50 ms globally.  
*Observability*: CloudWatch + X-Ray trace end‑to‑end latency; alarms trigger auto‑scaling of Lambda concurrency and ECS Fargate containers for transcoding spikes.  

**Result**  
- Reduced average user playback latency from 250 ms to 80 ms (68 % improvement).  
- Cut storage cost by 35 % via lifecycle tiers, saving $1.2 M annually.  
- Maintained 99.99 % uptime during a peak summer campaign of 3× traffic.

**Leadership Principles**  
*Customer Obsession*: I prioritized low latency and reliability for the user experience.  
*Ownership & Dive Deep*: Built end‑to‑end monitoring, iterated on failure modes (e.g., transcoding retries), and documented cost‑benefit trade‑offs.  

**Bar‑raiser takeaways**  
I demonstrated ownership by owning the full stack, dove deep into performance metrics, quantified impact with real numbers, and learned from a failed cache warm‑up experiment—pivoting to CloudFront edge caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
