---
qid: ing_e53440ccd3__faang__local
question: 'Explain: How NETFLIX onboards new content: Video Processing at scale 🎥'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 470
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:09-05:00'
sources: []
---

**Clarify**  
We’re asked how Netflix ingests and processes new shows/movies before they appear in the catalog. Key points to confirm:  
• What formats (AV1, H.264, etc.) do we receive?  
• Do we need transcoding for every device/bitrate?  
• How many hours of content per day?  

**Approach**  
1. **Ingest** – ingest raw files into a distributed object store (S3‑like).  
2. **Metadata extraction** – run a lightweight job to parse title, duration, audio tracks, subtitles.  
3. **Transcoding pipeline** – parallel, multi‑stage encode for each target bitrate/codec/device.  
4. **Quality assurance** – automated checks (frame errors, sync) + human QA on edge cases.  
5. **Packaging & CDN upload** – package into fragmented MP4 / DASH/HLS and push to the CDN.  

**Depth**  
- *Parallelism*: Use a serverless or container‑based system (e.g., Kubernetes + autoscaling). Each input spawns worker pods that run FFmpeg pipelines.  
- *Scalability*: With 10k hours/day, we need ~100 GB raw → 300 GB encoded; a cluster of 200 GPU nodes can handle it in <24 h.  
- *Cost*: Spot instances for encoding, caching only the most‑popular bitrates.  
- *Resilience*: Retry logic, dead‑letter queues, and state stored in DynamoDB to resume on failure.  

**Edge Cases**  
- Unsupported codecs → fallback to legacy encoder.  
- Corrupt files → quarantine & alert.  
- Sudden traffic spike (e.g., new release) → auto‑scale GPU pool.  

**Optimize & Communicate**  
Explain trade‑offs: using more GPUs reduces latency but increases cost; spot instances save money but need graceful degradation. Highlight monitoring dashboards (latency, error rates) and SLAs for 99.9 % successful uploads. Conclude with a short demo of how a new title moves from ingestion to CDN in ~2 h under normal load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
