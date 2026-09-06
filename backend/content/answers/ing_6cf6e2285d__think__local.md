---
qid: ing_6cf6e2285d__think__local
question: 'Explain: Storage Estimation — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 587
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:12:26-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   * Confirm that “Storage Estimation” refers to estimating how much data an Airbnb‑style system would need to hold (users, listings, reviews, photos, etc.).  
   * Assume a typical scale: millions of users, hundreds of thousands of active listings per day, and a multi‑year historical record.  
   * Decide whether the estimate should cover raw storage or also include replication, backups, and indexing overhead.

**2. Adopt a modular mental model**  
   * Break the system into key entities (Users, Listings, Reservations, Reviews, Media).  
   * For each entity list attributes that contribute to size: text fields, numeric IDs, timestamps, geolocation data, binary blobs for images/videos.  
   * Consider relational vs NoSQL storage choices and how they affect per‑record overhead.

**3. Reason step‑by‑step**  
   1. **Count objects** – estimate daily/annual creation rates (e.g., 200k new listings/year, 10M reservations).  
   2. **Size each object** – calculate average byte size for a listing record (~5 KB), reservation (~3 KB), review (~2 KB), user profile (~4 KB), media (~500 KB per photo).  
   3. **Multiply and sum** – (200k × 5 KB) + (10M × 3 KB) + … to get raw data volume.  
   4. **Add overhead** – index rows, transaction logs, replication factor (e.g., ×3).  
   5. **Project growth** – apply a reasonable CAGR (say 20%) over the next 5–10 years.

**4. Avoid common pitfalls**  
   * Don’t double‑count fields that are shared across entities (e.g., user IDs).  
   * Ignore the cost of metadata (file system, database catalog).  
   * Forget that media storage is often on a CDN or object store with different pricing and size models.

**5. Sanity‑check & verbalize**  
   * Compare the final figure to known benchmarks: e.g., if you end up with ~50 TB raw data for a 10‑year horizon, check that this aligns with industry averages for similar platforms.  
   * Explain each assumption aloud: “We’re assuming 200k new listings per year and an average photo size of 500 KB; if either changes, the estimate scales linearly.”  
   * End with a concise summary: “Thus, Airbnb‑scale storage will be on the order of tens of terabytes raw, which after replication and backups could reach ~150 TB.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
