---
qid: ing_c255b0df31__fp__local
question: 'Explain: Where it runs . Who controls it. What certifies it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 520
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:55:15-05:00'
sources: []
---

### Where an AI “lives”

An artificial‑intelligence system is nothing more than a mathematical function \(f\) mapping input vectors \(x\) to outputs \(y=f(x)\).  
*Implementation* of \(f\) is code; *execution* occurs wherever that code runs.  
If the model is small, it may be compiled into an edge device (phone, sensor).  
Large‑scale models require distributed computation over GPU/TPU clusters in data centers or cloud platforms.  
Thus **“where it runs”** is a function of computational complexity and resource constraints: low‑latency tasks → local; high‑capacity inference → remote.

### Who actually controls it

Control is a *policy* problem, not a technical one.  
1. **Designers** set the architecture and training data—these are the “principals.”  
2. **Operators** run the code on hardware—these are the “executors.”  
3. **Users** supply inputs and receive outputs—“consumers.”  
A single entity (e.g., a company) can own all three roles, but in open‑source or federated settings control is distributed: designers publish the model, operators run it on personal devices, users provide data.  
Thus *control* is layered: intellectual ownership → operational deployment → user interaction.

### How we certify an AI

Certification must assure that \(f\) behaves as intended under uncertainty.  
Mathematically, this is a **probabilistic guarantee**:
- **Robustness bounds** (e.g., \(\Pr[|f(x)-y^*|>ε] < δ\)) derived from empirical risk minimization and concentration inequalities.
- **Explainability metrics** (feature attribution consistency) ensuring that the model’s decision process is transparent.

Industry bodies (ISO/IEC 27001, NIST AI Risk Management Framework) formalize these guarantees into *certificates* that a system meets specified safety, privacy, and fairness criteria.  
The non‑obvious insight: **certification is not about “the model itself” but about the *process*—data curation, training pipeline, deployment environment—that together create a statistically verifiable behavior.** Without certifying the entire lifecycle, a well‑trained neural net can still fail catastrophically when faced with distribution shift or adversarial inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
