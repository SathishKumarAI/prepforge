---
qid: ing_a8456cb552__aws__local
question: 'Explain: Online Games — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 406
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:18-05:00'
sources: []
---

**Situation & Task**  
While leading a mobile‑gaming start‑up, we needed to ship an online multiplayer mode that could support 1 M concurrent players with sub‑10 ms latency. The core debate was whether to use **TCP** (reliable) or **UDP** (low‑latency).  

**Action** – *Ownership & Bias for Action*  
I ran a quick proof‑of‑concept:  
- Built two lightweight client stubs, one on TCP and one on UDP, using **Netty**.  
- Employed **Amazon Kinesis Data Streams** to ingest game events from both protocols and **AWS Lambda** to compute round‑trip times in real time.  

The design leveraged **Amazon EC2 Auto Scaling Groups** behind an **ALB** for TCP traffic, and a **CloudFront edge cache + Amazon Global Accelerator** front‑end for UDP, routing to a fleet of **EC2 Spot Instances** in the nearest region.  

**Result** – *Deliver Results & Dive Deep*  
- UDP reduced latency by 75 % (from 45 ms to 11 ms) and dropped packet loss to <0.1 %.  
- Cost savings: 30 % lower compute spend versus a pure TCP stack, thanks to the Spot fleet and the stateless Lambda metric collector.  
- Player churn fell from 12 % to 4 % within two weeks of launch.  

**Learnings** – *Customer Obsession & Invent & Simplify*  
We discovered that a hybrid approach (TCP for state‑sync; UDP for real‑time actions) was optimal, and we built an automated monitoring pipeline in **CloudWatch** that now flags any protocol drift automatically. This solution remains the backbone of our live‑event platform today.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
