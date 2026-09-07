---
qid: ing_2214ea07b5__aws__local
question: 'Explain: File sharing — Peer-To-Peer Networks: Features, Pros, and Cons
  - Spiceworks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 491
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:14-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I led a project to replace the company’s legacy file‑sharing portal with a decentralized peer‑to‑peer (P2P) solution that could scale to 30 000 concurrent users while keeping latency under 200 ms.  

**Action (A)**  
I first mapped requirements: *data integrity, encryption, high availability, and auditability*. I chose **AWS App Mesh + EC2 Spot Instances** for the P2P nodes, **Amazon S3** as immutable backup storage, and **AWS Secrets Manager** for key distribution. To keep costs low, I used **Auto Scaling Groups** with a spot‑to‑on‑demand ratio of 80:20 and added **AWS WAF** to block malicious peers.  

I wrote a lightweight rendezvous protocol that let each node advertise its file list via **Amazon DynamoDB Streams**, ensuring *real‑time consistency* without a central tracker. I also implemented *client‑side encryption* (AES‑256) before upload, so the network never saw plaintext data.  

**Result (R)**  
The new P2P system cut average download time by **35 %** and reduced S3 storage costs by **$12k/month** compared to the old shared drive. Uptime hit 99.98 %, surpassing our SLA, and we received a 4.7‑star rating from end users in post‑deployment surveys.

---

### Leadership Principles Highlighted  
- **Ownership** – I drove the full stack redesign, from architecture to deployment and monitoring.  
- **Dive Deep** – I engineered custom rendezvous logic and quantified latency/throughput at the packet level.  

### What a Bar‑raiser Looks For  
- Clear ownership and end‑to‑end responsibility.  
- Deep technical dive into trade‑offs (spot vs on‑demand, DynamoDB Streams vs SNS).  
- Measurable impact (latency, cost savings).  
- Learning loop: after the first month we identified a burst‑traffic spike; I added **AWS Shield Advanced** and adjusted scaling policies, reducing burst latency by 20 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
