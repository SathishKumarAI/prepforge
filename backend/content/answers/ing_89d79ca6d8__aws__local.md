---
qid: ing_89d79ca6d8__aws__local
question: 'Explain: When is an LLM the wrong tool? Give me real examples where you''d
  push back on a PM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 350
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:35-05:00'
sources: []
---

**When an LLM is the wrong tool – my approach**

**Situation & Task:**  
I was asked to build a customer‑support chatbot for a fintech app that handled KYC verification and regulatory compliance. The PM insisted on using a large language model (LLM) to answer all user queries.

**Action:**  
1. **Dive Deep into Requirements** – I mapped the critical failure modes: *data privacy*, *regulatory audit trails*, and *accuracy for legal questions*.  
2. **Proposed a hybrid system**: a rule‑based intent engine (Amazon Lex + custom Lambda) for regulated queries, with the LLM only for low‑risk “FAQ” paths.  
3. **Quantified Impact** – Simulated 10k support tickets per month; an all‑LLM solution would need ~200 inference requests/sec, costing ~$12K/month on Amazon Bedrock versus <$2K/month for the rule engine + selective LLM calls.  
4. **Risk Analysis** – LLM outputs can drift and lack explainability—critical for compliance audits.

**Result:**  
The PM accepted the hybrid design. We reduced monthly spend by 83%, maintained a 99.9% SLA, and passed the first regulatory audit with no false‑positive incidents.  

**Leadership Principles Highlighted:**  
- **Customer Obsession & Ownership** – safeguarding user data and compliance.  
- **Dive Deep** – rigorous requirement analysis and cost modeling.  
- **Bias for Action** – quickly presenting a feasible alternative that met business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
