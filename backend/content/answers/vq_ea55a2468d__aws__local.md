---
qid: vq_ea55a2468d__aws__local
question: What should you do if you're Overfitting or Underfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 422
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:41-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a recommendation model for a global e‑commerce platform. Two weeks after deployment the live AUC dropped from 0.88 to 0.76, indicating severe over‑fitting to training data.

**Action**  
*Customer Obsession + Ownership* – I immediately set up a monitoring pipeline (CloudWatch → Lambda) to capture real‑time metrics and trigger alerts.  
I performed a **dive deep** diagnostic:  
- **Data quality check** – identified an 8 % skew in user‑device distribution.  
- **Model diagnostics** – used SHAP to spot over‑represented features, then applied *feature selection* (Recursive Feature Elimination) and added regularization (L2).  
- **Training strategy** – switched from a single‑epoch training to *early stopping* with patience = 3 on a validation set, and increased dropout from 0.1 to 0.3.  
For under‑fitting scenarios I’d do the opposite: add capacity (more layers), reduce regularization, or augment data via synthetic samples.

**Result**  
Post‑deployment AUC recovered to **0.87** within 48 h, and churn prediction accuracy improved by **4 %**, translating to $1.2 M in incremental revenue over the quarter. Cost of the monitoring stack was < $5/month on AWS (S3 for logs, CloudWatch metrics, Lambda).  

**Bar‑raiser cues I’d listen for:**  
- Clear ownership of the problem and end‑to‑end fix.  
- Deep technical dive with quantified impact.  
- Quick learning loop: “What went wrong? What did we change?” – demonstrating bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
