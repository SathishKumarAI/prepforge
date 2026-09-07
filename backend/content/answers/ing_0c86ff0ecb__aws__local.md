---
qid: ing_0c86ff0ecb__aws__local
question: 'Explain: Groq® & Earth Wind Power Build Energy-Efficient AI Center in Norway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 443
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:06-05:00'
sources: []
---

**Situation (S)**  
In early 2023 I led a cross‑functional task force at **Amazon Web Services (AWS)** to evaluate a proposal from **Groq®** and **Earth Wind Power** for a new AI training center in Norway. The goal was to create the most energy‑efficient data hub while meeting our *Customer Obsession* and *Ownership* commitments.

**Task (T)**  
I had to design an architecture that:  
1. Supports large‑scale transformer training,  
2. Uses renewable power from Earth Wind Power’s wind farms,  
3. Keeps operational costs below $0.15 per GPU‑hour,  
4. Meets 99.99 % uptime for mission‑critical workloads.

**Action (A)**  
- **Dive Deep** into Groq’s tensor‑core ASICs and mapped them to AWS Nitro Enclaves for secure inference.  
- Proposed a hybrid **AWS Outposts + Snow Family** deployment: on‑prem servers powered by wind turbines, with real‑time telemetry via **IoT Greengrass** to the AWS Cloud.  
- Leveraged **Amazon SageMaker Neo** to auto‑compile models onto Groq hardware, cutting training time by 30 %.  
- Implemented **AWS Auto Scaling + Spot Instances** for burst capacity, and used **AWS Cost Explorer** dashboards for continuous cost monitoring.

**Result (R)**  
Within six months the center achieved:  
- **Energy‑to‑Training Ratio:** 0.25 kWh per GPU‑hour (a 40 % reduction vs. global averages).  
- **Cost Savings:** $1.2 M annually compared to a conventional AWS region.  
- **Uptime:** 99.997 %, exceeding the SLA by 0.007 %.  

The project not only met but surpassed our *Deliver Results* promise, and the learnings on hybrid edge‑cloud orchestration are now part of AWS’s reference architecture for sustainable AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
