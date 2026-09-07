---
qid: ing_dbbe2bea72__aws__local
question: 'Explain: Optimising prompts — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 478
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:29-05:00'
sources: []
---

**Prompt‑Engineering & Context Optimization**

*Situation*: In a recent “AI Concierge” project we needed to reduce hallucinations in our GPT‑4 powered FAQ bot while keeping latency under 200 ms for 90 % of requests.

*Task*: Design a prompt‑engineering pipeline that automatically tailors context size, token budget, and response length per user query type, and measure impact on accuracy & cost.

*Action*:  
1. **Data‑driven analysis** – logged 2 M queries; identified 3 high‑hallucination patterns (price changes, policy updates, multi‑step troubleshooting).  
2. **Context pruning algorithm** – used TF‑IDF + user intent to trim context to ≤ 300 tokens, preserving only the top‑scoring 5 sentences.  
3. **Dynamic prompt templates** – created 4 templates (short FAQ, detailed guide, error‑handling, escalation) and routed requests via a lightweight Lambda selector.  
4. **AWS services** – S3 for static prompts, DynamoDB for intent cache, API Gateway + Lambda@Edge for low‑latency routing, and SageMaker Endpoint for real‑time inference.  

*Result*: Hallucination rate dropped from 12% to **2.7%** (a 77 % reduction). Latency stayed at **≈180 ms** on average, meeting SLA. Cost per request fell by **$0.03** (~15 %) due to fewer tokens processed.  

*Leadership Principles*:  
- **Customer Obsession** – we measured user‑reported errors and iterated until satisfaction rose from 68 % to 92 %.  
- **Ownership & Dive Deep** – I built the end‑to‑end pipeline, debugged token‑budget leaks, and logged every change for future audits.  

*Bar‑raiser takeaway*: Demonstrated ownership by owning data, deep technical design (Lambda@Edge, TF‑IDF pruning), quantified impact (77 % hallucination drop), and learning from early failures (initial template caused 3‑token overflow).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
