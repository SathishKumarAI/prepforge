---
qid: ing_fd814b4262__faang__local
question: 'Explain: Endpoint: POST /playlists — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 627
total_tokens: 869
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:35-05:00'
sources: []
---

**Clarify**  
We need a **POST `/playlists`** endpoint that lets an authenticated user create a new playlist in a system like Spotify. Key assumptions:  

- User is already logged‑in (token or session).  
- Request payload contains at least `name`, optional `description`, and a list of `track_ids`.  
- We must validate ownership, uniqueness of name per user, track existence, and enforce rate limits.  

**Approach**  
1. **API contract & validation** – define JSON schema, check auth header, parse body.  
2. **Business logic layer** – create playlist record, link tracks via a join table.  
3. **Persistence** – use a relational DB for playlists/metadata and a NoSQL store (e.g., DynamoDB) for fast track lookup.  
4. **Cache** – write‑through cache (Redis) for the newly created playlist so subsequent GETs are instant.  
5. **Async side‑effects** – publish an event (`PlaylistCreated`) to a message bus for analytics, recommendation engines, and notification services.  

**Depth**  
```python
@app.post("/playlists")
def create_playlist(req: CreatePlaylistRequest, user=Depends(get_current_user)):
    # 1. Validate payload & auth
    validate_name(req.name)
    tracks = track_repo.get_many_by_ids(req.track_ids)   # O(k) lookup

    # 2. Persist playlist
    pl_id = db.insert("playlists", {
        "user_id": user.id,
        "name": req.name,
        "description": req.description,
        "created_at": now()
    })
    db.batch_insert("playlist_tracks",
                    [{"playlist_id": pl_id, "track_id": t} for t in tracks])

    # 3. Cache
    redis.set(f"pl:{pl_id}", serialize_pl(pl_id))

    # 4. Publish event
    bus.publish({"type":"PlaylistCreated","id":pl_id,"user_id":user.id})

    return {"playlist_id": pl_id}
```
Complexity: O(k) for track lookup, O(1) DB writes per record; overall linear in number of tracks. Trade‑off: using a join table keeps consistency but adds write cost; caching mitigates read latency.

**Edge Cases**  
- Duplicate playlist names → return 409.  
- Nonexistent `track_id` → validation error (422).  
- Exceeding rate limit → 429.  
- Concurrent creations with same name → unique constraint or optimistic lock.

**Optimize & Communicate**  
To reduce write amplification, batch track inserts and use bulk APIs. For high traffic, shard the playlists table by user hash to avoid hotspots. Explain that events allow decoupled services (e.g., recommendation) without blocking the API. Conclude with a brief discussion of monitoring: log latency, error rates, cache hit ratio, and message bus back‑pressure metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
