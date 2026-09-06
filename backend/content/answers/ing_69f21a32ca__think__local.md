---
qid: ing_69f21a32ca__think__local
question: 'Q71: How do you build a production LLM evaluation pipeline using LLM-as-a-Judge?
  What are the failure modes?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 410
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:01:45-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “LLM‑as‑a‑Judge”*? Assume a large language model that scores or ranks candidate LLM outputs automatically.  
- *Production pipeline*: continuous integration of new models, data, and evaluation metrics.  
- *Failure modes*: anything that breaks reliability, fairness, or security.  

**2️⃣ Adopt a layered mental model**  
1. **Data layer** – test prompts, reference responses, ground truth labels.  
2. **Inference layer** – judge LLM execution (batching, GPU/TPU allocation).  
3. **Scoring layer** – conversion of raw judge output to numeric metrics.  
4. **Governance layer** – logging, monitoring, drift detection, rollback mechanisms.  

**3️⃣ Step‑by‑step reasoning**  
- *Define evaluation criteria* (accuracy, safety, bias).  
- *Curate a representative prompt set*, ensuring coverage of edge cases.  
- *Run the judge in parallel with candidate LLMs*, capture outputs and scores.  
- *Aggregate results* into dashboards; trigger alerts if thresholds are breached.  
- *Version‑control* both prompts and judge weights to enable reproducibility.  

**4️⃣ Common traps to avoid**  
- Over‑relying on a single judge model (bias amplification).  
- Ignoring prompt‑shaping effects on the judge’s score distribution.  
- Neglecting latency or cost monitoring, leading to hidden bottlenecks.  
- Forgetting to sanitize outputs; judge may leak sensitive data.

**5️⃣ Sanity‑check & communicate**  
- Run a quick “sanity test” with known good/bad responses to confirm the judge behaves as expected.  
- Present results in clear visualizations (ROC curves, drift plots).  
- Explain assumptions and confidence intervals when reporting failures or improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
