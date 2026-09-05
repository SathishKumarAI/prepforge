---
qid: vq_ec5b6a2b6e__fp__local
question: What is web activity in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 375
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:35-05:00'
sources: []
---

**Why a “Web” activity is needed**

In data‑engineering pipelines we often need to *pull* or *push* data to an HTTP/REST endpoint—think of invoking an API that returns JSON, posting metrics, or triggering downstream services. Traditional copy activities only handle file systems and databases; they cannot express arbitrary request semantics (headers, query params, authentication flows). The Web activity fills this gap by abstracting the HTTP protocol as a first‑class data‑source/target.

**How it works**

The activity builds an HTTP request from user‑defined properties: URL, method, headers, body, and optional authentication (Basic, OAuth2, Managed Identity). It executes the request during pipeline run, returns the raw response body, status code, and headers. The output can be consumed by downstream activities (e.g., a Parse JSON activity) or written to storage.

**Underlying principle**

At its core, this is an *optimization* of data movement: instead of writing custom scripts for each REST call, ADF turns a declarative request into a reusable component that scales with pipeline orchestration. It leverages the same retry and timeout mechanisms as other activities, ensuring idempotence and fault tolerance.

**Non‑obvious insight**

Most users overlook that the Web activity can *act as both source and sink*. By configuring the response body to be written directly to a blob or ADLS location (via an inline mapping), you avoid an intermediate “Copy” step, reducing latency and cost. This duality is rarely documented but unlocks truly serverless data ingestion patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
