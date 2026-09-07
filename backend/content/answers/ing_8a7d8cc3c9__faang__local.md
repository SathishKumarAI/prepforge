---
qid: ing_8a7d8cc3c9__faang__local
question: 'Explain: Blob Storage — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 533
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:05:53-05:00'
sources: []
---

**Clarify**  
You want a high‑throughput, fault‑tolerant object store for Spotify’s media assets (audio files, thumbnails, playlists). Assume millions of users, daily uploads, and near‑real‑time streaming with minimal latency. Key constraints: durability, scalability, strong consistency for metadata, and cost‑efficiency.

**Approach**  
1. **Data model:** Treat each media asset as a *blob* identified by a unique key (e.g., SHA‑256 hash). Store binary data in large chunks across distributed nodes.  
2. **Storage layer:** Use a *sharded object store* (like Amazon S3 or GCS) with erasure coding for durability and hot‑cache tiering for frequently accessed blobs.  
3. **Metadata service:** A separate, strongly consistent key‑value store (e.g., Spanner/Bigtable) holds blob metadata (size, checksum, ACLs).  
4. **API gateway:** RESTful endpoints with signed URLs; use CDN edge caches to reduce origin hits.  
5. **Consistency model:** *Read‑your‑writes* for uploads, eventual consistency for cross‑region replication.

**Depth**  
- **Chunking & replication:** Split blobs into 64 MiB chunks, replicate each chunk across three data centers (RAID‑6 erasure coding).  
- **Cache hierarchy:** In‑region memory cache → SSD tier → object store.  
- **Write path:** Client uploads to a pre‑signed URL; upon completion, metadata is atomically committed.  
- **Read path:** CDN fetches first; if miss, API retrieves from nearest data center.  
- **Complexity:** Write: O(1) for metadata + O(n_chunks) network traffic. Read: O(1) cache hit or O(log N) lookup in metadata store.

**Edge cases**  
- *Large uploads*: implement resumable multipart upload.  
- *Corruption*: verify checksums on read, trigger recompute from replicas.  
- *Hot blobs*: auto‑promote to higher cache tiers.  

**Optimize & communicate**  
Explain that the design balances latency (CDN + caching), durability (erasure coding), and cost (tiered storage). Highlight trade‑offs: stronger consistency costs more replication; cheaper tiering increases read latency for cold data. Convey how each component addresses Spotify’s scale, ensuring a robust blob storage system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
