---
qid: ing_2e6d05bafc__aws__local
question: What chunking strategies do you know, and how do you pick one?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 466
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:10:03-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we pick a chunking strategy that maximizes downstream model accuracy; *Dive Deep* – we rigorously analyze token statistics to justify the choice.

**Situation / Task**  
At my last role, I was responsible for preprocessing 3 TB of unstructured customer support transcripts before feeding them into an intent‑classification model. The goal: reduce latency by 30 % while keeping F1 ≥ 0.92.

**Action**  
I evaluated three chunking strategies:

| Strategy | AWS Services | Key Metric | Result |
|----------|--------------|------------|--------|
| Fixed‑size (512 tokens) | Amazon SageMaker, S3 | Throughput | 4× slower than baseline |
| Sliding window (overlap = 128) | SageMaker Pipelines | F1 | 0.89 |
| **Semantic segmentation** (BERT sentence boundary + max‑len 256) | SageMaker Feature Store, Lambda | **Latency** | **30 % faster**; **F1 0.93** |

I chose semantic segmentation because it preserved context and reduced padding overhead. I implemented a Lambda layer that tokenizes with the `bert-base-uncased` tokenizer, identifies sentence boundaries, then groups sentences until reaching ~256 tokens. The chunk size was validated by running a 24‑hour A/B test on SageMaker endpoint, showing a **$1,200/month cost saving** from lower compute usage.

**Result**  
The new pipeline cut inference latency from 450 ms to 315 ms (30 % improvement) and increased overall model precision from 0.88 to 0.93, directly improving customer satisfaction scores by 4 points on the NPS survey.

**Bar‑raiser notes** – I demonstrated ownership (owning the entire pipeline), deep technical dive (token statistics & AWS cost analysis), quantified impact (latency, accuracy, cost), and learned from a failed fixed‑size approach that wasted resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
