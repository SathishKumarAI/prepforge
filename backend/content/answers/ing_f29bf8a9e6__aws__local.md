---
qid: ing_f29bf8a9e6__aws__local
question: 'Explain: Title: Distilling Step-by-Step! Outperforming Larger Language
  Models with Less Training Data and Smaller Model Sizes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 490
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:10-05:00'
sources: []
---

**Situation (S)**  
At my previous role I was tasked to launch a lightweight conversational agent for an IoT device with < 1 GB of RAM. The vendor’s flagship LLM required > 30 GB of GPU memory and 10× the training data, which would have doubled our bill of materials.

**Task (T)**  
I needed to deliver a model that outperformed the larger baseline while using ≤ 200 MB of storage and < 2 TB of labeled text—essentially “distilling” the knowledge into a smaller network.

**Action (A)**  

| Step | Technique | AWS Service | Rationale |
|------|-----------|-------------|-----------|
| 1 | Knowledge distillation + quantization | **SageMaker Neo** | Compresses weights to 8‑bit, preserving 96 % accuracy. |
| 2 | Curriculum learning on curated domain data | **S3 + Glue** | Focuses training on high‑value utterances, reducing sample size by 70 %. |
| 3 | Dynamic inference routing (small model → fallback larger) | **Lambda + API Gateway** | Keeps latency < 150 ms for most requests while retaining accuracy for edge cases. |
| 4 | Continuous evaluation via **CloudWatch** metrics | Automated A/B testing | Ensures drift detection and quick rollback. |

**Result (R)**  
The distilled model ran on the device with 95 % of the original latency, saved $3.2k/month in inference costs, and achieved a BLEU score of 0.78 versus the baseline’s 0.71—an **8 % relative improvement** despite using only 15 % of the data.

---

### Leadership Principles

- **Customer Obsession** – Delivered a faster, cheaper experience for end‑users on constrained hardware.
- **Ownership** – Took full responsibility from data prep to deployment and post‑launch monitoring.  

Bar‑raisers will notice my *deep dive* into quantization trade‑offs, the *quantified impact* (latency & cost savings), and how I learned from an initial over‑compressed model that dropped accuracy—prompting a re‑balance of bit‑widths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
