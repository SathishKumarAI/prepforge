---
qid: ing_d20a31e82b__star__local
question: 'Explain: Handling Images and Video — Compliance Automation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 333
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:42-05:00'
sources: []
---

**Situation:**  
In my last role at a digital media agency, we were launching an automated content moderation platform for a client that posted millions of user‑generated videos and images each month. The client’s compliance team demanded 99% accuracy in flagging copyrighted or sensitive material within 24 hours.

**Task:**  
I was tasked with designing the image/video ingestion pipeline that would preprocess media, run AI models, and route flagged content to human reviewers—all while keeping latency under 2 seconds per file.

**Action:**  
I chose a two‑stage approach: first, a lightweight ResNet‑50 model ran on GPU instances in an AWS Lambda layer to detect obvious copyright tags; second, a more complex YOLOv8 detector processed only the “gray‑area” results for fine‑grained scene analysis. I used S3 event triggers to stream files into a Kubernetes cluster managed by Amazon EKS, and deployed TensorFlow Serving with GPU autoscaling. To handle edge cases, we added an active learning loop where flagged items were reviewed, labeled, and fed back into the model nightly via a custom data pipeline built in Airflow.

**Result:**  
The system achieved 99.4% detection accuracy within 1.8 seconds on average, reducing manual review hours by 70%. The client reported a 40% drop in compliance incidents, and I learned how to balance model complexity with real‑time constraints using a tiered inference strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
