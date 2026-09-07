---
qid: ing_ffc312b065__aws__local
question: 'Explain: Getting Help — GitHub - microsoft/semantic-kernel: Integrate cutting-edge
  LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 545
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:56:01-05:00'
sources: []
---

**Situation (S)**  
I was tasked to prototype a conversational agent for our customer‑support portal within two weeks. The goal was to reduce ticket volume by 30 % and keep response time under 3 s.

**Task (T)**  
Integrate Microsoft’s Semantic Kernel – a lightweight wrapper around LLMs – into our AWS‑hosted stack while ensuring scalability, cost control, and compliance with data‑privacy policies.

**Action (A)**  

| Step | Design & Services |
|------|-------------------|
| 1. **LLM hosting** | Deploy the chosen OpenAI model via **Amazon Bedrock** (for lower latency) instead of calling Microsoft’s endpoint to avoid cross‑border data transfer. |
| 2. **Semantic Kernel wrapper** | Run Semantic Kernel in a **Fargate** task behind an Application Load Balancer; this gives zero‑dB scaling and isolates the LLM calls. |
| 3. **Data flow** | Store user prompts and model responses in **Amazon DynamoDB** (eventual consistency, auto‑scaling). |
| 4. **Observability** | Emit metrics to **CloudWatch** and trace requests with **X-Ray**; set alarms for latency > 2 s. |
| 5. **Cost control** | Enable **Savings Plans** on Fargate and use **spot instances** for non‑critical batch inference. |

**Result (R)**  
- Ticket volume dropped from 10,000/day to 7,000/day (+30 % reduction).  
- Average response time improved from 4.2 s to 2.5 s.  
- Monthly LLM cost stayed within the $3,500 budget thanks to Bedrock’s pay‑per‑token model and spot savings.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered a faster, cheaper support experience.  
- **Ownership**: Took full responsibility for end‑to‑end architecture, security, and cost.  
- **Dive Deep** & **Bias for Action**: Quickly evaluated Bedrock vs. Microsoft endpoint, built the pipeline in 5 days, and iterated on metrics.

**Bar‑raiser Takeaway**  
A strong answer shows ownership, deep technical reasoning (service choices, trade‑offs), quantifiable impact, and lessons learned (e.g., switching to Bedrock avoided cross‑border data transfer risks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
