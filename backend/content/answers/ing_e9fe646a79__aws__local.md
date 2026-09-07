---
qid: ing_e9fe646a79__aws__local
question: 'Q44: When would you use Multi-Agent Debate vs Mixture of Agents?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 573
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:07:24-05:00'
sources: []
---

**Situation / Task**  
I was tasked with improving a recommendation engine that needed to explain its decisions to regulators and customers. The model had to balance *explainability* (regulatory compliance) and *performance* (real‑time scoring).

**Action**  
I compared **Multi‑Agent Debate** (MAD) and **Mixture of Agents (MoA)** for this scenario.

1. **Requirements & Trade‑offs**  
   - *Latency*: 100 ms per request.  
   - *Explainability*: must output a human‑readable rationale.  
   - *Accuracy*: target 2% improvement over baseline.  

2. **Design Decision**  
   | Feature | MAD | MoA |
   |---------|-----|-----|
   | Latency | ~200 ms (two inference rounds) | ~120 ms (single forward pass) |
   | Explainability | Rich debate transcript → high fidelity | Weighted opinion, less narrative |
   | Scalability | Each round needs 2 GPU instances | Single GPU per request |
   | Cost | ↑ compute, ↑ storage for transcripts | ↓ compute, minimal logging |

3. **Implementation**  
   - Deployed MAD on **Amazon SageMaker Neo** with two *ml.g5dn* GPUs; used **Step Functions** to orchestrate the debate rounds.  
   - Deployed MoA as a single **SageMaker endpoint** using an ensemble of 4 lightweight transformers, weighted by confidence.

4. **Result**  
   • MAD achieved **2.8% accuracy gain** and produced audit‑ready transcripts (CIS compliance), but cost rose **35 %** and latency exceeded SLA for 12 % of traffic.  
   • MoA met SLA (115 ms) and cut cost by **27 %**, with a 1.9% accuracy improvement—acceptable trade‑off for the majority of use cases.

I presented these findings to stakeholders, highlighting that *MAD* is preferable when regulatory explainability trumps performance, while *MoA* suits high‑volume, latency‑sensitive workloads.

**Learning & Bar‑raiser notes**  
- **Ownership**: I took full responsibility for end‑to‑end experimentation and cost analysis.  
- **Dive Deep**: I quantified latency, cost per inference, and accuracy gains.  
- **Learn from Failure**: The initial MAD rollout exposed SLA issues; we pivoted to MoA for production while keeping MAD for audit logs.  

This approach demonstrates *Customer Obsession* (meeting compliance needs) and *Deliver Results* (clear metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
