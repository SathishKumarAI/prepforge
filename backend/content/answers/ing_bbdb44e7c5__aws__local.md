---
qid: ing_bbdb44e7c5__aws__local
question: 'Explain: Cost estimate — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 471
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:43-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In Q3 2024 I led a cross‑functional sprint to replace the legacy phone‑based support queue with an AI‑powered chatbot for our flagship e‑commerce platform. The goal was to cut average handling time from 7 min to <2 min while keeping customer satisfaction ≥90 %.  

**Action (Ownership + Dive Deep)**  
1. **Data collection** – Exported 4M historical tickets, parsed intents, and built a labeled corpus.  
2. **Model & infrastructure** – Deployed a fine‑tuned Amazon SageMaker endpoint using `text-davinci-003` (≈$0.06 per 1K tokens).  
3. **Routing logic** – Built an AWS Step Functions workflow that first attempts chatbot resolution; if confidence < 70 % or escalation flag is set, it hands off to a live agent via Amazon Connect.  
4. **Cost model** – Calculated:  
   * SageMaker inference: 1M calls/month × $0.06 = **$60k**  
   * Connect hours for fallback agents (10 % of traffic): 10 h/day × 30 × $0.15/hr = **$45**  
   * Lambda & Step Functions overhead ≈ **$5**  
   Total monthly ≈ **$60.1k**, a 35 % reduction from the previous $92k spend.

**Result (Deliver Results)**  
- Handling time dropped to 1.8 min (↓74 %).  
- CSAT rose from 86 % to 91 %.  
- Agent cost savings: 40 % fewer live hours, freeing capacity for high‑value tickets.  

**Bar‑raiser takeaways** – I owned the entire lifecycle, dived deep into token‑level costs, quantified ROI with real numbers, and iterated on the fallback threshold after a mid‑sprint failure that showed over‑confidence in the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
