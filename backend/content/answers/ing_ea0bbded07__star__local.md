---
qid: ing_ea0bbded07__star__local
question: 'Explain: Watcher — Doccollaborationdropboxgoogledocs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 380
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:28-05:00'
sources: []
---

**Situation**  
At my previous company we built an internal analytics dashboard that pulled KPI data from our Salesforce instance and fed it into a Tableau report. The sales team used Google Docs to maintain the monthly forecast sheet, but their edits were lagging behind by 12–15 minutes because the spreadsheet was stored in a shared Drive folder that only refreshed when the file was explicitly re‑uploaded.

**Task**  
I needed to create a near‑real‑time “watcher” service that would detect any change to the Google Doc, pull the updated JSON export, and push it into our data lake so the dashboard stayed current without manual intervention.

**Action**  
Using the Google Drive API’s `changes.list` endpoint I built a lightweight Python daemon that ran every 30 seconds. It stored the last known `changeId`, fetched incremental changes, and when a file’s MIME type matched `application/vnd.google-apps.spreadsheet` it triggered an export to CSV via the Sheets API. The CSV was streamed into AWS S3 with versioning enabled, and I published a CloudWatch metric that notified the ETL pipeline. To keep costs low I leveraged Lambda for the export step and scheduled the watcher with EventBridge instead of a continuously running EC2 instance.

**Result**  
The latency between an edit in Google Docs and its appearance on the Tableau dashboard dropped from ~15 minutes to under 45 seconds, improving sales forecasting accuracy by 18 % as measured in our quarterly review. I also learned how to balance polling frequency with API quotas and discovered that using incremental change streams is far more efficient than full file downloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
