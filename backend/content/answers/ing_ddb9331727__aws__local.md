---
qid: ing_ddb9331727__aws__local
question: 'Explain: Cost Model for CI — Claude Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 557
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:33-05:00'
sources: []
---

**Answer – Cost Model for CI (Claude Code)**  

**Situation:**  
I was tasked with estimating the total cost of running our AI‑model training pipeline (“Claude Code”) on AWS while keeping spend under $5 k/month.  

**Task:**  
Build a transparent, data‑driven cost model that maps every CI step to its billing unit and shows how changes in volume affect spend.

**Action:**  
1. **Identify billable services** – CodeBuild (compute minutes), S3 (artifact storage), ECR (image pulls), CloudWatch Logs, and Lambda for post‑build notifications.  
2. **Create a cost matrix** –  
   * CodeBuild: $0.005 / minute × (avg 10 min/run × 100 runs/month) = **$5 k**.  
   * S3: $0.023 /GB‑month × 50 GB = $1.15 k.  
   * ECR: $0.10 / GB-month × 20 GB = $2 k.  
   * CloudWatch Logs: $0.50 / GB × 5 GB = $2.5 k.  
   * Lambda: negligible (<$200).  
3. **Introduce tiered scaling** – Use Spot Instances for CodeBuild to cut compute cost by ~70%, and enable S3 Intelligent‑Tiering to auto‑move cold artifacts, saving 30% on storage.  
4. **Automate reporting** – A CloudWatch dashboard pulls the same metrics in real time; alerts fire when spend exceeds thresholds.

**Result:**  
Implemented model reduced monthly CI spend from $14 k to **$7.8 k** within three months while maintaining 99.9% build success. The dashboard now drives continuous optimization, and quarterly reviews keep us under budget.

**Leadership Principles Highlighted:**  
- *Ownership* – I took full responsibility for the pipeline’s economics.  
- *Dive Deep* – Built a granular cost matrix that exposes every dollar.  
- *Bias for Action* – Rolled out Spot Build and Intelligent‑Tiering within two sprints.  

**Bar‑raiser takeaways:** Look for concrete metrics, a clear mapping from requirements to services, and evidence of learning (e.g., how we adjusted after the first month).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
