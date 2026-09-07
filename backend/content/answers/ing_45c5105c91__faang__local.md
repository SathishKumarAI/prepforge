---
qid: ing_45c5105c91__faang__local
question: 'Explain: You have high quality 720p The number — How NETFLIX onboards new
  content: Video Processing at scale \ud83c\udfa5'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 541
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:00-05:00'
sources: []
---

**Clarify**  
You’re asking how Netflix ingests a 720 p source (≈1 M‑bit/s) and produces the many transcoded variants it streams. I’ll assume we need to cover: input ingestion, decoding, re‑encoding at multiple bitrates/bitrates, metadata extraction, storage, and delivery.  

**Approach**  
1. Ingest → decode → analyze (metadata, keyframes).  
2. Create a *transcoding graph* of target codecs/bitrate ladders.  
3. Parallelize jobs across GPU‑enabled workers in the cloud.  
4. Store manifests (HLS/DASH) and encrypted segments in CDN‑backed object store.  

**Depth**  
- **Ingestion**: HTTPS uploads or S3 bucket triggers; use HLS‑like chunking for resumable transfer.  
- **Decoding**: FFmpeg or NVENC/H.264/H.265 decoders, stripping DRM if needed.  
- **Analysis**: Detect scene changes, audio language tracks, subtitle streams.  
- **Transcoding**: Multi‑pass encoding with CRF + ABR to hit target bitrates (e.g., 300 kbps – 4 Mbps). Use GPU batch queues; each job can run 8–16 parallel streams.  
- **Manifest generation**: Build MPEG‑DASH/HLS manifests linking encrypted segments.  
- **Storage & CDN**: Upload to S3‑compatible storage, then push to CloudFront/EdgeCache with origin failover.  

Complexity per video ≈ O(n×m) where *n* is target variants and *m* is GOPs; parallelism drives throughput. Trade‑offs: GPU cost vs. latency; two‑pass encoding for quality vs. one‑pass for speed.

**Edge cases**  
- Corrupt source → retry with error logs.  
- Extremely high motion → adjust bitrate ladder.  
- DRM‑protected content → separate decryption step before transcoding.  

**Optimize & Communicate**  
- Use spot instances to cut GPU cost by 30 %.  
- Cache frequently used encoder presets in Redis to avoid disk I/O.  
- Instrument each stage with Prometheus metrics; alert on job failures or SLA breaches.  
- Explain this pipeline as a “real‑time, scalable microservice architecture” during the interview, highlighting how we balance quality, cost, and latency at Netflix scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
