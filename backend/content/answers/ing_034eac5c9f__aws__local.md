---
qid: ing_034eac5c9f__aws__local
question: Models hallucinate. How do you design the product around that, not just
  the prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 410
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:43-05:00'
sources: []
---

**Situation & Task**  
At my last role I launched an AI‑powered customer support chatbot that was required to answer product queries with <5 % hallucination rate (the industry benchmark). The problem wasn’t the prompt but the underlying model and its deployment pipeline.

**Action**  
1. **Ownership + Bias for Action** – I built a “Hallucination Mitigation” micro‑service on *AWS Bedrock* that wrapped the LLM with a fine‑tuned verification layer.  
2. **Dive Deep** – The service queried an internal knowledge graph (Amazon Neptune) and cross‑checked facts via a lightweight inference model (SageMaker Edge).  
3. **System Design** –  
   * *Step Functions* orchestrated: request → LLM → verifier → fallback to retrieval engine.  
   * *CloudWatch Metrics* tracked hallucination rate, latency, and cost per query.  
4. **Customer Obsession** – Implemented a user‑feedback loop in the chat UI; every “Wrong answer” click sent data back to the training set via *Kinesis Data Firehose* for continuous fine‑tuning.

**Result**  
- Hallucination rate dropped from 12 % to **3.8 %** within two months, meeting SLA and improving NPS by 7 points.  
- Latency stayed under 800 ms; cost per query reduced by 18 % through dynamic model selection.  

**Bar‑raiser Insight** – I demonstrated ownership (owning the end‑to‑end pipeline), depth (engineering verification logic), quantified impact (metrics above), and a learning loop that turned failures into data for future improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
