---
qid: ing_de3607d04f__faang__local
question: 'Explain: Cost Modeling (June 2026) — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 592
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:35-05:00'
sources: []
---

**Clarify**  
We’re asked to explain a *Cost‑Modeling* framework for selecting an AI model in June 2026. The goal is to trade off performance, compute cost, data requirements and operational constraints. Key assumptions:  
- Multiple candidate models (e.g., LLMs of varying size, vision‑language hybrids).  
- Cloud‑based inference with spot/retainer pricing; on‑premise GPU clusters possible.  
- SLA targets (latency ≤ 200 ms, accuracy ≥ 0.92 F1).  

**Approach**  
1. **Define metrics**: Expected cost per request, total training cost, data labeling effort, inference latency.  
2. **Build a cost function** that weights each metric according to business priorities (e.g., 40% latency, 30% accuracy, 20% cost, 10% ops).  
3. **Collect empirical data**: Run micro‑benchmarks on each candidate; capture GPU utilization, memory footprint, and inference throughput.  
4. **Normalize and aggregate** into a single score per model.  
5. **Select the top‑ranked model** that satisfies hard constraints (SLA, budget).  

**Depth**  
- *Compute cost*: \(C_{\text{inference}} = \frac{\text{GPU‑hrs per 1k req}}{1000}\times\text{price/hr}\).  
- *Training cost*: include data labeling (\(L\times C_{\text{label}}\)) and GPU hours.  
- *Latency*: measured via end‑to‑end profiling; if >200 ms, add a penalty factor.  
- The cost function: \(S = w_a A + w_c \frac{1}{C} + w_l L + w_o O\).  
  – \(A\): accuracy (higher better), \(C\): cost (lower better), \(L\): latency (lower better), \(O\): ops overhead.  

**Edge Cases**  
- **Data drift**: retraining costs spike; include a drift‑penalty term.  
- **Model size jumps**: memory‑bound models may fail on target GPUs—test with realistic batch sizes.  
- **Unexpected spot price spikes**: simulate worst‑case pricing scenarios.  

**Optimize & Communicate**  
- Cache embeddings to reduce inference cost for recurrent queries.  
- Use model distillation or pruning if a high‑accuracy model is marginally better but far more expensive.  
- Present the decision matrix in a slide deck, highlighting trade‑offs and why the chosen model meets all constraints. This structured narrative demonstrates clear problem framing, analytical depth, and pragmatic optimization—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
