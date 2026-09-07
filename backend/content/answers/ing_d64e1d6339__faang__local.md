---
qid: ing_d64e1d6339__faang__local
question: 'Explain: At the same time, we want to — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 479
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:35-05:00'
sources: []
---

**Clarify**  
We’re asked to describe how Google Wave works internally—its architecture, data model and key protocols—while keeping the explanation concise enough for a FAANG interview.

---

### Approach
1. **Data‑model abstraction**: Wave is a *real‑time collaborative document* (a “wavelet”).  
2. **Operational transformation (OT)**: concurrent edits are merged by OT.  
3. **Transport layer**: XMPP over WebSocket with JSON payloads.  
4. **Persistence & state sync**: Google’s BigTable + Wavelet logs, snapshotting, and incremental diffs.

---

### Depth
- **Wavelet** = a partition of a wave; each has an immutable *log* of *operations* (insert, delete, meta changes).  
- **OT engine** runs on client and server. Operations are transformed against concurrent ops to preserve intention. The algorithm guarantees convergence regardless of order.  
- **Transport**: Clients send `Op` messages via XMPP streams; the server pushes back `WaveletUpdate`s. The protocol is lightweight JSON, compressed over WebSocket for low latency.  
- **Persistence**: Ops are written to BigTable shards per wavelet. Periodic snapshots (every ~200 ops) allow fast recovery and garbage‑collect old logs.  
- **Security & access control**: Each wave has an ACL stored as part of the wavelet state; servers validate every incoming op against it.

---

### Edge Cases
- **Network partitions** → OT resolves divergent histories; last‑write‑wins on meta conflicts.  
- **Large waves (>10k ops)** → snapshotting prevents log bloat; incremental diffs reduce bandwidth.  
- **Malicious ops** → server rejects if transformation fails or ACL violated.

---

### Optimize & Communicate
Explain trade‑offs: OT is simpler than CRDTs but needs a robust conflict resolution strategy; XMPP is proven at scale but newer protocols (WebRTC) could lower latency. Conclude by highlighting how this design scales to millions of concurrent users while preserving low‑latency, eventual consistency—exactly the kind of system thinking FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
