---
qid: ing_ee45854abf__star__local
question: 'Explain: Requirement Clarification — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 312
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:08-05:00'
sources: []
---

**Situation** – I was interviewing at a tech startup where they asked me to design an Instagram‑like photo sharing platform. The brief was minimal: “Create a scalable, low‑latency system.” No diagram, no user count, just the word “Instagram.”

**Task** – My goal was to uncover hidden constraints: expected traffic (millions of daily active users), data consistency needs for likes/comments, acceptable latency (<200 ms for feed fetches), and budget limits on cloud spend. I also needed to decide which services to expose via REST vs gRPC.

**Action** – I started by asking the interviewer about peak concurrent uploads, retention policy for photos (30 days or forever?), and whether real‑time notifications were required. From their answers I sketched a microservice architecture: an upload service backed by S3 + CDN, a feed generator using Kafka streams, and a recommendation engine powered by Redis cache. I chose gRPC for internal calls to reduce overhead, and designed a sharded NoSQL (Cassandra) schema that kept user feeds denormalized for fast reads while keeping writes cheap.

**Result** – The interviewers were impressed; I landed the role. My design handled 5 M daily uploads with <150 ms feed latency and stayed under $2k/month on AWS. I learned that clarifying requirements early turns vague prompts into concrete, production‑ready solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
