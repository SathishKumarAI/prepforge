---
qid: ing_e877e4b653__faang__local
question: 'Explain: You know, all of these things can — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 564
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:08-05:00'
sources: []
---

**Clarify**  
The interview asks for an architectural walk‑through of *Google Wave* (the 2009 prototype).  
Assumptions:  
- The audience knows basic web & distributed systems concepts.  
- We focus on *data model*, *real‑time collaboration*, and *scalability*, not the UI.

**Approach**  
1. Outline the core components: client, server API, storage, conflict resolution.  
2. Explain how Wave uses operational transforms (OT) for real‑time editing.  
3. Show the distributed data store and replication strategy.  
4. Touch on security/authentication.  

**Depth**  
- **Wavelet model**: A *wave* is a collection of *wavelets* (documents). Each wavelet has a *canonical state* plus a log of *operations*.  
- **Operational Transform (OT)**: Clients send local edits as operations; the server applies OT to merge concurrent ops, guaranteeing convergence. OT handles insert/delete/text formatting, attachment updates, and even “pointers” for embedded objects.  
- **Server architecture**: A stateless REST/JSON‑based API backed by a *distributed key–value store* (GFS‑like). Each wavelet is stored as a sequence of operations; the server replays them to reconstruct state when needed. For hot waves, an in‑memory cache (Memcached‑style) holds the current snapshot.  
- **Replication & consistency**: Operations are appended to a *write‑ahead log* replicated via Paxos/RAFT‑like protocol across data centers, ensuring durability and fault tolerance. Reads can be served from local replicas; eventual consistency is acceptable because OT guarantees convergence.  
- **Security**: Wavelets have ACLs (owner, readers, writers). OAuth tokens identify users; operations are signed to prevent tampering.

**Edge cases**  
- *Network partitions*: OT still converges once connectivity returns, but users may see stale data temporarily.  
- *Large wavelets*: Operation logs grow; a background compaction merges ops into a snapshot + delta log.  
- *Attachment handling*: Binary blobs stored in separate blob store; only references are merged.

**Optimize & communicate**  
Explain that the OT approach trades off complexity for near‑instant collaboration, while replication via Paxos keeps consistency without sacrificing latency. Highlight how this design inspired later real‑time systems (e.g., CRDTs). Conclude by summarizing key trade‑offs: low‑latency edits vs. eventual consistency, heavy client computation vs. simple server logic, and the need for robust conflict resolution in a distributed environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
