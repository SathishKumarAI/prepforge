---
qid: ing_ee6b4c3fbc__star__local
question: 'Explain: 2.2 Storage Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 451
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:24-05:00'
sources: []
---

**Situation:**  
During a mock system‑design interview I was asked to estimate the storage required for Spotify’s music catalog, assuming it serves 70 million active users worldwide, each user listening an average of 30 hours per month.

**Task:**  
I needed to calculate the total disk footprint for all audio files, metadata, and backup copies, then justify the choice of storage tier (e.g., S3 vs. Glacier) while keeping cost under $1 M/month.

**Action:**  
I started by estimating the catalog size: 70 M users × 30 hrs ÷ 60 mins = 35 M songs streamed per month. With an average MP3 bitrate of 320 kbps, each song (~4 min) ≈ 9 MB. That’s ~315 TB of raw audio monthly.  
I added a 1× redundancy factor (RAID‑6) → 630 TB raw. Metadata (artist, album, tags) adds ~5 GB per million songs → 0.35 GB total.  
Using AWS S3 Standard for hot data (10% of catalog) and S3 Glacier Deep Archive for the rest, I calculated storage cost: $0.023/GB/month for S3 ≈ $14 k; $0.004/GB/month for Glacier ≈ $2.5 k. Total < $20 k/month, well below budget.  
I also drafted a Python script to automate these calculations and plotted usage curves over 5 years.

**Result:**  
The interviewers were impressed: I estimated ~630 TB of active storage with a projected cost of ~$22 k/month, scaling linearly to 1.2 PB by year five. I learned how to break down complex systems into concrete units, validate assumptions against real‑world data, and present trade‑offs clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
