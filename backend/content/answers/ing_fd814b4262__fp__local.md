---
qid: ing_fd814b4262__fp__local
question: 'Explain: Endpoint: POST /playlists — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 665
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:58:57-05:00'
sources: []
---

### Why the **POST /​playlists** endpoint is essential

A playlist is a *mutable set* of tracks that users create, share and edit.  
From a systems‑design point of view it must support:

1. **Atomic creation** – The caller supplies metadata (name, description, privacy flag) and an initial list of track IDs. The service must either persist the whole object or roll back; partial writes would break consistency.
2. **Scalability** – Every user can create thousands of playlists; the write path must be O(1) in the number of tracks to avoid bottlenecks.
3. **Isolation & Concurrency** – Two clients may try to create a playlist with the same name or add overlapping tracks; the system should handle these gracefully (e.g., unique‑constraints, optimistic locking).
4. **Observability** – Each creation must be traceable for analytics and billing.

### Core design choices

| Layer | Decision | Rationale |
|-------|----------|-----------|
| **API contract** | `POST /playlists` with body `{name, description, privacy, tracks: [id,…]}` | Expresses intent (create) and keeps the request idempotent by requiring a client‑generated UUID in the header. |
| **Load balancer → API gateway** | Route to regional replicas; rate‑limit per user. | Keeps global latency low while protecting downstream services. |
| **Service layer** | *Playlist Service* writes to a write‑optimized DB (e.g., DynamoDB) and emits an event to Kafka (`playlist.created`). | Event‑driven design decouples the HTTP response from eventual consistency in other subsystems (search index, recommendation). |
| **Data store** | Partition key = `user_id`, sort key = `playlist_id`. Secondary index on `name` for uniqueness. | Enables fast lookups and enforces per‑user name uniqueness without a global lock. |
| **Event handler** | Consumes `playlist.created`; updates search index, notifies notification service. | Keeps the write path lightweight; side effects happen asynchronously. |

### One non‑obvious insight

> **Treat “creation” as a *transactional event* rather than a simple database row insert.**

Because playlists are often edited immediately after creation (adding or removing tracks), persisting the initial track list in the same transaction that creates the playlist would lock many rows and hurt throughput. By emitting an event, we let independent services **append** tracks later without holding locks on the core record. This pattern—*event‑driven mutation of a mutable entity*—is common in modern distributed systems (e.g., GitHub’s “pull request” events) and keeps the write path fast while preserving eventual consistency.

In short, `POST /playlists` must be an idempotent, event‑driven creation API that writes to a partitioned store, emits a creation event, and relies on downstream consumers for side effects. This balances scalability, consistency, and observability—exactly the trade‑offs you’ll be asked to discuss in a system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
