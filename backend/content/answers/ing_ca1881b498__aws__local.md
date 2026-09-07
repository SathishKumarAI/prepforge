---
qid: ing_ca1881b498__aws__local
question: 'Explain: So first we need to convert this — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 429
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:58:20-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

*Situation:* I was asked to build an automated pipeline that transforms a raw “Python Full Course for Beginners” video into a searchable, caption‑rich learning asset for our LMS.

*Task:* Convert the 2 h lecture into 10 min bite‑sized segments, add ASR captions, and store metadata in DynamoDB so users can search by keyword or topic.

*Action:*  
1. **Dive Deep** – I profiled the audio to identify silence gaps (>3 s) using *ffmpeg*, then split the file with *Python‑MoviePy*.  
2. I leveraged **Amazon Transcribe Medical** for high‑accuracy ASR (95% WER on our domain).  
3. The captions were fed into a Lambda function that parses timestamps and writes a JSON document to **DynamoDB**.  
4. For search, I enabled **Amazon OpenSearch Service** indexing on the caption text; each segment gets an `id`, `title`, `transcript`, and `duration`.  
5. To keep costs low, I used **S3 Intelligent‑Tiering** for raw & processed media, and scheduled Lambda invocations via EventBridge to avoid over‑provisioning.

*Result:* The pipeline reduced manual editing time from 8 h to <30 min per course (≈90% faster). Search hit‑rate increased by 42%, and user engagement rose 27% as measured by video completion rates.  

**Bar‑raiser notes:**  
- Ownership: I owned the entire flow, from ingestion to search.  
- Depth: Chose services that balance accuracy (Transcribe) vs cost (S3 tiers).  
- Quantified impact: Clearly stated time savings and engagement lift.  
- Learning: After a WER spike in January, I added a post‑processing step that filters out low‑confidence words, cutting errors by 18%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
