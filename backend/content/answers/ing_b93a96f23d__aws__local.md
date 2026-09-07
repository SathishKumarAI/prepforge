---
qid: ing_b93a96f23d__aws__local
question: What is WER, and why is it a misleading metric for a voice product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 380
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:51-05:00'
sources: []
---

**Answer**

*Leadership Principles:* **Customer Obsession** – we care about the real user experience, not just a raw metric; **Dive Deep** – we interrogate every assumption behind a KPI.

**Situation / Task**  
In my last role I led the launch of an Alexa‑powered voice assistant for a health‑tech startup. The product team relied on *Word Error Rate* (WER) from our ASR engine to decide when to release new features. WER was reported as 12 % after a month of beta testing, so we pushed a “new feature” sprint.

**Action**  
I dug into the WER pipeline: it counted every mis‑transcribed token regardless of context or user intent. I proposed an *Intent‑Focused Accuracy* (IFA) metric that weights errors by their impact on downstream actions (e.g., 5× weight for a “schedule appointment” error). We integrated Amazon Transcribe Custom Vocabulary, Amazon Comprehend Medical, and Lambda to compute IFA in real time.

**Result**  
After switching to IFA, we saw the perceived quality score from user surveys jump from **3.1/5** to **4.6/5** (a 48 % improvement) while keeping the overall WER unchanged at 12 %. The new metric also cut false‑positive alerts by 70 %, saving $120k in unnecessary retraining cycles.

**Lesson Learned**  
A single aggregate metric can mask user‑critical failures. By diving deep into intent‑level impact, we aligned our KPI with real customer outcomes and avoided costly mis‑prioritization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
