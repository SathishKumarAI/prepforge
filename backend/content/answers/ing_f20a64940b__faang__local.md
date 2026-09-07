---
qid: ing_f20a64940b__faang__local
question: 'Explain: 6 Evals — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 641
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:15-05:00'
sources: []
---

**Clarify**  
We’re asked to summarize *“6 Evals – AI Concepts”* from Neo Kim & Logan Thorneloe.  
Assumptions: the audience knows basic ML, wants a concise but complete overview of each evaluation technique, and expects practical take‑aways (when to use, trade‑offs).

**Approach**  
1. List the six evals in order.  
2. For each: definition → purpose → typical metrics/algorithms → pros/cons → when to pick it.  
3. Keep the whole answer within 160–240 words.

---

### 6 Evals – AI Concepts

| Eval | What it is | Why use it | Key Metrics / Tools | Pros | Cons |
|------|------------|-----------|---------------------|------|------|
| **Explainability** | Model transparency (feature importance, SHAP, LIME) | Trust & compliance | Feature attribution scores | Human‑readable insights | Limited for deep nets; may oversimplify |
| **Fairness** | Bias detection across protected groups | Ethical deployment | Demographic parity, equalized odds | Highlights systemic bias | Can conflict with accuracy |
| **Robustness** | Resistance to perturbations / adversarial inputs | Security & reliability | Adversarial test sets, worst‑case loss | Detects hidden vulnerabilities | Expensive to generate attacks |
| **Efficiency** | Computational and memory cost | Production scaling | FLOPs, latency, energy per inference | Guides model pruning/quantization | Trade‑off with performance |
| **Efficacy (Effectiveness)** | End‑to‑end task success | Business value | Accuracy, F1, BLEU, etc. | Direct KPI alignment | May ignore other constraints |
| **Ethical Alignment** | Societal impact & policy compliance | Long‑term stewardship | Value‑alignment metrics, societal risk scores | Ensures responsible AI | Often subjective, hard to quantify |

---

**Edge Cases**  
- *Explainability* can mislead if feature importance is correlated but not causal.  
- *Fairness* metrics may be mutually exclusive (e.g., equalized odds vs. predictive parity).  
- *Robustness* tests may miss unseen attack vectors; continual evaluation needed.

**Optimize & Communicate**  
Start with **Efficacy** to confirm the model solves the problem. Then layer **Efficiency** for production feasibility. Parallelly run **Explainability** and **Fairness** to satisfy regulatory mandates, followed by **Robustness** to guard against adversaries. Finally, assess **Ethical Alignment** as a governance checkpoint.  

Narratively: “We first verify *does it work?* (Efficacy), then *how fast/cheap does it run?* (Efficiency). Next we ensure *who benefits and how* (Explainability & Fairness), protect against *malicious use* (Robustness), and conclude with a *societal impact audit* (Ethical Alignment).”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
