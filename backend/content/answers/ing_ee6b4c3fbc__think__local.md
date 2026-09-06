---
qid: ing_ee6b4c3fbc__think__local
question: 'Explain: 2.2 Storage Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 555
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:46:17-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- *What* is needed? A reasoning trail for estimating storage for Spotify‑like service (audio, metadata, user data).  
- *Assumptions*: 30 M users, each listens 5 hrs/day, average bitrate 128 kbps, 100 songs per user stored locally, 50 GB/album catalog, plus logs & backups. Mention that precise numbers vary; we’re illustrating methodology.

**2. Adopt a layered mental model**  
- **Data types**: Audio files (CD‑quality or compressed), metadata (song info, playlists), user profiles, analytics logs, backup snapshots.  
- **Storage layers**: On‑device cache, CDN edge storage, central object store, archival tier.  
- **Redundancy & durability**: Replication factor, geographic distribution.

**3. Step‑by‑step estimation**  
1. *Audio*: 128 kbps ≈ 10 MB/hr → 5 hrs/day = 50 MB/day per user. Over a year ≈ 18 GB. Multiply by 30 M users gives ~540 PB raw, but only unique tracks are stored: 100 songs/user × 1 min/song × 128 kbps ≈ 0.8 GB each → 24 TB catalog.  
2. *Metadata*: 200 bytes per track → 20 MB total.  
3. *User profiles*: 5 KB per user → 150 GB.  
4. *Analytics logs*: 1 MB/day/user → 30 TB/year.  
5. *Redundancy*: 3× replication → multiply totals by 3.  
6. *Archival*: 10% of catalog kept in cold storage → additional ~2.4 TB.

Sum gives an order‑of‑magnitude estimate (~1–2 PB) and shows which layer dominates.

**4. Avoid common traps**  
- Don’t double‑count: raw vs unique audio, cache vs CDN.  
- Forget replication or geographic spread; can inflate numbers by 3–5×.  
- Assume all users stream every day; use realistic activity fractions.

**5. Sanity‑check & communicate**  
- Compare with known public figures (e.g., Spotify’s reported catalog size ~70 TB).  
- Explain each step verbally: “We first calculate unique audio storage, then add overheads.”  
- End with a concise summary and note that real engineering would refine numbers with usage analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
