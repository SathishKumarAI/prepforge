---
qid: ing_fd814b4262__think__local
question: 'Explain: Endpoint: POST /playlists — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 491
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:44:46-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- *What is a “playlist” in this context?* Assume it has an ID, name, owner, list of track IDs, and metadata (public/private).  
- *Who can call POST /playlists?* Authenticated users only; we’ll rely on OAuth/JWT.  
- *What does “design Spotify” imply?* We want a scalable, highly available system that supports millions of users and playlists, with eventual consistency for writes.

**2. Pick a mental model/framework**  
Use the classic *Micro‑service + Event‑Sourcing + CQRS* pattern:  
- **Command side** (write) validates input, persists to an append‑only log, publishes events.  
- **Query side** builds read models in a separate store for fast reads.

**3. Step‑by‑step reasoning**  
1. *API layer*: expose POST /playlists with JSON body `{name, trackIds}`; validate schema & auth.  
2. *Command handler*: generate a UUID playlistId, write “PlaylistCreated” event to an event log (Kafka).  
3. *Event processor*: consumes events, updates a relational DB (`Playlists` table) and a cache (Redis) for fast reads.  
4. *Scaling*: partition the event stream by user id to keep ordering per owner; use consumer groups for parallelism.  
5. *Consistency*: eventual consistency is acceptable – users see their new playlist after a short delay.  
6. *Failure handling*: retry logic on Kafka, idempotency via request IDs in headers.

**4. Common traps to avoid**  
- Mixing read/write concerns in the same service → hard to scale.  
- Assuming immediate consistency; it breaks under high load.  
- Ignoring authentication & rate limiting → security holes.  
- Not handling duplicate requests (idempotent POST) → duplicate playlists.

**5. Sanity‑check & verbalize**  
- Verify that each component has a single responsibility.  
- Confirm the data flow: API → command → event log → read model.  
- Explain latency expectations: ~50 ms for write, eventual read consistency.  
- Reiterate trade‑offs: we choose eventual consistency to get high throughput and low latency for writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
