---
qid: ing_19703b2393__aws__local
question: 'Explain: Your fine-tuned model''s training loss looked great, but outputs
  in production are worse than the base model. Walk me through your debugging process.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 449
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:48-05:00'
sources: []
---

**Situation & Task (S)**  
I was deploying a fine‑tuned BERT for intent classification in our Alexa Skills kit. In training the loss dropped to **0.12**, but real‑time inference on live traffic showed a **precision drop from 92% → 78%** and latency spiked by ~30 ms.

**Action (A)**  
1. **Re‑validate data pipeline** – used `aws s3 ls` & Athena queries to confirm that the production dataset matched the training split. Found a drift: 18 % of new utterances contained slang tokens absent during fine‑tuning.  
2. **Model serving audit** – compared SageMaker endpoint configurations. The production endpoint was still using the *base* `bert-base-uncased` model because the new version wasn’t registered in the Model Registry.  
3. **Feature toggle rollback** – immediately switched back to the base model, restoring 92 % precision while I rebuilt the fine‑tuned stack.  
4. **Incremental rollout & monitoring** – deployed the updated endpoint with Canary traffic (10 %) via API Gateway + Lambda. Added CloudWatch metrics for inference latency and a SageMaker *Model Monitor* job to flag concept drift.

**Result (R)**  
Within 3 hours of rollback, precision rebounded to 91%. After full rollout, precision stabilized at **93%** and latency dropped by **12 ms**. Cost impact was negligible (<1 $/day) because we used a spot‑instance strategy for the training phase.

---

### Leadership Principles Highlighted
- **Customer Obsession** – prioritized user experience by restoring accuracy first.  
- **Ownership & Dive Deep** – traced the issue from data drift to deployment misconfiguration, learning that model registry consistency is critical.  

*Bar‑raiser takeaway:* Demonstrated end‑to‑end ownership, depth of analysis (data audit + infrastructure check), and quantified impact while turning a production failure into an optimization loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
