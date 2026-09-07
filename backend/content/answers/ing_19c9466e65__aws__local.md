---
qid: ing_19c9466e65__aws__local
question: How Is Fine-Tuning Done? — Fine-Tuning Explained for Noobs (How Pretrained
  Models Learn New Skills)
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 492
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:24:47-05:00'
sources: []
---

**Fine‑tuning a pre‑trained model**

**Situation / Task** – I was asked to enable an LLM to classify customer support tickets into “Billing”, “Technical”, and “General” categories for a SaaS product. The base model (e.g., GPT‑3) already understood language but had no domain knowledge, so we needed rapid, cost‑effective fine‑tuning.

**Action** –  
1. **Data prep**: Curated 12 k labeled tickets, cleaned duplicates, and split 80/10/10 for train/validation/test.  
2. **Training loop**: Used the Hugging Face `Trainer` with a small learning rate (5e‑5), batch size 16, and 3 epochs on an EC2 g4dn.xlarge spot instance – ~$0.50/hour.  
3. **AWS services**: S3 for data storage, SageMaker Endpoint for inference, CloudWatch for metrics.  
4. **Scalability / Availability**: Deployed the fine‑tuned model behind a Lambda@Edge cache to serve <1 ms latency globally; autoscaling on CPU utilization.  
5. **Cost trade‑offs**: Chose spot instances + spot fleet for training, reserved instances for inference to keep cost <$30/month.

**Result** – Accuracy rose from 68 % (base) to **92 % F1** on the test set within 12 h of training—cutting manual triage time by 75 %. The model now handles ~5k requests/day with <0.2 s latency, keeping SLA above 99.9 %.

---

### Leadership Principles

- **Customer Obsession** – Delivered a faster, more accurate ticket routing that reduced customer wait times.  
- **Ownership & Dive Deep** – Took full responsibility for data quality, training pipeline, and cost optimization; iterated on hyperparameters until metrics plateaued.

*Bar‑raiser focus:* ownership of the end‑to‑end pipeline, depth in model tuning choices, quantified impact (92 % F1, 75 % time savings), and lessons from initial mis‑labeling that prompted a data‑quality review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
