---
qid: ing_34e6567de5__eli5__local
question: 'Explain: High Availability Patterns — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 205
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:59:35-05:00'
sources: []
---

Think of an online video‑streaming service as a busy café that must stay open all day, even if one barista quits or the espresso machine breaks. **High Availability (HA) patterns** are the café’s backup plans:  
1. **Active‑active** – two identical coffee machines run side by side; if one stalls, the other keeps serving customers without a pause.  
2. **Active‑passive** – a standby machine sits idle, warming up only when the main one fails.  
3. **Failover clusters** – several servers share the same workload; traffic automatically shifts to healthy members whenever one drops out.  
In AI, these patterns let your model‑serving infrastructure keep predicting and answering questions even if a GPU or network link goes down. The goal is simple: no single point of failure, so users experience uninterrupted service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
