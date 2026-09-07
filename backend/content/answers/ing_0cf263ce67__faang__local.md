---
qid: ing_0cf263ce67__faang__local
question: 'Explain: Dropbox - High Level Design — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 568
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:00-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a high‑level architecture for a real‑time collaborative document editor (think Google Docs) that could run at Dropbox’s scale.  
Assumptions:  
* Millions of concurrent users, each editing dozens of documents daily.  
* Low latency (< 200 ms edit round‑trip).  
* Strong consistency for the same user’s view, eventual consistency across replicas.  
* Support rich text formatting and media embeds.

**Approach**  
1. **Client → Edge → Front‑end**: Web/desktop clients push ops to a CDN‑proxied front‑end that validates auth.  
2. **Operational Transformation (OT) / CRDT Engine**: Each document has an immutable operation log stored in a sharded, append‑only store (e.g., DynamoDB + S3). The OT engine resolves concurrent edits on the fly.  
3. **Realtime Sync Layer**: A WebSocket/QUIC service per user session that streams ops to all collaborators and persists them.  
4. **State Persistence & Snapshots**: Periodic snapshots in a distributed KV store (e.g., CockroachDB) for fast recovery, with delta logs for audit.  
5. **Conflict‑free Replication**: Use geo‑replicated CRDT shards; background workers replay ops to maintain eventual consistency across regions.  
6. **Security & Access Control**: Enforce ACLs at the front‑end and store permissions in a separate auth service.

**Depth**  
* OT/CRDT ensures linearizability for a single user while allowing high concurrency.  
* Ops are 1–2 KB; with ~10 k ops/s per doc, WebSocket keeps bandwidth < 5 MB/s per session.  
* Latency dominated by network hop to edge + small CPU transform (~< 20 ms).  
* Snapshots every 5 min reduce recovery time to < 1 s.

**Edge Cases**  
* Network partitions → local edits queued; conflict resolution on reconnection.  
* Large media embeds → stored in S3, only metadata synced via ops.  
* Simultaneous full‑doc overwrite → OT transforms last write wins per user’s session order.

**Optimize & Communicate**  
To reduce ops traffic, batch 10–20 edits before sending. Use server‑side compression and delta encoding for snapshots. I’d present this diagrammatically, highlighting the two‑tier consistency (strong intra‑session, eventual inter‑region) and stress that scaling hinges on stateless front‑ends plus a sharded OT/CRDT core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
