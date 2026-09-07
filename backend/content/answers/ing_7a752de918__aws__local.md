---
qid: ing_7a752de918__aws__local
question: 'Explain: In banking systems — Digital Wallets: Banks vs. Blockchain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:16-05:00'
sources: []
---

**Situation & Task**  
I was tasked to compare traditional bank‑managed digital wallets with blockchain‑based wallets for a retail banking client looking to launch a new mobile payment product in 2024.

**Action – Design & Tech Stack**  
*Bank wallet:* I architected a server‑side wallet using **Amazon DynamoDB** (global tables for multi‑region replication), **AWS Cognito** for secure user auth, and **KMS** for encryption. To meet PCI‑DSS, I added **AWS WAF** + **Shield Advanced** for DDoS protection.  
*Blockchain wallet:* I built a permissioned ledger on **Amazon Managed Blockchain (Hyperledger Fabric)**, exposing an API via **API Gateway** + **Lambda** to keep costs low and scale automatically. I integrated **AWS CloudTrail** for immutable audit logs.

I benchmarked both designs:  
- *Latency*: Bank wallet 20 ms vs. blockchain 85 ms (average).  
- *Cost per transaction*: $0.005 vs. $0.015 in the first year, scaling to $0.003 vs. $0.010 at 10M ops/month.  
- *Compliance risk score*: 1/10 for bank wallet, 4/10 for blockchain (due to external node trust).

**Result**  
Presented findings; the client chose a hybrid approach: core wallet in DynamoDB for speed & cost, with optional blockchain “token” feature for loyalty programs. We reduced projected first‑year operating costs by **$1.2M** and achieved a 99.999% SLA.

**Learning & Ownership**  
I owned the entire analysis cycle, validated assumptions via real load tests, and iterated on security controls after a failed mock phishing test—showing continuous improvement.  

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**, **Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
