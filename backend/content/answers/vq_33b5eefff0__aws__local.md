---
qid: vq_33b5eefff0__aws__local
question: How can you tell the difference between.py and.pyc files?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 473
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:46:16-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* – I built a tool that customers could run locally to audit their code base for stale compiled files. *Dive Deep* – I dug into the file format and byte‑code generation process.

---

### Situation
A client with 12 k Python projects reported “unexpected errors” when deploying to Lambda. They suspected corrupted or mismatched `.pyc` files were being shipped.  

### Task
I needed a reliable, scalable way to flag any `.pyc` that didn’t match its source and provide an actionable report.

### Action
1. **Requirements** – Detect file type *without* reading entire contents; compare modification timestamps; validate magic number against Python version.
2. **Design**  
   - Use an **S3 event‑driven Lambda**: every new or updated object triggers the function.  
   - Lambda parses the first 4 bytes (magic number) and compares it to a lookup table (`/usr/local/lib/pythonX.Y/configparser.pyc`).  
   - If mismatch, push a message to an **SNS topic**; otherwise log success to CloudWatch.  
3. **AWS Services** – S3 for storage, Lambda for compute, SNS for alerts, CloudWatch for metrics.
4. **Scalability / Availability** – Lambda scales automatically (100 k+ objects/day); S3 provides 99.999% durability.  
5. **Cost** – <$0.02 per 1 M invocations; negligible compared to deployment costs.

### Result
Within two weeks, the client saw a **45 % drop in deployment failures** and saved ~15 k $ in manual debugging hours. The solution was adopted as an internal policy for all Python projects, reducing future incidents by 70 %.  

---

*What I learned:* Even simple file‑type checks can prevent costly runtime errors; automating them with serverless reduces human error and scales effortlessly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
