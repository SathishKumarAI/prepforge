---
qid: ing_5fb928bc38__aws__local
question: 'Explain: Syncing your blog with your PC, and using your word processor'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 418
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:32-05:00'
sources: []
---

**Situation & Task**  
While launching a personal tech‑blog I needed to keep my draft content in sync with the local Word document on my laptop so that I could edit offline and automatically publish updates without manual uploads.

**Action**  
1. **Ownership & Customer Obsession:** I treated the blog as a “product” for my readers, so reliability was non‑negotiable.  
2. **Design (AWS)** –  
   * **S3 bucket** stores Markdown/Word files (`blog-sync`).  
   * **Amazon Cognito** authenticates the laptop app.  
   * **Lambda@Edge + API Gateway** exposes a lightweight `/sync` endpoint that accepts `PUT` with file bytes and metadata.  
   * **Step Functions** orchestrate: (a) trigger S3 upload, (b) run a **Textract‑powered OCR** step to extract text if needed, (c) invoke **Amazon Comprehend** for quick sentiment tagging, (d) update CloudFront cache invalidation.  
   * **CloudWatch Alarms** monitor latency (<200 ms) and error rates (<0.1%).  
3. **Bias for Action:** I built a small CLI in Python that watches the local Word file (`watchdog`), pushes diffs to the API, and logs results.  

**Result**  
- Sync latency dropped from 5 min (manual FTP) to <250 ms average.  
- Uptime achieved 99.99% over 6 months with no outages.  
- Cost: <$10/month vs $120/month for a managed CMS.  
- Reader engagement grew 12% as posts appeared instantly after editing.

**Reflection** – I initially underestimated the need for incremental uploads, which caused duplicate S3 objects. Adding ETag comparison solved it—demonstrating *Dive Deep* and continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
