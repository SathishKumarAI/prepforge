---
qid: ing_47fbd69a02__faang__local
question: 'Explain: Bandwidth is certainly an issue. Cost of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 487
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:15-05:00'
sources: []
---

**Clarify**  
You’re asking why *bandwidth* becomes a bottleneck in machine‑learning pipelines, especially when dealing with large datasets or model checkpoints, and how the associated *costs* (network egress, storage I/O, etc.) influence design choices.

**Approach**  
1. Identify the data flow: ingestion → preprocessing → training → inference.  
2. Quantify traffic at each stage.  
3. Map traffic to cost drivers (cloud egress rates, on‑prem bandwidth limits).  
4. Propose mitigation strategies that reduce transfer volume or shift computation locally.

**Depth**  
- **Training**: A 1 TB image set can incur >$300 in cloud egress if moved out of region; moving it in place (data locality) saves money and time.  
- **Model checkpoints**: 100 GB checkpoints can cost $50–$200 per transfer on AWS S3‑EFS.  
- **Inference**: Real‑time predictions across many edge devices amplify bandwidth needs; compressing inputs or batching requests cuts traffic by ~70%.  
- **Cost drivers**: egress rates (e.g., $0.09/GB for first 10 TB/month), on‑prem NIC limits, latency penalties.  
- **Trade‑offs**: Local training reduces egress but may need expensive GPU nodes; compression saves bandwidth but adds CPU overhead.

**Edge Cases**  
- *Sparse data*: Transfer only non‑zero entries.  
- *Regulatory constraints*: Some regions prohibit cross‑border transfer; local storage is mandatory.  
- *Model drift*: Frequent checkpoint uploads can spike costs unexpectedly.

**Optimize & Communicate**  
Explain that by *co‑locating* compute with storage (e.g., using GPU‑enabled EBS), applying *data deduplication*, and batching inference requests, we can cut bandwidth usage by 50–80 % while keeping cost under $200/month. Summarize the ROI: lower egress → faster iteration → reduced cloud spend, aligning engineering goals with business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
