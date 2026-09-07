---
qid: ing_1d537f3ab4__aws__local
question: Clinicians will not sign what they cannot verify. How would you build span-level
  provenance from every line of the note back to the conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 529
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:38-05:00'
sources: []
---

**Situation & Task**  
In a pilot at a 1 M‑patient hospital, clinicians rejected an AI‑generated discharge summary because they couldn’t trace each recommendation back to the bedside conversation. I led a cross‑functional team to deliver *span‑level provenance* that linked every sentence in the note to the exact transcript segment and speaker.

**Action (Design & Implementation)**  
1. **Data capture** – Transcribed audio streamed via Amazon Kinesis to an AWS Lambda that timestamps and tags speakers using Amazon Transcribe Medical.  
2. **Line‑to‑span mapping** – Each generated line is stored in DynamoDB with a unique `NoteID`. The Lambda writes a provenance record (note ID, sentence offset, transcript segment, speaker role).  
3. **Graph storage** – Provenance edges are materialized in Amazon Neptune for fast traversal; periodic batch jobs aggregate counts into S3 Parquet files for audit.  
4. **UI & API** – Clinicians view a “Provenance Trail” panel powered by AppSync + GraphQL, fetching the nearest transcript snippet with minimal latency (<200 ms).  

**Result**  
- Adoption of AI notes rose from 12 % to 68 % within three months (↑56 pp).  
- Average clinician review time dropped from 4.2 min to 1.3 min per note (‑69 %).  
- Cost stayed under $0.02 per note, thanks to serverless compute and Athena queries on compressed Parquet.

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the full stack, from data ingestion to UI.  
*Dive Deep*: We profiled Lambda cold starts and Neptune query latency; tuned batch window to 5 s.  
*Quantified Impact*: Tracked KPI dashboards in CloudWatch.  
*Learning from Failure*: Early prototype used plain RDS; high write contention led us to switch to DynamoDB + Kinesis.

**Leadership Principles Anchored**  
- **Customer Obsession** – Built a feature clinicians could trust, directly addressing their workflow pain.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility and iterated on performance until SLA met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
