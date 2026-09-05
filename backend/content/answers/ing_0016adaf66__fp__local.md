---
qid: ing_0016adaf66__fp__local
question: 'Explain: Splunk IT Service Intelligence — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 379
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:38-05:00'
sources: []
---

**Why a “Luna” model is needed**

In cloud‑native environments the observable universe (metrics, traces, logs) grows explosively. A naïve rule‑based alerting scheme blows up: every metric spawns an alarm, most of which are false positives. The core problem is *semantic compression*: we must infer high‑level service health from a noisy data stream while keeping latency low.

**The underlying principle**

Luna treats observability as a Bayesian inference problem on a latent state graph.  
1. **Observables → Evidence** – Each metric, trace segment or log line is mapped to an *evidence vector* (exponentially weighted moving averages, percentiles, etc.).  
2. **Latent service nodes** – A directed acyclic graph encodes causality between micro‑services and infrastructure layers.  
3. **Dynamic Bayesian Network** – The joint distribution over states is factorised by the graph structure; inference is performed with a *particle filter* that propagates probability mass through time, automatically handling missing data.

The model learns transition probabilities from historical incidents (self‑supervised) and updates them online, achieving an optimal trade‑off between detection latency and false‑positive rate—precisely what cloud ops demand.

**Non‑obvious insight**

Because the particle filter operates in *log‑space*, Luna automatically normalises evidence across vastly different scales (CPU vs. request count). This log‑normalisation turns a heterogenous metric set into a coherent probability space, eliminating the need for manual weighting or domain‑specific heuristics. The result: an evaluation model that scales with micro‑service proliferation without hand‑tuned thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
