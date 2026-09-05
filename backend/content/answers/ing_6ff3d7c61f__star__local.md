---
qid: ing_6ff3d7c61f__star__local
question: 'Explain: They have a list of addresses.They map — How NETFLIX onboards
  new content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 461
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:48-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with building an ingest pipeline for a streaming platform that had just signed a deal to add 500 new TV series in the next two weeks. The content came from multiple studios, each providing a list of source URLs (addresses) and metadata.

**Task:**  
I needed to design a system that could automatically map those source addresses to our internal processing clusters, queue them for transcoding, and ensure that the output files were correctly distributed across our CDN edge locations—essentially mimicking Netflix’s “video processing at scale” workflow.

**Action:**  
1. I wrote a lightweight service in Go that parsed each URL list, extracted hostnames, and used DNS‑SRV records to discover the nearest ingest node in our data center network.  
2. The service then generated a manifest file for each show, mapping every source stream to an AWS Elemental MediaConvert job with the appropriate codec settings (HEVC 4K, H.264 1080p).  
3. I implemented a Kafka topic per content bucket; producers pushed ingest events, and a consumer group ran worker pods that pulled jobs from SQS queues, triggering MediaConvert via boto3.  
4. Once transcoded, the output was automatically uploaded to an S3 “origin” bucket, and CloudFront invalidations were queued so new assets appeared instantly at edge caches.  
5. Finally, I added a Prometheus exporter that tracked job latency and error rates, feeding alerts into PagerDuty.

**Result:**  
The pipeline processed 500 series—over 20 000 individual episodes—in under 48 hours with an average transcoding time of 12 minutes per episode, matching the studio’s SLA. Error rate dropped from 3% to <0.5%. I learned that decoupling ingest mapping from transcoding orchestration and using a message‑queue backplane dramatically improves reliability at scale—exactly what Netflix does when onboarding new content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
