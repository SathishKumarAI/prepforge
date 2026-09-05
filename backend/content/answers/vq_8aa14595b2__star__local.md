---
qid: vq_8aa14595b2__star__local
question: What are Left and Right in Scala? Explain Either/Left/Right Design Pattern
  in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 382
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:08:27-05:00'
sources: []
---

**Situation**  
In a recent data‑pipeline project at my previous company, we were ingesting user logs from multiple sources into a Spark cluster. A downstream analytics job required every record to have a valid timestamp and user ID; however, about 12 % of the incoming JSON files had missing or malformed fields, causing our batch jobs to fail with unhandled exceptions.

**Task**  
I needed to refactor the ingestion logic so that malformed records were captured gracefully, logged for later remediation, and did not bring down the entire job. The goal was to return a clean dataset plus a separate error stream without sacrificing performance.

**Action**  
I introduced Scala’s `Either` type in the mapper function:  
```scala
def parseRecord(json: String): Either[ParseError, LogEvent] = {
  for {
    id   <- json.extract("user_id").toRight(ParseError("Missing user_id"))
    ts   <- json.extract("ts").map(_.toLong).toRight(ParseError("Invalid timestamp"))
  } yield LogEvent(id, ts)
}
```
During the RDD transformation I used `partitionBy` to separate `Left[ParseError]` from `Right[LogEvent]`, writing each partition to distinct S3 buckets. This pattern kept the happy path efficient while isolating failures for later batch correction.

**Result**  
The job now processes 98 % of records in under two minutes, with malformed entries logged separately. We reduced downstream error alerts by 95 % and cut debugging time from days to hours. I learned that leveraging `Either`/`Left`/`Right` turns brittle exception handling into a composable data‑flow pattern, improving reliability without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
