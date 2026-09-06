---
qid: ing_f9bf29950b__fp__local
question: 'Q73: How would you design a semantic routing system that dynamically selects
  the cheapest model that can handle a query with acceptable quality?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 503
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:50:32-05:00'
sources: []
---

**Design principle**

We need a *cost–utility* optimizer: for any input \(q\), choose the model \(m\) that minimizes expected cost \(C(m)\) while guaranteeing quality \(Q(m,q)\ge \tau\). The problem is a constrained minimization

\[
\min_{m}\; C(m)\quad \text{s.t.}\;\mathbb{E}[Q(m,q)]\ge\tau .
\]

**Why this works**

1. **Quality as an expectation** – Models exhibit stochastic output (e.g., beam‑search, temperature sampling). Treating quality probabilistically lets us bound risk.
2. **Cost decomposition** – \(C(m)=c_{\text{compute}}(m)+c_{\text{latency}}(m)+c_{\text{energy}}(m)\) captures all monetizable resources; it is additive across pipeline stages, enabling modular updates.

**Implementation**

1. **Model registry**  
   • For each candidate \(m\), pre‑measure \(C(m)\).  
   • Store a *quality profile* \(q \mapsto \mathbb{E}[Q(m,q)]\) using a lightweight calibration set (few‑shot prompting or synthetic queries).

2. **Query fingerprinting**  
   • Extract features \(\phi(q)=\{\text{length},\text{domain tags},\text{prompt complexity}\}\).  
   • Train a *ranking function* \(R(m,\phi)\) that predicts expected quality quickly (e.g., a shallow MLP).

3. **Online selection**  
   • For incoming \(q\), evaluate \(R\) for all \(m\); filter those with predicted quality \(\ge\tau\).  
   • Pick the cheapest remaining model.

4. **Feedback loop**  
   • After inference, observe actual loss and update both cost estimates (e.g., GPU utilization drift) and quality predictions via online learning.

**Non‑obvious insight**

Treating *quality* as a probability distribution lets us use *conservative* risk metrics (CVaR, percentile thresholds). This avoids over‑optimizing for average performance and guarantees that even in worst‑case scenarios the user sees acceptable outputs—critical when cost savings could otherwise lead to unacceptable failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
