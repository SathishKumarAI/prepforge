---
qid: ing_6a04b746d7__fp__local
question: 'Explain: 4.1 Requirement 1: Music Streaming — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 401
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:50:13-05:00'
sources: []
---

### Why “Music Streaming” is the first requirement

When designing a service like **Spotify**, the *core* problem is to deliver audio content to millions of users with minimal latency and maximal reliability.  
From an information‑theoretic standpoint, each song is a large data object that must be transmitted over a network whose bandwidth is far smaller than the aggregate size of all stored tracks. The system therefore has to **compress** the data (via codecs), **partition** it across many nodes, and **cache** popular items near users.

Geometrically, we can view the service as a graph where vertices are *users*, *songs*, and *servers*. Edges represent bandwidth‑constrained links. The objective is to keep the average path length (latency) short while keeping edge capacities below thresholds—a classic *min‑max* optimization problem. This drives choices such as:

- **CDN placement**: place copies of hot tracks in regions with high request density.
- **Consistent hashing** for content distribution, ensuring balanced load and easy scaling.
- **Adaptive bitrate streaming** (ABR): dynamically adjust quality based on real‑time network conditions to keep buffer underruns low.

#### Non‑obvious insight

Many designers focus solely on *availability* or *throughput*, but the *user’s perceived quality of experience (QoE)* is dominated by the *initial buffering time*. Even a perfectly available system can fail if the first few seconds stall. Thus, the design must prioritize **edge caching** and **pre‑fetching heuristics** that anticipate user playlists, not just reactive streaming.

In short, Requirement 1 forces us to formalize the trade‑off between *bandwidth*, *latency*, and *caching*—the heart of any large‑scale media service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
