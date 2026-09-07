---
qid: ing_2d7b9081f4__faang__local
question: 'Explain: Modular perception, prediction and planning, or end-to-end learned
  driving? Make the case, then tell me what you would actually build.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 572
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:01-05:00'
sources: []
---

**Clarify**  
We’re comparing three autonomous‑driving paradigms:  
1) **Modular pipeline** – perception → prediction → planning → control.  
2) **End‑to‑end learned driving** – a single network maps sensor data to steering/accel commands.  
3) **Hybrid modular–learning** – use learned modules inside the classic stack (e.g., neural perception + rule‑based planner).  
Key assumptions: safety regulations, compute budget on vehicle, need for interpretability, and ability to debug failures.

**Approach**  
I’ll evaluate each paradigm on safety, scalability, data efficiency, explainability, and maintainability. Then decide which aligns best with a production deployment at a FAANG company (high‑volume fleet, regulatory scrutiny).

**Depth**  

| Paradigm | Strengths | Weaknesses |
|----------|-----------|------------|
| Modular | • Clear separation of concerns → easier debugging & safety validation.<br>• Can mix hand‑crafted rules for edge cases. | • Requires many datasets; hard to capture all interactions.<br>• Latency from multiple stages. |
| End‑to‑end | • Minimal engineering, potentially low latency.<br>• Learns implicit coordination between tasks. | • Black‑box → hard to certify safety.<br>• Poor generalization to unseen scenarios; catastrophic failure risk. |
| Hybrid | • Leverages proven planner logic while improving perception/prediction with deep nets.<br>• Easier regulatory approval because high‑level decisions are rule‑based. | • Still needs careful integration and testing of learned modules. |

**Edge Cases**  
- Sudden sensor dropouts → modular pipeline can fall back to redundancy; end‑to‑end may fail catastrophically.  
- Rare maneuvers (e.g., emergency evasive) require explicit logic; pure learning struggles.

**Optimize & Communicate**  
I would build a **hybrid modular stack**:  
1. **Neural perception** (YOLOv8 + depth‑CNN) for objects, lane lines, and semantic segmentation.  
2. **Physics‑based prediction** with learned motion models for each agent.  
3. **Rule‑based planner** that enforces safety envelopes and traffic rules, augmented by a lightweight reinforcement‑learning module to optimize comfort within those constraints.  
4. **Model‑predictive control (MPC)** for low‑level actuation.

This balances safety guarantees with learning efficiency, satisfies regulatory expectations, and scales across fleets. Communication: present the trade‑off diagram, highlight how each layer can be independently validated, and outline a phased rollout plan (simulation → closed track → limited city lanes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
