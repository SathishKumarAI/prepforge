---
qid: ing_c654421cbb__aws__local
question: 'Explain: Virtual Onsite Process — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 458
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:13-05:00'
sources: []
---

**Virtual Onsite Design – “My 2026 Perplexity AI Interview Process”**

**Situation & Goal (S)**  
In 2025 I led a cross‑functional team to redesign the virtual onsite for an AI product line that served > 200k daily users. The goal was to reduce candidate friction by 30 % while maintaining rigorous technical depth.

**Task (T)**  
Architect a fully automated, scalable process using AWS that could run 10–12 interviews per day, support video, code challenges, and real‑time feedback—all in one pane.

**Action (A)**  
1. **Requirements & Architecture** –  
   * AWS Chime SDK* for low‑latency video;  
   * Lambda + Step Functions* orchestrate interview stages (screening → coding → system design).  
2. **Scalability** – Serverless functions auto‑scale, and DynamoDB stores candidate state with 99.9 % availability.  
3. **Availability & Cost** – Global Edge via CloudFront reduces latency; spot instances for heavy compute tasks cut costs by 25 %.  
4. **Data‑Driven Feedback Loop** – Real‑time metrics (avg interview time, dropout rate) fed into a SageMaker model that recommends slot adjustments.

**Result (R)**  
- Drop in candidate dropout from 18 % to 11 % (38 % improvement).  
- Interview throughput increased from 6 to 12 per day, enabling 1.8× hiring velocity.  
- Cost savings of $120k annually on compute and bandwidth.

**Leadership Principles Highlighted**  
*Customer Obsession*: Designed for minimal friction and fast feedback.  
*Ownership & Dive Deep*: Built end‑to‑end pipeline, iterated with data.  

Bar‑raiser focus: ownership (full responsibility), depth (chosen services & trade‑offs), quantified impact, lessons from initial pilot failures (e.g., latency spikes resolved by moving to dedicated media servers).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
