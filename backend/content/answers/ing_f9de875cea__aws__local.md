---
qid: ing_f9de875cea__aws__local
question: 'Explain: Storing transcoded videos — Transcoding: How We Serve Videos at
  Scale - Egnyte Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 640
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:43:13-05:00'
sources: []
---

**Situation / Task**

I was tasked with redesigning our video delivery pipeline for a media‑streaming startup that had just hit 10 M monthly viewers. The existing on‑prem transcoder produced H.264 files, stored them in an NFS share, and served them via a custom CDN. Load spikes during live events caused cache misses, latency spikes, and eventually outages. I needed to build a fault‑tolerant, cost‑effective system that could scale elastically while keeping the viewer’s experience seamless.

**Action**

1. **Requirements & Design**  
   * Transcode each source once into multiple adaptive bitrate (ABR) variants (1080p/720p/480p).  
   * Store the outputs in a highly available, cost‑efficient object store and make them instantly cacheable by any CDN edge.  
   * Trigger transcoding automatically on upload and handle failures idempotently.

2. **AWS Services**  
   * **S3** – durable storage for raw & transcoded assets (versioned, lifecycle to move to Glacier after 90 days).  
   * **Lambda@Edge / CloudFront** – front‑end CDN that can serve HLS manifests and chunked MP4 segments with low latency.  
   * **Amazon Elastic Transcoder / MediaConvert** – batch jobs run in parallel; use job queues for priority and retry policies.  
   * **Step Functions** – orchestrate the workflow: upload → validate → transcode → publish manifest → purge CDN cache.  
   * **SNS + CloudWatch Alarms** – notify ops on failures or SLA breaches.

3. **Scalability & Cost**  
   * Transcoder jobs run in parallel; each job is a short, stateless Lambda container that scales to 100 concurrent jobs for peak traffic (cost ≈ $0.15 per GB transcoded).  
   * S3 lifecycle moves rarely‑accessed old versions to Glacier at $0.004/GB/month, cutting storage costs by ~70%.  
   * CloudFront cache hit ratio improved from 68% to 95%, reducing origin fetches and bandwidth spend by ~$12k/month.

4. **Result**  
   * Latency dropped from 350 ms (median) to <80 ms for 99th percentile viewers.  
   * Live‑event buffer overruns fell from 3 × per day to zero.  
   * Operational cost decreased by 45% while doubling concurrent viewer capacity.

**Reflection**

I took full ownership of the end‑to‑end pipeline, digging deep into CloudWatch metrics to identify bottlenecks (e.g., queue depth, Lambda timeouts). The design balances **Customer Obsession**—instant playback—and **Ownership**—continuous monitoring and cost optimization. Failure learning: early in the rollout we mis‑estimated media size; adding a pre‑flight check prevented wasted transcoding jobs. This solution is now the company’s standard for all video assets, scalable to 100 M users with minimal operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
