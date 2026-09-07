---
qid: ing_5ee7d21615__aws__local
question: 'Explain: Run more checks without slowing agents down'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 434
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:20-05:00'
sources: []
---

**Situation & Task**  
In my previous role I was responsible for a fleet of on‑device inference agents that streamed telemetry back to the cloud. The product team asked me to add *health* and *data quality* checks (e.g., missing values, drift detection) without increasing latency beyond 5 ms per inference.

**Action**  
1. **Local preprocessing layer** – I introduced a lightweight Rust‑based shim that performed all sanity checks in‑memory before the model call.  
2. **Batching & async reporting** – Instead of blocking on each check, the shim queued violations and sent them asynchronously to an Amazon Kinesis Data Streams shard at 50 ms intervals.  
3. **Edge caching with DynamoDB Local** – For drift metrics that required historical context I used a local cache backed by DynamoDB Local, refreshing every 30 s from the cloud store.  
4. **AWS Greengrass** – Deployed the shim as a Greengrass Lambda so the agent could run offline and sync when connectivity returned.

I chose Rust for zero‑allocation performance, Kinesis for horizontal scalability (up to 1M events/s), and DynamoDB Local for low‑latency state without incurring additional cloud costs.

**Result**  
Latency increased by only **0.8 ms on average**, keeping the 5 ms SLA intact. Error detection rate rose from 92 % to 99.6 %, reducing downstream data cleansing costs by **$45k per year**. The solution also cut the number of failed inferences by **18 %**, improving model accuracy for end users.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivering faster, more reliable inference directly benefits the user experience.  
- **Ownership & Dive Deep** – I took full responsibility for the entire pipeline and engineered a solution that balanced performance with observability.  

Bar‑raisers will note my end‑to‑end ownership, data‑driven impact, and the depth of technical trade‑off analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
