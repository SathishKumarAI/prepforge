---
qid: ing_ab52d35ba4__aws__local
question: 'Explain: Sources — Character Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 445
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:48-05:00'
sources: []
---

**Situation / Task**  
I was leading a new “Character AI” feature that lets users create and train lifelike virtual personas. The core challenge was sourcing high‑quality training data while staying compliant with privacy rules.

**Action (Dive Deep & Ownership)**  
1. **Audit existing corpora** – I mapped every public dataset, internal chat logs, and user‑generated content, tagging them by language, domain, and consent status.  
2. **Create a “source health” score** using a custom metric (coverage × accuracy ÷ risk). This drove a prioritization matrix that surfaced 3 high‑score datasets:  
   * OpenAI’s curated dialogues (10M turns) – 92% accuracy, 0.5% risk.  
   * Our own anonymized customer support logs (2M turns) – 88% accuracy, 1.2% risk.  
   * Third‑party licensed movie scripts (500k lines) – 95% accuracy, 0.3% risk.  
3. **Automated consent gate** – built a Lambda pipeline that strips PII in real time before ingestion, ensuring GDPR/CCPA compliance.

**Result (Deliver Results)**  
- Trained a character model with a 4‑fold increase in response relevance (BLEU = 0.47 vs baseline = 0.12).  
- Reduced data‑processing costs by 35% through targeted filtering and serverless architecture (S3, Glue, SageMaker).  
- Achieved 99.9% uptime for the training pipeline via multi‑AZ deployments.

**Reflection (Customer Obsession & Bias for Action)**  
I learned that continuous source validation is critical; a single noisy dataset can degrade user trust. I instituted quarterly “data hygiene” reviews and built a feedback loop from live chat metrics to retrain models, ensuring our characters evolve with real customer needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
