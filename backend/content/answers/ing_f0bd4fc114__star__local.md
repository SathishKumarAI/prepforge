---
qid: ing_f0bd4fc114__star__local
question: 'Explain: Cryptocurrency — Peer-To-Peer Networks: Features, Pros, and Cons
  - Spiceworks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 350
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:32-05:00'
sources: []
---

**Situation:**  
During my senior capstone I led a team building a prototype decentralized exchange (DEX) for an academic hackathon. We were tasked with showcasing how peer‑to‑peer blockchain networks could handle high‑frequency trades without a central authority.

**Task:**  
I had to design the network layer, explain its key features, and assess its strengths and weaknesses so that non‑technical judges could grasp why P2P was chosen over traditional client‑server models.

**Action:**  
We implemented an Ethereum‑style proof‑of‑work ledger using Go‑Ethereum (Geth) nodes. I mapped out the network topology: each node ran a full validator, maintained a mempool for unconfirmed transactions, and used gossip protocols to broadcast blocks. I highlighted features such as distributed consensus, immutability via hash chaining, and censorship resistance. For pros, I quantified latency reductions—our peer‑to‑peer propagation dropped from 12 s (central server) to ~3 s—and demonstrated zero single point of failure by simulating node outages. Cons were illustrated with a trade‑off chart: higher bandwidth usage (~200 KB/s per node), increased attack surface for Sybil attacks, and slower finality compared to permissioned chains.

**Result:**  
The prototype secured first place at the hackathon; judges noted our clear exposition of P2P pros/cons. I learned that real‑world impact hinges on balancing decentralization benefits against operational costs—knowledge I now apply when designing scalable blockchain solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
