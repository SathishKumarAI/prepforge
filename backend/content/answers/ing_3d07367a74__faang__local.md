---
qid: ing_3d07367a74__faang__local
question: 'Explain: Cost Comparison Example — Model Selection Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:41-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain a *cost‑comparison example* that helps choose between AI models (e.g., GPT‑3 vs. GPT‑4).  
Assumptions:  
- Same inference workload (token count, latency requirement).  
- Costs are split into compute (GPU hours) and storage/maintenance.  
- We care about total cost of ownership over a 12‑month horizon.

**2️⃣ Approach**  
1. Gather unit costs for each model.  
2. Compute per‑inference cost (tokens × price).  
3. Scale to expected traffic (e.g., 10M requests/month).  
4. Add fixed overheads (model hosting, monitoring).  
5. Compare totals and compute ROI if a higher‑accuracy model yields measurable business value.

**3️⃣ Depth**  
| Model | Cost/1k tokens | Monthly traffic (tokens) | Monthly cost |
|-------|----------------|--------------------------|--------------|
| GPT‑3  | $0.02          | 50 B                     | $1 M         |
| GPT‑4  | $0.06          | 50 B                     | $3 M         |

If GPT‑4 reduces error rate by 5% and each error costs \$10, the savings are  
\(0.05 × 10 M × \$10 = \$5 M\) per month, outweighing the \$2 M extra compute.

**4️⃣ Edge Cases**  
- Sudden traffic spikes → GPU scaling limits.  
- Model updates altering pricing tiers.  
- Hidden costs (data prep, fine‑tuning).  
Test by simulating peak loads and price changes.

**5️⃣ Optimize & Communicate**  
Present a dashboard that auto‑updates cost vs. performance metrics; add sensitivity analysis for key variables. Narrate: “We’ll first quantify baseline spend, then layer in business impact of accuracy gains, finally expose the break‑even point.” This shows structured thinking, clear communication, and depth—all hallmarks of a FAANG interview response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
