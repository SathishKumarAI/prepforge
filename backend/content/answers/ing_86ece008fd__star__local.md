---
qid: ing_86ece008fd__star__local
question: 'Explain: Advantages of P2P networks — Peer-To-Peer Networks: Features,
  Pros, and Cons - Spiceworks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 363
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:22-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with designing a decentralized file‑sharing platform for a university research lab that had over 200 students and faculty generating gigabytes of data daily. The existing server‑based system bottlenecked during peak hours, causing slow upload/download times and high maintenance costs.

**Task:**  
I needed to create a resilient, scalable architecture that could handle variable traffic, reduce single points of failure, and lower operational expenses while ensuring data integrity and security.

**Action:**  
I proposed a peer‑to‑peer (P2P) network using libp2p for transport abstraction. Each node stored a subset of files in a Distributed Hash Table (DHT), enabling direct retrieval without routing through a central server. I implemented redundancy by replicating each file across three random peers, and added end‑to‑end encryption with TLS 1.3 to protect data in transit. To manage churn, I used a gossip protocol for peer discovery and employed Merkle trees for efficient integrity checks. I also built a lightweight monitoring dashboard that logged upload/download rates per node, helping us identify underperforming peers.

**Result:**  
The P2P solution cut average file transfer times by 35% during peak hours and reduced server costs by 70%. Node churn was handled gracefully; the network maintained >99.5% uptime with an average replication factor of 3. I learned that careful trade‑offs between redundancy, latency, and security are essential in P2P design, and that monitoring is critical to maintain performance in a decentralized environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
