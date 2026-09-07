---
qid: ing_80ce7e5ce2__aws__local
question: When would you fine-tune your embedding model, and how would you actually
  do it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 418
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:16:17-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
In my last role I built a search engine for an e‑commerce catalog that served 2 M daily queries. After launching, click‑through rate (CTR) dropped from **12% to 9%** during the holiday season because new product categories were under‑represented in our embeddings.

**Action (Dive Deep + Bias for Action)**  
I first logged every query and mapped it to its top‑5 nearest neighbors using our pre‑trained Sentence‑BERT model. By clustering these vectors with **K‑Means (k=200)** I identified 35 clusters that had a CTR < 7%.  

1. **Collect fresh data** – scraped the latest product descriptions, reviews, and Q&A for those 35 categories (≈ 500 k new texts).  
2. **Fine‑tune** – used HuggingFace `Trainer` on an **S3‑backed dataset**, training for 4 epochs with a learning rate of 2e‑5 on a single **p3.8xlarge** instance.  
3. **Deploy** – pushed the new model to **Amazon SageMaker Endpoint** (multi‑model endpoint) and set up a blue/green rollout via **SageMaker Model Monitor** to track drift.

**Result (Deliver Results)**  
Post‑deployment, CTR for those clusters rose from 7% to **11.5%**, lifting overall site CTR by **1.2 percentage points** (~ 120k extra purchases per month). Cost stayed under $300/month thanks to spot instances and autoscaling.  

**Bar‑raiser takeaways** – I owned the end‑to‑end pipeline, dove into data to pinpoint failure modes, quantified impact, and learned that continuous monitoring of embedding drift is essential for sustained customer satisfaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
