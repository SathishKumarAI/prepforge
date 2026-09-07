---
qid: ing_a186a2c217__aws__local
question: 'Explain: Transport Layer — How does SSH work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 496
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:27-05:00'
sources: []
---

**Situation & Task**  
When I was leading the migration of our legacy on‑prem data lake to an AWS‑native architecture, the team needed a secure, low‑latency channel for nightly ETL jobs that pulled data from remote partner servers via **SSH**. The goal was to reduce transfer time by 30 % while keeping costs under $1k/month.

**Action**  
I first *dive deep* into how SSH negotiates a secure tunnel over TCP:

1. **TCP handshake (Transport Layer)** – establishes a reliable connection and performs congestion control.
2. **SSH key exchange** – uses Diffie‑Hellman to agree on encryption keys without transmitting them, ensuring confidentiality.
3. **Authentication & session initiation** – public‑key auth prevents man‑in‑the‑middle attacks; the client then opens an encrypted channel for data transfer.

For our AWS implementation I:

| Requirement | Design Choice | AWS Service |
|-------------|---------------|------------|
| Reliable transport | TCP with EC2 instance in a private subnet | **Amazon VPC** (private routing) |
| Encryption & auth | SSH key pairs stored in **AWS Secrets Manager** |  |
| Scalability | Use an **Application Load Balancer** to distribute SSH sessions across multiple bastion hosts | **ALB + Auto Scaling Group** |
| Cost control | Spot Instances for bastions, minimal data egress (S3 transfer acceleration) | **EC2 Spot** + **Amazon S3 Transfer Acceleration** |

I scripted the provisioning with Terraform and automated key rotation every 90 days. The new pipeline cut ETL run time from 45 min to 32 min—a 29 % improvement—while keeping monthly spend at $840, well below our target.

**Result**  
- **Customer Obsession:** Partner customers received data updates faster with no downtime.  
- **Ownership & Bias for Action:** I owned the migration end‑to‑end and delivered results within 6 weeks of sprint planning.  

**Learnings**  
The key lesson was that understanding *transport layer* fundamentals (TCP reliability, SSH handshake) lets you choose the right AWS services to balance security, performance, and cost—exactly what Amazon expects from a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
