---
qid: ing_dd38909975__faang__local
question: 'Explain: Figma System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 615
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:12:56-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of the *typical* system‑design problems that were asked in recent FAANG interviews concerning **Figma**, the collaborative design tool.  I’ll assume:  
- The focus is on scalability, real‑time collaboration, and data consistency.  
- You’re expected to outline key subsystems (file storage, versioning, UI rendering) rather than write code.

**Approach**  
1. List the high‑level functional requirements.  
2. Sketch a layered architecture: client → API gateway → services (auth, file, collaboration) → data stores.  
3. Highlight trade‑offs (eventual vs strong consistency, latency vs throughput).  
4. End with a quick “why this works” paragraph.

**Depth**

| Layer | Responsibility | Key Design Choices |
|-------|----------------|--------------------|
| **Client** | Render SVG/Canvas, diffing UI changes | WebSocket + long‑poll fallback for low‑latency; use delta compression to reduce bandwidth. |
| **API Gateway** | Auth, rate limiting, routing | Token‑based auth (JWT), API versioning, circuit breakers. |
| **Auth Service** | OAuth2 + SSO | Centralized IdP, MFA, audit logs. |
| **File Service** | CRUD on design files, metadata | Object store (S3) for blobs; PostgreSQL/Spanner for JSON metadata; use content‑addressable storage to dedupe. |
| **Versioning Service** | Immutable snapshots + delta patches | Append‑only log in Kafka → stream‑to‑DB; use CRDTs for merge conflicts. |
| **Collaboration Service** | Real‑time ops, presence | Operational Transformation (OT) or Conflict‑free Replicated Data Types (CRDT); Redis pub/sub for change propagation. |
| **Search/Indexing** | Asset search, tag lookup | ElasticSearch + inverted index; incremental updates via Kafka consumer. |

**Edge Cases**

- Network partitions → eventual consistency with conflict resolution.  
- Large file (> 100 MB) → chunked uploads and resumable streams.  
- Offline edits → local cache + sync on reconnect.  
- Data loss protection → WAL and backups every 15 min.

**Optimize & Communicate**  

*Improvements*:  
- Use gRPC for internal services to reduce overhead.  
- Cache rendered thumbnails in CDN; pre‑compute on upload.  
- Auto‑scale collaboration workers via Kubernetes HPA based on WebSocket connections.

*Narration*: “We’re building a horizontally scalable, event‑driven architecture that keeps the user experience smooth (≤ 200 ms latency) while ensuring every collaborator sees a consistent view. By separating concerns—storage, versioning, real‑time ops—we can independently scale and replace components without downtime.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
