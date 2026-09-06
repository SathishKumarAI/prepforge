---
qid: ing_7c08186135__fp__local
question: How would you evaluate a meeting-summarisation feature before shipping it
  to a hundred million users?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 529
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:14-05:00'
sources: []
---

### From the Problem to the Metric

A meeting‑summarisation system must compress *semantic content* while preserving *actionability*.  
At its core we are solving a **sequence‑to‑sequence** optimisation: given an audio/text transcript \(T\), produce a concise summary \(S\) that maximises
\[
J(S,T)= \underbrace{F_{\text{coverage}}(S,T)}_{\text{information captured}}
-\lambda\,\underbrace{L_{\text{length}}(S)}_{\text{brevity penalty}},
\]
subject to a *utility* constraint (e.g., user retention, decision quality).  
The loss function is therefore a weighted sum of an **information‑theoretic** term and a **human‑centric** brevity term.  

### Evaluation Pipeline

1. **Simulated User Study**  
   - Randomly sample 10k meetings from the target domain.  
   - Generate \(S\) automatically; let human annotators rate *completeness*, *actionability*, and *read‑time*.  
   - Compute Pearson/Spearman correlations between automated scores (ROUGE, BERTScore, and a novel *Coverage‑Entropy* metric that penalises redundancy) and human ratings.  

2. **A/B Testing on Live Traffic**  
   - Deploy to 1% of users; measure downstream metrics:  
     *Meeting completion rate* (did the user finish reading the summary?)  
     *Decision latency* (time between meeting end and task execution).  
   - Use Bayesian bandits to detect non‑trivial improvements over a baseline summariser.  

3. **Robustness Checks**  
   - Perturb inputs (noisy speech, overlapping speakers) and verify that \(J(S,T)\) degrades gracefully.  
   - Monitor *coverage entropy* across topics; a flat distribution indicates the system isn’t over‑focusing on buzzwords.

### Non‑Obvious Insight

A high ROUGE score can mask *semantic drift*: a model may surface the most frequent terms while discarding low‑frequency but critical action items. By incorporating **coverage entropy**—the Kullback–Leibler divergence between term distributions in \(S\) and \(T\)—we penalise such drift, ensuring that every key point, even if rare, is represented. This metric bridges the gap between *information fidelity* and *practical utility*, which many deployments overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
