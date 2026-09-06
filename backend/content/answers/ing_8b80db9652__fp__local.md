---
qid: ing_8b80db9652__fp__local
question: 'Explain: Run experiment with automatic metrics — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 790
total_tokens: 967
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:01:45-05:00'
sources: []
---

**Why we need an automated evaluation pipeline**

When you train a language model (LM), the *objective* is to minimise a loss that measures how well the LM’s predictions match ground‑truth tokens.  
But during deployment, you care about *downstream impact*: does the LM answer user queries correctly? Does it stay on topic? Is it safe? These are *distribution‑shifted* tasks that cannot be captured by training loss alone.

The solution is to construct an **experiment** that repeatedly feeds the model prompts, collects outputs, and compares them against a curated set of metrics. An automated pipeline guarantees *reproducibility*, *scalability*, and *low‑overhead monitoring*.  

---

### 1. Build the experiment

| Step | Why it matters |
|------|----------------|
| **Prompt library** | Represents real user intents; prevents overfitting to a single style. |
| **Ground truth & reference models** | Provides gold answers or baseline scores for comparison. |
| **Evaluation harness (Langwatch)** | Wraps the LM, manages prompt‑response loops, and streams logs in real time. |

*Langwatch* is essentially a lightweight orchestration layer: it queues prompts, throttles calls to avoid rate limits, and records metadata (timestamps, tokens used). It also injects **adaptive sampling**—if an answer diverges from the reference, it automatically re‑runs with temperature 0 to see if determinism helps.

---

### 2. Apply automatic metrics

| Metric | Principle | Non‑obvious insight |
|--------|-----------|---------------------|
| **BLEU / ROUGE** | N‑gram overlap → surface similarity | They penalise correct paraphrases; pair them with semantic scores. |
| **BERTScore** | Embedding similarity → semantics | Handles synonymy but is sensitive to out‑of‑vocabulary tokens—ensure subword alignment. |
| **Safety classifier** | Probability of toxic content → risk | Even a low probability can be amplified under adversarial prompts; monitor distribution tails. |
| **Latency & token count** | Resource cost → efficiency | Correlate with accuracy: sometimes fewer tokens produce higher quality due to better focus. |

---

### 3. Continuous monitoring with Langfuse

Langfuse ingests the logs from Langwatch, aggregates metrics per experiment run, and visualises them in dashboards. It also:

- **Triggers alerts** when a metric falls below a threshold (e.g., BLEU < 0.75).
- **Stores provenance**: which prompt, model version, and hyperparameters produced each result.
- **Facilitates A/B testing** by comparing multiple runs side‑by‑side.

---

### 4. The deeper principle

You are essentially performing a *controlled experiment* on a stochastic system. By treating prompts as *independent trials* and metrics as *statistical estimators*, you can apply confidence intervals, hypothesis tests, and Bayesian updating to decide whether a new model version truly improves performance. This formalises what many practitioners do informally—e.g., “this LM seems better” becomes “with 95 % confidence, the new LM’s BLEU is higher by 0.03”.

---

**Non‑obvious takeaway:**  
Automated metrics are *not* a silver bullet; they expose **biases in your prompt set**. A high BLEU can hide systematic failure modes on underrepresented prompts. Therefore, continuously curate and diversify the prompt library—otherwise you’ll optimise for the wrong objective.

> Run experiment → Langwatch orchestrates → automatic metrics → Langfuse aggregates → statistical decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
