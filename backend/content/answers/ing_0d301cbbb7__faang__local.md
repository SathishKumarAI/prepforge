---
qid: ing_0d301cbbb7__faang__local
question: 'Explain: Core APIs — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 524
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain the *core APIs* that would power a music‑streaming service like Spotify, as part of a system‑design interview. Clarify assumptions: we’re building a public REST/GraphQL API for mobile/web clients; focus on search, playback, playlists, and user data; ignore billing or recommendation pipelines.

**Approach**  
1. **Identify functional domains** – Search, Playback, Library (playlists, favorites), User Profile.  
2. **Define resource models** – `/tracks`, `/albums`, `/artists`, `/users`, `/playlists`.  
3. **Sketch CRUD endpoints** and side‑effects (e.g., `POST /playlists/{id}/tracks`).  
4. **Add streaming specifics** – playlist ordering, resume token, DRM headers.  
5. **Consider pagination, caching, rate‑limiting** for high traffic.

**Depth**  
```http
GET /search?q={query}&type=track|album&limit=20&page=2
POST /playlists/{pid}/tracks  { "trackId": "...", "position": 3 }
GET /users/{uid}/profile
PUT /users/{uid}/profile  { "displayName": "..."}
GET /playback/stream?track={tid}&offset={ms}
```
*Streaming endpoint returns a signed URL with HLS/DASH segments; includes auth token and DRM key.*  
Use **OAuth2** for auth, **JWT** for stateless tokens. Implement **rate‑limit per IP/user** (e.g., 100 req/min). Cache search results in Redis, use CDN edge caches for media.

**Edge Cases**  
- Search returning zero hits → return empty array with 200.  
- Invalid track ID → 404; corrupted DRM → 403.  
- Concurrent playlist edits → optimistic locking via ETag/If-Match.  
- High‑latency streaming on mobile → adaptive bitrate negotiation.

**Optimize & Communicate**  
Explain trade‑offs: a single monolithic API simplifies client code but hurts scalability; micro‑services per domain (search, playback) allow independent scaling and better fault isolation. Mention eventual consistency for playlist updates and how to use event sourcing if needed. Conclude by highlighting the importance of clear, idempotent endpoints and robust error handling—key signals interviewers look for in a solid system design answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
