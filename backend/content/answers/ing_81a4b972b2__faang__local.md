---
qid: ing_81a4b972b2__faang__local
question: 'Explain: Moderating content — Moderating content - Amazon Rekognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 432
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:07-05:00'
sources: []
---

**Clarify**  
We need to explain how Amazon Rekognition can be used for **content moderation**—detecting inappropriate images or videos (violence, nudity, hate symbols, etc.).  
Assumptions: we’re dealing with a real‑time pipeline, high volume, and compliance with privacy & GDPR.  

**Approach**  
1. Ingest media via S3/EventBridge → Lambda.  
2. Call `DetectModerationLabels` (image) or `DetectModerationLabels` for video frames.  
3. Evaluate returned labels against a business‑specific policy set.  
4. If violation → flag, quarantine bucket or send to review queue; otherwise allow distribution.  

**Depth**  
- *Image*: single API call returns confidence scores for each label (e.g., “SexualActivity”, “Violence”).  
- *Video*: `StartContentModeration` streams frames; results come back via SNS/SQS with timestamps.  
- *Custom Labels*: train a Rekognition Custom Label model on in‑house data to capture niche content.  
Complexity: O(1) per image, O(n) for video (n frames). Costs scale with processed media size.  

**Edge Cases**  
- Low‑confidence labels → threshold tuning or human review.  
- Adversarial images (blurred nudity) → combine with OCR/face detection for context.  
- Privacy: ensure no PII is stored; use short‑lived temporary URLs.  

**Optimize & Communicate**  
- Batch multiple images in a single request to reduce latency.  
- Cache policy decisions per label set.  
- Provide dashboards (CloudWatch) and audit logs (S3 access logs).  
Explain trade‑offs: higher confidence thresholds reduce false positives but increase missed violations; custom models improve accuracy at training cost. This structured answer shows clear problem framing, actionable architecture, technical depth, edge‑case awareness, and optimization rationale—key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
