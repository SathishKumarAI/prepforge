---
qid: ing_68b518b6da__aws__local
question: Compare PCA, t-SNE and UMAP. When would you use each, and how do people
  misread these plots?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 491
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:05-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  

### Situation  
I was leading a data‑science sprint for a recommendation engine that had >1 M users. We needed to visualise high‑dimensional embeddings before feeding them into the downstream model.

### Task  
Choose an appropriate dimensionality‑reduction technique, explain trade‑offs, and educate stakeholders on interpreting plots.

### Action  
| Technique | When I used it | Key AWS services & design |
|-----------|----------------|--------------------------|
| **PCA** | Baseline sanity check; linear structure only. | *Amazon SageMaker Processing* for quick batch runs; outputs fed to *S3* and visualised in *QuickSight*. |
| **t‑SNE** | When cluster separation mattered (e.g., detecting user cohorts). | Run on *EMR Spark* with GPU nodes (cost ≈ $0.50/hr per node); 10‑min runtime for 200k points. |
| **UMAP** | Production‑ready, scalable visualisation of millions of points; preserves global & local structure. | Deployed as a Lambda edge function on *CloudFront* to generate SVGs in < 1 ms; cost <$0.01 per request. |

I added a **confidence band** (k‑NN density) so executives didn’t over‑interpret tight clusters—people often mistake t‑SNE/UMAP “holes” as meaningful gaps.

### Result  
- Reduced model debugging time by 35 % (from 3 days to 2 days).  
- Stakeholder confidence increased; we avoided a costly feature rollback that would have cost ~$4M in marketing spend.  

### What the bar‑raiser looks for  
- **Ownership:** I owned the entire pipeline, from data prep to visualization delivery.  
- **Dive Deep:** I quantified runtimes, costs, and explained why UMAP outperforms t‑SNE at scale.  
- **Learning from Failure:** After a misinterpreted t‑SNE plot caused a misguided feature drop, I introduced density overlays—now the team never repeats that mistake.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
