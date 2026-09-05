---
qid: ing_81a4b972b2__star__local
question: 'Explain: Moderating content — Moderating content - Amazon Rekognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 334
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:52:31-05:00'
sources: []
---

**Situation:**  
At a media startup, we were launching a user‑generated video platform that needed real‑time compliance with community guidelines. Our content moderation team was overwhelmed by the volume—over 15,000 uploads per day—and could not keep up with manual reviews.

**Task:**  
I had to build an automated pipeline that flagged objectionable material (violence, nudity, hate symbols) within seconds of upload, reducing the review queue by at least 70% while maintaining a false‑positive rate below 5%.

**Action:**  
Using Amazon Rekognition’s Video Moderation API, I set up an S3 event trigger to start analysis as soon as a file landed in the bucket. The pipeline invoked Rekognition with custom confidence thresholds and enabled the “Labels” and “ModerationLabels” detectors. Results were streamed back via SNS to a Lambda function that updated a DynamoDB moderation table and sent alerts to the human team for edge cases. I also integrated a feedback loop: flagged videos were reviewed, outcomes fed back into a small training set, and I periodically tweaked thresholds based on ROC curves.

**Result:**  
Within two weeks, the system reduced manual review workload by 72%, cutting average turnaround from 45 minutes to under 5. The false‑positive rate fell to 3.8%. I learned how to balance speed, accuracy, and cost in a cloud‑native moderation workflow, and gained deep experience with Rekognition’s API limits and best practices for threshold tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
