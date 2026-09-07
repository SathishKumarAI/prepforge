---
qid: ing_f4638f48db__aws__local
question: 'Explain: When do you tell a customer that AI is the wrong tool? Give a
  concrete case and how you''d handle the conversation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 383
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:29:09-05:00'
sources: []
---

**Situation (S)**  
While leading an on‑prem ML migration for a retail client, they asked us to deploy an AI‑driven fraud detector for their high‑volume payment gateway (~2 M transactions/day).  

**Task (T)**  
Determine whether generative‑model inference would meet latency and regulatory requirements.  

**Action (A)**  
I performed a *Dive Deep* analysis: benchmarked a BERT‑style classifier vs. a rule‑based engine on a 100K sample set. The AI model required ~350 ms per request, exceeding the 200 ms SLA and would need an autoscaling cluster of 50 EC2 g4dn.xlarge instances (≈$30k/month). A deterministic rule set achieved 99.8% precision/recall with <5 ms latency on a single Lambda function (cost <$500/month).  

I framed the conversation around **Customer Obsession** and **Ownership**:  
1. Presented data‑driven results (latency, cost, compliance risk).  
2. Highlighted that AI adds unnecessary complexity and a 15% chance of false positives that could trigger regulatory scrutiny.  
3. Offered a phased pilot—start with the rule engine, then iterate on ML only for edge cases.  

**Result (R)**  
The client adopted the rule‑based solution, saving $29.5k/month, reducing latency by 70%, and meeting compliance within two weeks. They later used our AI framework for a separate marketing use case where the trade‑off was justified.  

*Bar‑raiser cues*: ownership of cost/latency metrics, depth of benchmark data, clear learning loop (pilot before full rollout).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
