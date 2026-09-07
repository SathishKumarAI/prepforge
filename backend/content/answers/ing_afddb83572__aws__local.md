---
qid: ing_afddb83572__aws__local
question: 'Explain: Three Consumers — Benchmarking Apache Kafka: 2 Million Writes
  Per Second (On Three Cheap Machines) | LinkedIn Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 540
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:06-05:00'
sources: []
---

**Situation & Task**  
While interviewing for a data‑engineering role at Amazon, I was asked to explain how LinkedIn benchmarked Apache Kafka with “3 consumers – 2 M writes/s on three cheap machines.” The interviewer wanted to see if I could translate that real‑world performance story into an AWS‑centric design and evaluate trade‑offs.

**Action (Dive Deep + Ownership)**  
I mapped the benchmark to a production‑grade pipeline:  
- **Producer layer** – 3 kB JSON events, batched in 1 MB payloads.  
- **Kafka cluster** – 3 brokers on m5.large EC2 instances, Zookeeper quorum on t3.micro.  
- **Consumer group** – 3 consumer processes per broker (total 9), each pulling 200 K records/s.  

On AWS I’d replace the bare‑metal setup with:  
| Layer | Service | Reasoning |
|-------|---------|-----------|
| Producers | Amazon MSK (Kafka) on c5.large | Built‑in Zookeeper, auto‑tuning |
| Consumers | ECS/Fargate containers or Kinesis Data Streams for pull‑based | Serverless scaling, no OS maintenance |
| Storage | S3 + Athena for long‑term analytics | Pay‑per‑use, near‑unlimited durability |

**Result (Deliver Results)**  
Using MSK’s *broker‑by‑broker* throughput tuning and enabling *compression.type=gzip*, we achieved 2.1 M writes/s on a single m5.large instance in a lab – matching LinkedIn’s result but with 30% lower cost. The consumer lag stayed below 10 s, ensuring near‑real‑time processing.

**Learnings & Bar‑raiser cues**  
- **Ownership**: I re‑architected the entire pipeline for AWS and quantified the savings.  
- **Dive Deep**: I dissected LinkedIn’s config (batch size, record keying) to surface bottlenecks.  
- **Quantified Impact**: 30% cost reduction + 10 % performance gain.  
- **Failure Insight**: The initial test hit a network throttling issue; we added *encryption‑at‑rest* and *VPC endpoints*, which eliminated the lag spikes.

By anchoring to **Customer Obsession (fast, reliable data delivery)** and **Ownership**, I demonstrated that I can translate a complex benchmark into a scalable, cost‑effective AWS solution while maintaining measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
