---
qid: vq_4756d3de85__aws__local
question: What’s one family tradition that’s special to you?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 483
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:49:22-05:00'
sources: []
---

**Situation / Task**  
When I moved from New York to Austin for a senior DevOps role, my wife and I struggled to keep our holiday traditions alive across the two time zones. The tradition that mattered most was our “Digital Photo‑Scrapbook” night—every family member would upload a photo, we’d annotate it together, and then generate a PDF to print.

**Action**  
I took *Ownership* of automating this process so it wouldn’t be lost in the chaos of remote work.  
1. Built an **S3 bucket** (one for raw photos, one for processed PDFs) with server‑less IAM policies.  
2. Created a **Lambda** function triggered by S3 object creation to run a lightweight image‑processing pipeline (Resize → Convert → Watermark).  
3. Stored metadata in **DynamoDB** and used **Step Functions** to orchestrate the workflow, ensuring idempotency and retry logic.  
4. Deployed an **API Gateway** endpoint for family members to upload via a simple web form.  
5. Scheduled a nightly **EventBridge** rule to run a Lambda that stitches images into a PDF using **AWS Glue** job and stores it in S3.  

The system scaled from 10–30 uploads per night (peak during holidays) with < $0.05/day cost, 99.999% availability (S3 + Lambda), and 2‑second latency for upload acknowledgment.

**Result**  
After launch, our family’s “Digital Photo‑Scrapbook” grew from an occasional email chain to a weekly event that increased engagement by **85%** (measured via upload counts) and reduced manual effort by **90%**.  

**Reflection / Learnings**  
- *Dive Deep*: I profiled Lambda memory usage; moving from 256 MiB to 512 MiB cut cold‑start time by 70%.  
- *Bias for Action*: I shipped a minimal viable solution in 48 hours, then iterated based on user feedback.  
- *Ownership & Customer Obsession*: By treating my family as customers, I delivered a reliable, low‑cost experience that kept our tradition alive across continents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
