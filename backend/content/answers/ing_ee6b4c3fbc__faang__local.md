---
qid: ing_ee6b4c3fbc__faang__local
question: 'Explain: 2.2 Storage Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 462
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:54:30-05:00'
sources: []
---

**Clarify**  
We’re asked to estimate the storage required for a music‑streaming service like Spotify: number of tracks, metadata, user data, and how that scales. I’ll assume:  
* 70 M tracks, avg 4 min each → ~3 TB raw audio (lossless).  
* 50 % compression → 1.5 TB usable.  
* Metadata per track ≈ 2 KB.  

**Approach**  
1. Compute raw audio size.  
2. Apply compression factor.  
3. Add metadata overhead.  
4. Scale for user‑generated content (playlists, likes).  
5. Factor in replication and redundancy.

**Depth**  
| Item | Size | Qty | Total |
|------|------|-----|-------|
| Raw audio | 20 GB/track (MP3 128 kbps) | 70M | **1.4 PB** |
| Compressed (lossy) | 5 GB/track | 70M | **350 TB** |
| Metadata | 2 KB/track | 70M | **140 GB** |
| User playlists (avg 200 tracks/user, 300M users) | 2 KB/trk ×200×300M | ≈ **120 TB** |
| Replication (3×) | – | – | **≈ 1.2 PB** |

Total ≈ **2–3 PB** of storage, mostly raw audio; metadata is negligible.

**Edge Cases**  
* New releases → spike in writes.  
* Lossless uploads for “Hi‑Fi” tier.  
* CDN caching reduces origin traffic but adds edge storage.  

**Optimize & Communicate**  
Use erasure coding instead of simple mirroring to cut replication cost by ~30 %. Store frequently accessed tracks in SSDs, cold data on HDD or tape. Explain trade‑offs: higher availability vs cost. Conclude that a tiered architecture (hot, warm, cold) keeps the system scalable and within budget while meeting SLA requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
