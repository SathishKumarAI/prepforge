---
qid: ing_fdad8fdb9a__faang__local
question: 'Explain: F2: Distribution shift between training and serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 525
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:56-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *distribution shift between training and serving* in an AI system—i.e., why a model that performs well on its training data may degrade once deployed. I’d confirm: (1) is the shift feature‑level or label‑level? (2) are we dealing with covariate, prior, or concept drift? (3) what monitoring signals exist?

**Approach**  
1. Define the two distributions: \(P_{\text{train}}\) and \(P_{\text{serve}}\).  
2. Identify shift types (covariate, prior, concept).  
3. Show how shift breaks model assumptions.  
4. Outline mitigation strategies: re‑training, domain adaptation, online learning, monitoring.

**Depth**  
In supervised learning we assume i.i.d.: \(P_{\text{train}}(X,Y)=P_{\text{serve}}(X,Y)\). Distribution shift occurs when this equality fails.  
- *Covariate shift*: \(P(X)_{\text{train}}\neq P(X)_{\text{serve}}\) but \(P(Y|X)\) stays the same. Models over‑fit to training covariates, leading to miscalibration.  
- *Prior (label) shift*: \(P(Y)_{\text{train}}\neq P(Y)_{\text{serve}}\). A classifier trained on balanced classes may under‑predict rare classes in production.  
- *Concept drift*: \(P(Y|X)\) itself changes, e.g., user preferences evolve.  

The impact is measurable via performance metrics (accuracy, AUC) and calibration curves. Mitigation: periodic re‑training with recent data, importance weighting for covariate shift, Bayesian updating for prior shifts, or online learning algorithms that adapt incrementally.

**Edge Cases**  
- *Noisy labels*: shift may be masked by label noise.  
- *High dimensionality*: estimating \(P(X)\) becomes intractable; use proxy metrics (KS statistic on feature histograms).  
- *Cold start*: new users introduce unseen covariate patterns.

**Optimize & Communicate**  
I’d present a dashboard that tracks drift statistics and triggers an automated retrain pipeline. I’d explain the trade‑off: more frequent updates reduce lag but increase compute costs. Finally, I’d note that rigorous validation on hold‑out “serving‑like” data is essential before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
