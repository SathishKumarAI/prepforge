---
qid: ing_34ad5a53b2__aws__local
question: What is Parallelism? — Concurrency vs Parallelism - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 417
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:24:03-05:00'
sources: []
---

**Parallelism in ML**  
*Leadership Principles:* **Customer Obsession** (deliver faster insights) & **Ownership** (design for scale).

**S – Situation**  
I led a team that built an image‑classification pipeline for a retail client. Their model training time was 12 h per epoch on a single GPU, causing delayed product launches.

**T – Task**  
Reduce training latency while keeping cost < $1k/month and maintaining accuracy ≥ 95%.

**A – Action**  
1. **Concurrency vs Parallelism** – clarified that *concurrency* overlaps tasks in time (e.g., async I/O), whereas *parallelism* executes tasks simultaneously on multiple cores/GPUs.  
2. Decomposed the data‑augmentation + model‑training loop into independent mini‑batches.  
3. Implemented **data‑parallel training** using `tf.distribute.MirroredStrategy` across 8 p4d.24xlarge instances (96 GPU cores).  
4. Leveraged **AWS S3 Transfer Acceleration** for fast data ingestion and **EFS** for shared checkpoint storage, ensuring *high availability* (99.999% SLA).  
5. Applied **Spot Instances** with a 1‑hour interruption buffer; cost dropped from $1,200 to $950/month.

**R – Result**  
Training time per epoch fell from 12 h to 45 min—a **15× speedup**—and the model achieved 96.3% accuracy. The client launched quarterly campaigns 30% faster, directly boosting revenue by ~$300k/quarter.  

*Bar‑raiser takeaway:* I demonstrated ownership (end‑to‑end solution), deep dive into concurrency vs parallelism, quantified impact, and learned to balance cost with reliability when using spot instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
