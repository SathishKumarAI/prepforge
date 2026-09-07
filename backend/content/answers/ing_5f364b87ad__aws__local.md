---
qid: ing_5f364b87ad__aws__local
question: 'Explain: 🧭 Prompt & Context Engineering — Ai Engineer 75'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:08-05:00'
sources: []
---

**Prompt & Context Engineering – My 75‑minute sprint**

**Situation (S)**  
When we launched a generative‑AI assistant for customer support, the model answered 35 % of queries correctly but hallucinated facts in 22 % of cases, hurting trust and inflating SLA time.

**Task (T)**  
I was tasked to reduce hallucinations to <5 % while keeping latency under 800 ms for a global audience.

**Action (A)**  

1. **Dive Deep into the data** – logged every prompt‑context pair, ran LIME to identify high‑impact tokens.  
2. **Prompt engineering** – built a templated “fact‑check” prefix that forced the model to validate against an internal knowledge base before generating a response.  
3. **Context pruning** – implemented a sliding‑window summarizer (AWS Comprehend + Lambda) to keep only the last 200 words, cutting token count by 38 %.  
4. **Infrastructure** – deployed the fine‑tuned model on Amazon SageMaker Endpoint with *Multi‑Model* hosting; auto‑scales via CloudWatch metrics and uses Spot Instances for cost efficiency.  
5. **Bias for Action** – ran A/B tests (n=10,000) in two regions, iterating over 3 prompt variants per cycle.

**Result (R)**  
Hallucination rate dropped to **4.7 %**, response latency improved from 1.2 s to **0.72 s**, and cost per inference fell by **27 %**. Customer satisfaction scores rose from 78 % to **85 %** in just one quarter.

*Bar‑raiser focus*: Ownership of the entire prompt–context pipeline, deep dive into failure modes, quantifiable impact on trust & cost, and rapid learning loops that turned a high‑error model into a reliable service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
