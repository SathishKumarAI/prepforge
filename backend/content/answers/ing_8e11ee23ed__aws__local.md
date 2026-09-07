---
qid: ing_8e11ee23ed__aws__local
question: You need an eval set for a new contract-review capability. There is no labelled
  ground truth and the only people who can judge quality bill at partner rates. How
  do you build it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 371
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:15-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession*, *Ownership*

> **Situation & Task**  
I was tasked with creating an evaluation set for a contract‑review AI that had no labeled data and could only be scored by expensive partner experts.

> **Action**  
1. **Define the success metric** – precision@k (top 5 most relevant clauses) with a target of ≥ 0.85, because partners value accuracy over volume.  
2. **Bootstrapped labeling** – I built a lightweight web UI and hired a small pool of legal interns to annotate 500 contracts at $25/hr. The interns were trained on the partner rubric; their inter‑annotator agreement (Cohen’s κ = 0.78) proved sufficient for a seed set.  
3. **Active learning loop** – Using Amazon SageMaker Ground Truth, I ran a baseline model, then queried the model’s *uncertain* predictions (entropy > 1.2). The interns re‑annotated only those 200 high‑conflict examples, cutting labeling cost by ~60%.  
4. **Validate with partners** – After 10 iterations, partner reviewers scored a random sample of 100 contracts; mean score = 0.87, variance < 0.02, meeting the target.  

> **Result**  
The final eval set (≈ 700 contracts) enabled us to benchmark the AI with an *accuracy* of 88% on real‑world data, reducing partner review time by 35% and saving $120k/month in labor.

> **Bar‑raiser takeaways** – I owned the entire pipeline, dove deep into annotation quality metrics, quantified impact (cost savings, accuracy), and iterated quickly after partner feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
