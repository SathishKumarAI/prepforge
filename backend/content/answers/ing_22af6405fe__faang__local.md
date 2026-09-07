---
qid: ing_22af6405fe__faang__local
question: 'Explain: 3.3 Realistic Constraints and Assumptions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 443
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:04:52-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Realistic Constraints and Assumptions* section of an AI project plan (often labeled “3.3”). Essentially it’s where we list practical limits—budget, data quality, compute, timeline—and the assumptions that underpin our design choices.

**Approach**  
1. Identify key constraints: cost, latency, regulatory compliance, hardware availability, team skill set.  
2. Enumerate assumptions: e.g., “data will be available in 10 GB chunks,” “model inference must finish <200 ms per request.”  
3. Show how each drives architecture decisions (e.g., choosing a lightweight transformer vs. a heavy LLM).  

**Depth**  
- *Budget*: Estimate compute‑hours, storage, and cloud vendor costs; highlight trade‑offs between on‑prem GPUs vs. spot instances.  
- *Latency*: Define service level objectives (SLOs) and map them to batch size, model quantization, or edge deployment.  
- *Data*: Assume labeling quality, class balance, and compliance with GDPR/CCPA; mention fallback plans for missing labels.  
- *Regulation*: Note constraints like explainability, bias mitigation, or privacy‑preserving ML (e.g., federated learning).  
- *Team*: Assume engineers know PyTorch/TensorFlow; plan for knowledge transfer if not.

**Edge Cases**  
- Budget overruns → switch to distilled models.  
- Data drift → schedule re‑training cycles.  
- Hardware failure → failover to cloud spot pools.  
- Regulatory changes → add audit logs and explainability layers.

**Optimize & Communicate**  
Explain how tightening a constraint (e.g., reducing latency) forces us to trade accuracy for speed, and vice versa. Use diagrams or bullet points to show the dependency graph between constraints, assumptions, and design choices. Conclude by stressing that this section keeps stakeholders aligned and preempts “what‑if” scenarios, which is critical in FAANG‑style product planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
