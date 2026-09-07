---
qid: ing_a17599336c__faang__local
question: 'Explain: Transit Gateway — Typical AWS Network Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:59:59-05:00'
sources: []
---

**Transit Gateway – Typical AWS Network Architecture**

| Step | What to Cover |
|------|---------------|
| **Clarify** | *Problem:* Describe the role of an AWS Transit Gateway (TGW) in a multi‑VPC, hybrid cloud setup and why it’s preferred over peering or VPN‑only designs. Ask: Do we need inter‑region connectivity? Are there on‑premises sites? What are latency/throughput constraints? |
| **Approach** | 1️⃣ Create TGW as the hub. <br>2️⃣ Attach each VPC (or on‑prem via Direct Connect/VPN) to the TGW. <br>3️⃣ Configure routing tables per attachment: allow selective traffic, use route propagation or static routes. <br>4️⃣ Optionally enable inter‑region peering for global workloads. |
| **Depth** | • **Scalability:** One TGW can handle thousands of attachments; eliminates the 5‑VPC mesh problem. <br>• **Security:** Use per‑attachment security groups, NACLs, and route filtering to isolate traffic. <br>• **Cost:** Direct Connect + TGW reduces data transfer between VPCs vs peering (no inter‑AZ charges). <br>• **Latency:** All intra‑AWS traffic stays within the same region; cross‑region routes incur inter‑region latency but are still cheaper than VPN. |
| **Edge Cases** | • Cyclic routing if route propagation is misconfigured.<br>• Over‑provisioned TGW (limits on attachments).<br>• Direct Connect failures – ensure fallback VPN paths. |
| **Optimize & Communicate** | *Improvements:* Use TGW Route Tables per business unit to enforce least‑privilege; enable CloudWatch metrics for attachment health. <br>*Narrative:* “I’d start with a hub‑and‑spoke model, attach each VPC as a spoke, then use route tables to control traffic flow—this keeps the network flat and easy to audit.” |

**Word count:** ~200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
