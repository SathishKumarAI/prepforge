---
qid: ing_3d608daec1__aws__local
question: 'Explain: Content Categories — Content Moderation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 469
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:34-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of our global content‑moderation pipeline for a video marketplace that had 4 M uploads/day and a 1 % abuse rate. The goal was to classify content into *Safe*, *Questionable*, *Explicit* and *Violent* categories, reduce manual review time by 70%, and keep false‑positive rates below 0.5%.

**Action (Design)**  
- **Data ingestion:** S3 + Kinesis Video Streams → Lambda → Step Functions for orchestrating parallel analyses.  
- **Image/Video analysis:** Amazon Rekognition (label & face detection) + Custom SageMaker models fine‑tuned on our own labeled set.  
- **Text extraction & sentiment:** Amazon Textract + Comprehend with custom entity recognizer.  
- **Decision engine:** DynamoDB tables store per‑content feature vectors; a Lambda “scoring” function applies weighted rules (score > 0.8 → Explicit).  
- **Feedback loop:** Human reviewers flag false positives; data lands in an S3 bucket that retrains the SageMaker model every 24 h.

**Result**  
- Moderation latency dropped from 12 min to <30 s per upload.  
- Manual review workload fell by 68% (≈1,200 hrs/month).  
- False‑positive rate reduced to 0.3%, improving user trust and revenue (+$2M YoY).

**Leadership Principles & Bar‑raiser cues**  
- **Customer Obsession:** Built a feedback loop that directly lowered abuse incidents.  
- **Ownership & Dive Deep:** Tracked every metric, iterated on model thresholds, and published A/B test results to the team.  
Bar‑raisers look for measurable impact, deep technical justification (service choices, cost trade‑offs), and evidence of learning from failures (e.g., re‑training after misclassifications).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
