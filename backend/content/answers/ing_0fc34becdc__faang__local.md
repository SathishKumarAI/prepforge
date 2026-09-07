---
qid: ing_0fc34becdc__faang__local
question: What kinds of distribution shift exist, and how would you monitor a deployed
  model - classical or LLM-based - for them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 577
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:08-05:00'
sources: []
---

**Clarify**  
We’re asked to enumerate the main types of *distribution shift* that can affect machine‑learning models and then describe how to monitor a deployed system—whether it’s a classical model or an LLM—for those shifts. I’ll assume we have access to production logs, feature pipelines, and a monitoring stack (e.g., Prometheus/ELK).  

**Approach**  
1. List the canonical shift types.  
2. For each type, propose concrete metrics/signals to watch.  
3. Distinguish between classical models (feature‑based) and LLMs (token‑ or prompt‑driven).  

**Depth**  

| Shift | What it means | Classical model signals | LLM‑specific signals |
|-------|---------------|------------------------|----------------------|
| **Covariate shift** | Feature distribution changes while the label function stays fixed. | Monitor feature histograms, drift statistics (KS test), KL divergence over time; flag when > threshold. | Track token frequency distributions, embedding similarity metrics; use perplexity on held‑out data to spot drifts. |
| **Prior probability shift** | Class proportions change. | Compute class‑balance ratios from predictions vs ground truth; alert if skew exceeds tolerance. | For classification LLMs, monitor output‑class probabilities or logits distribution. |
| **Concept drift** | The mapping \(P(y|x)\) itself changes (e.g., new user intent). | Track performance metrics (AUC, F1) on a sliding window; sudden drops trigger retraining alerts. | For LLMs, use *in‑context* evaluation: run the same prompt set periodically and compare answer similarity or BLEU scores. |
| **Data quality shift** | Noise, missingness, or corruption increases. | Flag high NaN rates, outlier counts, or corrupted feature values. | Detect unusually long or malformed token sequences; monitor embedding norm distributions for anomalies. |

**Edge cases**  
- *Simultaneous shifts*: combine drift detectors (e.g., multivariate KS) to avoid false positives.  
- *Label scarcity*: rely on semi‑supervised metrics like confidence‑based monitoring when labels are sparse.  

**Optimize & communicate**  
Deploy a lightweight drift‑detection microservice that ingests feature logs, runs the above tests every 5 min, and emits alerts with causal explanations (e.g., “token ‘quantum’ frequency ↑ by 30% → possible topic shift”). For LLMs, maintain a reference prompt set; any answer deviation beyond a similarity threshold triggers an automated retraining pipeline. This structured monitoring ensures timely detection of all major shift types while keeping false‑positive rates low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
