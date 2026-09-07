---
qid: ing_d15e2fbb40__faang__local
question: 'Explain: Disadvantages of P2P networks — Peer-To-Peer Networks: Features,
  Pros, and Cons - Spiceworks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 481
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:47:22-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain the *disadvantages* of P2P (peer‑to‑peer) networks, focusing on their features, pros, and cons. I’ll assume the interviewer wants a concise technical overview—no deep networking protocol detail unless prompted.

**2️⃣ Approach**  
- List key P2P characteristics first (decentralization, resource sharing).  
- Highlight advantages briefly to set contrast.  
- Dive into disadvantages: security, scalability, performance, reliability, legal/ethical concerns.  
- End with a quick mention of how these drawbacks influence ML deployments on P2P infrastructures.

**3️⃣ Depth**  
| Disadvantage | Why it matters in ML contexts |
|--------------|-------------------------------|
| **Security & Trust** | Nodes may host malicious code; model poisoning attacks become easier when data is unverified. |
| **Bandwidth & Latency** | Decentralized uploads/downloads lead to variable throughput, hurting distributed training speed. |
| **Data Heterogeneity** | Non‑uniform storage and compute resources cause load imbalance in federated learning setups. |
| **Fault Tolerance** | Peer churn (nodes joining/leaving) disrupts synchronous updates; requires complex consensus protocols. |
| **Legal & Compliance** | Unregulated data sharing can violate GDPR/CCPA, especially when personal data hops across jurisdictions. |
| **Scalability Limits** | Without a central coordinator, routing and discovery become O(n²) in worst case, limiting thousands of nodes. |

**4️⃣ Edge Cases**  
- High‑trust environments (e.g., closed consortiums) may mitigate security risks.  
- Structured overlays (Chord/Kademlia) can reduce churn impact but add protocol complexity.  
- Use of cryptographic signatures and reputation systems can partially address data integrity.

**5️⃣ Optimize & Communicate**  
I’d suggest hybrid architectures: a lightweight central registry for peer discovery + end‑to‑end encryption to preserve privacy while ensuring reliable, efficient distributed ML training. When presenting, I’ll emphasize that the choice hinges on trade‑offs between decentralization benefits and these inherent drawbacks.  

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
