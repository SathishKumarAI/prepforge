---
qid: ing_190c804afe__aws__local
question: 'Explain: Deployment topology — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 540
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:40-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch “C‑Use‑Agent,” an AI that monitors workstation usage and enforces policy in real time for a global SaaS platform (20 000+ endpoints). The goal was to achieve <1 ms latency, 99.9 % uptime, and zero data leakage.

**Action – Deployment Topology**  
*Edge‑to‑Cloud*  
- **On‑prem Agent (ECS Fargate)**: Runs on each workstation as a lightweight container, encrypts telemetry locally and streams to the cloud via **AWS IoT Core**.  
- **IoT Greengrass Core**: Aggregates data from 100 k devices, applies local inference (TensorFlow Lite) for instant policy enforcement, reducing round‑trip time.  
- **Central Control Plane (Amazon SageMaker + Lambda)**: Receives aggregated metrics, retrains models weekly, and pushes new weights back through IoT Greengrass.  
- **Data Lake (S3 + Athena)**: Stores raw logs for audit and compliance; queried by security analysts.

*Why this design?*  
- **Scalability**: Greengrass handles 10 k concurrent streams per region; Lambda auto‑scales to ingest spikes.  
- **Availability**: IoT Core is multi‑AZ, with failover to a secondary MQTT broker in a different region.  
- **Cost**: Fargate + Greengrass reduces on‑prem compute overhead (~$0.005/instance/hr) versus running full inference locally.  

**Result**  
After rollout, latency dropped from 15 ms to 0.8 ms (80% reduction), uptime hit 99.97%, and we saved ~$1.2M annually in licensing fees.

**Leadership Principles**  
- **Customer Obsession**: Delivered near‑instant policy enforcement, improving user trust.  
- **Ownership**: Took full responsibility for the end‑to‑end pipeline, from edge agent to data lake.  

**Bar‑raiser takeaways**  
- Demonstrated *dive deep* by quantifying latency and cost trade‑offs.  
- Showed *ownership* through a self‑contained, resilient architecture.  
- Learned from early failures (MQTT disconnects) and added redundant brokers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
