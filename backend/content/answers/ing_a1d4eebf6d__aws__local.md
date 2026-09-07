---
qid: ing_a1d4eebf6d__aws__local
question: 'Explain: From your test set evaluation (Step 6 from Chapter 4)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 383
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:59-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the evaluation of a generative‑AI model for a recommendation engine (Step 6: test‑set evaluation). The goal was to quantify how many new clicks we could drive while keeping user churn below 2 %.  

**Approach**  
I built an A/B framework in **Amazon SageMaker Ground Truth** to label a 1M‑sample test set, then used **SageMaker Model Monitor** to capture drift. For the evaluation I ran the model on **AWS Batch** (10 EC2 m5.large containers) and stored predictions in **DynamoDB** for fast look‑up. The metrics were calculated with a custom Lambda that aggregated click‑through rates, churn probabilities, and latency.

**Result**  
The new model increased clicks by **17 %** (+350k daily) while churn fell to 1.5 %. Cost per prediction dropped from $0.00012 to $0.00008 thanks to the spot‑instance strategy, saving ~$45K annually.  

**Reflection (Bar‑raiser)**  
I took full ownership: I wrote the test‑set pipeline, debugged data‑quality issues, and iterated on feature engineering until convergence. The dive‑deep audit revealed that a single noisy label source was inflating churn estimates—removing it corrected our KPI drift. From this failure I learned to automate sanity checks in the labeling workflow, which we now enforce for every new model launch.  

**Leadership Principles**  
- **Ownership** – drove end‑to‑end pipeline and cost optimisation.  
- **Dive Deep** – uncovered hidden data bias and quantified its impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
